"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useContactModal } from "@/contexts/ContactModalContext";
import bgImg from "@/assets/product/syngas.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import { useSidebarActions } from "@/hooks/useSidebarActions";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2 relative">
      <div className="flex flex-col w-full rounded-2xl px-[3vw] h-full absolute inset-0 z-10 justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-medium max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader>
              Clean Syngas, Built from Residue Streams
            </AnimatedHeader>
          </h1>

          <p className="max-w-2xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>
              Turning methane, biogas or other gaseous residues into hydrogen
              and synthesis gas with zero CO₂.
            </AnimatedHeader>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
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
      </div>

      {/* background Image */}
      <div className="w-full h-full relative">
        <Image
          src={bgImg.src}
          alt="Background Image"
          fill
          className="z-0 object-cover rounded-2xl brightness-70"
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
};

export default Hero;
