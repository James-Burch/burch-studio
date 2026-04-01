import { createClient } from "./server";
import { toWorkProject, toPortfolioProject, type ProjectRow } from "./types";
import type { WorkProject, PortfolioProject } from "@/lib/types";

export async function getWorkProjects(): Promise<WorkProject[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("featured_on_homepage", true)
    .order("homepage_sort_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch work projects:", error);
    return [];
  }

  return (data as ProjectRow[]).map(toWorkProject);
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch portfolio projects:", error);
    return [];
  }

  return (data as ProjectRow[]).map(toPortfolioProject);
}
