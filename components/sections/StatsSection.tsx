import { STATS_HEADER, STATS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function StatsSection() {
  return (
    <section
      className="border-t border-b border-brand-border bg-brand-surface py-25 md:py-32"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <ScrollReveal className="mb-14">
          <SectionHeading
            label={STATS_HEADER.label}
            heading={STATS_HEADER.heading}
            centered
          />
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 md:gap-0">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.value} delay={i * 0.1}>
              <div className="relative text-center">
                {/* Vertical divider between stats on desktop */}
                {i < STATS.length - 1 && (
                  <div className="absolute top-[10%] right-0 hidden h-[80%] w-px bg-brand-border md:block" />
                )}

                <p className="mb-2.5 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-none tracking-[-0.04em] text-brand-accent">
                  {stat.value}
                </p>
                <p className="mx-auto max-w-45 text-[0.88rem] leading-normal text-text-muted">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
