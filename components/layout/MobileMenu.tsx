"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants";

// ==========================================
// MOBILE MENU PROPS
// ==========================================

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ==========================================
// COMPONENT
// ==========================================

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Trap focus within mobile menu when open
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstEl = focusableElements[0];
    const lastEl = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    firstEl?.focus();

    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      role="dialog"
      aria-label="Mobile navigation"
      aria-modal="true"
      className={cn(
        "fixed inset-0 z-999 flex flex-col items-center justify-center gap-7 bg-brand-bg/97 backdrop-blur-[30px] transition-opacity duration-400 ease-out",
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className={cn(
            "font-display text-[2rem] font-bold transition-colors duration-300 hover:text-brand-accent",
            pathname === link.href ? "text-brand-accent" : "text-text-heading",
          )}
          aria-current={pathname === link.href ? "page" : undefined}
        >
          {link.label}
        </Link>
      ))}
      <Link
        href={NAV_CTA.href}
        onClick={onClose}
        className="mt-4 rounded-[10px] bg-brand-accent px-8 py-3.5 font-body text-base font-semibold text-brand-bg transition-colors duration-300 hover:bg-brand-accent-hover"
      >
        {NAV_CTA.label}
      </Link>
    </div>
  );
}
