import Image from "next/image";
import importantDetailsImg from "@/assets/product/imp-details.webp";
import leftImg from "@/assets/service/ServiceSolution1.jpg";
import InfoCard from "./InfoCard";
import DataCard from "./DataCard";
import lightningImg from "@/assets/product/lightning.svg";
import h2Img from "@/assets/product/h2.svg";
import cImg from "@/assets/product/c.svg";
import RiveAutoplay from "@/components/utils/animations/RiveAutoplay";

const cards = [
  {
    title: "Sustainability",
    text: "Biomethane doesn't just reduce emissions, it reverses them.",
    icon: lightningImg.src,
    bgColor: "bg-[#5B24D1]",
    textColor: "text-white",
  },
  {
    title: "Regulatory Advantage",
    text: "Exempt from CO₂ tax.",
    icon: lightningImg.src,
    bgColor: "bg-cst-neutral-5", // black
    textColor: "text-white",
  },
  {
    title: "Hydrogen",
    text: "CHP, SOFC fuel cells, hydrogen boilers",
    icon: h2Img.src,
    bgColor: "bg-cst-neutral-4", // dark gray
    textColor: "text-white",
  },
  {
    title: "Carbon",
    text: "Asphalt, concrete, cement, soil conditioning",
    icon: cImg.src,
    bgColor: "bg-[#5B24D1]",
    textColor: "text-white",
  },
];

export const leftTypes = {
  1: (
    <div className="p-2 flex flex-col h-full justify-center">
      <RiveAutoplay
        src={"/animations/methane.riv"}
        stateMachines={"timeline"}
        delay={800}
      />
    </div>
  ),
  2: (
    <div className="flex h-full w-full bg-cst-neutral-1 gap-2">
      <div className="w-1/2 h-full hidden md:block">
        <Image
          src={leftImg.src}
          alt="Abstract Background"
          height={800}
          width={1000}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Right Panels */}

      <div className="w-full md:w-1/2 h-full flex flex-col gap-2">
        {/* 0.5 MW Plasmalyzer Module */}
        <InfoCard
          title="0.5 MW Plasmalyzer Module"
          bgColor="var(--cst-neutral-5)"
          textColor="white"
          labelColor="#9ca3af"
          barData={[
            { label: "H₂", height: "5rem", color: "#3a3a3d" },
            { label: "C", height: "8rem", color: "#3a3a3d" },
          ]}
          outputs={[
            { amount: 50, unit: "Kg", label: "Hydrogen" },
            { amount: 150, unit: "Kg", label: "Carbon" },
          ]}
        />

        {/* 20 MW Plant */}
        <InfoCard
          title={{ left: "20 MW Plant", right: "40 Modules" }}
          bgColor="#5627da"
          textColor="white"
          labelColor="rgba(255,255,255,0.8)"
          barData={[
            { label: "H₂", height: "5rem", color: "#8968e5" },
            { label: "C", height: "8rem", color: "#8968e5" },
          ]}
          outputs={[
            { amount: 2, unit: "Tons", label: "Hydrogen" },
            { amount: 6, unit: "Tons", label: "Carbon" },
          ]}
        />
      </div>
    </div>
  ),
  3: (
    <div className="flex h-full w-full bg-cst-neutral-1 gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full min-h-[160vh] md:min-h-[80vh]">
        {cards.map((card, index) => (
          <DataCard
            key={index}
            title={card.title}
            text={card.text}
            icon={card.icon}
            bgColor={card.bgColor}
            textColor={card.textColor}
          />
        ))}
      </div>
    </div>
  ),
};
