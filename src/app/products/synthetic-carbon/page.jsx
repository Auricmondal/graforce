import React from "react";
import Hero from "@/components/sections/products/hero/SyntheticCarbonHero";

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
import { productServices } from "@/components/sections/products/productServices";

import { leftTypes } from "@/components/sections/products/ImpDetailsLefts";
import details from "@/data/details.json";

const config = {
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
};

export default async function UsedComponents() {
  return (
    <>
      {config.hero && <Hero />}
      {config.whyWeMatter && <WhyWeMatter />}
      {config.graforceSolution && <GraforceSolution />}
      {config.howThisWorks && <HowThisWorks />}
      {config.productGallery && <ProductGallery />}
      {config.importantDetails && (
        <ImportantDetails leftTypes={leftTypes} details={details} />
      )}
      {config.solutionWorks && <SolutionWorks />}
      {config.otherServices && (
        <OtherServices servicesOptions={productServices} />
      )}
      {config.testimonials && <Testimonials />}
      {config.faq && <FAQ />}
      {config.news && <News />}
      <FinalCTA />
    </>
  );
}
