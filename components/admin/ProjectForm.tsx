"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { ProjectRow } from "@/lib/supabase/types";

interface ProjectFormProps {
  project?: ProjectRow;
}

interface FormState {
  slug: string;
  title: string;
  category: string;
  description: string;
  image_url: string;
  image_alt: string;
  technologies: string;
  live_url: string;
  problem: string;
  solution: string;
  results: string;
  featured_on_homepage: boolean;
  category_color: string;
  link_text: string;
  href: string;
  stats: string;
  sort_order: number;
  homepage_sort_order: number;
}

function toFormState(project?: ProjectRow): FormState {
  return {
    slug: project?.slug ?? "",
    title: project?.title ?? "",
    category: project?.category ?? "",
    description: project?.description ?? "",
    image_url: project?.image_url ?? "",
    image_alt: project?.image_alt ?? "",
    technologies: project?.technologies?.join(", ") ?? "",
    live_url: project?.live_url ?? "",
    problem: project?.problem ?? "",
    solution: project?.solution ?? "",
    results: project?.results?.join("\n") ?? "",
    featured_on_homepage: project?.featured_on_homepage ?? false,
    category_color: project?.category_color ?? "#60a5fa",
    link_text: project?.link_text ?? "Read the full story",
    href: project?.href ?? "/portfolio",
    stats: project?.stats?.join(", ") ?? "",
    sort_order: project?.sort_order ?? 0,
    homepage_sort_order: project?.homepage_sort_order ?? 0,
  };
}

