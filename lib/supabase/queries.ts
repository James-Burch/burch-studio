import { WORK_PROJECTS, PORTFOLIO_PROJECTS } from "@/lib/constants";
import type { WorkProject, PortfolioProject } from "@/lib/types";

export async function getWorkProjects(): Promise<WorkProject[]> {
  return WORK_PROJECTS;
}

export async function getPortfolioProjects(): Promise<PortfolioProject[]> {
  return PORTFOLIO_PROJECTS;
}
