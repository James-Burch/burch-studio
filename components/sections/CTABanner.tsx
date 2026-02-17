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
          <div className="relative overflow-hidden rounded-3xl border border-brand-accent/12 bg-linear-to-br from-brand-accent/8 to-brand-accent/2 px-10 py-16 text-center">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute top-[-50%] left-1/2 h-150 w-150 -translate-x-1/2"
              style={{
                background:
                  "radial-gradient(circle, rgba(200, 255, 60, 0.06) 0%, transparent 70%)",
              }}
            />

            <h2
              id="cta-heading"
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
              {CTA_BANNER.cta.label} <span className="inline-block">→</span>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
