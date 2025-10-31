import React from "react";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import FloatingTip from "@/components/utils/heroutils/FloatingTip";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";

const WhatDoWeDo = () => {
  const FloatingTipData = [
    {
      text: "100% Carbon Value",
      position: "top-8 right-4 md:right-1/8 -translate-y-10 md:translate-0",
      delay: 1,
    },
    {
      text: "0% CO₂ Costs",
      position: "top-1/2 left-2/3 md:left-2/3 -translate-y-10 md:translate-0",
      delay: 0.2,
    },
    {
      text: "50% Energy Savings",
      position: "bottom-5 sm:bottom-5 left-1/9 -translate-y-10 md:translate-0",
      delay: 0.6,
    },
  ];

  return (
    <div
      className="flex flex-col md:flex-row gap-2 bg-cst-neutral-1 p-2"
      id="what-do-we-do"
    >
      <CardWrapper
        className="flex-1 px-6 py-8 lg:gap-4"
        variant="custom"
      >
        <SectionLabel text="What Do We Do" />
        <AnimatedHeader className="mt-[20vh] lg:mt-0">
          <h6 className="text-2xl font-semibold">
            We convert <span className="text-primary">Methane(CH4)</span> and{" "}
            <span className="text-primary">Renewable Energy</span> into{" "}
            <span className="text-primary">Clean Hydrogen</span>. Our technology
            replaces fossil fuels and{" "}
            <span className="text-primary">Cuts CO₂</span> emissions across
            industries.
          </h6>
        </AnimatedHeader>
      </CardWrapper>

      <div className="relative flex-1 bg-white rounded-2xl overflow-hidden min-h-[50vh] lg:min-h-0">
        {/* Globe Video */}
        <video
          src="/hero-videos/globe.webm"
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover object-[top_center] top-0"
        ></video>
        {FloatingTipData.map((tip, index) => (
          <FloatingTip
            key={index}
            className={tip.position}
            delay={tip.delay}
          >
            • {tip.text}
          </FloatingTip>
        ))}
      </div>
    </div>
  );
};

export default WhatDoWeDo;
