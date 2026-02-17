import type { Metadata } from "next";
import {
  WEB_APPS_META,
  WEB_APPS_HERO,
  WEB_APPS_PROBLEMS_HEADER,
  WEB_APPS_PROBLEM_LIST,
  WEB_APPS_SOLUTION_HEADER,
  WEB_APPS_SOLUTIONS,
  CTA_BANNER,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: WEB_APPS_META.title,
  description: WEB_APPS_META.description,
  alternates: { canonical: WEB_APPS_META.canonical },
  openGraph: {
    title: WEB_APPS_META.title,
    description: WEB_APPS_META.description,
    url: WEB_APPS_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function WebApps() {
  return (
    <>
      <PageHero
        label={WEB_APPS_HERO.label}
        heading={WEB_APPS_HERO.heading}
        subtext={WEB_APPS_HERO.subtext}
      />

      {/* Problem section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="webapps-problems-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeading
              label={WEB_APPS_PROBLEMS_HEADER.label}
              heading={WEB_APPS_PROBLEMS_HEADER.heading}
              subtext={WEB_APPS_PROBLEMS_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WEB_APPS_PROBLEM_LIST.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-surface-elevated p-6">
                  <span className="mt-0.5 text-red">✕</span>
                  <p className="text-[0.95rem] leading-[1.65] text-text-muted">
                    {problem}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution section */}
      <section
        className="py-25 md:py-32"
        aria-labelledby="webapps-solution-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label={WEB_APPS_SOLUTION_HEADER.label}
              heading={WEB_APPS_SOLUTION_HEADER.heading}
              subtext={WEB_APPS_SOLUTION_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_APPS_SOLUTIONS.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.08} className="flex">
                <div className="flex flex-col rounded-2xl border border-brand-border bg-brand-surface p-7">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-dim text-sm font-bold text-brand-accent">
                    ✓
                  </div>
                  <h3 className="mb-2 font-display text-[1.05rem] font-bold tracking-[-0.02em] text-text-heading">
                    {point.title}
                  </h3>
                  <p className="flex-1 text-[0.9rem] leading-[1.65] text-text-muted">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="webapps-stack-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeading
              label="The Stack"
              heading="Built with serious tools."
              subtext="The same technologies used by the best engineering teams in the world."
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Next.js", detail: "Full-stack React framework" },
              { name: "TypeScript", detail: "End-to-end type safety" },
              { name: "Node.js", detail: "Server-side runtime" },
              { name: "PostgreSQL", detail: "Relational database" },
              { name: "React", detail: "UI component library" },
              { name: "AWS", detail: "Cloud infrastructure" },
              { name: "Docker", detail: "Containerised deployments" },
              { name: "Tailwind CSS", detail: "Utility-first styling" },
            ].map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 0.05}>
                <div className="rounded-xl border border-brand-border bg-brand-surface-elevated p-5 text-center">
                  <p className="font-display text-[0.95rem] font-bold text-text-heading">
                    {tech.name}
                  </p>
                  <p className="mt-1 text-[0.8rem] text-text-muted">
                    {tech.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-25 md:py-32" aria-labelledby="webapps-cta-heading">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-brand-accent/12 bg-linear-to-br from-brand-accent/8 to-brand-accent/2 px-10 py-16 text-center">
              <div
                className="pointer-events-none absolute top-[-50%] left-1/2 h-150 w-150 -translate-x-1/2"
                style={{
                  background:
                    "radial-gradient(circle, rgba(200, 255, 60, 0.06) 0%, transparent 70%)",
                }}
              />
              <h2
                id="webapps-cta-heading"
                className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.035em] text-text-heading"
              >
                Got a project in mind?
              </h2>
              <p className="relative mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
                Whether you need a full platform built from scratch or technical
                leadership on an existing project — let&apos;s talk.
              </p>
              <Button variant="primary" href="/contact" className="relative">
                Get in Touch <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
