"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useContactModal } from "@/contexts/ContactModalContext";
import bgImg from "@/assets/service/hero/service-hero.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

// Sanity client
import { client } from "@/lib/sanityClient";
import { hydrogenHeroQuery } from "@/Queries/services/hydrogen-production/hydrogenhero";

const Hero = () => {
  const { isOpen, openModal, closeModal } = useContactModal();
  const [heroData, setHeroData] = useState(null);

  // Fetch Hero data from Sanity
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await client.fetch(hydrogenHeroQuery);
        setHeroData(data?.hero || {});
      } catch (err) {
        console.error("Failed to fetch hero data:", err);
        setHeroData({});
      }
    };
    fetchHero();
  }, []);

  const handleContactModal = () => {
    if (!isOpen) openModal();
    else closeModal();
  };

  const handleLearnMore = (e) => {
    e.preventDefault();

    // Open external brochure if provided
    if (heroData?.secondaryButtonUrl) {
      window.open(heroData.secondaryButtonUrl, "_blank");
      return;
    }
    if (heroData?.secondaryButtonLink?.asset?.url) {
      window.open(heroData.secondaryButtonLink.asset.url, "_blank");
      return;
    }

    // Scroll to section fallback
    const section = document.getElementById("solutions-section-service");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Fallback values
  const title = heroData?.title || "Renewable Hydrogen Production";
  const highlightedWord = heroData?.highlightedWord || "Hydrogen";
  const primaryButtonText = heroData?.primaryButtonText || "Talk to an Expert";
  const secondaryButtonText = heroData?.secondaryButtonText || "Download Brochure";
  const backgroundImage = heroData?.backgroundImage?.asset?.url || bgImg.src;
  const backgroundAlt = heroData?.backgroundImage?.alt || "Hydrogen Network";

  const parts = title.split(highlightedWord);

  if (!heroData) return null; // optional loader

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2">
      <div className="bg-cst-neutral-5 flex flex-col w-full rounded-2xl relative pt-[20vh] lg:pt-[8vh] pb-2 px-[3vw] h-full">
        <div className="flex flex-col gap-6">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>
              {parts[0]}
              <span className="text-primary">{highlightedWord}</span>
              {parts[1] || ""}
            </AnimatedHeader>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={handleContactModal}
            >
              {primaryButtonText} <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={handleLearnMore}
            >
              {secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>

        {/* Network Image */}
        <div className="w-auto flex-1 relative">
          <Image
            src={backgroundImage}
            alt={backgroundAlt}
            fill
            className="mx-auto"
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
