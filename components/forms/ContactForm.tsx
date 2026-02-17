"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData } from "@/lib/types";
import { CONTACT_FORM, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

// ==========================================
// COMPONENT
// ==========================================

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      business: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check — bots fill hidden fields
    if (data.honeypot) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          business: data.business,
          message: data.message,
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
          Message sent!
        </p>
        <p className="mt-2 text-[0.95rem] text-text-muted">
          {CONTACT_FORM.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-2499.75" aria-hidden="true">
        <label htmlFor="honeypot">
          Do not fill this field
          <input
            id="honeypot"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("honeypot")}
          />
        </label>
      </div>

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Name <span className="text-red">*</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={cn(
            "w-full rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.name ? "border-red" : "border-brand-border",
          )}
          placeholder="Your name"
          aria-describedby={errors.name ? "name-error" : undefined}
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
            id="name-error"
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
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Email <span className="text-red">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          className={cn(
            "w-full rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.email ? "border-red" : "border-brand-border",
          )}
          placeholder="you@yourbusiness.co.uk"
          aria-describedby={errors.email ? "email-error" : undefined}
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
            id="email-error"
            className="mt-1.5 text-[0.82rem] text-red"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded-xl border border-brand-border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent"
          placeholder="07XXX XXXXXX"
          {...register("phone")}
        />
      </div>

      {/* Business Name */}
      <div>
        <label
          htmlFor="business"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Business Name
        </label>
        <input
          id="business"
          type="text"
          autoComplete="organization"
          className="w-full rounded-xl border border-brand-border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent"
          placeholder="Your business name"
          {...register("business")}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-text-heading"
        >
          Message <span className="text-red">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(
            "w-full resize-y rounded-xl border bg-brand-surface-elevated px-4 py-3 text-[0.95rem] leading-[1.65] text-text-primary outline-none transition-colors duration-200 placeholder:text-text-muted/50 focus:border-brand-accent",
            errors.message ? "border-red" : "border-brand-border",
          )}
          placeholder="Tell me about your project or what you need help with..."
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={errors.message ? "true" : undefined}
          {...register("message", {
            required: "Please enter a message",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <p
            id="message-error"
            className="mt-1.5 text-[0.82rem] text-red"
            role="alert"
          >
            {errors.message.message}
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
        {status === "loading" ? "Sending..." : "Send Message"}{" "}
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
