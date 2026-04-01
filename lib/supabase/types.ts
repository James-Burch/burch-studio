import type { WorkProject, PortfolioProject } from "@/lib/types";

export interface ProjectRow {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  image_url: string | null;
  image_alt: string | null;
  technologies: string[];
  live_url: string | null;
  problem: string | null;
  solution: string | null;
  results: string[];
  featured_on_homepage: boolean;
  category_color: string | null;
  link_text: string;
  href: string;
  stats: string[];
  sort_order: number;
  homepage_sort_order: number;
}

export type ProjectInsert = Omit<ProjectRow, "id" | "created_at" | "updated_at">;
export type ProjectUpdate = Partial<ProjectInsert>;

export function toWorkProject(row: ProjectRow): WorkProject {
  return {
    category: row.category,
    categoryColor: row.category_color ?? "#60a5fa",
    title: row.title,
    description: row.description,
    tags: row.technologies,
    href: row.href,
    linkText: row.link_text,
    stats: row.stats.length > 0 ? row.stats : undefined,
    image: row.image_url ?? undefined,
    imageAlt: row.image_alt ?? undefined,
  };
}

export function toPortfolioProject(row: ProjectRow): PortfolioProject {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    description: row.description,
    image: row.image_url ?? "",
    technologies: row.technologies,
    liveUrl: row.live_url ?? undefined,
    problem: row.problem ?? "",
    solution: row.solution ?? "",
    results: row.results,
  };
}
