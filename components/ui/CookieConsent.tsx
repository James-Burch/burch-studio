"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// COMPONENT
// ==========================================

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-brand-border bg-brand-surface/95 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-300 flex-col items-start gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-8 lg:px-10">
            <p className="flex-1 text-[0.88rem] leading-[1.6] text-text-muted">
              We use cookies to analyse site traffic and improve your experience.
              See our{" "}
              <Link
                href="/cookies"
                className="text-text-heading underline underline-offset-2 transition-colors hover:text-brand-accent"
              >
                Cookie Policy
              </Link>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-lg border border-brand-border px-5 py-2.5 text-[0.85rem] font-medium text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-heading"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-lg bg-brand-accent px-5 py-2.5 text-[0.85rem] font-bold text-brand-bg transition-colors hover:bg-brand-accent-hover"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
