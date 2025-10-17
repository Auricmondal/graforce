import React from "react";
import Hero from "@/components/sections/home/hero/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import Solution from "@/components/sections/home/SolutionSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import WhatDoWeDo from "@/components/sections/home/WhatDoWeDo";
import YouNeedUs from "@/components/sections/home/hero/YouNeedUs";
import Tower from "@/assets/tower.png";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative z-10 mt-[100vh]">
        <WhatDoWeDo />
        <Solution />
        <YouNeedUs sectionColorVariant="dark" />
        <AboutUs />
        <FinalCTA />
      </div>
    </>
  );
};

export default Home;
