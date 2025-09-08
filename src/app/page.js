import React from "react";
import Hero from "@/components/sections/home/Hero";
import AboutUs from "@/components/sections/home/AboutUs";
import Brands from "@/components/sections/home/Brands";
import WorldNeedsUs from "@/components/sections/home/WorldNeedsUs";
import Solution from "@/components/sections/home/Solution";
import Video from "@/components/sections/home/Video";
import ContactNow from "@/components/shared/contact/ContactNow";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Brands />
      <WorldNeedsUs />
      <Solution />
      <Video />
      <ContactNow />
    </>
  );
};

export default Home;
