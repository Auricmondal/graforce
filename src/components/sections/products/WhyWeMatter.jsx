"use client";
import React from "react";
import { useState,useEffect } from "react";
import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";
import tempProblemData from "@/data/tempProblems.json";
import client from "@/lib/sanityClient";
import { whyWeMatterSectionQuery } from "@/Queries/products/whywematter";

export default function WhyWeMatter() {
   const [sectionData, setSectionData] = useState({
    header: "Our Mission is to Save the Earth",
    subHeader: "Here is Why We Matter",
    cards: tempProblemData,
     buttonLink: "/industries",
  });

  useEffect(() => {
    const fetchSection = async () => {
      try {
        const res = await client.fetch(whyWeMatterSectionQuery);
        const section = res?.whyWeMatterSection;

        if (!section) {
          console.warn("⚠️ No whyWeMatterSection found in Sanity, using fallback.");
          return;
        }

        const cards = section.cards?.length ? section.cards : tempProblemData;

        setSectionData({
          header: section.sectionHeader || "Our Mission is to Save the Earth",
          subHeader: section.sectionSubHeader || "Here is Why We Matter",
          cards,
             buttonLink: section.buttonLink || "/industries",
        });
      } catch (err) {
        console.error("❌ Failed to fetch Why We Matter section:", err);
      }
    };

    fetchSection();
  }, []);

  return (
    <CircularAnimationGraph
      header={sectionData.header}
      subHeader={sectionData.subHeader}
      problemData={sectionData.cards}
       buttonLink={sectionData.buttonLink}
    />
  );
}
