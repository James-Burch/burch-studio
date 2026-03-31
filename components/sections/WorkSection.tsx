import Link from "next/link";
import { WORK_SECTION_HEADER, WORK_PROJECTS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function WorkSection() {
  return (
    <section className="py-25 md:py-32" aria-labelledby="work-heading">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ScrollReveal>
          <SectionHeading
            label={WORK_SECTION_HEADER.label}
            heading={WORK_SECTION_HEADER.heading}
            subtext={WORK_SECTION_HEADER.subtext}
          />
        </ScrollReveal>

        {/* Project cards */}
        <div className="mt-16 flex flex-col gap-6">
          {WORK_PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <article
                className="group rounded-[20px] border border-brand-border bg-brand-surface transition-all duration-300 hover:-translate-y-1 hover:border-brand-border-hover"
              >
                <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-10">
                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <p
                      className="mb-3 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em]"
                      style={{ color: project.categoryColor }}
                    >
                      {project.category}
                    </p>
                    <h3 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] text-text-heading">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-[1.02rem] leading-[1.7] text-text-muted">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-brand-border bg-brand-surface-elevated px-3 py-1 text-[0.78rem] text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={project.href}
                      className="inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-brand-accent transition-colors duration-200 hover:text-brand-accent-hover"
                    >
                      {project.linkText}{" "}
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>

                  {/* Image area / Stats placeholder */}
                  {project.stats ? (
                    <div className="flex items-center justify-center rounded-2xl border border-brand-border bg-brand-bg p-10">
                      <div className="flex flex-wrap justify-center gap-6">
                        {project.stats.map((stat) => (
                          <p
                            key={stat}
                            className="font-display text-[0.88rem] font-semibold tracking-[0.02em] text-text-muted"
                          >
                            {stat}
                          </p>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center rounded-2xl border border-brand-border bg-brand-bg p-10">
                      <p className="font-display text-[1.1rem] font-semibold text-text-muted/40">
                        {project.title}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* View all link */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-brand-accent transition-colors duration-200 hover:text-brand-accent-hover"
            >
              View all projects{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
