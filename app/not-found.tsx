import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p className="mb-4 font-display text-[0.78rem] font-bold uppercase tracking-widest text-brand-accent">
        404
      </p>
      <h1 className="mb-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.04em] text-text-heading">
        Page not found.
      </h1>
      <p className="mb-10 max-w-100 text-[1.05rem] leading-[1.7] text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Let&apos;s get you back on track.
      </p>
      <div className="flex flex-wrap justify-center gap-3.5">
        <Button variant="primary" href="/">
          Back to Home <span className="inline-block">→</span>
        </Button>
        <Button variant="secondary" href="/contact">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
