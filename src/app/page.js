import React from "react";
import Hero from "@/components/sections/home/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import Brands from "@/components/sections/home/Brands";
import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/SolutionSection";
import Video from "@/components/sections/home/Video";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import FooterRevealer from "@/components/shared/footer/FooterRevealer";

const Home = () => {
  return (
    <>
    <section id="hero">
      <Hero />
      <Video />
    </section>
      <AboutUs />
      <Brands />
      <Solution />
      <WorldNeedsUs />
      <FinalCTA />
      <FooterRevealer />
    </>
  );
};

export default Home;
