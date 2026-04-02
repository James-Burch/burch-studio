"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { BlogPostRow } from "@/lib/supabase/blog-types";

interface BlogPostFormProps {
  post?: BlogPostRow;
}

interface FormState {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image_url: string;
  featured_image_alt: string;
  published: boolean;
  published_at: string;
  meta_title: string;
  meta_description: string;
  sort_order: number;
}

function toFormState(post?: BlogPostRow): FormState {
  return {
    slug: post?.slug ?? "",
    title: post?.title ?? "",
    excerpt: post?.excerpt ?? "",
    content: post?.content ?? "",
    category: post?.category ?? "Web Design",
    featured_image_url: post?.featured_image_url ?? "",
    featured_image_alt: post?.featured_image_alt ?? "",
    published: post?.published ?? false,
    published_at: post?.published_at
      ? new Date(post.published_at).toISOString().slice(0, 16)
      : "",
    meta_title: post?.meta_title ?? "",
    meta_description: post?.meta_description ?? "",
    sort_order: post?.sort_order ?? 0,
  };
}

const CATEGORIES = [
  "Web Design",
  "SEO",
  "Branding",
  "Local Business",
  "Development",
];

const inputClass =
  "w-full rounded-lg border border-brand-border bg-brand-bg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted/50 focus:border-brand-accent focus:outline-none";
const labelClass = "mb-1.5 block text-sm font-medium text-text-heading";

