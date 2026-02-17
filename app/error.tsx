"use client";

import { Button } from "@/components/ui/Button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-widest text-red">
        Error
      </p>
      <h1 className="mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] text-text-heading">
        Something went wrong.
      </h1>
      <p className="mb-10 max-w-100 text-[1.05rem] leading-[1.7] text-text-muted">
        An unexpected error occurred. Please try again, or get in touch if the
        problem persists.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <button
          onClick={reset}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-brand-accent px-6 py-3 font-body text-[0.92rem] font-semibold text-brand-bg transition-all duration-300 hover:bg-brand-accent-hover"
        >
          Try Again
        </button>
        <Button variant="secondary" href="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
