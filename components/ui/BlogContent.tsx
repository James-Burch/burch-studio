"use client";

import Markdown from "react-markdown";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose-blog">
      <Markdown
        components={{
          h2: ({ children }) => (
            <h2 className="mb-4 mt-12 font-display text-[clamp(1.3rem,2.5vw,1.7rem)] font-bold tracking-[-0.02em] text-text-heading first:mt-0">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-10 font-display text-[1.15rem] font-bold tracking-[-0.01em] text-text-heading">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-[0.95rem] leading-[1.8] text-text-primary">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 ml-5 list-disc space-y-2 text-[0.95rem] leading-[1.8] text-text-primary marker:text-brand-accent">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 ml-5 list-decimal space-y-2 text-[0.95rem] leading-[1.8] text-text-primary marker:text-text-muted">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          blockquote: ({ children }) => (
            <blockquote className="my-8 border-l-2 border-brand-accent pl-6 text-[1rem] italic leading-[1.75] text-text-muted">
              {children}
            </blockquote>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-text-heading">
              {children}
            </strong>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-brand-accent underline underline-offset-2 transition-colors hover:text-brand-accent-hover"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          code: ({ children }) => (
            <code className="rounded bg-brand-surface-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-brand-accent">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="my-6 overflow-x-auto rounded-xl border border-brand-border bg-brand-surface p-5 text-[0.85rem] leading-relaxed">
              {children}
            </pre>
          ),
          hr: () => (
            <hr className="my-10 border-brand-border" />
          ),
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt ?? ""}
              className="my-8 w-full rounded-xl border border-brand-border"
              loading="lazy"
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
