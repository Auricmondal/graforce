import React from "react";

import CaseStudies from "@/components/sections/investors/CaseStudies";
import Hero from "@/components/sections/investors/Hero";
import ImpactOpportunity from "@/components/sections/investors/ImpactOpportunity";


const Investors = () => {
  return (
    <div>
      <Hero />
      <ImpactOpportunity />
      <CaseStudies />
    </div>
  );
};

export default Investors;
