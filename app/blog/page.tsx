import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/supabase/blog-queries";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ==========================================
// METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Blog | Insights for Local Businesses",
  description:
    "Practical advice on web design, SEO and digital presence for trade businesses and local companies.",
  alternates: { canonical: `${SITE_CONFIG.url}/blog` },
  openGraph: {
    title: "Blog | Insights for Local Businesses",
    description:
      "Practical advice on web design, SEO and digital presence for trade businesses and local companies.",
    url: `${SITE_CONFIG.url}/blog`,
  },
};

// ==========================================
// PAGE
// ==========================================

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Blog", href: "/blog" }]} />

      <PageHero
        label="Blog"
        heading="Insights & advice."
        subtext="Practical tips on web design, SEO and building a stronger digital presence for your business."
      />

      <section className="pb-25 md:pb-32">
        <div className="mx-auto max-w-300 px-5 sm:px-8 lg:px-10">
          {posts.length === 0 ? (
            <ScrollReveal>
              <div className="mx-auto max-w-140 rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center">
                <p className="mb-2 font-display text-lg font-bold text-text-heading">
                  Posts coming soon.
                </p>
                <p className="text-[0.92rem] text-text-muted">
                  We&apos;re working on articles to help trade businesses and
                  local companies get more from the web. Check back soon.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-brand-border bg-brand-surface transition-colors hover:border-brand-border-hover"
                  >
                    {/* Image */}
                    {post.featuredImage ? (
                      <div className="aspect-[16/9] overflow-hidden border-b border-brand-border">
                        <Image
                          src={post.featuredImage}
                          alt={post.featuredImageAlt ?? post.title}
                          width={600}
                          height={338}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/9] items-center justify-center border-b border-brand-border bg-brand-bg">
                        <span className="font-display text-sm text-text-muted">
                          {post.category}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2 text-[0.75rem]">
                        <span className="font-bold uppercase tracking-widest text-brand-accent">
                          {post.category}
                        </span>
                        <span className="text-text-muted">·</span>
                        <span className="text-text-muted">
                          {post.readingTime} min read
                        </span>
                      </div>
                      <h2 className="mb-2 font-display text-[1.15rem] font-bold leading-snug tracking-[-0.02em] text-text-heading transition-colors group-hover:text-brand-accent">
                        {post.title}
                      </h2>
                      <p className="text-[0.88rem] leading-[1.6] text-text-muted line-clamp-3">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-[0.82rem] text-text-muted">
                        {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
