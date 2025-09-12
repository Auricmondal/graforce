"use client";
import React from "react";
import { useRef } from "react";

import HeroSection from "@/components/sections/home/hero/HeroSection";
import HeroVideo from "@/components/sections/home/hero/HeroVideo";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section id="hero" ref={heroRef}>
      <HeroSection />
      <HeroVideo animLocationRef={heroRef} />
    </section>
  );
};

export default Hero;