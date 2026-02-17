import {
  TESTIMONIALS_HEADER,
  TESTIMONIALS,
  TESTIMONIALS_DISCLAIMER,
} from "@/lib/constants";
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
                {/* Stars */}
                <div className="mb-4.5 text-[0.95rem] tracking-[2px] text-brand-accent">
                  {Array.from({ length: testimonial.rating }, (_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mb-6 text-base leading-[1.75] text-text-primary italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent-dim font-display text-[0.9rem] font-bold text-brand-accent">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-[0.92rem] font-semibold text-text-heading">
                      {testimonial.name}
                    </p>
                    <p className="text-[0.82rem] text-text-muted">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-[0.85rem] text-text-muted italic">
          {TESTIMONIALS_DISCLAIMER}
        </p>
      </div>
    </section>
  );
}
