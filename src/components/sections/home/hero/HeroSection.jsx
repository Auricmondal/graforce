"use client";
import React from "react";
import { useContactModal } from "@/contexts/ContactModalContext";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const HeroSection = () => {
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
    const section = document.getElementById("solutions-section");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen relative overflow-hidden bg-cst-neutral-1 p-2">
      <video
        id="video-section"
        src="/hero-video.webm"
        playsInline
        muted
        autoPlay
        loop
        className="w-full h-full rounded-lg object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-between px-4 text-center lg:text-start text-white">
        <div className="flex-3 flex items-center">
          <AnimatedHeader delay={0.8}>
            <h1 className="text-[clamp(40px,10vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[110%]">
              Powering the Future with{" "}
              <span className="text-primary">Hydrogen</span>
            </h1>
          </AnimatedHeader>
        </div>
        <div className="flex-1 lg:flex-0 flex flex-col lg:flex-row items-center lg:justify-between w-full lg:pb-8 gap-4">
          <div className="flex gap-4">
            <PrimaryButton
              className="bg-black/30 text-white transition border-1 border-white backdrop-blur-[17.4px] py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-12 rounded-2xl lg:rounded-3xl font-medium lg:text-2xl text-sm sm:text-base flex items-center gap-3"
              onClick={handleContactModal}
            >
              Book a Demo <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="bg-black/30 backdrop-blur-[9.7px] text-white py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-12 rounded-2xl lg:rounded-3xl transition font-medium lg:text-2xl text-sm sm:text-base"
              onClick={handleLearnMore}
            >
              Learn More
            </PrimaryButton>
          </div>

          <p className="text-primary cursor-pointer flex gap-1 items-center">
            Scroll Down <IoArrowDownCircleOutline className="text-xl" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
