"use client";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import client from "@/lib/sanityClient";
import { h2NaturalGasHeroQuery } from "@/Queries/products/h2-natural-gas-refuelling/h2naturalgasrefuellinghero";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  // Default fallback values
  const [heroData, setHeroData] = useState({
    title: "Hydrogen Refuelling for Natural Gas Systems",
    subTitle:
      "Blend H₂ with natural gas for cleaner transport and energy — reducing CO₂, CO and HC emissions by up to 60%.",
    primaryButtonText: "Talk to an Expert",
    primaryButtonAction: "contactForm",
    secondaryButtonText: "Download Brochure",
    secondaryButtonLink: null,
    backgroundVideo: "/hero-videos/natural-gas.webm",
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await client.fetch(h2NaturalGasHeroQuery);
        console.log("Sanity fetch result:", res); // Debug the fetched data

        const hero = res?.h2naturalgasHeroSection || res?.heroSection;

        if (hero) {
          setHeroData((prev) => ({
            ...prev,
            title: hero.title || prev.title,
            subTitle: hero.subTitle || prev.subTitle,
            primaryButtonText: hero.primaryButtonText || prev.primaryButtonText,
            primaryButtonAction: hero.primaryButtonAction || prev.primaryButtonAction,
            secondaryButtonText: hero.secondaryButtonText || prev.secondaryButtonText,
            secondaryButtonLink: hero.secondaryButtonLink || prev.secondaryButtonLink,
            backgroundVideo: hero.backgroundVideo || prev.backgroundVideo,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch H2 Hero Section:", err);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2 relative">
      <div className="flex flex-col w-full rounded-2xl px-[3vw] h-full absolute inset-0 z-10 justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader>{heroData.title}</AnimatedHeader>
          </h1>

          <p className="max-w-2xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>{heroData.subTitle}</AnimatedHeader>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              {heroData.primaryButtonText} <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={() => {
                if (heroData.secondaryButtonLink) {
                  window.open(heroData.secondaryButtonLink, "_blank");
                } else {
                  showContactForm();
                }
              }}
            >
              {heroData.secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full relative">
        <video
          id="video-section"
          src={heroData.backgroundVideo}
          playsInline
          muted
          autoPlay
          loop
          className="w-full h-full rounded-lg object-cover brightness-70"
        />
      </div>
    </main>
  );
};

export default Hero;
