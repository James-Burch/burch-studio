import type { Metadata } from "next";
import Image from "next/image";
import {
  ABOUT_META,
  ABOUT_HERO,
  ABOUT_CONTENT,
  CTA_BANNER,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

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
      <BreadcrumbJsonLd items={[{ name: "About", href: "/about" }]} />
      <PageHero
        label={ABOUT_HERO.label}
        heading={ABOUT_HERO.heading}
        subtext={ABOUT_HERO.subtext}
      />

      {/* About content */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr]">
            {/* Profile photo */}
            <ScrollReveal>
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
                <Image
                  src="/images/profile-photo.webp"
                  alt="James Burch – founder of Burch Studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-text-muted">James &mdash; Director, Burch Studio</p>
                <a href="mailto:james@burch-studio.co.uk" className="text-sm text-brand-accent hover:underline">
                  james@burch-studio.co.uk
                </a>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal>
                <h2 className="mb-6 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.035em] text-text-heading">
                  Why this studio exists
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
                  Start the Conversation{" "}
                  <span className="inline-block" aria-hidden="true">→</span>
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
                className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.035em] text-text-heading"
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
                {CTA_BANNER.cta.label} <span className="inline-block" aria-hidden="true">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
