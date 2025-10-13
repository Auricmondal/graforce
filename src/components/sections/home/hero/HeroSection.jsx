"use client";
import React, { act } from "react";
import { useContactModal } from "@/contexts/ContactModalContext";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import { sidebarUtils } from "@/utils/sidebarUtils";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomJobData from "@/data/CustomJobData.json"
import CustomBlogData from "@/data/CustomBlogData.json";
import CustomSpecData from "@/data/CustomSpecData.json";

const HeroSection = () => {
  const { isOpen, closeModal, openModal } = useContactModal();
  const { showCustomContent, showSpecificationsContent, showReadingContent, showContactForm } = useSidebarActions();

  const handleLearnMore = (e) => {
    e.preventDefault();
    showReadingContent(CustomBlogData);
    // Scroll to solutions section
    // const section = document.getElementById("solutions-section");
    // if (section) {
    //   section.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //   });
    // }
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
      <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-between text-center lg:text-start text-white">
        <div className="flex-3 flex items-center">
          <h1 className="text-[clamp(40px,10vw,128px)] font-semibold max-w-8xl w-full lg:px-6 leading-[110%]">
            <AnimatedHeader delay={0.8}>
              Powering the Future with{" "}
              <span className="text-primary">Hydrogen</span>
            </AnimatedHeader>
          </h1>
        </div>
        <div className="flex-1 lg:flex-0 flex flex-col lg:flex-row items-center lg:items-end lg:justify-between w-full px-6 lg:pb-8 gap-4">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-fit">
            <PrimaryButton
              className="bg-black/30 text-white transition border-1 border-white backdrop-blur-[17.4px] py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-12 rounded-2xl lg:rounded-3xl font-medium lg:text-2xl text-sm sm:text-base flex items-center gap-3 w-full md:w-fit justify-center"
              onClick={() => {
                /*
                * Show custom content in sidebar
                */
                // showCustomContent(CustomJobData);
                /*
                * Show reading content in sidebar
                */
                // showReadingContent(CustomBlogData);
                /*
                * Show specifications content in sidebar
                */
                // showSpecificationsContent(CustomSpecData);

                /*
                * Show contact form in sidebar
                */
                showContactForm();

                // showCustomContent(CustomJobData);
                // showReadingContent(CustomBlogData);
                // showSpecificationsContent(CustomSpecData);
              }}
            >
              Book a Demo <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="bg-black/30 backdrop-blur-[9.7px] text-white py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-12 rounded-2xl lg:rounded-3xl transition font-medium lg:text-2xl text-sm sm:text-base w-full md:w-fit"
              onClick={handleLearnMore}
            >
              Learn More
            </PrimaryButton>
          </div>

          <p className="cursor-pointer flex gap-1 items-center w-fit">
            Scroll Down{" "}
            <IoArrowDownCircleOutline className="text-xl animate-bounce" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
