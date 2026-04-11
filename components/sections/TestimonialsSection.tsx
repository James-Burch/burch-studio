import { TESTIMONIALS_HEADER, TESTIMONIALS, SITE_CONFIG } from "@/lib/constants";
import { getGoogleReviews } from "@/lib/google-reviews";
import type { TestimonialData } from "@/lib/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export async function TestimonialsSection() {
  const googleData = await getGoogleReviews();
  const reviews: TestimonialData[] = googleData?.reviews?.length
    ? googleData.reviews
    : TESTIMONIALS;
  const showGoogleBadge = !!googleData;

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

        {/* Google rating badge */}
        {showGoogleBadge && (
          <ScrollReveal>
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="flex gap-0.5" aria-label={`${googleData.overallRating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className={`h-5 w-5 ${i < Math.round(googleData.overallRating) ? "text-yellow-400" : "text-brand-border"}`}
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[0.88rem] text-text-muted">
                <span className="font-semibold text-text-heading">{googleData.overallRating}</span>
                {" "}on Google
                {googleData.totalReviewCount > 0 && (
                  <span> · {googleData.totalReviewCount} {googleData.totalReviewCount === 1 ? "review" : "reviews"}</span>
                )}
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((testimonial, i) => (
            <ScrollReveal key={testimonial.name} delay={i * 0.1}>
              <article className="rounded-[20px] border border-brand-border bg-brand-surface px-8 py-9">
                {/* Star rating */}
                {testimonial.rating && (
                  <div className="mb-4 flex gap-0.5" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg
                        key={j}
                        viewBox="0 0 20 20"
                        className={`h-4 w-4 ${j < testimonial.rating! ? "text-yellow-400" : "text-brand-border"}`}
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                )}

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
                  {testimonial.role && (
                    <p className="text-[0.82rem] text-text-muted">
                      {testimonial.role}
                    </p>
                  )}
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
              className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-5 py-2.5 text-[0.85rem] font-bold text-brand-bg transition-colors hover:bg-brand-accent-hover"
            >
              Leave us a review on Google
              <span className="inline-block" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
