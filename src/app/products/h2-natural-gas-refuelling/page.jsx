import React from "react";

import Hero from "@/components/sections/products/hero/H2NaturalGas";

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

export default async function MethanePlasmalyzer() {
  return (
    <>
      {config.hero && <Hero />}
      {config.whyWeMatter && <WhyWeMatter />}
      {config.graforceSolution && <GraforceSolution />}
      {config.howThisWorks && <HowThisWorks />}
      {config.productGallery && <ProductGallery />}
      {config.importantDetails && <ImportantDetails isOneLeftType={false} />}
      {config.solutionWorks && <SolutionWorks />}
      {config.otherServices && <OtherServices />}
      {config.testimonials && <Testimonials />}
      {config.faq && <FAQ />}
      {config.news && <News />}
      <FinalCTA />
    </>
  );
}
