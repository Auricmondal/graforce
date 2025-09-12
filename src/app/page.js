import React from "react";
import Hero from "@/components/sections/home/hero/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import Brands from "@/components/sections/home/Brands";
import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/SolutionSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";

const Home = async() => {
  // await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate a 1 second delay
  return (
    <>
      <Hero />
      <Brands />
      <Solution />
      <WorldNeedsUs />
      <AboutUs />
      <FinalCTA />
    </>
  );
};

export default Home;
