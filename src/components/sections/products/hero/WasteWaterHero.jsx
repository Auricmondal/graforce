"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import bgImg from "@/assets/product/waste-water.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-[linear-gradient(107.13deg,_#5627DA_0%,_#2E1574_93.86%)] flex flex-col w-full rounded-2xl relative p-2 pb-10 md:p-10 h-full">
        <div className="flex flex-col gap-4 py-16">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-medium max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>
              Redefining Waste as a Resource
            </AnimatedHeader>
          </h1>

          <p className="max-w-3xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>
              Our plasma technology extracts green hydrogen from wastewater —
              closing the loop between energy and sustainability.
            </AnimatedHeader>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              Talk to an Expert <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              Download Brochure
            </PrimaryButton>
          </div>
        </div>

        {/* Background Image */}
        <div className="w-auto flex-1 relative">
          <Image
            src={bgImg.src}
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
