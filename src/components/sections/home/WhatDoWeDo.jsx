"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import FloatingTip from "@/components/utils/heroutils/FloatingTip";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import { client } from "@/lib/sanityClient"; // your existing client
import { whatDoWeDoSectionQuery } from "@/Queries/home/WhatDoWeDo";
import { useLanguage } from "@/hooks/useLanguage";
const WhatDoWeDo = () => {
  const [data, setData] = useState(null);
  const { language } = useLanguage();

  useEffect(() => {
    const lang = language || "en";
    client
      .fetch(whatDoWeDoSectionQuery,{language: lang })
      .then((res) => {
        if (res?.whatDoWeDo) setData(res.whatDoWeDo);
      })
      .catch(() => {
        // fallback content
        setData({
          sectionLabel: "What Do We Do",
          description: `
            We convert <span class="text-primary">Methane(CH4)</span> and 
            <span class="text-primary">Renewable Energy</span> into 
            <span class="text-primary">Clean Hydrogen</span>. Our technology 
            replaces fossil fuels and <span class="text-primary">Cuts CO₂</span> 
            emissions across industries.
          `,
          globeImage: { asset: { url: globeImg.src }, alt: "Globe" },
          floatingTips: [
            { text: "• 100% Carbon Value" },
            { text: "• 0% CO₂ Costs" },
            { text: "• 50% Energy Savings" },
          ],
        });
      });
  }, [language]);

  if (!data) return null; // optional loader

  return (
    <div
      className="flex flex-col md:flex-row gap-2 bg-cst-neutral-1 p-2"
      id="what-do-we-do"
    >
      <CardWrapper className="flex-1 rounded-2xl px-6 py-8 lg:gap-4" variant="custom">
        <SectionLabel text={data.sectionLabel || "What Do We Do"} />
        <AnimatedHeader className="mt-[20vh] lg:mt-0">
          <h6
            className="text-2xl font-semibold"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </AnimatedHeader>
      </CardWrapper>

      <div className="relative flex-1 bg-white rounded-2xl overflow-hidden min-h-[50vh] lg:min-h-0">
        <Image
          src={data.globeImage?.asset?.url || globeImg.src}
          alt={data.globeImage?.alt || "Globe"}
          className="object-cover select-none absolute"
          fill
          style={{
            transform: "rotateY(-180deg)",
            opacity: 1,
            scale: "2",
            top: "-100px",
            left: "-100px",
          }}
        />

        {data.floatingTips?.map((tip, index) => (
          <FloatingTip
            key={index}
            className={
              index === 0
                ? "top-8 right-4 md:right-1/8 -translate-y-10 md:translate-0"
                : index === 1
                ? "top-1/2 left-2/3 md:left-2/3 -translate-y-10 md:translate-0"
                : "bottom-5 sm:bottom-5 left-1/9 -translate-y-10 md:translate-0"
            }
            delay={0.2 * (index + 1)}
          >
            {tip.text}
          </FloatingTip>
        ))}
      </div>
    </div>
  );
};

export default WhatDoWeDo;
