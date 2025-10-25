"use client";

import React from "react";
import SectionWrapper from "@/wrappers/SectionWrapper";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import HoverCard from "@/components/utils/cards/HoverCard";
import thunderImg from "@/assets/thunder.webp";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomJobData from "@/data/customJobData.json";

const sectorData = [
  {
    id: 1,
    icon: thunderImg,
    title: "Marketing Manager",
    description:
      "High-voltage plasma (1300–1500 °C) cracks methane into hydrogen and carbon.",
    onClick: "() => { alert('Learn more about Plasma Power') }",
  },
  {
    id: 2,
    icon: thunderImg,
    title: "Marketing Manager",
    description:
      "No greenhouse gas emissions — byproduct carbon is stored or sold.",
    onClick: "() => { alert('Learn more about High Efficiency') }",
  },
  {
    id: 3,
    icon: thunderImg,
    title: "Marketing Manager",
    description: "Carbon black + heat create additional revenue streams.",
    onClick: "() => { alert('Learn more about Plasma Efficiency') }",
  },
];

const JobOpenings = () => {
  const { showJobContent } = useSidebarActions();
  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1"
      className="flex flex-col gap-2"
    >
      <CardWrapper
        className="flex-1 rounded-2xl px-6 py-8 lg:gap-4"
        variant="custom"
      >
        <SectionLabel text="Job Openings" />
        <h3 className="text-[32px] md:text-5xl font-medium" id="job-openings">
          <AnimatedHeader className="">
            Build the future. Together.
          </AnimatedHeader>
        </h3>
      </CardWrapper>
      <CardWrapper
        className="flex-1 rounded-2xl px-6 py-8 lg:gap-4"
        variant="custom"
      >
        <h6 className="text-2xl font-medium">
          <AnimatedHeader className="">Sector</AnimatedHeader>
        </h6>
      </CardWrapper>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        {sectorData.map((card) => (
          <HoverCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            onClick={() => showJobContent(CustomJobData)}
          />
        ))}
      </div>
      <CardWrapper
        className="flex-1 rounded-2xl px-6 py-8 lg:gap-4"
        variant="custom"
      >
        <h6 className="text-2xl font-medium">
          <AnimatedHeader className="">Sector</AnimatedHeader>
        </h6>
      </CardWrapper>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
        {sectorData.map((card) => (
          <HoverCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
            onClick={() => showJobContent(CustomJobData)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default JobOpenings;
