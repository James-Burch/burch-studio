"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { BlogPostRow } from "@/lib/supabase/blog-types";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const res = await fetch("/api/admin/blog");
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
    setLoading(false);
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  async function togglePublished(id: string, current: boolean) {
    const res = await fetch(`/api/admin/blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !current }),
    });
    if (res.ok) {
      setPosts((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, published: !current } : p
        )
      );
    }
  }

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  function formatDate(dateStr: string | null) {
    if (!dateStr) return "—";
    return new Date(dateStr).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-display text-2xl font-bold text-text-heading">
            Blog Posts
          </h1>
          <Link
            href="/admin"
            className="text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            Projects &rarr;
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/blog/new"
            className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-accent-hover"
          >
            New Post
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Post list */}
      {loading ? (
        <p className="text-text-muted">Loading...</p>
      ) : posts.length === 0 ? (
        <div className="rounded-xl border border-brand-border bg-brand-surface p-12 text-center">
          <p className="mb-4 text-text-muted">No blog posts yet.</p>
          <Link
            href="/admin/blog/new"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent-hover"
          >
            Write your first post
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-colors hover:border-brand-border-hover"
            >
              {/* Info */}
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-display text-sm font-semibold text-text-heading">
                  {post.title}
                </h2>
                <div className="mt-0.5 flex items-center gap-2 text-xs text-text-muted">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{formatDate(post.published_at ?? post.created_at)}</span>
                </div>
              </div>

              {/* Status badge */}
              <button
                onClick={() => togglePublished(post.id, post.published)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  post.published && post.published_at && new Date(post.published_at) > new Date()
                    ? "bg-brand-accent/15 text-brand-accent"
                    : post.published
                      ? "bg-brand-success/15 text-brand-success"
                      : "bg-brand-surface-elevated text-text-muted hover:text-text-primary"
                }`}
              >
                {post.published && post.published_at && new Date(post.published_at) > new Date()
                  ? `Scheduled`
                  : post.published
                    ? "Published"
                    : "Draft"}
              </button>

              {/* Actions */}
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/admin/blog/${post.id}/edit`}
                  className="rounded-lg border border-brand-border px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(post.id, post.title)}
                  className="rounded-lg border border-red/20 px-3 py-1.5 text-xs text-red transition-colors hover:bg-red/10"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
