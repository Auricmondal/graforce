import React from "react";

import CaseStudies from "@/components/sections/investors/CaseStudies";
import Hero from "@/components/sections/investors/Hero";
import ImpactOpportunity from "@/components/sections/investors/ImpactOpportunity";
import MarketEntry from "@/components/sections/investors/Market";

const Investors = () => {
  return (
    <div>
      <Hero />
      <ImpactOpportunity />
      <CaseStudies />
      <MarketEntry />
    </div>
  );
};

export default Investors;
