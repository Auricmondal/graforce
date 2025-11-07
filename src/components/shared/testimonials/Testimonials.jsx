"use client";
import React from "react";
import { useState , useEffect } from "react";

import SectionWrapper from "@/wrappers/SectionWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import FlipCard from "./FlipCard";

import reviewsData from "@/data/reviews.json";
import { client } from "@/lib/sanityClient";
import { testimonialSectionQuery } from "@/Queries/services/testimonials";


const Testimonial = ({ cards = reviewsData }) => {
  const [data, setData] = useState({
    sectionHeader: "This is What Our Customer Has to Say",
    sectionSubHeader: "Valuable Reviews",
    testimonials: reviewsData,
    });

    useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await client.fetch(testimonialSectionQuery);
        const section = res?.testimonialSection;

        if (!section) return;

        const testimonials =
          section.testimonials?.map((t, i) => ({
            companyName: t.companyName,
            logo: t.logo?.asset?.url || "/company.svg",
            review: t.review,
            reviewer: t.reviewer,
            designation: t.designation,
          })) || [];

        setData({
          sectionHeader:
            section.sectionHeader ||
            "This is What Our Customer Has to Say",
          sectionSubHeader: section.sectionSubHeader || "Valuable Reviews",
          testimonials: testimonials.length ? testimonials : reviewsData,
        });
      } catch (err) {
        console.error("❌ Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <SectionWrapper
      className="w-full"
      sectionStyle={{
        backgroundColor: "var(--cst-neutral-1)",
      }}
    >
      {" "}
      <CardWrapper
        className="gap-2 bg-white pt-[112px] pb-8 px-4 md:px-6"
        variant="custom"
      >
        <div className="flex flex-col gap-2">
          <SectionLabel text={data.sectionHeader}/>
          <AnimatedHeader>
            <div className="text-[32px] md:text-[64px]">
              <span className="text-primary">{data.sectionSubHeader}
</span>
            </div>
          </AnimatedHeader>
        </div>
      </CardWrapper>
      <CardWrapper
        className="gap-2 bg-white py-8 px-4 lg:px-6 mt-2"
        variant="custom"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          {data.testimonials.map((card, index) => (
            <FlipCard key={index} {...card} index={index} />
          ))}
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default Testimonial;
