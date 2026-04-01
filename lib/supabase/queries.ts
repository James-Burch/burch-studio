import { createClient } from "./server";
import { toWorkProject, toPortfolioProject, type ProjectRow } from "./types";
import { WORK_PROJECTS, PORTFOLIO_PROJECTS } from "@/lib/constants";
import type { WorkProject, PortfolioProject } from "@/lib/types";

export async function getWorkProjects(): Promise<WorkProject[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("featured_on_homepage", true)
      .order("homepage_sort_order", { ascending: true });

    if (error) {
      console.error("Failed to fetch work projects:", error);
      return WORK_PROJECTS;
    }

    return data.length > 0
      ? (data as ProjectRow[]).map(toWorkProject)
      : WORK_PROJECTS;
  } catch (err) {
    console.error("Supabase unavailable, using fallback:", err);
    return WORK_PROJECTS;
  }
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  try {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error) {
      console.error("Failed to fetch portfolio projects:", error);
      return PORTFOLIO_PROJECTS;
    }

    return data.length > 0
      ? (data as ProjectRow[]).map(toPortfolioProject)
      : PORTFOLIO_PROJECTS;
  } catch (err) {
    console.error("Supabase unavailable, using fallback:", err);
    return PORTFOLIO_PROJECTS;
  }
}
