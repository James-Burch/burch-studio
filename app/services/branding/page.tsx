import React from "react";
import type { Metadata } from "next";
import {
  BRANDING_META,
  BRANDING_HERO,
  BRANDING_PROBLEMS_HEADER,
  BRANDING_PROBLEM_LIST,
  BRANDING_SOLUTION_HEADER,
  BRANDING_SOLUTIONS,
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
  title: BRANDING_META.title,
  description: BRANDING_META.description,
  alternates: { canonical: BRANDING_META.canonical },
  openGraph: {
    title: BRANDING_META.title,
    description: BRANDING_META.description,
    url: BRANDING_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function Branding() {
  return (
    <>
      <ServiceJsonLd
        name="Branding & Professional Setup"
        description={BRANDING_META.description}
        url={BRANDING_META.canonical}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Services", href: "/services" },
          { name: "Branding", href: "/services/branding" },
        ]}
      />
      <PageHero
        label={BRANDING_HERO.label}
        heading={BRANDING_HERO.heading}
        subtext={BRANDING_HERO.subtext}
      />

      {/* Problem section */}
      <section
        className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="branding-problems-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <SectionHeading
              label={BRANDING_PROBLEMS_HEADER.label}
              heading={BRANDING_PROBLEMS_HEADER.heading}
              subtext={BRANDING_PROBLEMS_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BRANDING_PROBLEM_LIST.map((problem, i) => (
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
        aria-labelledby="branding-solution-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-16">
            <SectionHeading
              label={BRANDING_SOLUTION_HEADER.label}
              heading={BRANDING_SOLUTION_HEADER.heading}
              subtext={BRANDING_SOLUTION_HEADER.subtext}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BRANDING_SOLUTIONS.map((point, i) => (
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

      {/* CTA */}
      <section
        className="py-25 md:py-32"
        aria-labelledby="branding-cta-heading"
      >
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
                id="branding-cta-heading"
                className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-[-0.035em] text-text-heading"
              >
                Ready to level up your brand?
              </h2>
              <p className="relative mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
                {CTA_BANNER.subtext}
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
