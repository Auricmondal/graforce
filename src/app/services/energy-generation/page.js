import React from "react";
import { notFound } from "next/navigation";

import Hero from "@/components/sections/services/Hero";
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

const serviceComponents = {
  "hydrogen-production": {
    hero: true,
    problem: true,
    achievements: true,
    productGallery: true,
    whyWorldNeedsUs: true,
    otherServices: true,
    solutionWorks: true,
    testimonials: true,
    faq: true,
    news: true,
  },
  "water-purification": {
    hero: true,
    problem: false,
    achievements: false,
    productGallery: false,
    whyWorldNeedsUs: false,
    otherServices: true,
    solutionWorks: false,
    testimonials: true,
    faq: true,
    news: true,
  },
  "energy-generation": {
    hero: true,
    problem: true,
    achievements: false,
    productGallery: false,
    whyWorldNeedsUs: false,
    otherServices: true,
    solutionWorks: true,
    testimonials: false,
    faq: false,
    news: true,
  },
};

export default async function EnergyGeneration() {

  return (
    <>
      {config.hero && <Hero />}
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

