import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WorkSection } from "@/components/sections/WorkSection";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

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
