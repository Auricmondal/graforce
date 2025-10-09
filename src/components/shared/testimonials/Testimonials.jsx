"use client";
import React from "react";

import SectionWrapper from "@/wrappers/SectionWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import FlipCard from "./FlipCard";

const cards = [
  {
    companyName: "Company Name",
    logo: "/company.svg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Cras donec non est in pretium pharetra in.",
    reviewer: "Name of Reviewer",
    designation: "Designation",
  },
  {
    companyName: "Company Name",
    logo: "/company.svg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Cras donec non est in pretium pharetra in.",
    reviewer: "Name of Reviewer",
    designation: "Designation",
  },
  {
    companyName: "Company Name",
    logo: "/company.svg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Cras donec non est in pretium pharetra in.",
    reviewer: "Name of Reviewer",
    designation: "Designation",
  },
  {
    companyName: "Company Name",
    logo: "/company.svg",
    review:
      "Lorem ipsum dolor sit amet consectetur. Cras donec non est in pretium pharetra in.",
    reviewer: "Name of Reviewer",
    designation: "Designation",
  },
];

const Testimonial = () => {
  return (
    <SectionWrapper
      className="w-full"
      sectionStyle={{
        backgroundColor: "var(--cst-neutral-1)",
      }}
    >
      {" "}
      <CardWrapper
        className="rounded-lg gap-2 bg-white pt-[112px] pb-8 px-4 md:px-6"
        variant="custom"
      >
        <div className="flex flex-col gap-2">
          <SectionLabel text={"This is What Our Customer Has to Say"} />
          <AnimatedHeader>
            <div className="text-[32px] md:text-[64px]">
              <span className="text-primary">Valuable</span> Reviews
            </div>
          </AnimatedHeader>
        </div>
      </CardWrapper>
      <CardWrapper
        className="rounded-lg gap-2 bg-white py-8 px-4 lg:px-6 mt-2"
        variant="custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {cards.map((card, index) => (
            <FlipCard key={index} {...card} index={index} />
          ))}
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default Testimonial;
