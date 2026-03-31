import { CTA_BANNER } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function CTABanner() {
  return (
    <section className="py-25 md:py-32" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="text-center">
            <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-accent">
              {CTA_BANNER.label}
            </p>
            <h2
              id="cta-heading"
              className="mb-4 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.035em] text-text-heading"
            >
              {CTA_BANNER.heading}
            </h2>
            <p className="mx-auto mb-9 max-w-125 text-[1.08rem] leading-[1.7] text-text-muted">
              {CTA_BANNER.subtext}
            </p>
            <Button variant="primary" href={CTA_BANNER.cta.href}>
              {CTA_BANNER.cta.label}{" "}
              <span className="inline-block" aria-hidden="true">→</span>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
