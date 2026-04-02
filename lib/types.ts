// /lib/types.ts
// Shared TypeScript interfaces for the Burch Studio project.
// All component props use {ComponentName}Props convention
// and live in their own component files - this file is for
// data structures used across multiple files.

import type { LucideIcon } from "lucide-react";

// ==========================================
// NAVIGATION
// ==========================================

export interface NavLink {
  label: string;
  href: string;
}

// ==========================================
// HOME PAGE
// ==========================================

export interface HeroWord {
  text: string;
  accent: boolean;
}

export interface ProblemCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
}

export interface ServiceCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkText?: string;
}

export interface StatData {
  value: string;
  label: string;
  source?: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
  initials?: string;
  rating?: number;
}

export interface WorkProject {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  linkText: string;
  stats?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "top" | "center";
}

// ==========================================
// SERVICE PAGES
// ==========================================

export interface ProcessStepData {
  number: number;
  title: string;
  description: string;
}

export interface SolutionPoint {
  title: string;
  description: string;
}

// ==========================================
// CONTACT
// ==========================================

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
  honeypot: string;
}

export interface AuditFormData {
  name: string;
  email: string;
  websiteUrl: string;
  honeypot: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// ==========================================
// PORTFOLIO
// ==========================================

export interface PortfolioProject {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imagePosition?: "top" | "center";
  technologies: string[];
  liveUrl?: string;
  problem: string;
  solution: string;
  results: string[];
}

// ==========================================
// SHARED / LAYOUT
// ==========================================

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
}

export interface SectionHeader {
  label: string;
  heading: string;
  subtext?: string;
}

export interface FooterColumn {
  heading: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}
