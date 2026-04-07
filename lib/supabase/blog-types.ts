export interface BlogPostRow {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image_url: string | null;
  featured_image_alt: string | null;
  published: boolean;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  sort_order: number;
}

export type BlogPostInsert = Omit<BlogPostRow, "id" | "created_at" | "updated_at">;
export type BlogPostUpdate = Partial<BlogPostInsert>;

export interface BlogPostSummary {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  featuredImage: string | null;
  featuredImageAlt: string | null;
  publishedAt: string;
  readingTime: number;
}

function normalizeImageUrl(url: string | null): string | null {
  if (!url) return null;
  if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("/")) return url;
  return `/${url}`;
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function toBlogPostSummary(row: BlogPostRow): BlogPostSummary {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    featuredImage: normalizeImageUrl(row.featured_image_url),
    featuredImageAlt: row.featured_image_alt,
    publishedAt: row.published_at ?? row.created_at,
    readingTime: estimateReadingTime(row.content),
  };
}
