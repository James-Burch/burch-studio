-- Run this in Supabase SQL Editor to create the blog_posts table

create table blog_posts (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  slug text unique not null,
  title text not null,
  excerpt text not null,
  content text not null,
  category text not null,

  featured_image_url text,
  featured_image_alt text,

  published boolean default false,
  published_at timestamptz,

  meta_title text,
  meta_description text,

  sort_order integer default 0
);

-- Auto-update updated_at on every update
create trigger blog_posts_updated_at
  before update on blog_posts
  for each row execute function update_updated_at();

-- Enable Row Level Security
alter table blog_posts enable row level security;

-- Anyone can read published posts (public site)
create policy "Public read published posts" on blog_posts
  for select using (published = true);

-- Authenticated users can do everything (admin)
create policy "Admin full access" on blog_posts
  for all using (auth.role() = 'authenticated');
