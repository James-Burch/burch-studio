"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

// ==========================================
// COMPONENT
// ==========================================

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-30 pb-20 sm:px-8 lg:px-10"
      aria-labelledby="hero-heading"
    >
      {/* Background glow effects */}
      <div
        className="pointer-events-none absolute -top-[40%] -right-[20%] h-200 w-200 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 255, 60, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-[30%] -left-[15%] h-150 w-150 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200, 255, 60, 0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-300">
        <div className="max-w-205">
          {/* Tag */}
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-brand-accent/15 bg-brand-accent-dim px-4 py-1.5 text-[0.82rem] font-medium tracking-[0.02em] text-brand-accent"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-accent" />
            {HERO.tag}
          </motion.div>

          {/* Headline — word-by-word reveal */}
          <h1
            id="hero-heading"
            className="mb-6 font-display text-[clamp(2.6rem,6.5vw,4.5rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-text-heading"
          >
            {HERO.headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className={cn(
                  "mr-[0.3em] inline-block last:mr-0",
                  word.accent && "text-brand-accent",
                )}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: prefersReducedMotion ? 0 : 0.2 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word.text}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            className="mb-10 max-w-145 text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.7] text-text-muted"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: prefersReducedMotion ? 0 : 1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {HERO.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-3.5"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: prefersReducedMotion ? 0 : 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button variant="primary" href={HERO.primaryCTA.href}>
              {HERO.primaryCTA.label}{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Button>
            <Button variant="secondary" href={HERO.secondaryCTA.href}>
              {HERO.secondaryCTA.label} <span className="inline-block">↓</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
