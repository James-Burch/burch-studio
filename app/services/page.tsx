import type { Metadata } from "next";
import Link from "next/link";
import {
  SERVICES_HUB_META,
  SERVICES_HUB_HERO,
  SERVICES,
  SERVICES_HUB_BOTTOM_CTA,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: SERVICES_HUB_META.title,
  description: SERVICES_HUB_META.description,
  alternates: { canonical: SERVICES_HUB_META.canonical },
  openGraph: {
    title: SERVICES_HUB_META.title,
    description: SERVICES_HUB_META.description,
    url: SERVICES_HUB_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function Services() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Services", href: "/services" }]} />
      <PageHero
        label={SERVICES_HUB_HERO.label}
        heading={SERVICES_HUB_HERO.heading}
        subtext={SERVICES_HUB_HERO.subtext}
      />

      {/* Service cards — larger versions */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {SERVICES.map((service, i) => (
              <ScrollReveal
                key={service.title}
                delay={i * 0.1}
                className="flex"
              >
                <Link
                  href={service.href}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] border border-brand-border bg-brand-surface px-8 pt-10 pb-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-border-hover"
                >
                  {/* Top accent bar on hover */}
                  <div className="absolute top-0 right-0 left-0 h-0.75 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-brand-accent-dim text-2xl">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h2 className="mb-3 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-text-heading">
                    {service.title}
                  </h2>
                  <p className="mb-6 flex-1 text-[0.92rem] leading-[1.7] text-text-muted">
                    {service.description}
                  </p>

                  {/* Link indicator */}
                  <span className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-brand-accent transition-[gap] duration-300 group-hover:gap-2.5">
                    {service.linkText ?? "Learn more"}
                    <span>→</span>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-25 md:pb-32">
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
              <h2 className="relative mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.035em] text-text-heading">
                {SERVICES_HUB_BOTTOM_CTA.heading}
              </h2>
              <p className="relative mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
                {SERVICES_HUB_BOTTOM_CTA.subtext}
              </p>
              <Button
                variant="primary"
                href={SERVICES_HUB_BOTTOM_CTA.cta.href}
                className="relative"
              >
                {SERVICES_HUB_BOTTOM_CTA.cta.label}{" "}
                <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