export function ProjectForm({ project }: ProjectFormProps) {
  const [form, setForm] = useState<FormState>(toFormState(project));
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const isEditing = !!project;

  function update(field: keyof FormState, value: string | boolean | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("slug", form.slug || generateSlug(form.title));

    const res = await fetch("/api/admin/upload", { method: "POST", body: formData });

    if (res.ok) {
      const { url } = await res.json();
      update("image_url", url);
    } else {
      setError("Image upload failed");
    }
    setUploading(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSaving(true);

    const payload = {
      slug: form.slug || generateSlug(form.title),
      title: form.title,
      category: form.category,
      description: form.description,
      image_url: form.image_url || null,
      image_alt: form.image_alt || null,
      technologies: form.technologies
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      live_url: form.live_url || null,
      problem: form.problem || null,
      solution: form.solution || null,
      results: form.results
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      featured_on_homepage: form.featured_on_homepage,
      category_color: form.category_color || null,
      link_text: form.link_text || "Read the full story",
      href: form.href || "/portfolio",
      stats: form.stats
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      sort_order: form.sort_order,
      homepage_sort_order: form.homepage_sort_order,
    };

    const url = isEditing
      ? `/api/admin/projects/${project.id}`
      : "/api/admin/projects";

    const res = await fetch(url, {
      method: isEditing ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      router.push("/admin");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Failed to save project");
      setSaving(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-2.5 text-text-primary outline-none transition-colors focus:border-brand-accent";
  const labelClass = "mb-1.5 block text-sm font-medium text-text-muted";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <p className="rounded-lg border border-red/20 bg-red/10 px-4 py-3 text-sm text-red">
          {error}
        </p>
      )}

      {/* Title & Slug */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="title" className={labelClass}>Title</label>
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
          />
        </div>
        <div>
          <label htmlFor="slug" className={labelClass}>Slug</label>
          <input
            id="slug"
            type="text"
            required
            value={form.slug}
            onChange={(e) => update("slug", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Category & Color */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className={labelClass}>Category</label>
          <input
            id="category"
            type="text"
            required
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            placeholder="e.g. Client Website"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="category_color" className={labelClass}>Category Colour</label>
          <div className="flex gap-2">
            <input
              id="category_color"
              type="text"
              value={form.category_color}
              onChange={(e) => update("category_color", e.target.value)}
              placeholder="#60a5fa"
              className={inputClass}
            />
            <input
              type="color"
              value={form.category_color}
              onChange={(e) => update("category_color", e.target.value)}
              className="h-11 w-11 shrink-0 cursor-pointer rounded-lg border border-brand-border bg-brand-surface p-1"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className={labelClass}>Description</label>
        <textarea
          id="description"
          required
          rows={3}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Image */}
      <div>
        <label className={labelClass}>Project Image</label>
        <div className="flex items-start gap-4">
          {form.image_url && (
            <div className="h-20 w-32 shrink-0 overflow-hidden rounded-lg border border-brand-border">
              <Image
                src={form.image_url}
                alt="Preview"
                width={128}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              disabled={uploading}
              className="block w-full text-sm text-text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-brand-surface-elevated file:px-4 file:py-2 file:text-sm file:font-medium file:text-text-primary hover:file:bg-brand-border"
            />
            {uploading && <p className="mt-1 text-xs text-text-muted">Uploading...</p>}
            <input
              type="text"
              value={form.image_url}
              onChange={(e) => update("image_url", e.target.value)}
              placeholder="Or paste image URL"
              className={`${inputClass} mt-2`}
            />
          </div>
        </div>
      </div>

      {/* Image Alt */}
      <div>
        <label htmlFor="image_alt" className={labelClass}>Image Alt Text</label>
        <input
          id="image_alt"
          type="text"
          value={form.image_alt}
          onChange={(e) => update("image_alt", e.target.value)}
          placeholder="Describe the image"
          className={inputClass}
        />
      </div>

      {/* Technologies */}
      <div>
        <label htmlFor="technologies" className={labelClass}>
          Technologies <span className="font-normal text-text-muted">(comma-separated)</span>
        </label>
        <input
          id="technologies"
          type="text"
          value={form.technologies}
          onChange={(e) => update("technologies", e.target.value)}
          placeholder="Next.js, TypeScript, Tailwind CSS"
          className={inputClass}
        />
      </div>

      {/* Live URL */}
      <div>
        <label htmlFor="live_url" className={labelClass}>Live URL</label>
        <input
          id="live_url"
          type="url"
          value={form.live_url}
          onChange={(e) => update("live_url", e.target.value)}
          placeholder="https://example.com"
          className={inputClass}
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="problem" className={labelClass}>Problem</label>
          <textarea
            id="problem"
            rows={4}
            value={form.problem}
            onChange={(e) => update("problem", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="solution" className={labelClass}>Solution</label>
          <textarea
            id="solution"
            rows={4}
            value={form.solution}
            onChange={(e) => update("solution", e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {/* Results */}
      <div>
        <label htmlFor="results" className={labelClass}>
          Results <span className="font-normal text-text-muted">(one per line)</span>
        </label>
        <textarea
          id="results"
          rows={4}
          value={form.results}
          onChange={(e) => update("results", e.target.value)}
          placeholder="Enquiries increased by 200%&#10;Page load time under 2 seconds"
          className={inputClass}
        />
      </div>

      {/* Stats (homepage) */}
      <div>
        <label htmlFor="stats" className={labelClass}>
          Stats <span className="font-normal text-text-muted">(comma-separated, shown instead of image on homepage)</span>
        </label>
        <input
          id="stats"
          type="text"
          value={form.stats}
          onChange={(e) => update("stats", e.target.value)}
          placeholder="100+ endpoints, 30+ workers"
          className={inputClass}
        />
      </div>

      {/* Homepage settings */}
      <div className="rounded-xl border border-brand-border bg-brand-surface-elevated p-4">
        <h3 className="mb-3 text-sm font-semibold text-text-heading">Homepage Settings</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={form.featured_on_homepage}
              onChange={(e) => update("featured_on_homepage", e.target.checked)}
              className="h-4 w-4 rounded border-brand-border accent-brand-accent"
            />
            <span className="text-sm text-text-primary">Feature on homepage</span>
          </label>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label htmlFor="link_text" className={labelClass}>Link Text</label>
              <input
                id="link_text"
                type="text"
                value={form.link_text}
                onChange={(e) => update("link_text", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="href" className={labelClass}>Link Href</label>
              <input
                id="href"
                type="text"
                value={form.href}
                onChange={(e) => update("href", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="homepage_sort_order" className={labelClass}>Homepage Order</label>
              <input
                id="homepage_sort_order"
                type="number"
                value={form.homepage_sort_order}
                onChange={(e) => update("homepage_sort_order", parseInt(e.target.value) || 0)}
                className={inputClass}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sort order */}
      <div className="w-32">
        <label htmlFor="sort_order" className={labelClass}>Portfolio Order</label>
        <input
          id="sort_order"
          type="number"
          value={form.sort_order}
          onChange={(e) => update("sort_order", parseInt(e.target.value) || 0)}
          className={inputClass}
        />
      </div>

      {/* Submit */}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-brand-accent px-6 py-2.5 font-semibold text-brand-bg transition-colors hover:bg-brand-accent-hover disabled:opacity-50"
        >
          {saving ? "Saving..." : isEditing ? "Update Project" : "Create Project"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-lg border border-brand-border px-6 py-2.5 text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
