import { TESTIMONIALS_HEADER, TESTIMONIALS, SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function TestimonialsSection() {
  return (
    <section className="py-25 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <SectionHeading
            label={TESTIMONIALS_HEADER.label}
            heading={TESTIMONIALS_HEADER.heading}
            subtext={TESTIMONIALS_HEADER.subtext}
          />
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <article className="rounded-[20px] border border-brand-border bg-brand-surface px-8 py-9">
                {/* Opening quotation mark */}
                <span
                  className="block font-serif text-[4rem] leading-[1] text-brand-accent/15"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="mb-6 -mt-4 text-base leading-[1.75] text-text-primary">
                  {testimonial.quote}
                </blockquote>

                {/* Author */}
                <div>
                  <p className="text-[0.92rem] font-semibold text-text-heading">
                    {testimonial.name}
                  </p>
                  <p className="text-[0.82rem] text-text-muted">
                    {testimonial.role}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Google review CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href={SITE_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-border px-5 py-2.5 text-[0.85rem] font-medium text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-heading"
            >
              Leave us a review on Google
              <span className="inline-block" aria-hidden="true">
                &nearr;
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
