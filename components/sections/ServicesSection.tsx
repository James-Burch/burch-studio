import Link from "next/link";
import { SERVICES_HEADER, SERVICES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function ServicesSection() {
  return (
    <section className="py-25 md:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <SectionHeading
            label={SERVICES_HEADER.label}
            heading={SERVICES_HEADER.heading}
            subtext={SERVICES_HEADER.subtext}
          />
        </ScrollReveal>

        {/* Service cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1} className="flex">
              <article className="group relative flex flex-col overflow-hidden rounded-[20px] border border-brand-border bg-brand-surface px-8 pt-10 pb-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-border-hover">
                {/* Top accent bar on hover */}
                <div className="absolute top-0 right-0 left-0 h-0.75 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[14px] bg-brand-accent-dim text-2xl">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-display text-[1.25rem] font-bold tracking-[-0.02em] text-text-heading">
                  {service.title}
                </h3>
                <p className="mb-6 flex-1 text-[0.92rem] leading-[1.7] text-text-muted">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-brand-accent transition-[gap] duration-300 hover:gap-2.5"
                >
                  {service.linkText ?? "Learn more"}
                  <span>→</span>
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
