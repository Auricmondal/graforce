"use client";

import React from "react";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";

const AboutUs = () => {
  const brandLogoBase = "/brand/img/";

  // Hardcoded fallback logos
  const fallbackLogos = [
    { src: `${brandLogoBase}digicert_icon.png.webp`, name: "Brand 1" },
    { src: `${brandLogoBase}Group.webp`, name: "Brand 2" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 3" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 4" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 5" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 6" },
  ];

  // Local fallback for individual broken images
  const handleImgError = (e) => {
    e.target.src = `${brandLogoBase}default-logo.webp`;
  };

  return (
    <SectionWrapper
      className="bg-[#E6E6E6] text-black space-y-10 "
      sectionStyle={{ backgroundColor: "#E6E6E6" }}
    >
      <div className="space-y-2">
        <CardWrapper
          className="gap-2 p-8"
          variant="custom"
          color="default"
          align="center"
        >
          <SectionLabel text="Social Proof" />
          <h2 className="text-2xl lg:text-5xl md:text-[48px] tracking-tight">
            <AnimatedHeader>Recognized by Industry Leaders</AnimatedHeader>
          </h2>

          <p>
            <AnimatedHeader>
              Graforce is featured in global media and industry reports.
            </AnimatedHeader>
          </p>
        </CardWrapper>

        <div
          id="brands"
          className="grid md:grid-cols-3 grid-cols-2 gap-4 p-0 h-fit w-full bg-cst-neutral-1 rounded-lg"
        >
          {fallbackLogos.map((logo, i) => (
            <div
              key={i}
              className="group flex items-center justify-center bg-cst-neutral-1 border border-cst-neutral-2 rounded-lg h-[131px] md:h-[196px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                onError={handleImgError}
                className="w-[25%] h-[25%] object-contain rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;