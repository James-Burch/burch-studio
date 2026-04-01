import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Web Design UK — Modern Websites & Web Applications",
  description:
    "Custom web design and development for UK businesses. Next.js, TypeScript, mobile-first. From brochure sites to full-stack SaaS platforms. Burch Studio.",
  alternates: { canonical: `${SITE_CONFIG.url}/web-design-uk` },
  openGraph: {
    title: "Web Design UK — Modern Websites & Web Applications",
    description:
      "Custom web design and development for UK businesses. Next.js, TypeScript, mobile-first. From brochure sites to full-stack SaaS platforms. Burch Studio.",
    url: `${SITE_CONFIG.url}/web-design-uk`,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function WebDesignUK() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[{ name: "Web Design UK", href: "/web-design-uk" }]}
      />

      <PageHero
        label="Web Design UK"
        heading="Web design that takes your business seriously."
        subtext="Custom websites and web applications for UK businesses. Built with modern technology, designed to perform."
      />

      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-180 px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-14">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Not another WordPress agency
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                Most web design agencies in the UK build on WordPress, Wix, or
                Squarespace. These platforms are convenient, but they come with
                trade-offs: bloated code, slow load times, security
                vulnerabilities, and limited control over how your site actually
                works. For businesses that depend on their website to generate
                leads or serve customers, those trade-offs cost money.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                Burch Studio builds every site from scratch using Next.js,
                React, and TypeScript — the same technology used by Vercel,
                Stripe, and Linear. The result is a website that loads in under
                a second, scores 95+ on Google Lighthouse, and is built
                specifically for your business. No themes, no plugins, no
                compromises.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                From brochure sites to production SaaS
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                We work across the full spectrum. A mortgage broker in
                Peterborough needed their first website — we built it in weeks
                and they started receiving enquiries immediately. A private
                company needed a full SaaS platform with real-time financial
                monitoring, AI-powered analysis, and multi-tenant
                architecture — we built Seqenta from the ground up with over 100
                API endpoints and 40+ pages.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                The point isn&apos;t the size of the project. It&apos;s the
                standard. Whether it&apos;s a five-page website or a platform
                serving thousands of users, every project gets the same level of
                care in architecture, design, and engineering.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                What makes Burch Studio different
              </h2>
              <ul className="mb-5 ml-5 list-disc space-y-3 text-[0.95rem] leading-[1.8] text-text-muted marker:text-brand-accent">
                <li>
                  <strong className="text-text-heading">Custom code, not templates.</strong>{" "}
                  Every site is built from scratch. No WordPress, no page builders, no themes.
                </li>
                <li>
                  <strong className="text-text-heading">Modern technology.</strong>{" "}
                  Next.js, React, TypeScript, Tailwind CSS. Fast, secure, and future-proof.
                </li>
                <li>
                  <strong className="text-text-heading">SEO from day one.</strong>{" "}
                  Structured data, meta tags, sitemap, Core Web Vitals — all handled before launch.
                </li>
                <li>
                  <strong className="text-text-heading">Mobile-first.</strong>{" "}
                  Every site is designed for mobile screens first and scaled up for desktop.
                </li>
                <li>
                  <strong className="text-text-heading">One developer, one point of contact.</strong>{" "}
                  No account managers, no handoffs. You work directly with the person building your site.
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Who we work with
              </h2>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                Burch Studio works with trade businesses, professional services,
                startups, and established companies across the UK. We&apos;re
                based in Peterborough, Cambridgeshire, but work remotely with
                clients nationwide. If you need a website or web application
                built properly — with real engineering, not just a drag-and-drop
                page — we should talk.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-7 text-[1rem] leading-[1.85] text-text-muted">
                Burch Studio is a web design and development studio based in the
                UK. We build custom websites and full-stack web applications
                using Next.js, TypeScript, and modern web standards. From local
                trade businesses to national SaaS platforms, we deliver work
                that performs.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center">
                <Button variant="primary" href="/contact">
                  Get in Touch{" "}
                  <span className="inline-block" aria-hidden="true">
                    &rarr;
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
