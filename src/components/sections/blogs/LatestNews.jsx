"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React from "react";
import hotnews from "../../../assets/blogs/HotNews.jpg";
import sidehotpic from "../../../assets/blogs/SideHotPic.jpg"

const LatestNews = () => {
  return (
    <SectionWrapper className="text-black bg-white py-10 space-y-10 mx-auto">
      <div className="text-2xl font-bold max-w-[2000px] mx-auto">
        <div className="w-full md:flex flex-row justify-center items-start px-4 gap-4 space-y-4 h-full max-h-auto">
          {/* Left section */}
          <div className="flex-col justify-between md:w-[75%]  space-y-6 h-full">
            <p className="text-5xl grow-1">Latest News</p>

            {/* Background Image Div */}
            <div
              className="flex grow-1 relative overflow-hidden bg-cover bg-center rounded-2xl h-full w-full md:aspect-[5/4]"
              style={{
                backgroundImage: `url(${hotnews.src})`, // ✅ Must use .src in Next.js
              }}
            >
              {/* Optional overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Optional text content */}
              <div className="relative z-10 text-white p-6">
                Breaking News – Something Hot Happened!
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="md:w-[25%] h-full min-h-full space-y-3">
            {/* <div className="w-full h-full border border-green-600">hello</div> */}
            {/* Background Image Div */}
            <div
              className="flex relative overflow-hidden bg-cover bg-center rounded-2xl h-[50%] w-full md:aspect-[3/4]"
              style={{
                backgroundImage: `url(${sidehotpic.src})`, // ✅ Must use .src in Next.js
              }}
            >
              <div className="absolute inset-0 opacity-60 bg-gradient-to-l from-[#1E428A] via-[#132957] to-[#081124]"></div>
            </div>
            <div
              className="flex relative overflow-hidden bg-cover bg-top rounded-2xl h-[50%] w-full md:aspect-[3/4]"
              style={{
                backgroundImage: `url(${sidehotpic.src})`, // ✅ Must use .src in Next.js
              }}
            >
              <div className="absolute inset-0 opacity-60 bg-gradient-to-l from-[#1E428A] via-[#132957] to-[#081124]"></div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LatestNews;
