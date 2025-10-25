import React from "react";

import CaseStudies from "@/components/sections/investors/CaseStudies";
import Hero from "@/components/sections/investors/Hero";
import ImpactOpportunity from "@/components/sections/investors/ImpactOpportunity";
import GraforceCards from "@/components/sections/investors/GraforceCards";
import MarketEntry from "@/components/sections/investors/Market";
import SocialProof from "@/components/sections/investors/SocialProof";
import Team from "@/components/sections/investors/Team";
import JoinUs from "@/components/sections/investors/JoinUs";

const Investors = () => {
  return (
    <div>
      <Hero />
      <ImpactOpportunity />
      <CaseStudies />
      <GraforceCards />
      <MarketEntry />
      <SocialProof />
      <Team />
      <JoinUs />
    </div>
  );
};

export default Investors;
