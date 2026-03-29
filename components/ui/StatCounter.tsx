"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// ==========================================
// STAT COUNTER PROPS
// ==========================================

export interface StatCounterProps {
  value: string;
  className?: string;
}

// ==========================================
// HELPERS
// ==========================================

/** Parse "76%" → { num: 76, prefix: "", suffix: "%" } */
function parseValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  if (!match) return { num: 0, prefix: "", suffix: value };
  return {
    prefix: match[1],
    num: parseInt(match[2], 10),
    suffix: match[3],
  };
}

// ==========================================
// COMPONENT
// ==========================================

export function StatCounter({ value, className }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();
  const { prefix, num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) {
      setDisplay(num);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      // Ease-out curve
      const progress = 1 - Math.pow(1 - current / steps, 3);
      setDisplay(Math.round(progress * num));

      if (current >= steps) {
        setDisplay(num);
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, num, prefersReducedMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
