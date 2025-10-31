"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import bgImg from "@/assets/investor/investor-hero.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import { useSidebarActions } from "@/hooks/useSidebarActions";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2 relative">
      <div className="absolute inset-0 flex flex-col w-full h-full z-10 p-4">
        <div className="flex flex-col gap-6 h-fit my-auto">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader>Invest in the Future of Hydrogen</AnimatedHeader>
          </h1>
          <p className="relative font-light text-[12px] md:text-2xl w-full px-6 leading-[150%] max-w-4xl mx-auto text-center">
            <AnimatedHeader>
              Graforce is redefining hydrogen production with plasma technology
              - scalable, profitable, and CO₂-free
            </AnimatedHeader>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-black transition duration-300 py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-white w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              Contact Us <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-white bg-cst-neutral-5 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              Download Brochure
            </PrimaryButton>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative">
        <Image
          src={bgImg.src}
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
