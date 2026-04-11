"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import type { ProjectRow } from "@/lib/supabase/types";

export default function AdminDashboard() {
  const [projects, setProjects] = useState<ProjectRow[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchProjects();
  }, []);

  async function fetchProjects() {
    const res = await fetch("/api/admin/projects");
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
    setLoading(false);
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    const res = await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    if (res.ok) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  }

  async function toggleFeatured(id: string, current: boolean) {
    const res = await fetch(`/api/admin/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ featured_on_homepage: !current }),
    });
    if (res.ok) {
      setProjects((prev) =>
        prev.map((p) =>
          p.id === id ? { ...p, featured_on_homepage: !current } : p
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

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-display text-2xl font-bold text-text-heading">
            Projects
          </h1>
          <Link
            href="/admin/blog"
            className="text-sm text-text-muted transition-colors hover:text-text-primary"
          >
            Blog &rarr;
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            href="/admin/projects/new"
            className="rounded-lg bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-bg transition-colors hover:bg-brand-accent-hover"
          >
            New Project
          </Link>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-brand-border px-4 py-2 text-sm text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Project list */}
      {loading ? (
        <p className="text-text-muted">Loading...</p>
      ) : projects.length === 0 ? (
        <div className="rounded-xl border border-brand-border bg-brand-surface p-12 text-center">
          <p className="mb-4 text-text-muted">No projects yet.</p>
          <Link
            href="/admin/projects/new"
            className="text-sm font-semibold text-brand-accent hover:text-brand-accent-hover"
          >
            Create your first project
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4 transition-colors hover:border-brand-border-hover"
            >
              {/* Thumbnail */}
              <div className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-lg border border-brand-border bg-brand-bg sm:block">
                {project.image_url ? (
                  <Image
                    src={project.image_url}
                    alt={project.title}
                    width={96}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-text-muted">
                    No image
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h2 className="truncate font-display text-sm font-semibold text-text-heading">
                  {project.title}
                </h2>
                <p className="text-xs text-text-muted">{project.category}</p>
              </div>

              {/* Featured badge */}
              <button
                onClick={() => toggleFeatured(project.id, project.featured_on_homepage)}
                className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  project.featured_on_homepage
                    ? "bg-brand-accent/15 text-brand-accent"
                    : "bg-brand-surface-elevated text-text-muted hover:text-text-primary"
                }`}
              >
                {project.featured_on_homepage ? "Featured" : "Not featured"}
              </button>

              {/* Actions */}
              <div className="flex shrink-0 gap-2">
                <Link
                  href={`/admin/projects/${project.id}/edit`}
                  className="rounded-lg border border-brand-border px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-brand-border-hover hover:text-text-primary"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(project.id, project.title)}
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
