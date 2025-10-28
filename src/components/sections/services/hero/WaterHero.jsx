"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useContactModal } from "@/contexts/ContactModalContext";
import bgImgLeft from "@/assets/service/hero/loopergroup-left.svg";
import bgImgRight from "@/assets/service/hero/loopergroup-right.svg";
import overlayImg from "@/assets/service/hero/overlay.svg";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import client from "@/lib/sanityClient";
import { waterHeroSectionQuery } from "@/Queries/services/water-purifiaction/Waterhero";

const Hero = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  const [heroData, setHeroData] = useState({
    title: "Transforming Water. Sustaining Life.",
    backgroundImageLeft: bgImgLeft.src,
    backgroundImageRight: bgImgRight.src,
    overlayImage: overlayImg.src,
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
        const res = await client.fetch(waterHeroSectionQuery);
        const hero = res?.hero; // <-- correct key

        if (hero) {
          setHeroData({
            title: hero.title || heroData.title,
            backgroundImageLeft: hero.backgroundImageLeft?.asset?.url || bgImgLeft.src,
            backgroundImageRight: hero.backgroundImageRight?.asset?.url || bgImgRight.src,
            overlayImage: hero.overlayImage?.asset?.url || overlayImg.src,
            primaryButtonText: hero.primaryButtonText || "Talk to an Expert",
            primaryButtonAction: hero.primaryButtonAction || "openModal",
            secondaryButtonText: hero.secondaryButtonText || "Download Brochure",
            secondaryButtonAction: hero.secondaryButtonAction || "scroll",
            secondaryButtonFile: hero.secondaryButtonFile?.asset?.url || "",
            secondaryButtonUrl: hero.secondaryButtonUrl || "",
          });
        }
      } catch (err) {
        console.error("Failed to fetch hero section:", err);
      }
    };

    fetchHero();
  }, []);

  const handlePrimary = () => {
    if (heroData.primaryButtonAction === "openModal") {
      !isOpen ? openModal() : closeModal();
    } else if (heroData.primaryButtonAction === "scroll") {
      document.getElementById("solutions-section-service")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (heroData.primaryButtonAction === "link" && heroData.primaryButtonUrl) {
      window.open(heroData.primaryButtonUrl, "_blank");
    }
  };

  const handleSecondary = (e) => {
    e.preventDefault();
    if (heroData.secondaryButtonAction === "scroll") {
      document.getElementById("solutions-section-service")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (heroData.secondaryButtonAction === "file" && heroData.secondaryButtonFile) {
      window.open(heroData.secondaryButtonFile, "_blank");
    } else if (heroData.secondaryButtonAction === "link" && heroData.secondaryButtonUrl) {
      window.open(heroData.secondaryButtonUrl, "_blank");
    }
  };

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2">
      <div className="bg-[linear-gradient(180deg,_#3D6AD1_0%,_#102044_100%)] flex flex-col w-full rounded-2xl relative pt-[20vh] lg:pt-[8vh] pb-2 px-[3vw] h-full">
        <div className="flex flex-col gap-8 absolute inset-0 z-10 justify-center h-fit my-auto">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 md:px-12 leading-[100%] max-w-6xl mx-auto text-center ">
            <AnimatedHeader delay={0.4}>{heroData.title}</AnimatedHeader>
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 p-2">
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

        {/* Network Image */}
        <div className="w-full flex-1 relative ">
          <Image
            src={heroData.backgroundImageLeft}
            alt="Left Network"
            fill={false}
            height={500}
            width={500}
            className="w-full absolute bottom-0 lg:bottom-[-20%] left-[-40%] scale-85"
            style={{ objectFit: "contain", mixBlendMode: "overlay" }}
          />
          <Image
            src={heroData.overlayImage}
            alt="Overlay"
            fill={false}
            height={500}
            width={500}
            className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] lg:translate-y-[45%] scale-25 "
            style={{ objectFit: "contain", mixBlendMode: "overlay" }}
          />
          <Image
            src={heroData.backgroundImageRight}
            alt="Right Network"
            fill={false}
            height={500}
            width={500}
            className="w-full absolute bottom-0 lg:bottom-[-20%] right-[-40%] scale-85"
            style={{ objectFit: "contain", mixBlendMode: "overlay" }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
