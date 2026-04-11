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
  title: "Web Design Peterborough — Custom Websites for Local Businesses",
  description:
    "Professional web design in Peterborough. Mobile-first, custom-built websites for trade businesses and local companies. No templates. Built with Next.js by Burch Studio.",
  alternates: { canonical: `${SITE_CONFIG.url}/web-design-peterborough` },
  openGraph: {
    title: "Web Design Peterborough — Custom Websites for Local Businesses",
    description:
      "Professional web design in Peterborough. Mobile-first, custom-built websites for trade businesses and local companies. No templates. Built with Next.js by Burch Studio.",
    url: `${SITE_CONFIG.url}/web-design-peterborough`,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function WebDesignPeterborough() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Web Design Peterborough", href: "/web-design-peterborough" },
        ]}
      />

      <PageHero
        label="Web Design Peterborough"
        heading="Websites built for Peterborough businesses."
        subtext="Modern, mobile-first websites designed to bring local customers to your door. No templates, no page builders — every site is built from scratch."
      />

      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-180 px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-14">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Why local businesses in Peterborough need a proper website
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                If you&apos;re a plumber, electrician, builder, or any trade
                business in Peterborough, your website is often the first
                impression a potential customer gets. Over 60% of web traffic now
                comes from mobile devices, and 76% of people who search for a
                local service on their phone visit a business within 24 hours.
              </p>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                The problem is that most trade business websites in the
                Peterborough area were built years ago, often on platforms like
                Wix or WordPress, and haven&apos;t been updated since. They
                don&apos;t work properly on mobile, they load slowly, and
                Google has moved on. Since mid-2024, Google uses mobile-first
                indexing — meaning your mobile site is what determines your
                ranking, not your desktop site.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                What we&apos;ve built for businesses like yours
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                Burch Studio has worked with businesses in and around
                Peterborough to build websites that actually generate work.
                Noble Mortgages came to us with no web presence at all — within
                weeks of launching their new site, they were receiving inbound
                enquiries for the first time. Refine Barbers needed a modern
                site with online booking — we built it from scratch with Booksy
                integration, and their customers can now find and book them
                directly from Google.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                Every site we build is custom. We don&apos;t use templates or
                page builders. The technology behind each site is Next.js,
                React, and TypeScript — the same tools used by companies like
                Vercel, Stripe, and Linear. That means your site is fast,
                accessible, and built to rank on Google from day one.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                What you get
              </h2>
              <ul className="mb-5 ml-5 list-disc space-y-3 text-[0.95rem] leading-[1.8] text-text-muted marker:text-brand-accent">
                <li>A mobile-first, responsive website that works on every device</li>
                <li>Custom design tailored to your business — not a template</li>
                <li>Fast load times optimised for Google Core Web Vitals</li>
                <li>SEO baked in from the start — meta tags, structured data, sitemap</li>
                <li>Clear calls to action that turn visitors into customers</li>
                <li>Ongoing support after launch — you&apos;re not left on your own</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                How much does a website cost in Peterborough?
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                A professional website for a small business in Peterborough
                typically costs between £500 and £3,000 depending on the number
                of pages and features. Burch Studio provides a detailed quote
                after an initial conversation — no obligation, no pressure.
                We&apos;re transparent about pricing because we believe you
                should know what you&apos;re paying for before you commit.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <p className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-7 text-[1rem] leading-[1.85] text-text-muted">
                Burch Studio is a web design studio based in Peterborough,
                Cambridgeshire. We build modern, mobile-first websites for local
                trade businesses and companies across the UK. If you need a
                website that works as hard as you do, get in touch for a free
                audit of your current site.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="text-center">
                <Button variant="primary" href="/contact?audit">
                  Get Your Free Audit{" "}
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
