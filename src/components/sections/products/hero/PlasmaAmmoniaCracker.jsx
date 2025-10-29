"use client";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import RiveAutoplay from "@/components/utils/animations/RiveAutoplay";

import { useSidebarActions } from "@/hooks/useSidebarActions";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-cst-neutral-5 flex flex-col gap-2 w-full rounded-2xl relative p-2 md:p-16 md:pb-4 h-full">
        <div className="flex flex-col gap-4 pt-16 lg:pt-0">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-medium max-w-9xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>
              Hydrogen from Ammonia, Reinvented
            </AnimatedHeader>
          </h2>

          <p className="max-w-2xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>
              Our plasma technology makes hydrogen production cleaner, safer,
              and carbon-free.
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

        {/* Network Image */}
        <div className="w-auto flex-1 relative h-fit py-6 lg:p-0">
          <RiveAutoplay
            src={"/animations/heroanim.riv"}
            stateMachines={"heroanim"}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
