"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useSidebarActions } from "@/hooks/useSidebarActions";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import bgImgFallback from "@/assets/service/hero/co2-free.webp";
import client from "@/lib/sanityClient";
import { energyHeroSectionQuery } from "@/Queries/services/co2-free-energy-generation/energyhero";

const Hero = () => {
  const { showContactForm } = useSidebarActions();
  const [heroData, setHeroData] = useState({
    title: "Engineering the Future of CO₂ Free Power.",
    backgroundImage: bgImgFallback.src,
    primaryButtonText: "Talk to an Expert",
    primaryButtonAction: "openModal",
    secondaryButtonText: "Download Brochure",
    secondaryButtonAction: "scroll",
    secondaryButtonFile: "",
    secondaryButtonUrl: "",
  });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await client.fetch(energyHeroSectionQuery);
        const hero = res?.heroSection;

        setHeroData({
          title: hero?.title || heroData.title,
          backgroundImage: hero?.backgroundImage?.asset?.url || bgImgFallback.src,
          primaryButtonText: hero?.primaryButtonText || heroData.primaryButtonText,
          primaryButtonAction: hero?.primaryButtonAction || heroData.primaryButtonAction,
          secondaryButtonText: hero?.secondaryButtonText || heroData.secondaryButtonText,
          secondaryButtonAction: hero?.secondaryButtonAction || heroData.secondaryButtonAction,
          secondaryButtonFile: hero?.secondaryButtonFile || "",
          secondaryButtonUrl: hero?.secondaryButtonUrl || "",
        });
      } catch (err) {
        console.error("Failed to fetch hero section:", err);
      }
    };

    fetchHero();
  }, []);

  const handlePrimary = () => {
    if (heroData.primaryButtonAction === "openModal") {
      showContactForm();
    } else if (heroData.primaryButtonAction === "scroll") {
      const section = document.getElementById("solutions-section-service");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (heroData.primaryButtonAction === "link" && heroData.primaryButtonUrl) {
      window.open(heroData.primaryButtonUrl, "_blank");
    }
  };

  const handleSecondary = (e) => {
    e.preventDefault();
    if (heroData.secondaryButtonAction === "scroll") {
      const section = document.getElementById("solutions-section-service");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (heroData.secondaryButtonAction === "file" && heroData.secondaryButtonFile) {
      window.open(heroData.secondaryButtonFile, "_blank");
    } else if (heroData.secondaryButtonAction === "link" && heroData.secondaryButtonUrl) {
      window.open(heroData.secondaryButtonUrl, "_blank");
    }
  };

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2 relative">
      <div className="flex flex-col w-full rounded-2xl px-[3vw] h-full absolute inset-0 z-10 justify-center">
        <div className="flex flex-col gap-6">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader>{heroData.title}</AnimatedHeader>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={handlePrimary}
            >
              {heroData.primaryButtonText} <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={handleSecondary}
            >
              {heroData.secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>
      </div>

      <div className="w-full h-full relative">
        <Image
          src={heroData.backgroundImage}
          alt="Background Image"
          fill
          className="z-0 object-cover rounded-2xl brightness-60"
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
};

export default Hero;
