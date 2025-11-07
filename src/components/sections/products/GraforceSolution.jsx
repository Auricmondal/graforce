"use client";

import React ,{useState,useEffect} from "react";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import SolutionIcon from "@/assets/product/SolutionIcon.png";
import GraforceSolutionCard from "./solutions/GraforceSolutionCard";

import CustomBlogData from "@/data/customBlogData.json";
import { useSidebarActions } from "@/hooks/useSidebarActions";

import client from "@/lib/sanityClient";
import { graforceSolutionSectionQuery } from "@/Queries/products/graforcesolution";


const FallbackSolutionCardData = [
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

  const [sectionLabel, setSectionLabel] = useState("The Graforce Solution");
  const [sectionHeader, setSectionHeader] = useState("Plasmalyzer®");
  const [cards, setCards] = useState(FallbackSolutionCardData);

useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(graforceSolutionSectionQuery);
        const section = res?.graforceSolutionSection;

        if (!section) {
          console.warn("⚠️ No Graforce Solution data found — using fallback data.");
          return;
        }

        setSectionLabel(section.sectionLabel || "The Graforce Solution");
        setSectionHeader(section.sectionHeader || "Plasmalyzer®");

        // If Sanity has cards, use them; otherwise, fallback
        if (section.cards?.length > 0) {
          setCards(section.cards);
        } else {
          console.warn("⚠️ No cards found in Sanity — using fallback cards.");
          setCards(FallbackSolutionCardData);
        }
      } catch (err) {
        console.error("❌ Failed to fetch Graforce Solution data:", err);
        setCards(FallbackSolutionCardData); // fallback on error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <SectionWrapper sectionClassName="bg-cst-neutral-1" className="space-y-2">
        <CardWrapper className="">
          <div className="flex flex-col gap-2">
            <SectionLabel text={sectionLabel}/>
            <AnimatedHeader className={`text-xl capitalize text-black`}>
               {sectionHeader}
            </AnimatedHeader>
          </div>
        </CardWrapper>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            {cards.map((card, index) => (
            <GraforceSolutionCard
              key={index}
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
