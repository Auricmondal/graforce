"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/wrappers/ScrollReveal";
import { useContactModal } from "@/contexts/ContactModalContext";
import finalCtaLeftImg from "@/assets/grid.webp";
import finalCtaRightImg from "@/assets/spark.webp";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa6";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const FinalCTA = () => {
  const { isOpen, closeModal, openModal } = useContactModal();
  const handleContactModal = () => {
    if (!isOpen) {
      openModal();
    } else {
      closeModal();
    }
  };
  return (
    <div className="bg-cst-neutral-1 p-2">
      <section className="relative bg-cst-neutral-5 flex items-center justify-center rounded-2xl py-28 px-4 md:px-16 overflow-y-hidden">

        <div className="absolute left-0 bottom-0 w-2/3 md:w-1/2 lg:w-1/3 z-0">
          <Image
            src={finalCtaLeftImg}
            alt="left image"
            fill={false}
            className="!aspect-[912/707]"
          />
        </div>

        {/* Right background image */}
        <div className="absolute right-0 top-0 h-fit w-2/3 md:w-1/2 lg:w-1/3 z-0">
          <Image
            src={finalCtaRightImg}
            alt="right image"
            fill={false}
            className="!aspect-[128/113]"
          />
        </div>
        <ScrollReveal>
          {/* Text */}
          <div className="flex flex-col items-center gap-10 rounded-md text-center text-white max-w-xl">
            <AnimatedHeader>
              <h1 className="text-[clamp(32px,4vw,56px)] font-medium leading-[110%]">
                First Step Towards Better Future
              </h1>
            </AnimatedHeader>
            <PrimaryButton
              className="flex gap-2 items-center bg-primary text-white rounded-2xl py-4 px-6 md:py-8 md:px-12 md:rounded-[28px] md:text-2xl font-medium cursor-pointer hover:!bg-black hover:border-cst-neutral-2 border-1 border-transparent transition-all duration-300"
              onClick={handleContactModal}
            >
              Let&apos;s Talk <FaChevronRight />
            </PrimaryButton>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default FinalCTA;
