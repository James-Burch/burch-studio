import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
      <ProblemSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
