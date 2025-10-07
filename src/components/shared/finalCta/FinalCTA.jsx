"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/wrappers/ScrollReveal";
import { useContactModal } from "@/contexts/ContactModalContext";
import finalCtaImg from "@/assets/finalcta.svg";
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
      <section className="relative bg-cst-neutral-5 flex items-center justify-center rounded-2xl py-28 px-16">
        <Image
          src={finalCtaImg.src}
          className="absolute inset-0 w-full h-full object-fill z-0"
          alt="background"
          fill
          style={{ objectFit: "fill" }}
        />
        <ScrollReveal>
          {/* Text */}
          <div className="flex flex-col items-center gap-10 rounded-md text-center text-white max-w-xl">
            <AnimatedHeader>
              <h1 className="text-[clamp(32px,4vw,56px)] font-medium leading-[110%]">
                First Step Towards Better Future
              </h1>
            </AnimatedHeader>
            <PrimaryButton
              className="flex gap-2 items-center bg-primary text-white rounded-2xl py-4 px-6 md:py-8 md:px-12 md:rounded-[28px] md:text-2xl font-medium cursor-pointer"
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
