import type { Metadata } from "next";
import {
  SEO_META,
  SEO_HERO,
  SEO_PROBLEMS_HEADER,
  SEO_PROBLEM_LIST,
  SEO_SOLUTION_HEADER,
  SEO_SOLUTIONS,
  STATS,
  STATS_HEADER,
  CTA_BANNER,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: SEO_META.title,
  description: SEO_META.description,
  alternates: { canonical: SEO_META.canonical },
  openGraph: {
    title: SEO_META.title,
    description: SEO_META.description,
    url: SEO_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function SEO() {
  return (
    <>
      <ServiceJsonLd
        name="SEO & Google Ranking"
        description={SEO_META.description}
        url={SEO_META.canonical}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Services", href: "/services" },
          { name: "SEO", href: "/services/seo" },
        ]}
      />
      <PageHero
        label={SEO_HERO.label}
        heading={SEO_HERO.heading}
        subtext={SEO_HERO.subtext}
      />

      {/* Problem section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="seo-problems-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeading
              label={SEO_PROBLEMS_HEADER.label}
              heading={SEO_PROBLEMS_HEADER.heading}
              subtext={SEO_PROBLEMS_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SEO_PROBLEM_LIST.map((problem, i) => (
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
        aria-labelledby="seo-solution-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label={SEO_SOLUTION_HEADER.label}
              heading={SEO_SOLUTION_HEADER.heading}
              subtext={SEO_SOLUTION_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SEO_SOLUTIONS.map((point, i) => (
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

      {/* Stats section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="seo-stats-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-14">
            <SectionHeading
              label={STATS_HEADER.label}
              heading={STATS_HEADER.heading}
              centered
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-0">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.value} delay={i * 0.1}>
                <div className="relative text-center">
                  {i < STATS.length - 1 && (
                    <div className="absolute top-[10%] right-0 hidden h-[80%] w-px bg-brand-border md:block" />
                  )}
                  <p className="mb-2.5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-none tracking-[-0.04em] text-brand-accent">
                    {stat.value}
                  </p>
                  <p className="mx-auto max-w-45 text-[0.88rem] leading-normal text-text-muted">
                    {stat.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-25 md:py-32" aria-labelledby="seo-cta-heading">
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
                id="seo-cta-heading"
                className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.035em] text-text-heading"
              >
                Find out where you rank.
              </h2>
              <p className="relative mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
                {CTA_BANNER.subtext}
              </p>
              <Button variant="primary" href="/contact" className="relative">
                Get Your Free Audit <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
