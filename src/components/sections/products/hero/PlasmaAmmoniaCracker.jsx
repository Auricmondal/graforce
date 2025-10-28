"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useSidebarActions } from "@/hooks/useSidebarActions";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import bgImgFallback from "@/assets/product/plasma-ammonia-cracker.webp"; // fallback image
import client from "@/lib/sanityClient";
import { plasmaAmmoniaHeroQuery } from "@/Queries/products/plasma-ammonia-cracker/plasmaammoniacrackerhero";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  const [heroData, setHeroData] = useState({
    title: "Hydrogen from Ammonia, Reinvented",
    subTitle: "Our plasma technology makes hydrogen production cleaner, safer, and carbon-free.",
    primaryButtonText: "Talk to an Expert",
    primaryButtonAction: "openModal",
    secondaryButtonText: "Download Brochure",
    secondaryButtonAction: "download",
    secondaryButtonUrl: null,
    backgroundImageUrl: bgImgFallback.src,
  });

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await client.fetch(plasmaAmmoniaHeroQuery);
        const hero = res?.heroSection;
        if (hero) {
          setHeroData((prev) => ({
            ...prev,
            title: hero.title || prev.title,
            subTitle: hero.subTitle || prev.subTitle,
            primaryButtonText: hero.primaryButtonText || prev.primaryButtonText,
            primaryButtonAction: hero.primaryButtonAction || prev.primaryButtonAction,
            secondaryButtonText: hero.secondaryButtonText || prev.secondaryButtonText,
            secondaryButtonAction: hero.secondaryButtonAction || prev.secondaryButtonAction,
            secondaryButtonUrl: hero.secondaryButtonUrl || prev.secondaryButtonUrl,
            backgroundImageUrl: hero.backgroundImageUrl || prev.backgroundImageUrl,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch hero data:", err);
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
              onClick={() =>
                heroData.secondaryButtonUrl
                  ? window.open(heroData.secondaryButtonUrl, "_blank")
                  : showContactForm()
              }
            >
              {heroData.secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>

        {/* Background Image */}
        <div className="w-auto flex-1 relative">
          <Image
            src={heroData.backgroundImageUrl}
            alt="Hydrogen Network"
            height={1000}
            width={1000}
            className="mx-auto w-full h-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
