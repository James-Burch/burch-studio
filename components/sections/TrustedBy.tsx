import { TRUSTED_BY } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// ==========================================
// COMPONENT
// ==========================================

export function TrustedBy() {
  return (
    <section className="border-t border-b border-brand-border py-10">
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-text-muted">
              {TRUSTED_BY.label}
            </p>
            <p className="font-display text-[0.95rem] tracking-[0.02em] text-text-muted">
              {TRUSTED_BY.names.join(" · ")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
