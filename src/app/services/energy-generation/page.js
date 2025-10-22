import React from "react";

import Hero from "@/components/sections/services/hero/HydrogenHero";
import Problem from "@/components/sections/services/Problem";
import Achievements from "@/components/sections/services/Achievements";
import WhyWorldNeedsUs from "@/components/sections/services/WhyWorldNeedsUs";

import SolutionWorks from "@/components/shared/solutionWorks/SolutionWorks";
import ProductGallery from "@/components/shared/gallery/ProductGallery";
import Testimonials from "@/components/shared/testimonials/Testimonials";
import OtherServices from "@/components/shared/otherServices/OtherServices";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import News from "@/components/shared/news/News";
import FAQ from "@/components/shared/faq/FAQ";

// To handle component rendering based on service type
const config = {
  problem: true,
  achievements: true,
  productGallery: true,
  whyWorldNeedsUs: true,
  otherServices: true,
  solutionWorks: true,
  testimonials: true,
  faq: true,
  news: true,
};

export default async function EnergyGeneration() {
  return (
    <>
      <Hero />
      {config.problem && <Problem />}
      {config.achievements && <Achievements />}
      {config.productGallery && <ProductGallery />}
      {config.whyWorldNeedsUs && <WhyWorldNeedsUs />}
      {config.solutionWorks && <SolutionWorks />}
      {config.otherServices && <OtherServices />}
      {config.testimonials && <Testimonials />}
      {config.faq && <FAQ />}
      {config.news && <News />}
      <FinalCTA />
    </>
  );
}
