"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, NAV_CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

// ==========================================
// COMPONENT
// ==========================================

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Track scroll position for sticky background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll(); // Check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 right-0 left-0 z-1000 py-5 transition-all duration-400 ease-out",
          scrolled &&
            "border-b border-brand-border bg-brand-bg/85 py-3.5 backdrop-blur-[20px]",
        )}
      >
        <div className="mx-auto flex max-w-300 items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[1.35rem] font-extrabold tracking-[-0.03em] text-text-heading"
            aria-label="Burch Studio home"
          >
            burch<span className="text-brand-accent">.</span>studio
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-[0.9rem] font-normal tracking-[0.01em] transition-colors duration-300 hover:text-text-heading",
                    pathname === link.href
                      ? "text-text-heading"
                      : "text-text-muted",
                  )}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button
                variant="primary"
                href={NAV_CTA.href}
                className="rounded-lg px-5.5 py-2.5 text-[0.85rem]"
              >
                {NAV_CTA.label}
              </Button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="flex cursor-pointer flex-col gap-1.25 border-none bg-transparent p-2 md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={cn(
                "block h-0.5 w-6 rounded-sm bg-text-primary transition-transform duration-300 ease-out",
                mobileOpen && "translate-y-1.75 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-sm bg-text-primary transition-opacity duration-300 ease-out",
                mobileOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 rounded-sm bg-text-primary transition-transform duration-300 ease-out",
                mobileOpen && "-translate-y-1.75 -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
