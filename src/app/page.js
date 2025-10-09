import React from "react";
import Hero from "@/components/sections/home/hero/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/SolutionSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import WhatDoWeDo from "@/components/sections/home/WhatDoWeDo";

const Home = async () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 mt-[100vh]">
        <WhatDoWeDo />
        <Solution />
        <WorldNeedsUs />
        <AboutUs />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
