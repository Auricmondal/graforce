"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useContactModal } from "@/contexts/ContactModalContext";
import atomImg from "@/assets/product/atom.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import sparkImg from "@/assets/product/spark_hydro.svg";
import carbonImg from "@/assets/product/carbon.webp";
import hydrogenImg from "@/assets/product/hydrogen.webp";

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
      <div className="bg-[linear-gradient(90.53deg,_#102044_-1.02%,_#416DD2_99.51%)] flex flex-col w-full rounded-2xl relative pb-2 px-[3vw] h-full">
        <div className="absolute right-[-17%] top-[-10vh] md:top-[-27vh] w-full lg:w-2/3 bg-no-repeat bg-contain z-1 scale-125">
          <Image
            src={sparkImg}
            alt="left image"
            fill={false}
            className="!aspect-[912/707]"
          />
        </div>
        <div className="absolute bottom-0 w-full bg-no-repeat bg-contain z-1 ">
          <Image
            src={atomImg}
            alt="left image"
            fill={false}
            className="mx-auto h-[40vh] w-auto"
          />
        </div>
        <div className="absolute right-[0.5vw] bottom-[20vh] bg-no-repeat bg-contain z-1 scale-25 hidden lg:block">
          <Image src={carbonImg} alt="left image" fill={false} className="" />
        </div>
        <div className="absolute left-[15vw] bottom-[-4vh] bg-no-repeat bg-contain z-1 scale-20 hidden lg:block">
          <Image src={hydrogenImg} alt="left image" fill={false} className="" />
        </div>
        <div className="absolute left-[8%] top-[8%] hidden md:block bg-no-repeat bg-contain z-1 scale-50">
          <Image src={carbonImg} alt="left image" fill={false} className="" />
        </div>

        <div className="flex flex-col gap-6 h-fit my-auto z-10">
          <div className="flex flex-col gap-4">
            <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
              <AnimatedHeader delay={0.4}>Methane Plasmalyzer®</AnimatedHeader>
            </h2>
            <p className="max-w-3xl mx-auto md:text-xl font-light text-center">
              <AnimatedHeader delay={0.4}>
                We turn methane into clean hydrogen and solid carbon using
                advanced plasma technology. Our process delivers zero CO₂
                emissions and is fully scalable for industrial demand.
              </AnimatedHeader>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={handleContactModal}
            >
              Talk to an Expert <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-secondary py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={handleLearnMore}
            >
              Download Brochure
            </PrimaryButton>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
