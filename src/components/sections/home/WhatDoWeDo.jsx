import React from "react";
import Image from "next/image";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import globeImg from "@/assets/home/globe.webp";
import FloatingTip from "@/components/utils/heroUtils/FloatingTip";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const WhatDoWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 bg-cst-neutral-1 p-2">
      <div className="flex-1 bg-white rounded-2xl px-6 py-8 flex flex-col lg:gap-4">
        <SectionLabel text="What Do We Do" />
        <AnimatedHeader>
        <h6 className="text-2xl font-semibold mt-[20vh] lg:mt-0">
          We convert <span className="text-primary">Waste</span> and{" "}
          <span className="text-primary">Renewable Energy</span> into{" "}
          <span className="text-primary">Clean Hydrogen</span>. Our technology
          replaces fossil fuels and{" "}
          <span className="text-primary">Cuts CO₂</span> emissions across
          industries.
        </h6>
        </AnimatedHeader>
      </div>

      <div className="relative flex-1 bg-white rounded-2xl overflow-hidden min-h-[50vh] lg:min-h-0">
        {/* Globe Image */}
        <Image
          src={globeImg}
          alt="Globe"
          className="object-cover select-none absolute"
          fill
          style={{
            transform: "rotateY(-180deg)",
            opacity: 1,
            scale: "2",
            top: "-100px",
            left: "-100px",
          }}
        />

        <FloatingTip
          className="top-8 right-4 md:right-1/8 -translate-y-10 md:translate-0"
          delay={1}
        >
          • 100% Carbon Value
        </FloatingTip>

        <FloatingTip
          className="top-1/2 left-2/3 md:left-2/3 -translate-y-10 md:translate-0"
          delay={0.2}
        >
          • 0% CO₂ Costs
        </FloatingTip>
        <FloatingTip
          className="bottom-5 sm:bottom-5 left-1/9 -translate-y-10 md:translate-0"
          delay={0.6}
        >
          • 50% Energy Savings
        </FloatingTip>

        {/* Tablet version (hidden on desktop) */}
        {/* <Image
            src={globeImg}
            alt="Globe tablet"
            className="object-contain select-none md:hidden block"
            draggable={false}
            style={{
              width: "952.74px",
              height: "714.55px",
              transform: "rotate(-180deg)",
              opacity: 1,
              position: "absolute",
              top: "-238.78px",
              left: "-324.54px",
            }}
          /> */}
        {/* </div> */}

        {/* Text Labels */}
        {/* <div className="absolute inset-0 flex justify-center items-center">

          <div className="absolute top-[28%] md:top-[20%] md:left-[55%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 100% Carbon Value
          </div>

          <div className="absolute bottom-[18%] md:bottom-[25%] md:left-[28%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 50% Energy Savings
          </div>

          <div className="absolute bottom-[22%] md:bottom-[30%] md:right-[25%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 0% CO₂ Costs
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhatDoWeDo;
