import React from "react";
import Image from "next/image";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import globeImg from "@/assets/home/globe.webp";

const WhatDoWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 bg-cst-neutral-1 p-2">
      <div className="flex-1 bg-white rounded-2xl px-6 py-8 flex flex-col gap-4">
        <SectionLabel text="What Do We Do" />
        <h6 className="text-2xl font-semibold">
          We convert <span className="text-primary">Waste</span> and{" "}
          <span className="text-primary">Renewable Energy</span> into{" "}
          <span className="text-primary">Clean Hydrogen</span>. Our technology
          replaces fossil fuels and{" "}
          <span className="text-primary">Cuts CO₂</span> emissions across
          industries.
        </h6>
      </div>
      {/* <div
        className="flex-1 bg-white rounded-2xl px-6 py-8"
        style={{
          backgroundImage: `url(${globeImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "rotate(-90deg)",
          position: "fixed",
        top: "-483.08px",
        left: "-442px",
        }}
      >
        Item 2
      </div> */}

      <div className="relative flex-1 bg-white rounded-2xl px-6 py-8 overflow-hidden">
        {/* Globe Image */}
        <div className="absolute">
          <Image
            src={globeImg}
            alt="Globe"
            className="object-contain select-none"
            draggable={false}
            style={{
              width: "1297.54px",
              height: "973.15px",
              transform: "rotate(-180deg)",
              opacity: 1,
              position: "absolute",
              top: "-483.08px",
              left: "-442px",
            }}
          />

          {/* Tablet version (hidden on desktop) */}
          <Image
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
          />
        </div>

        {/* Text Labels */}
        <div className="absolute inset-0 flex justify-center items-center">
          {/* 100% Carbon Value */}
          <div className="absolute top-[28%] md:top-[20%] md:left-[55%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 100% Carbon Value
          </div>

          {/* 50% Energy Savings */}
          <div className="absolute bottom-[18%] md:bottom-[25%] md:left-[28%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 50% Energy Savings
          </div>

          {/* 0% CO₂ Costs */}
          <div className="absolute bottom-[22%] md:bottom-[30%] md:right-[25%] bg-white/80 backdrop-blur-md shadow-md rounded-lg px-4 py-2 text-sm font-semibold text-gray-900">
            <span className="text-blue-600">•</span> 0% CO₂ Costs
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoWeDo;
