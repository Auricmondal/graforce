"use client";
import React from "react";
import Image from "next/image";
import SectionWrapper from "@/wrappers/SectionWrapper";
import Bulb from "@/assets/bulb.png";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import ScrollReveal from "@/wrappers/ScrollReveal";
import { useContactModal } from "@/contexts/ContactModalContext";

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
    <div className="bg-dark">
      <SectionWrapper className="max-w-[2000px] relative overflow-hidden mx-auto">
        {/* Bulb Image */}
        <div className="absolute z-0 -bottom-8 right-1/12 -rotate-30 w-1/7 min-w-30">
          <Image src={Bulb} alt="bulb" className=""></Image>
        </div>

        <ScrollReveal>
          {/* Text */}
          <div className="relative z-10 flex flex-col gap-4 md:items-baseline items-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to cut CO2 ?
            </h2>
            <p className="text-md text-center md:text-left text-white">
              Book a demo and see how Graforce can fuel your hydrogen strategy.
            </p>
            <FloatupButton
              className="!w-fit !bg-primary-50 !text-primary-700"
              icon={"❯"}
              onClick={handleContactModal}
            >
              Contact Now{" "}
            </FloatupButton>
          </div>
        </ScrollReveal>
      </SectionWrapper>
    </div>
  );
};

export default FinalCTA;
