"use client";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import SolutionIcon from "@/assets/product/SolutionIcon.png";
import React from "react";
import GraforceSolutionCard from "./solutions/GraforceSolutionCard";

import CustomBlogData from "@/data/customBlogData.json";
import { useSidebarActions } from "@/hooks/useSidebarActions";

const SolutionCardData = [
  {
    id: 1,
    icon: SolutionIcon,
    title: "Plasma Power",
    description:
      "High-voltage plasma (1300–1500 °C) cracks methane into hydrogen and carbon.",
  },
  {
    id: 2,
    icon: SolutionIcon,
    title: "High Efficiency",
    description:
      "Up to 95% of the energy in methane is converted into hydrogen and carbon.",
  },
  {
    id: 3,
    icon: SolutionIcon,
    title: "Plasma Efficiency",
    description:
      "Plasmalyzer® maximizes energy output from every unit of methane processed.",
  },
];

const GraforceSolution = () => {
  const { showReadingContent } = useSidebarActions();
  return (
    <div>
      <SectionWrapper sectionClassName="bg-cst-neutral-1" className="space-y-2">
        <CardWrapper className="">
          <div className="flex flex-col gap-2">
            <SectionLabel text="The Graforce Solution" />
            <AnimatedHeader className={`text-xl capitalize text-black`}>
              Plasmalyzer®
            </AnimatedHeader>
          </div>
        </CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          {SolutionCardData.map((card) => (
            <GraforceSolutionCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => showReadingContent(CustomBlogData)}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default GraforceSolution;
