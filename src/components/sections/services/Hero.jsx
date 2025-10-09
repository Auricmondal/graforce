"use client";
import React, { useContext } from "react";
import Image from "next/image";
import ScrollReveal from "@/wrappers/ScrollReveal";

import HeroImg from "@/assets/service/hero/Hero.png";

import FloatingBolt from "@/components/utils/heroutils/FloatingBolt";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import ElevatedButton from "@/components/utils/buttons/ElevatedButton";

import bgImg from "@/assets/service/hero/service-hero.webp";
import { useContactModal } from "@/contexts/ContactModalContext";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import { FaChevronRight } from "react-icons/fa";
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
    // <div
    //   className="bg-no-repeat lg:bg-repeat bg-cover xl:bg-contain bg-center bg-white"
    //   style={{
    //     backgroundImage: `url(${vector.src})`,
    //     //backgroundSize: '60%',
    //     backgroundPosition: "center",
    //     opacity: 1,
    //     mixBlendMode: "color",
    //   }}
    // >
    //   <div className="max-w-[2000px] mx-auto ">
    //     <div className="overflow-hidden ">
    //       <ScrollReveal>
    //         <div className="w-full flex flex-col gap-8 items-center z-10 pt-32 ">
    //           <h1 className="text-4xl lg:text-7xl 2xl:text-8xl text-center lg:max-2xl:max-w-4xl 2xl:max-w-6xl">
    //             Hydrogen. Zero CO2 Emissions.
    //           </h1>
    //           <div className="flex md:flex-wrap md:flex-row gap-4 flex-col items-center justify-center w-full px-8">
    //             <FloatupButton
    //               className="md:!w-fit"
    //               icon={"❯"}
    //               onClick={handleContactModal}
    //             >
    //               Talk to an Expert
    //             </FloatupButton>
    //             <ElevatedButton
    //               className="md:!w-fit cursor-pointer"
    //               onClick={handleLearnMore}
    //             >
    //               Learn More
    //             </ElevatedButton>
    //           </div>
    //         </div>
    //       </ScrollReveal>

    //       <div className="w-full flex justify-center items-center pt-18 mt-12">
    //         <Image src={HeroImg} alt="HeroImg" className="w-full" />
    //       </div>
    //       <div>
    //         <FloatingBolt
    //           className="top-90 left-1/6 md:top-60 md:left-9/50 xl:top-40 2xl:left-4/25"
    //           size="sm:w-16 sm:h-16 h-14 w-14"
    //         />
    //         <FloatingBolt
    //           className="top-100 right-1/7 md:top-90 md:right-1/5 lg:top-90 lg:right-1/4"
    //           size="sm:w-10 sm:h-10 h-8 w-8"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
