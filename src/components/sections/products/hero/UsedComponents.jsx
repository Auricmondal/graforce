"use client";
import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import bgImg from "@/assets/product/plasma-ammonia-cracker.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import RiveAutoplay from "@/components/utils/animations/RiveAutoplay";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-[linear-gradient(71.58deg,_#102044_3.29%,_#416DD2_95.99%)] flex flex-col gap-2 w-full rounded-2xl relative p-2 md:p-16 md:pb-4 h-full">
        <div className="flex flex-col gap-4 pt-16 lg:pt-0">
          <h2 className="relative text-[clamp(40px,6vw,128px)] font-medium max-w-9xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>
              Efficient Gas Separation & Compression
            </AnimatedHeader>
          </h2>

          <p className="max-w-2xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>
              Modular systems to separate, compress and store hydrogen and other
              industrial gases — enabling scalable, emission-free
              infrastructure.
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
          {/* Background network image */}
          {/* <Image
            src={bgImg.src}
            alt="Hydrogen Network"
            height={1000}
            width={1000}
            className="mx-auto w-full h-auto"
            style={{ objectFit: "contain" }}
          /> */}

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
