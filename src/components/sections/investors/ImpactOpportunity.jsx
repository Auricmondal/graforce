import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import thunderImg from "@/assets/investor/thunder.webp";
import React from "react";
import ImpactCard from "./ImpactCard";

const impactCardData = [
  {
    id: 1,
    icon: thunderImg,
    title: "80% Lower Cost",
    description:
      "High-voltage plasma (1300–1500 °C) cracks methane into hydrogen and carbon.",
    onClick: "() => { alert('Learn more about Plasma Power') }",
  },
  {
    id: 2,
    icon: thunderImg,
    title: "CO₂-Free Hydrogen",
    description:
      "No greenhouse gas emissions — byproduct carbon is stored or sold.",
    onClick: "() => { alert('Learn more about High Efficiency') }",
  },
  {
    id: 3,
    icon: thunderImg,
    title: "Industrial Byproducts",
    description: "Carbon black + heat create additional revenue streams.",
    onClick: "() => { alert('Learn more about Plasma Efficiency') }",
  },
  {
    id: 4,
    icon: thunderImg,
    title: "Ready for Market",
    description:
      "Demo plant operational in Austria, commercial rollout from 2025.",
    onClick: "() => { alert('Learn more about Plasma Efficiency') }",
  },
];

const ImpactOpportunity = () => {
  return (
    <div>
      <SectionWrapper sectionClassName="bg-cst-neutral-1" className="space-y-2">
        <CardWrapper className="">
          <div className="flex flex-col gap-2">
            <SectionLabel text="The Impact Opportunity" />
            <AnimatedHeader className={`text-xl capitalize text-black`}>
              Decarbonizing at Industrial Scale
            </AnimatedHeader>
          </div>
        </CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
          {impactCardData.map((card) => (
            <ImpactCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={card.onClick}
            />
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ImpactOpportunity;
