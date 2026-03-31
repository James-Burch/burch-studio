import { HOW_WE_WORK } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function HowWeWork() {
  return (
    <section className="py-25 md:py-32" aria-labelledby="how-we-work-heading">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Left - heading */}
          <ScrollReveal>
            <div>
              <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-accent">
                {HOW_WE_WORK.label}
              </p>
              <h2
                id="how-we-work-heading"
                className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.035em] text-text-heading"
              >
                {HOW_WE_WORK.heading}
              </h2>
            </div>
          </ScrollReveal>

          {/* Right - prose */}
          <div className="flex flex-col gap-6">
            {HOW_WE_WORK.paragraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p className="text-[1.05rem] leading-[1.8] text-text-muted">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