export function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(toFormState(post));
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const isEditing = !!post;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("bucket", "blog-images");

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });

    if (res.ok) {
      const { url } = await res.json();
      update("featured_image_url", url);
    } else {
      setError("Failed to upload image");
    }
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      slug: form.slug,
      title: form.title,
      excerpt: form.excerpt,
      content: form.content,
      category: form.category,
      featured_image_url: form.featured_image_url || null,
      featured_image_alt: form.featured_image_alt || null,
      published: form.published,
      published_at: form.published_at
        ? new Date(form.published_at).toISOString()
        : form.published
          ? new Date().toISOString()
          : null,
      meta_title: form.meta_title || null,
      meta_description: form.meta_description || null,
      sort_order: form.sort_order,
    };

    const url = isEditing ? `/api/admin/blog/${post.id}` : "/api/admin/blog";
    const method = isEditing ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin/blog");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Something went wrong");
    }

    setSaving(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg border border-red/20 bg-red/5 px-4 py-3 text-sm text-red">
          {error}
        </div>
      )}

      {/* Title & Slug */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className={labelClass}>
            Title *
          </label>
          <input
            id="title"
            type="text"
            required
            value={form.title}
            onChange={(e) => {
              update("title", e.target.value);
              if (!isEditing) update("slug", generateSlug(e.target.value));
            }}
            className={inputClass}
            placeholder="Why Your Trade Business Needs a Website"
          />
        </div>
        <div>
          <label htmlFor="slug" className={labelClass}>
            Slug *
          </label>
          <input
            id="slug"
            type="text"
            required
            value={form.slug}
            onChange={(e) => update("slug", e.target.value)}
            className={inputClass}
            placeholder="why-your-trade-business-needs-a-website"
          />
        </div>
      </div>

      {/* Category */}
      <div>
        <label htmlFor="category" className={labelClass}>
          Category *
        </label>
        <select
          id="category"
          value={form.category}
          onChange={(e) => update("category", e.target.value)}
          className={inputClass}
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Excerpt */}
      <div>
        <label htmlFor="excerpt" className={labelClass}>
          Excerpt *
        </label>
        <textarea
          id="excerpt"
          required
          rows={2}
          value={form.excerpt}
          onChange={(e) => update("excerpt", e.target.value)}
          className={inputClass}
          placeholder="A short summary shown on the blog listing page..."
        />
      </div>

      {/* Content */}
      <div>
        <label htmlFor="content" className={labelClass}>
          Content (Markdown) *
        </label>
        <p className="mb-2 text-xs text-text-muted">
          Supports Markdown: **bold**, *italic*, ## headings, - lists, [links](url), ![images](url)
        </p>
        <textarea
          id="content"
          required
          rows={20}
          value={form.content}
          onChange={(e) => update("content", e.target.value)}
          className={`${inputClass} font-mono text-[0.82rem] leading-relaxed`}
          placeholder="Write your blog post content in Markdown..."
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className={labelClass}>Featured Image</label>
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={form.featured_image_url}
              onChange={(e) => update("featured_image_url", e.target.value)}
              className={inputClass}
              placeholder="Image URL or upload below"
            />
            <div className="mt-2">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-brand-border px-3 py-2 text-xs text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary">
                {uploading ? "Uploading..." : "Upload image"}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  disabled={uploading}
                />
              </label>
            </div>
          </div>
          {form.featured_image_url && (
            <div className="h-24 w-36 shrink-0 overflow-hidden rounded-lg border border-brand-border">
              <Image
                src={form.featured_image_url}
                alt="Preview"
                width={144}
                height={96}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>

      {/* Image Alt */}
      <div>
        <label htmlFor="image_alt" className={labelClass}>
          Image Alt Text
        </label>
        <input
          id="image_alt"
          type="text"
          value={form.featured_image_alt}
          onChange={(e) => update("featured_image_alt", e.target.value)}
          className={inputClass}
          placeholder="Describe the image for accessibility"
        />
      </div>

      {/* SEO Fields */}
      <div className="rounded-xl border border-brand-border bg-brand-surface p-5">
        <h3 className="mb-4 text-sm font-semibold text-text-heading">SEO</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="meta_title" className={labelClass}>
              Meta Title
            </label>
            <input
              id="meta_title"
              type="text"
              value={form.meta_title}
              onChange={(e) => update("meta_title", e.target.value)}
              className={inputClass}
              placeholder="Defaults to post title if empty"
            />
          </div>
          <div>
            <label htmlFor="meta_description" className={labelClass}>
              Meta Description
            </label>
            <textarea
              id="meta_description"
              rows={2}
              value={form.meta_description}
              onChange={(e) => update("meta_description", e.target.value)}
              className={inputClass}
              placeholder="Defaults to excerpt if empty"
            />
          </div>
        </div>
      </div>

      {/* Publish + Schedule + Sort */}
      <div className="rounded-xl border border-brand-border bg-brand-surface p-5">
        <h3 className="mb-4 text-sm font-semibold text-text-heading">
          Publishing
        </h3>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              checked={form.published}
              onChange={(e) => update("published", e.target.checked)}
              className="h-4 w-4 rounded border-brand-border accent-brand-accent"
            />
            <span className="text-sm text-text-heading">Published</span>
          </label>
          <div>
            <label htmlFor="published_at" className={labelClass}>
              Schedule date
            </label>
            <input
              id="published_at"
              type="datetime-local"
              value={form.published_at}
              onChange={(e) => update("published_at", e.target.value)}
              className={`${inputClass} w-56`}
            />
            <p className="mt-1 text-xs text-text-muted">
              {form.published_at && new Date(form.published_at) > new Date()
                ? "Scheduled — will appear automatically at this time"
                : form.published_at
                  ? "Published"
                  : "Leave empty to publish immediately"}
            </p>
          </div>
          <div>
            <label htmlFor="sort_order" className="mb-1.5 block text-sm font-medium text-text-heading">
              Sort order
            </label>
            <input
              id="sort_order"
              type="number"
              value={form.sort_order}
              onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)}
              className={`${inputClass} w-20`}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 border-t border-brand-border pt-6">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-brand-accent px-6 py-2.5 text-sm font-bold text-brand-bg transition-colors hover:bg-brand-accent-hover disabled:opacity-50"
        >
          {saving ? "Saving..." : isEditing ? "Update Post" : "Create Post"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/blog")}
          className="rounded-lg border border-brand-border px-6 py-2.5 text-sm text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
