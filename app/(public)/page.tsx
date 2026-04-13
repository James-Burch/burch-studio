import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WorkSection } from "@/components/sections/WorkSection";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

// ISR - regenerate the home page at most once per hour so US/global
// requests are served from Vercel's edge cache instead of round-tripping
// through a UK serverless function to Supabase on every request.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[]} />
      <Hero />
      <TrustedBy />
      <WorkSection />
      <HowWeWork />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
