import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p
          className="mb-4 text-sm font-medium tracking-widest uppercase"
          style={{ color: "var(--color-brand-accent)" }}
        >
          {SITE_CONFIG.tagline}
        </p>
        <h1
          className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--color-text-heading)",
          }}
        >
          {SITE_CONFIG.name}
        </h1>
        <p
          className="mx-auto max-w-md text-lg"
          style={{ color: "var(--color-text-muted)" }}
        >
          Modern, mobile-first websites for trade businesses in{" "}
          {SITE_CONFIG.location}. Coming soon.
        </p>
      </div>
    </section>
  );
}
