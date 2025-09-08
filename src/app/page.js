import React from "react";
import Hero from "@/components/sections/home/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import Brands from "@/components/sections/home/Brands";
import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/SolutionSection";
import Video from "@/components/sections/home/Video";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Brands />
      <WorldNeedsUs />
      <Solution />
      <Video />
      <FinalCTA />
    </>
  );
};

export default Home;
