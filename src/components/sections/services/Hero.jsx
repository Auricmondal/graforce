"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useContactModal } from "@/contexts/ContactModalContext";
import bgImg from "@/assets/service/hero/service-hero.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

const Hero = () => {
  const { isOpen, closeModal, openModal } = useContactModal();

  const handleContactModal = () => {
    if (!isOpen) {
      openModal();
    } else {
      closeModal();
    }
  };
  const handleLearnMore = (e) => {
    e.preventDefault();
    const section = document.getElementById("solutions-section-service");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2">
      <div className="bg-cst-neutral-5 flex flex-col w-full rounded-2xl relative pt-[20vh] lg:pt-[8vh] pb-2 px-[3vw] h-full">
        <div className="flex flex-col gap-6">
          <AnimatedHeader delay={0.8}>
            <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
              Renewable <span className="text-primary">Hydrogen</span>{" "}
              Production
            </h2>
          </AnimatedHeader>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={handleContactModal}
            >
              Talk to an Expert <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={handleLearnMore}
            >
              Download Brochure
            </PrimaryButton>
          </div>
        </div>

        {/* Network Image */}
        <div className="w-auto flex-1 relative">
          {/* Background network image */}
          <Image
            src={bgImg.src}
            alt="Hydrogen Network"
            fill
            className="mx-auto "
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
