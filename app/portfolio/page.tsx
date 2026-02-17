import type { Metadata } from "next";
import Image from "next/image";
import {
  PORTFOLIO_META,
  PORTFOLIO_HERO,
  PORTFOLIO_PROJECTS,
} from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: PORTFOLIO_META.title,
  description: PORTFOLIO_META.description,
  alternates: { canonical: PORTFOLIO_META.canonical },
  openGraph: {
    title: PORTFOLIO_META.title,
    description: PORTFOLIO_META.description,
    url: PORTFOLIO_META.canonical,
  },
};

// ==========================================
// PAGE
// ==========================================

export default function Portfolio() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Portfolio", href: "/portfolio" }]} />
      <PageHero
        label={PORTFOLIO_HERO.label}
        heading={PORTFOLIO_HERO.heading}
        subtext={PORTFOLIO_HERO.subtext}
      />

      {/* Project cards */}
      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          <div className="space-y-20">
            {PORTFOLIO_PROJECTS.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <article className="overflow-hidden rounded-3xl border border-brand-border bg-brand-surface">
                  {/* Content */}
                  <div className="px-8 pt-8 lg:px-10 lg:pt-12">
                    <p className="mb-2 font-display text-[0.78rem] font-bold uppercase tracking-widest text-brand-accent">
                      {project.category}
                    </p>
                    <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.035em] text-text-heading">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-[0.95rem] leading-[1.7] text-text-muted">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-brand-border bg-brand-surface-elevated px-2.5 py-1 text-[0.75rem] font-medium text-text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Problem → Solution */}
                    <div className="mb-6 space-y-4">
                      <div>
                        <h3 className="mb-1.5 text-[0.82rem] font-bold uppercase tracking-widest text-red">
                          The Problem
                        </h3>
                        <p className="text-[0.88rem] leading-[1.65] text-text-muted">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h3 className="mb-1.5 text-[0.82rem] font-bold uppercase tracking-widest text-brand-accent">
                          The Solution
                        </h3>
                        <p className="text-[0.88rem] leading-[1.65] text-text-muted">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-8 rounded-xl border border-brand-border bg-brand-surface-elevated p-5">
                      <h3 className="mb-3 text-[0.82rem] font-bold uppercase tracking-widest text-text-heading">
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {project.results.map((result) => (
                          <li
                            key={result}
                            className="flex items-start gap-2.5 text-[0.88rem] leading-normal text-text-muted"
                          >
                            <span className="mt-0.5 text-brand-accent">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Link */}
                    {project.liveUrl && (
                      <Button
                        variant="secondary"
                        href={project.liveUrl}
                        className="w-fit"
                      >
                        View Live Site <span className="inline-block">↗</span>
                      </Button>
                    )}
                  </div>

                  {/* Image */}
                  <div className="bg-brand-bg p-6 sm:p-8 lg:p-10">
                    <div className="overflow-hidden rounded-xl border border-brand-border">
                      <Image
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        width={1448}
                        height={1084}
                        className="block w-full"
                        sizes="(max-width: 1024px) 100vw, 80vw"
                      />
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal>
            <div className="mt-20 text-center">
              <p className="mb-6 text-[1.05rem] leading-[1.7] text-text-muted">
                Got a project in mind? Let&apos;s talk about what we can build
                for you.
              </p>
              <Button variant="primary" href="/contact">
                Get in Touch <span className="inline-block">→</span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
