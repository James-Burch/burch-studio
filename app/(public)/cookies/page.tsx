import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Learn how ${SITE_CONFIG.name} uses cookies on our website.`,
  alternates: { canonical: `${SITE_CONFIG.url}/cookies` },
  openGraph: {
    title: "Cookie Policy",
    description: `Learn how ${SITE_CONFIG.name} uses cookies on our website.`,
    url: `${SITE_CONFIG.url}/cookies`,
  },
  robots: { index: false, follow: true },
};

// ==========================================
// POLICY SECTIONS
// ==========================================

const SECTIONS = [
  {
    title: "What are cookies?",
    content:
      "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owner.",
  },
  {
    title: "How we use cookies",
    content:
      "We use a limited number of cookies to help us understand how visitors interact with our website and to improve your browsing experience. We do not use cookies for advertising or to track you across other websites.",
  },
  {
    title: "Cookies we use",
    content: null,
    table: [
      {
        name: "cookie-consent",
        purpose: "Remembers your cookie consent preference",
        duration: "Persistent",
        type: "Functional",
      },
      {
        name: "_vercel_insights",
        purpose: "Anonymous analytics to understand page views and site performance",
        duration: "Session",
        type: "Analytics",
      },
    ],
  },
  {
    title: "Managing cookies",
    content:
      "You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. Please note that disabling cookies may affect the functionality of this and other websites you visit. You can also use the cookie consent banner to accept or decline non-essential cookies.",
  },
  {
    title: "Third-party cookies",
    content:
      "We use Vercel Analytics to collect anonymous usage data. This helps us understand how our website is used so we can improve it. Vercel Analytics is privacy-focused and does not use cookies for cross-site tracking. For more information, visit Vercel's privacy policy.",
  },
  {
    title: "Changes to this policy",
    content:
      "We may update this Cookie Policy from time to time to reflect changes in technology or legislation. Any updates will be posted on this page with a revised effective date.",
  },
  {
    title: "Contact us",
    content: `If you have any questions about our use of cookies, please contact us at ${SITE_CONFIG.email}.`,
  },
];

// ==========================================
// PAGE
// ==========================================

export default function CookiesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Cookie Policy", href: "/cookies" }]} />

      <PageHero
        label="Legal"
        heading="Cookie Policy"
        subtext="How we use cookies on our website."
      />

      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-180 px-5 sm:px-8 lg:px-10">
          <ScrollReveal>
            <p className="mb-12 text-[0.85rem] text-text-muted">
              Effective date: 1 April 2026
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-12">
            {SECTIONS.map((section, i) => (
              <ScrollReveal key={section.title} delay={i * 0.05}>
                <h2 className="mb-4 font-display text-[1.3rem] font-bold tracking-[-0.02em] text-text-heading">
                  {section.title}
                </h2>

                {section.content && (
                  <p className="text-[0.95rem] leading-[1.75] text-text-muted">
                    {section.content}
                  </p>
                )}

                {section.table && (
                  <div className="overflow-x-auto rounded-xl border border-brand-border">
                    <table className="w-full text-left text-[0.88rem]">
                      <thead>
                        <tr className="border-b border-brand-border bg-brand-surface">
                          <th className="px-5 py-3.5 font-display text-[0.8rem] font-bold uppercase tracking-widest text-text-heading">
                            Cookie
                          </th>
                          <th className="px-5 py-3.5 font-display text-[0.8rem] font-bold uppercase tracking-widest text-text-heading">
                            Purpose
                          </th>
                          <th className="px-5 py-3.5 font-display text-[0.8rem] font-bold uppercase tracking-widest text-text-heading">
                            Duration
                          </th>
                          <th className="px-5 py-3.5 font-display text-[0.8rem] font-bold uppercase tracking-widest text-text-heading">
                            Type
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.map((row) => (
                          <tr
                            key={row.name}
                            className="border-b border-brand-border last:border-0"
                          >
                            <td className="px-5 py-3.5 font-mono text-[0.82rem] text-brand-accent">
                              {row.name}
                            </td>
                            <td className="px-5 py-3.5 text-text-muted">
                              {row.purpose}
                            </td>
                            <td className="px-5 py-3.5 text-text-muted">
                              {row.duration}
                            </td>
                            <td className="px-5 py-3.5 text-text-muted">
                              {row.type}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
