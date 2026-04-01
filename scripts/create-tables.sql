-- Run this in Supabase SQL Editor to create the projects table

create table projects (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  slug text unique not null,
  title text not null,
  category text not null,
  description text not null,
  image_url text,
  image_alt text,
  technologies text[] default '{}',

  live_url text,
  problem text,
  solution text,
  results text[] default '{}',

  featured_on_homepage boolean default false,
  category_color text,
  link_text text default 'Read the full story',
  href text default '/portfolio',
  stats text[] default '{}',

  sort_order integer default 0,
  homepage_sort_order integer default 0
);

-- Auto-update updated_at on every update
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger projects_updated_at
  before update on projects
  for each row execute function update_updated_at();

-- Enable Row Level Security
alter table projects enable row level security;

-- Anyone can read projects (public site)
create policy "Public read access" on projects
  for select using (true);

-- Only authenticated users can insert/update/delete (admin)
create policy "Admin full access" on projects
  for all using (auth.role() = 'authenticated');
