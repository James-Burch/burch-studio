import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { getBlogPost, getAllBlogSlugs } from "@/lib/supabase/blog-queries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { BlogContent } from "@/components/ui/BlogContent";
import { Button } from "@/components/ui/Button";

// ==========================================
// GENERATE STATIC PARAMS
// ==========================================

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ==========================================
// METADATA
// ==========================================

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      ...(post.featured_image_url && {
        images: [{ url: post.featured_image_url.startsWith("http") ? post.featured_image_url : `${SITE_CONFIG.url}/${post.featured_image_url.replace(/^\//, "")}` }],
      }),
    },
  };
}

// ==========================================
// PAGE
// ==========================================

function estimateReadingTime(content: string | null | undefined): number {
  const words = (content ?? "").trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) notFound();

  const readingTime = estimateReadingTime(post.content);
  const publishedDate = new Date(
    post.published_at ?? post.created_at
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.published_at ?? post.created_at,
            dateModified: post.updated_at,
            author: {
              "@type": "Person",
              name: "James",
              url: SITE_CONFIG.url,
            },
            publisher: {
              "@type": "Organization",
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.url,
            },
            ...(post.featured_image_url && {
              image: post.featured_image_url.startsWith("http") ? post.featured_image_url : `${SITE_CONFIG.url}/${post.featured_image_url.replace(/^\//, "")}`,
            }),
          }),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-12 md:pt-48 md:pb-16">
        <div className="pointer-events-none absolute -top-[30%] -right-[20%] h-150 w-150 rounded-full" style={{ background: "radial-gradient(circle, rgba(200, 255, 60, 0.04) 0%, transparent 70%)" }} />

        <div className="relative z-10 mx-auto max-w-180 px-5 sm:px-8 lg:px-10">
          <ScrollReveal>
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-[0.82rem] text-text-muted transition-colors hover:text-brand-accent"
            >
              &larr; Back to blog
            </Link>

            <div className="mb-4 flex items-center gap-2 text-[0.78rem]">
              <span className="font-display font-bold uppercase tracking-[0.14em] text-brand-accent">
                {post.category}
              </span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">{readingTime} min read</span>
              <span className="text-text-muted">·</span>
              <span className="text-text-muted">{publishedDate}</span>
            </div>

            <h1 className="mb-5 max-w-160 font-display text-[clamp(2rem,4.5vw,3.2rem)] font-bold leading-[1.12] tracking-[-0.04em] text-text-heading">
              {post.title}
            </h1>

            <p className="max-w-140 text-[clamp(1rem,1.8vw,1.12rem)] leading-[1.7] text-text-muted">
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Image */}
      {post.featured_image_url && (
        <div className="mx-auto max-w-200 px-5 pb-12 sm:px-8 lg:px-10">
          <ScrollReveal>
            <div className="overflow-hidden rounded-2xl border border-brand-border">
              <Image
                src={post.featured_image_url.startsWith("http") || post.featured_image_url.startsWith("/") ? post.featured_image_url : `/${post.featured_image_url}`}
                alt={post.featured_image_alt ?? post.title}
                width={1200}
                height={630}
                className="w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      )}

      {/* Content */}
      <article className="pb-20 md:pb-28">
        <div className="mx-auto max-w-160 px-5 sm:px-8 lg:px-10">
          <ScrollReveal>
            <BlogContent content={post.content} />
          </ScrollReveal>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="border-t border-brand-border pb-25 md:pb-32">
        <div className="mx-auto max-w-160 px-5 pt-16 text-center sm:px-8 lg:px-10">
          <ScrollReveal>
            <p className="mb-2 font-display text-[0.78rem] font-bold uppercase tracking-[0.14em] text-brand-accent">
              Need help?
            </p>
            <h2 className="mb-4 font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold tracking-[-0.03em] text-text-heading">
              Ready to improve your online presence?
            </h2>
            <p className="mx-auto mb-8 max-w-120 text-[0.95rem] leading-[1.7] text-text-muted">
              If anything in this post resonated, let&apos;s talk about how we
              can help your business get more from the web.
            </p>
            <Button variant="primary" href="/contact">
              Get in Touch <span className="inline-block" aria-hidden="true">&rarr;</span>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
