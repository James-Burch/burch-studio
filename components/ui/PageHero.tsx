import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// PAGE HERO PROPS
// ==========================================

export interface PageHeroProps {
  label: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
}

// ==========================================
// COMPONENT
// ==========================================

export function PageHero({
  label,
  heading,
  subtext,
  centered = false,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28",
        className,
      )}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -top-[30%] -right-[20%] h-150 w-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 255, 60, 0.04) 0%, transparent 70%)",
        }}
      />

      <div
        className={cn(
          "relative z-10 mx-auto max-w-300 px-5 sm:px-8 lg:px-10",
          centered && "text-center",
        )}
      >
        <ScrollReveal>
          <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-accent">
            {label}
          </p>
          <h1 className="mb-5 max-w-180 font-display text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.1] tracking-[-0.04em] text-text-heading">
            {heading}
          </h1>
          {subtext && (
            <p
              className={cn(
                "max-w-140 text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.7] text-text-muted",
                centered && "mx-auto",
              )}
            >
              {subtext}
            </p>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
