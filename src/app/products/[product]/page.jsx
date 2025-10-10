import React from "react";
import { notFound } from "next/navigation";

import Hero from "@/components/sections/products/Hero";
import Problem from "@/components/sections/services/Problem";
import Achievements from "@/components/sections/services/Achievements";
import WhyWorldNeedsUs from "@/components/sections/services/WhyWorldNeedsUs";

import WhyWeMatter from "@/components/sections/products/WhyWeMatter";
import GraforceSolution from "@/components/sections/products/GraforceSolution";
import HowThisWorks from "@/components/sections/products/HowThisWorks";
import ImportantDetails from "@/components/sections/products/ImportantDetails";

import SolutionWorks from "@/components/shared/solutionWorks/SolutionWorks";
import ProductGallery from "@/components/shared/gallery/ProductGallery";
import Testimonials from "@/components/shared/testimonials/Testimonials";
import OtherServices from "@/components/shared/otherServices/OtherServices";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import News from "@/components/shared/news/News";
import FAQ from "@/components/shared/faq/FAQ";

const ALLOWED_SLUGS = ["methane-plasmalyzer"];

const productComponents = {
  "methane-plasmalyzer": {
    hero: true,
    whyWeMatter: true,
    graforceSolution: true,
    howThisWorks: true,
    productGallery: true,
    importantDetails: true,
    solutionWorks: true,
    otherServices: true,
    testimonials: true,
    faq: true,
    news: true,
  },
};

export default async function ProductPage({ params }) {
  const { product } = await params;

  if (!ALLOWED_SLUGS.includes(product)) {
    notFound();
  }

  const config = productComponents[product];

  return (
    <>
      {config.hero && <Hero />}
      {config.whyWeMatter && <WhyWeMatter />}
      {config.graforceSolution && <GraforceSolution />}
      {config.howThisWorks && <HowThisWorks />}
      {config.productGallery && <ProductGallery />}
      {config.importantDetails && <ImportantDetails />}
      {config.solutionWorks && <SolutionWorks />}
      {config.otherServices && <OtherServices />}
      {config.testimonials && <Testimonials />}
      {config.faq && <FAQ />}
      {config.news && <News />}
      <FinalCTA />
    </>
  );
}

/**
 * generateStaticParams:
 *
 * - This tells Next.js to pre-render only `/services/a`, `/services/b`, and `/services/c`
 *   at build time instead of rendering them on-demand at runtime.
 *   - Keep this if the set of slugs is small and fixed (like here: a, b, c).
 *   - Remove it if slugs might change dynamically (e.g., from a database or CMS).
 */
export async function generateStaticParams() {
  return ALLOWED_SLUGS.map((service) => ({ service }));
}
