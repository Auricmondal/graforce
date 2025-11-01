"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { FaChevronRight } from "react-icons/fa";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";

import client from "@/lib/sanityClient";
import { methaneHeroQuery } from "@/Queries/products/methane-plasmalyzer/methaneplasmalyzerhero";

const RiveAutoplay = dynamic(
  () => import("@/components/utils/animations/RiveAutoplay"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  // Fallback content (same as old hardcoded version)
  const [heroData, setHeroData] = useState({
    title: "Methane Plasmalyzer®",
    subTitle:
      "We turn methane into clean hydrogen and solid carbon using advanced plasma technology. Our process delivers zero CO₂ emissions and is fully scalable for industrial demand.",
    primaryButtonText: "Talk to an Expert",
    secondaryButtonText: "Download Brochure",
    riveFile: "/animations/heroanim.riv",
    riveStateMachine: "heroanim",
    riveDelay: 800,
  });

  // Fetch content from Sanity
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await client.fetch(methaneHeroQuery);
        const hero = res?.heroSection;
        if (hero) {
          setHeroData((prev) => ({
            ...prev,
            title: hero.title || prev.title,
            subTitle: hero.subTitle || prev.subTitle,
            primaryButtonText: hero.primaryButtonText || prev.primaryButtonText,
            secondaryButtonText: hero.secondaryButtonText || prev.secondaryButtonText,
            riveFile: hero.riveFile || prev.riveFile,
            riveStateMachine: hero.riveStateMachine || prev.riveStateMachine,
            riveDelay: hero.riveDelay || prev.riveDelay,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch hero data from Sanity:", err);
      }
    };

    fetchHero();
  }, []);

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-cst-neutral-5 flex flex-col gap-2 w-full rounded-2xl relative p-2 md:p-16 md:pb-4 h-full">
        <div className="flex flex-col gap-4 pt-16 lg:pt-0">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-medium max-w-9xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>{heroData.title}</AnimatedHeader>
          </h2>

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
              onClick={() => showContactForm()}
            >
              {heroData.secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>

        {/* Rive Animation */}
        <div className="w-auto flex-1 relative h-fit py-6 lg:p-0">
          <RiveAutoplay
            src={heroData.riveFile}
            stateMachines={heroData.riveStateMachine}
            delay={heroData.riveDelay}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
