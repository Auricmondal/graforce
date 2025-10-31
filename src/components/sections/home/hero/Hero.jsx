"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// import HeroSection from "@/components/sections/home/hero/HeroSection";
const HeroSection = dynamic(
  () => import("@/components/sections/home/hero/HeroSection"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

const Hero = () => {
  const [isFixed, setIsFixed] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      // When user scrolls more than window.innerHeight, unfix hero
      setIsFixed(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`w-full h-fit ${
        isFixed
          ? "fixed top-0 left-0 z-10"
          : "absolute top-0 left-0 z-0 pointer-events-none"
      }`}
    >
      <HeroSection />
    </section>
  );
};
export default Hero;
