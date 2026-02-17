"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

// ==========================================
// BUTTON PROPS
// ==========================================

export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

// ==========================================
// VARIANT STYLES
// ==========================================

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[0.95rem] transition-all duration-300 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand-accent)] disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-[var(--color-brand-accent)] text-[var(--color-brand-bg)] px-[30px] py-[15px] hover:bg-[var(--color-brand-accent-hover)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(200,255,60,0.2)]",
  secondary:
    "bg-transparent text-[var(--color-text-primary)] px-[30px] py-[15px] border border-[var(--color-brand-border-hover)] hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-heading)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-[var(--color-text-muted)] px-4 py-2 hover:text-[var(--color-text-heading)]",
} as const;

// ==========================================
// COMPONENT
// ==========================================

export function Button({
  variant = "primary",
  href,
  children,
  className,
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  // Render as Next.js Link for internal routes
  if (href && !disabled) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // Render as button element
  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
