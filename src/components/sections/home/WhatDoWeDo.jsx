"use client"

import React, { useState, useEffect } from "react";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import FloatingTip from "@/components/utils/heroutils/FloatingTip";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import client from "@/lib/sanityClient";
import { whatDoWeDoSectionQuery } from "@/Queries/home/WhatDoWeDo";
import { useLanguage } from "@/hooks/useLanguage";

const WhatDoWeDo = () => {
  const { language } = useLanguage();

  // --- Default fallback content (matches original static layout) ---
  const [sectionLabel, setSectionLabel] = useState("What Do We Do");
  const [description, setDescription] = useState(`
    We convert <span class="text-primary">Methane(CH4)</span> and 
    <span class="text-primary">Renewable Energy</span> into 
    <span class="text-primary">Clean Hydrogen</span>. Our technology 
    replaces fossil fuels and <span class="text-primary">Cuts CO₂</span> 
    emissions across industries.
  `);
  const [globeMedia, setGlobeMedia] = useState("/hero-videos/globe.webm");
  const [floatingTips, setFloatingTips] = useState([
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
  ]);

   useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = language || "en";
        const res = await client.fetch(whatDoWeDoSectionQuery, { language: lang });
        const section = res?.whatDoWeDo;

        if (!section) {
          console.warn("⚠️ No 'whatDoWeDo' data found in Sanity — using fallback.");
          return;
        }

        setSectionLabel(section.sectionLabel || "What Do We Do");
        setDescription(section.description || description);

        const url = section.globeImage?.asset?.url;
        if (typeof url === "string" && url.length > 0) {
          setGlobeMedia(url);
        }

        if (Array.isArray(section.floatingTips) && section.floatingTips.length > 0) {
          setFloatingTips(section.floatingTips);
        }
      } catch (err) {
        console.error("❌ Failed to fetch 'WhatDoWeDo' from Sanity:", err);
      }
    };

    fetchData();
  }, [language]);

  const isVideo =
    globeMedia.endsWith(".webm") || globeMedia.endsWith(".mp4");

  return (
    <div
      className="flex flex-col md:flex-row gap-2 bg-cst-neutral-1 p-2"
      id="what-do-we-do"
    >
      <CardWrapper
        className="flex-1 px-6 py-8 lg:gap-4"
        variant="custom"
      >
        <SectionLabel text={sectionLabel}/>
        <AnimatedHeader className="mt-[20vh] lg:mt-0">
          <h6 className="text-2xl font-semibold">
            {description}
          </h6>
        </AnimatedHeader>
      </CardWrapper>

      <div className="relative flex-1 bg-white rounded-2xl overflow-hidden min-h-[50vh] lg:min-h-0">
        {/* Globe Video */}
        {isVideo ? (
        <video
          src={globeMedia}
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover object-[top_center] top-0"
        ></video>
        ):(
          <img
            src={globeMedia}
            alt="Globe"
            className="absolute w-full h-full object-cover object-[top_center] top-0"
          />
        )}
        {floatingTips.map((tip, index) => (
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