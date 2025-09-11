import React from "react";
import Hero from "@/components/sections/services/Hero";
import Problem from "@/components/sections/services/Problem";
import Solution from "@/components/sections/services/Solutions";
import SolutionWorks from "@/components/sections/services/SolutionWorks";
import Testimonials from "@/components/sections/services/Testimonials";
import FAQ from "@/components/sections/services/FAQ";
import OtherServices from "@/components/sections/services/OtherServices";
import News from "@/components/sections/services/News";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";

const Services = () => {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <SolutionWorks />
      <Testimonials />
      <FAQ />
      <OtherServices />
      <News />
      <FinalCTA />
    </>
  );
};

export default Services;
