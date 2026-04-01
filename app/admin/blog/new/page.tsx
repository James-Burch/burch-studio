"use client";

import Link from "next/link";
import { BlogPostForm } from "@/components/admin/BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/admin/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        &larr; Back to blog posts
      </Link>
      <h1 className="mb-8 font-display text-2xl font-bold text-text-heading">
        New Blog Post
      </h1>
      <BlogPostForm />
    </div>
  );
}
