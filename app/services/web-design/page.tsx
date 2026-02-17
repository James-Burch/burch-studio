import type { Metadata } from "next";
import {
  WEB_DESIGN_META,
  WEB_DESIGN_HERO,
  WEB_DESIGN_PROBLEMS_HEADER,
  WEB_DESIGN_PROBLEM_LIST,
  WEB_DESIGN_SOLUTION_HEADER,
  WEB_DESIGN_SOLUTIONS,
  WEB_DESIGN_PROCESS,
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
  title: WEB_DESIGN_META.title,
  description: WEB_DESIGN_META.description,
  alternates: { canonical: WEB_DESIGN_META.canonical },
  openGraph: {
    title: WEB_DESIGN_META.title,
    description: WEB_DESIGN_META.description,
    url: WEB_DESIGN_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function WebDesign() {
  return (
    <>
      <PageHero
        label={WEB_DESIGN_HERO.label}
        heading={WEB_DESIGN_HERO.heading}
        subtext={WEB_DESIGN_HERO.subtext}
      />

      {/* Problem section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="wd-problems-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeading
              label={WEB_DESIGN_PROBLEMS_HEADER.label}
              heading={WEB_DESIGN_PROBLEMS_HEADER.heading}
              subtext={WEB_DESIGN_PROBLEMS_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {WEB_DESIGN_PROBLEM_LIST.map((problem, i) => (
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
      <section className="py-25 md:py-32" aria-labelledby="wd-solution-heading">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label={WEB_DESIGN_SOLUTION_HEADER.label}
              heading={WEB_DESIGN_SOLUTION_HEADER.heading}
              subtext={WEB_DESIGN_SOLUTION_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEB_DESIGN_SOLUTIONS.map((point, i) => (
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

      {/* Process section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="wd-process-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label="The Process"
              heading="How it works."
              subtext="From first conversation to launch day — here's what to expect."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {WEB_DESIGN_PROCESS.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-brand-border bg-brand-surface-elevated p-7">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-dim font-display text-sm font-bold text-brand-accent">
                    {step.number}
                  </div>
                  <h3 className="mb-2 font-display text-[1.05rem] font-bold tracking-[-0.02em] text-text-heading">
                    {step.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.65] text-text-muted">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-25 md:py-32" aria-labelledby="wd-cta-heading">
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
                id="wd-cta-heading"
                className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.035em] text-text-heading"
              >
                {CTA_BANNER.heading}
              </h2>
              <p className="relative mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
                {CTA_BANNER.subtext}
              </p>
              <Button
                variant="primary"
                href={CTA_BANNER.cta.href}
                className="relative"
              >
                {CTA_BANNER.cta.label} <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
