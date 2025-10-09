import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";
import { TbSquareRotatedFilled } from "react-icons/tb";

import img from "@/assets/service/ServiceSolution2.jpg";

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
    <SectionWrapper className="bg-white">
      <div className="max-w-[2000px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <GradientBadge
            variant="News"
            text="News"
            icon={<TbSquareRotatedFilled />}
            className="p-[4px_16px] rounded-full opacity-100 inline-flex items-center justify-start bg-gradient-to-r from-primary-50 to-primary-300 text-white text-base md:text-lg font-medium border-[0.5px] border-black/10"
          />
          <Link
            href="#"
            className="text-black md:text-base text-xs underline  hover:underline-offset-1 hover:decoration-transparent transition-all duration-150 ease font-medium"
          >
            Read More Articles
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <span className="inline-block px-4 py-1 bg-primary-300 text-white text-sm font-medium rounded-xl">
                  {article.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-3 leading-tight group-hover:text-primary-600 transition-colors duration-300">
                {article.title}
              </h3>

              {/* Date */}
              <p className="text-cst-neutral-600 text-sm">
                Posted on {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default News;
