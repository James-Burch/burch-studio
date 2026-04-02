import { createClient } from "./server";
import { toBlogPostSummary, type BlogPostRow, type BlogPostSummary } from "./blog-types";

export async function getBlogPosts(): Promise<BlogPostSummary[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .lte("published_at", new Date().toISOString())
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Failed to fetch blog posts:", error);
      return [];
    }

    return (data as BlogPostRow[]).map(toBlogPostSummary);
  } catch (err) {
    console.error("Supabase unavailable for blog:", err);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPostRow | null> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .eq("published", true)
      .lte("published_at", new Date().toISOString())
      .single();

    if (error) {
      console.error("Failed to fetch blog post:", error);
      return null;
    }

    return data as BlogPostRow;
  } catch (err) {
    console.error("Supabase unavailable for blog post:", err);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("blog_posts")
      .select("slug")
      .eq("published", true);

    if (error) return [];
    return (data ?? []).map((row) => row.slug);
  } catch {
    return [];
  }
}
