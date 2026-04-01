"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import type { BlogPostRow } from "@/lib/supabase/blog-types";

export default function EditBlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      const res = await fetch(`/api/admin/blog/${id}`);
      if (res.ok) {
        setPost(await res.json());
      }
      setLoading(false);
    }
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <p className="text-text-muted">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <p className="text-red">Post not found.</p>
        <Link href="/admin/blog" className="mt-4 inline-block text-sm text-brand-accent">
          Back to blog posts
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/admin/blog"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        &larr; Back to blog posts
      </Link>
      <h1 className="mb-8 font-display text-2xl font-bold text-text-heading">
        Edit Post
      </h1>
      <BlogPostForm post={post} />
    </div>
  );
}
