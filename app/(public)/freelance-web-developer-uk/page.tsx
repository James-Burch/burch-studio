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
  title: "Freelance Web Developer UK — Burch Studio",
  description:
    "Freelance web developer based in the UK. Custom websites and web applications built with Next.js, TypeScript, and modern standards. No agencies, no outsourcing.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/freelance-web-developer-uk`,
  },
  openGraph: {
    title: "Freelance Web Developer UK — Burch Studio",
    description:
      "Freelance web developer based in the UK. Custom websites and web applications built with Next.js, TypeScript, and modern standards. No agencies, no outsourcing.",
    url: `${SITE_CONFIG.url}/freelance-web-developer-uk`,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function FreelanceWebDeveloperUK() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Freelance Web Developer UK",
            href: "/freelance-web-developer-uk",
          },
        ]}
      />

      <PageHero
        label="Freelance Web Developer"
        heading="One developer. No layers. Better work."
        subtext="Freelance web development for UK businesses that want real engineering, not a revolving door of account managers."
      />

      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-180 px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-14">
            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Why hire a freelance developer instead of an agency?
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                Agencies have their place, but for most small-to-medium
                businesses, they add cost without adding value. You pay for
                project managers, account executives, and overhead — and the
                person actually building your website is often a junior
                developer you never speak to. The brief gets diluted through
                layers of communication, and the result is a generic site that
                could belong to anyone.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                With a freelance developer, you work directly with the person
                writing the code. There&apos;s no telephone game. You explain
                what you need, and it gets built — properly, efficiently, and
                without the markup that comes with agency overhead.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Not a freelancer from a marketplace
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                Platforms like Upwork and Fiverr can find you a developer
                quickly, but there&apos;s a reason most businesses who try that
                route end up looking for someone else six months later. The
                work is often outsourced again, communication is difficult, and
                the developer has no investment in your business beyond the
                current invoice.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                Burch Studio is a registered UK business. I&apos;m based in
                Peterborough, I work in your timezone, and I care about the
                long-term success of what we build together. Every project
                comes with ongoing support — you&apos;re not abandoned after
                launch.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                What I work with
              </h2>
              <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-muted">
                My stack is modern, production-grade TypeScript across the full
                stack. Front-end: Next.js, React, Tailwind CSS. Back-end:
                Node.js, PostgreSQL. Infrastructure: Vercel, AWS, Docker. This
                isn&apos;t a WordPress shop — everything I build is custom code,
                version-controlled, and deployable in minutes.
              </p>
              <p className="text-[0.95rem] leading-[1.8] text-text-muted">
                Recent work includes a live SaaS platform with over 100 API
                endpoints and AI-powered financial analysis, brochure websites
                for local businesses in Peterborough, and ongoing development
                for clients across the UK. The range of work is wide, but the
                standard doesn&apos;t change.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="mb-4 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading">
                Who this is for
              </h2>
              <ul className="mb-5 ml-5 list-disc space-y-3 text-[0.95rem] leading-[1.8] text-text-muted marker:text-brand-accent">
                <li>Small businesses that need a professional website without agency prices</li>
                <li>Startups that need an MVP or product built with real engineering</li>
                <li>Companies that have outgrown their WordPress site and need something custom</li>
                <li>Businesses that want to work directly with the developer, not through layers</li>
                <li>Anyone in the UK who values quality code and clear communication</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <p className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-7 text-[1rem] leading-[1.85] text-text-muted">
                Burch Studio is a freelance web development business based in
                Peterborough, UK. Founded by James, a full-stack developer
                specialising in Next.js, TypeScript, and modern web
                applications. Working with businesses across the United Kingdom,
                from five-page websites to production SaaS platforms.
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
