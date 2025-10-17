import React from "react";

import CaseStudies from "@/components/sections/investors/CaseStudies";
import Hero from "@/components/sections/investors/Hero";
import ImpactOpportunity from "@/components/sections/investors/ImpactOpportunity";
import MarketEntry from "@/components/sections/investors/Market";
import SocialProof from "@/components/sections/investors/SocialProof";

const Investors = () => {
  return (
    <div>
      <Hero />
      <ImpactOpportunity />
      <CaseStudies />
      <MarketEntry />
      <SocialProof />
    </div>
  );
};

export default Investors;
