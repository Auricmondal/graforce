import React from "react";
import Hero from "@/components/sections/home/hero/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
// import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/SolutionSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import WhatDoWeDo from "@/components/sections/home/WhatDoWeDo";
import YouNeedUs from "@/components/sections/home/YouNeedUs";

const Home = async () => {
  return (
    <>
      <Hero />
      <WhatDoWeDo />
      <Solution />
      {/* <WorldNeedsUs /> */}
      <YouNeedUs />
      <AboutUs />
      <FinalCTA />
    </>
  );
};

export default Home;
