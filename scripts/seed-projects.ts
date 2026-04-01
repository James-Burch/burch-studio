/**
 * One-time seed script to migrate existing project data from constants.ts
 * into the Supabase projects table.
 *
 * Usage: npx tsx scripts/seed-projects.ts
 *
 * Requires env vars: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";

config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const projects = [
  {
    slug: "private-saas-client",
    title: "Private SaaS Client",
    category: "SaaS Platform",
    description:
      "A live company intelligence platform for UK businesses. Real-time monitoring of financial health, risk signals and corporate events, powered by AI-generated analysis and multi-source data pipelines.",
    image_url: "/images/private-saas.webp",
    image_alt: "Private SaaS Client platform preview",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Auth0",
      "AI Integration",
      "Vercel",
    ],
    live_url: null,
    problem:
      "Businesses trading with, lending to or depending on UK companies had no simple way to monitor financial health and risk signals in real time. Existing tools were fragmented, expensive and required manual effort to interpret raw filings and corporate data.",
    solution:
      "Designed and built the entire platform from scratch: architecture, frontend, API, background workers and AI integration. The system pulls data from Companies House, The Gazette and news sources into a unified feed. AI extracts financial data from both digital and paper filings, scores company health using established models and generates plain-English summaries of every detected change. Multi-tenant with role-based access, configurable alerts and a report builder for meeting-ready PDFs.",
    results: [
      "Live platform serving real users in production",
      "100+ API endpoints, 30+ background job processors, 40+ UI pages",
      "Sub-2-second page loads across the application",
      "AI-powered extraction from both digital and paper-filed accounts",
    ],
    featured_on_homepage: true,
    category_color: "var(--color-brand-accent)",
    link_text: "Read the full story",
    href: "/portfolio",
    stats: ["100+ endpoints", "30+ workers", "40+ pages"],
    sort_order: 0,
    homepage_sort_order: 0,
  },
  {
    slug: "noble-mortgages",
    title: "Noble Mortgages",
    category: "Client Website",
    description:
      "Professional mortgage broker website with lead generation focus. Conversion-optimised design with mortgage calculator, multi-step forms and SEO-ready structure.",
    image_url: "/images/noble-mortgages-image-1.webp",
    image_alt: "Homepage preview of the Noble Mortgages website",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    live_url: "https://noble-mortgages-new.vercel.app/",
    problem:
      "A mortgage broker with no website at all, relying entirely on word of mouth and referrals. Potential clients had no way to find them online, understand their services, or get in touch outside of business hours.",
    solution:
      "Designed and developed a conversion-focused website with clean, professional design. Implemented an interactive mortgage calculator, multi-step lead generation forms, clear service pages and a testimonials section, all optimised for search engines and mobile devices.",
    results: [
      "First professional web presence for the business",
      "Generating inbound enquiries from day one",
      "95+ Google PageSpeed score",
      "Ranking on Google for local mortgage terms",
    ],
    featured_on_homepage: true,
    category_color: "#60a5fa",
    link_text: "Read the full story",
    href: "/portfolio",
    stats: [],
    sort_order: 1,
    homepage_sort_order: 1,
  },
  {
    slug: "refine-barbers",
    title: "Refine Barbers",
    category: "Client Website",
    description:
      "Modern website for a local barber shop with no previous online presence. Clean, mobile-first design showcasing services, pricing and a direct link to their Booksy booking platform.",
    image_url: "/images/refine-barbers.webp",
    image_alt: "Homepage preview of the Refine Barbers website",
    technologies: ["React", "JavaScript", "Node.js", "CSS"],
    live_url: "https://refinebarbers-website.vercel.app",
    problem:
      "A popular local barber shop with no website and zero online visibility. Customers could only find them through word of mouth and there was no way to check services, pricing or opening hours without calling or visiting in person.",
    solution:
      "Built a clean, mobile-first website showcasing the shop's services, pricing and team. Integrated a direct link to their existing Booksy booking platform so customers can book online without the shop needing to change their workflow.",
    results: [
      "First online presence for the business",
      "Customers can now check services and pricing anytime",
      "Direct Booksy integration drives online bookings",
      "Mobile-first design - works perfectly on phones",
    ],
    featured_on_homepage: true,
    category_color: "#f472b6",
    link_text: "Read the full story",
    href: "/portfolio",
    stats: [],
    sort_order: 2,
    homepage_sort_order: 2,
  },
];

async function seed() {
  console.log("Seeding projects...");

  const { data, error } = await supabase
    .from("projects")
    .upsert(projects, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }

  console.log(`Seeded ${data.length} projects successfully.`);
}

seed();
