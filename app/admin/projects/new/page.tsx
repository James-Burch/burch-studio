"use client";

import Link from "next/link";
import { ProjectForm } from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Link
        href="/admin"
        className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted transition-colors hover:text-text-primary"
      >
        &larr; Back to projects
      </Link>
      <h1 className="mb-8 font-display text-2xl font-bold text-text-heading">
        New Project
      </h1>
      <ProjectForm />
    </div>
  );
}
