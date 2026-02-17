import { PROBLEMS_HEADER, PROBLEMS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function ProblemSection() {
  return (
    <section
      className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
      aria-labelledby="problems-heading"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-16">
          <SectionHeading
            label={PROBLEMS_HEADER.label}
            heading={PROBLEMS_HEADER.heading}
            subtext={PROBLEMS_HEADER.subtext}
          />
        </ScrollReveal>

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem, i) => (
            <ScrollReveal key={problem.title} delay={i * 0.1} className="flex">
              <article className="flex flex-col rounded-2xl border border-brand-border bg-brand-surface-elevated p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red/25">
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red/10 text-[1.3rem]">
                  {problem.icon}
                </div>

                {/* Content */}
                <h3 className="mb-2.5 font-display text-[1.08rem] font-bold tracking-[-0.02em] text-text-heading">
                  {problem.title}
                </h3>
                <p className="flex-1 text-[0.9rem] leading-[1.65] text-text-muted">
                  {problem.description}
                </p>

                {/* Stat */}
                <div className="mt-4 border-t border-brand-border pt-4 text-[0.82rem] font-medium text-red">
                  {problem.stat}
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
