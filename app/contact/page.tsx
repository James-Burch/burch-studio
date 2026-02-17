import type { Metadata } from "next";
import {
  CONTACT_META,
  CONTACT_HERO,
  CONTACT_FAQS,
  SITE_CONFIG,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: CONTACT_META.title,
  description: CONTACT_META.description,
  alternates: { canonical: CONTACT_META.canonical },
  openGraph: {
    title: CONTACT_META.title,
    description: CONTACT_META.description,
    url: CONTACT_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Contact", href: "/contact" }]} />
      <FAQPageJsonLd faqs={CONTACT_FAQS} />
      <PageHero
        label={CONTACT_HERO.label}
        heading={CONTACT_HERO.heading}
        subtext={CONTACT_HERO.subtext}
      />

      {/* Form + contact info */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info sidebar */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-8">
                {/* Direct contact */}
                <div className="rounded-2xl border border-brand-border bg-brand-surface p-7">
                  <h2 className="mb-5 font-display text-lg font-bold text-text-heading">
                    Direct contact
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="mb-1 text-[0.82rem] font-medium uppercase tracking-widest text-text-muted">
                        Email
                      </p>
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="text-[0.95rem] text-brand-accent transition-colors duration-200 hover:text-brand-accent-hover"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </div>
                    <div>
                      <p className="mb-1 text-[0.82rem] font-medium uppercase tracking-widest text-text-muted">
                        Phone
                      </p>
                      <a
                        href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                        className="text-[0.95rem] text-brand-accent transition-colors duration-200 hover:text-brand-accent-hover"
                      >
                        {SITE_CONFIG.phone}
                      </a>
                    </div>
                    <div>
                      <p className="mb-1 text-[0.82rem] font-medium uppercase tracking-widest text-text-muted">
                        Location
                      </p>
                      <p className="text-[0.95rem] text-text-primary">
                        {SITE_CONFIG.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="rounded-2xl border border-brand-border bg-brand-surface p-7">
                  <h2 className="mb-3 font-display text-lg font-bold text-text-heading">
                    Response time
                  </h2>
                  <p className="text-[0.92rem] leading-[1.65] text-text-muted">
                    We aim to get back to every enquiry within 24 hours. If
                    it&apos;s urgent, give us a call.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="border-t border-brand-border bg-brand-surface py-25 md:py-32"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <ScrollReveal className="mb-12">
            <h2
              id="faq-heading"
              className="font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold tracking-[-0.035em] text-text-heading"
            >
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CONTACT_FAQS.map((faq, i) => (
              <ScrollReveal key={faq.question} delay={i * 0.08}>
                <div className="rounded-2xl border border-brand-border bg-brand-surface-elevated p-7">
                  <h3 className="mb-3 font-display text-[1.05rem] font-bold tracking-[-0.02em] text-text-heading">
                    {faq.question}
                  </h3>
                  <p className="text-[0.9rem] leading-[1.65] text-text-muted">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
