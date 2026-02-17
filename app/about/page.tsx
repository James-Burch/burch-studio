import type { Metadata } from "next";
import {
  ABOUT_META,
  ABOUT_HERO,
  ABOUT_CONTENT,
  CTA_BANNER,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: ABOUT_META.title,
  description: ABOUT_META.description,
  alternates: { canonical: ABOUT_META.canonical },
  openGraph: {
    title: ABOUT_META.title,
    description: ABOUT_META.description,
    url: ABOUT_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function About() {
  return (
    <>
      <PageHero
        label={ABOUT_HERO.label}
        heading={ABOUT_HERO.heading}
        subtext={ABOUT_HERO.subtext}
      />

      {/* About content */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
            {/* Photo / avatar placeholder */}
            <ScrollReveal>
              <div className="flex aspect-square items-center justify-center rounded-3xl border border-brand-border bg-brand-surface">
                {/* TODO: Replace with professional photo via next/image */}
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-brand-accent-dim font-display text-3xl font-bold text-brand-accent">
                    JB
                  </div>
                  <p className="text-sm text-text-muted italic">
                    Photo coming soon
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <h2 className="mb-6 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.035em] text-text-heading">
                  Why we started Burch Studio
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <p className="mb-6 text-[1.05rem] leading-[1.75] text-text-muted">
                  {ABOUT_CONTENT.intro}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="mb-6 text-[1.05rem] leading-[1.75] text-text-muted">
                  {ABOUT_CONTENT.background}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="mb-6 text-[1.05rem] leading-[1.75] text-text-muted">
                  {ABOUT_CONTENT.whyTrades}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <p className="mb-6 text-[1.05rem] leading-[1.75] text-text-muted">
                  {ABOUT_CONTENT.whySaas}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="mb-6 text-[1.05rem] leading-[1.75] text-text-muted">
                  {ABOUT_CONTENT.approach}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <p className="mb-10 text-[0.92rem] leading-[1.7] text-text-muted/70 italic">
                  {ABOUT_CONTENT.techNote}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <Button variant="primary" href="/contact">
                  Let&apos;s Work Together{" "}
                  <span className="inline-block">→</span>
                </Button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-25 md:py-32" aria-labelledby="about-cta-heading">
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
                id="about-cta-heading"
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
