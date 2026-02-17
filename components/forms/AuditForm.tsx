"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { AuditFormData } from "@/lib/types";
import { CONTACT_FORM, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// ==========================================
// COMPONENT
// ==========================================

export function AuditForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditFormData>({
    defaultValues: {
      name: "",
      email: "",
      websiteUrl: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: AuditFormData) => {
    if (data.honeypot) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: `Free website audit request\n\nWebsite URL: ${data.websiteUrl}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Success state
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-success/20 bg-brand-success/5 p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-success/10 text-2xl">
          ✓
        </div>
        <p className="font-display text-lg font-bold text-text-heading">
          Audit request sent!
        </p>
        <p className="mt-2 text-[0.95rem] text-text-muted">
          {CONTACT_FORM.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="absolute -left-2499.75" aria-hidden="true">
        <label htmlFor="audit-honeypot">
          Do not fill this field
          <input
            id="audit-honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </label>
      </div>

      {/* Heading */}
      <div className="mb-2">
        <p className="mb-1 font-display text-[0.78rem] font-bold uppercase tracking-widest text-brand-accent">
          Free Audit
        </p>
        <p className="text-[0.92rem] leading-[1.6] text-text-muted">
          Enter your website URL and we&apos;ll send you a free audit covering
          mobile-friendliness, speed, SEO, and security.
        </p>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="audit-name"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Name <span className="text-red">*</span>
        </label>
        <input
          id="audit-name"
          type="text"
          autoComplete="name"
          className={cn(
            "w-full rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.name ? "border-red" : "border-brand-border",
          )}
          placeholder="Your name"
          aria-describedby={errors.name ? "audit-name-error" : undefined}
          aria-invalid={errors.name ? "true" : undefined}
          {...register("name", {
            required: "Please enter your name",
            minLength: {
              value: 2,
              message: "Name must be at least 2 characters",
            },
          })}
        />
        {errors.name && (
          <p
            id="audit-name-error"
            className="mt-1.5 text-[0.82rem] text-red"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="audit-email"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Email <span className="text-red">*</span>
        </label>
        <input
          id="audit-email"
          type="email"
          autoComplete="email"
          className={cn(
            "w-full rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.email ? "border-red" : "border-brand-border",
          )}
          placeholder="you@yourbusiness.co.uk"
          aria-describedby={errors.email ? "audit-email-error" : undefined}
          aria-invalid={errors.email ? "true" : undefined}
          {...register("email", {
            required: "Please enter your email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && (
          <p
            id="audit-email-error"
            className="mt-1.5 text-[0.82rem] text-red"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Website URL */}
      <div>
        <label
          htmlFor="audit-url"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Website URL <span className="text-red">*</span>
        </label>
        <input
          id="audit-url"
          type="url"
          className={cn(
            "w-full rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.websiteUrl ? "border-red" : "border-brand-border",
          )}
          placeholder="https://yourbusiness.co.uk"
          aria-describedby={errors.websiteUrl ? "audit-url-error" : undefined}
          aria-invalid={errors.websiteUrl ? "true" : undefined}
          {...register("websiteUrl", {
            required: "Please enter your website URL",
            pattern: {
              value: /^https?:\/\/.+\..+/i,
              message: "Please enter a valid URL (e.g. https://example.co.uk)",
            },
          })}
        />
        {errors.websiteUrl && (
          <p
            id="audit-url-error"
            className="mt-1.5 text-[0.82rem] text-red"
            role="alert"
          >
            {errors.websiteUrl.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Request Free Audit"}{" "}
        {status !== "loading" && <span className="inline-block">→</span>}
      </Button>

      {/* Error message */}
      {status === "error" && (
        <p className="text-[0.88rem] text-red" role="alert">
          {CONTACT_FORM.errorMessage}{" "}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="underline transition-colors duration-200 hover:text-text-heading"
          >
            {SITE_CONFIG.email}
          </a>
        </p>
      )}
    </form>
  );
}
