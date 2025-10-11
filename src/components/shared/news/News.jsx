import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";
import { TbSquareRotatedFilled } from "react-icons/tb";

import img from "@/assets/service/ServiceSolution2.jpg";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const News = () => {
  const newsData = [
    {
      id: 1,
      image: img,
      tag: "Tag",
      title: "Some News Title That says Something",
      date: "08th Sept, 2025",
    },
    {
      id: 2,
      image: img, // Replace with your actual image path
      tag: "Tag",
      title: "Some News Title That says Something",
      date: "08th Sept, 2025",
    },
    {
      id: 3,
      image: img, // Replace with your actual image path
      tag: "Tag",
      title: "Some News Title That says Something",
      date: "08th Sept, 2025",
    },
  ];

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper>
        <div className="flex flex-col gap-4 md:gap-8 w-full">
          {/* Header */}
          <div className="">
            <SectionLabel
              text="News"
              icon={true}
              invertIcon={false}
            />
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {newsData.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-2xl group-hover:rounded-[96px] transition-all duration-500 ease-in-out">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Tag */}
                <div className="mb-3">
                  <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-xl">
                    {article.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-black mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                  <AnimatedHeader>{article.title}</AnimatedHeader>
                </h3>

                {/* Date */}
                <p className="text-cst-neutral-3 text-xl">
                  <AnimatedHeader>Posted on {article.date}</AnimatedHeader>
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default News;
