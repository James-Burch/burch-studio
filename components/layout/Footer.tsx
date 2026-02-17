import Link from "next/link";
import { SITE_CONFIG, FOOTER_COLUMNS, FOOTER_TAGLINE } from "@/lib/constants";

// ==========================================
// COMPONENT
// ==========================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      className="border-t border-brand-border pt-16 pb-8"
    >
      <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
        {/* Footer grid */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              className="font-display text-[1.35rem] font-bold tracking-[-0.03em] text-text-heading"
              aria-label="Burch Studio home"
            >
              burch<span className="text-brand-accent">.</span>studio
            </Link>
            <p className="mt-3.5 max-w-75 text-[0.9rem] leading-[1.65] text-text-muted">
              {FOOTER_TAGLINE}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-4.5 font-display text-[0.85rem] font-bold uppercase tracking-widest text-text-heading">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.88rem] text-text-muted transition-colors duration-300 hover:text-text-heading"
                      >
                        {link.label}
                      </a>
                    ) : link.href === "#" ? (
                      <span className="text-[0.88rem] text-text-muted">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[0.88rem] text-text-muted transition-colors duration-300 hover:text-text-heading"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-border pt-6">
          <p className="text-[0.82rem] text-text-muted">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-[0.82rem] text-text-muted">
            Built with care by{" "}
            <span className="text-brand-accent">burch.studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
