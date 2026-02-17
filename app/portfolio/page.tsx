import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Portfolio | Burch Studio",
  description:
    "Case studies and examples of websites and web applications built by Burch Studio. Coming soon.",
  alternates: { canonical: `${SITE_CONFIG.url}/portfolio` },
  openGraph: {
    title: "Portfolio | Burch Studio",
    description:
      "Case studies and examples of websites and web applications built by Burch Studio. Coming soon.",
    url: `${SITE_CONFIG.url}/portfolio`,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function Portfolio() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Portfolio", href: "/portfolio" }]} />
      <PageHero
        label="Portfolio"
        heading="Our work speaks for itself."
        subtext="We're putting the finishing touches on some case studies. In the meantime, get in touch and we'll walk you through what we've built."
      />

      {/* Coming soon grid */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex aspect-4/3 items-center justify-center rounded-2xl border border-dashed border-brand-border bg-brand-surface">
                  <p className="font-display text-sm font-bold uppercase tracking-widest text-text-muted/40">
                    Coming soon
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-20 text-center">
              <p className="mb-6 text-[1.05rem] leading-[1.7] text-text-muted">
                Want to see examples of our work? Get in touch and we&apos;ll
                share some directly.
              </p>
              <Button variant="primary" href="/contact">
                Get in Touch <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
