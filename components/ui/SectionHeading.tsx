import { cn } from "@/lib/utils";

// ==========================================
// SECTION HEADING PROPS
// ==========================================

export interface SectionHeadingProps {
  label: string;
  heading: string;
  subtext?: string;
  centered?: boolean;
  className?: string;
}

// ==========================================
// COMPONENT
// ==========================================

export function SectionHeading({
  label,
  heading,
  subtext,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-accent">
        {label}
      </p>
      <h2 className="mb-5 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.035em] text-text-heading">
        {heading}
      </h2>
      {subtext && (
        <p
          className={cn(
            "max-w-140 text-[1.08rem] leading-[1.7] text-text-muted",
            centered && "mx-auto",
          )}
        >
          {subtext}
        </p>
      )}
    </div>
  );
}
