import React from "react";

import SectionWrapper from "@/wrappers/SectionWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import Image from "next/image";
import sideImg from "@/assets/service/shapeDiamond.png";

const values = [
  {
    id: 1,
    title: "Relentless Innovation",
    description:
      "We don't just adapt to change; we drive it. At Grafoce, every challenge is an opportunity to pioneer solutions that redefine what's possible in clean energy.",
    color: "bg-[#5627DA]",
  },
  {
    id: 2,
    title: "Impact Over Intent",
    description:
      "We measure success by the difference we make. Our work isn't just about ideas; it's about tangible outcomes that advance sustainability and resilience.",
    color: "bg-cst-neutral-5",
  },
  {
    id: 3,
    title: "Collaborative Excellence",
    description:
      "Great things happen when diverse minds unite. We foster a culture where teamwork and open communication lead to groundbreaking solutions.",
    color: "bg-cst-neutral-4",
  },
  {
    id: 4,
    title: "Integrity in Action",
    description:
      "Trust is earned through consistency and transparency. We uphold the highest ethical standards, ensuring that our progress benefits both people and the planet.",
    color: "bg-[#5627DA]",
  },
];

const Ourvalues = () => {
  return (
    <SectionWrapper
      className="bg-[#E6E6E6] text-black"
      sectionStyle={{ backgroundColor: "#E6E6E6" }}
    >
      <div className="space-y-2">
        <CardWrapper
          className="gap-2"
          variant="featured"
          color="default"
          align="center"
        >
          <SectionLabel text="Our Values" />
          <h2 className="text-2xl md:text-3xl md:text-[48px] tracking-tight">
            <AnimatedHeader>The Four Pillars Of Graforce</AnimatedHeader>
          </h2>
        </CardWrapper>
        <CardWrapper className="!px-3 md:!px-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {values.map((value) => (
            <div
              className={`rounded-lg p-6 col-span-1 text-white h-[483px] flex flex-col justify-between relative ${value.color} overflow-hidden`}
              key={value.id}
            >
              <Image
                src={sideImg}
                alt="Globe"
                className="object-contain select-none absolute"
                style={{
                  transform: "rotate(215deg)",
                  opacity: 1,
                  scale: 0.6,
                  top: "-55.31%",
                  left: "51.02%",
                  objectFit: "contain",
                }}
              />
              <div className="">
                <div className="text-[64px] text-[#464646]">0{value.id}</div>
                <h3 className="text-2xl lg:text-5xl">{value.title}</h3>
              </div>
              <p className="lg:text-2xl leading-relaxed">{value.description}</p>
            </div>
          ))}
        </CardWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Ourvalues;
