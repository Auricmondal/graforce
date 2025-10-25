"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React from "react";
import hotnews from "../../../assets/blogs/HotNews.jpg";
import sidehotpic from "../../../assets/blogs/SideHotPic.jpg"
import CardWrapper from "@/wrappers/CardWrapper";
import Image from "next/image";
import SplitLines from "@/components/utils/splitter/SplitLines";

const LatestNews = () => {
  return (
    <SectionWrapper sectionClassName="text-black bg-cst-neutral-1 space-y-10 mx-auto">
      <CardWrapper
        variant="custom"
        className="h-fit py-8 px-4 sm:py-16 sm:px-6"
      >
        <div className="text-2xl font-bold mx-auto w-full h-full flex flex-col justify-center">
          <div className="w-full md:flex flex-row justify-center items-start px-4 gap-4 space-y-4 h-full">
            {/* Left section */}
            <div className="fle flex-col justify-between md:w-[75%] space-y-6 h-full">
              <div className="">
                <p className="text-5xl grow-1">Latest News</p>
              </div>

              {/* Background Image Div */}
              <div
                className="flex flex-col relative rounded-2xl bg-gray-400 p-4"
              // style={{
              //   backgroundImage: `url(${hotnews.src})`, // ✅ Must use .src in Next.js
              // }}
              >
                {/* Optional overlay */}
                {/* <div className="absolute inset-0 bg-black/20"></div> */}

                <div className="border border-white">
                  {/* <ul>
                    <li className="text-white uppercase">partnership</li>
                  </ul> */}
                  partnership
                </div>

                {/* Optional text content */}
                <div className="relative z-10">
                  <SplitLines>
                    {/* Breaking News – Something Hot Happened! */}
                    <h2 className="text-lg md:text-7xl font-semibold bg-white text-black px-3 py-1 rounded-md inline-block">
                      Zero Carbon CHP with Kawasaki
                    </h2>
                  </SplitLines>
                </div>
              </div>
            </div>

            {/* Right section */}
            <div className="md:w-[25%] h-full space-y-3">
              {/* <div className="w-full h-full border border-green-600">hello</div> */}
              {/* Background Image Div */}
              <div
                className="flex relative overflow-hidden bg-cover bg-center rounded-2xl h-[50%] w-full"
              // style={{
              //   backgroundImage: `url(${sidehotpic.src})`, // ✅ Must use .src in Next.js
              // }}
              >
                <Image
                  src={sidehotpic.src}
                  alt="Side Hot Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 opacity-60 bg-gradient-to-l from-[#1E428A] via-[#132957] to-[#081124]"></div>
              </div>
              <div
                className="flex relative overflow-hidden bg-cover bg-top rounded-2xl h-[50%] w-full"
              // style={{
              //   backgroundImage: `url(${sidehotpic.src})`, // ✅ Must use .src in Next.js
              // }}
              >
                <Image
                  src={sidehotpic.src}
                  alt="Side Hot Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
                <div className="absolute inset-0 opacity-60 bg-gradient-to-l from-[#1E428A] via-[#132957] to-[#081124]"></div>
              </div>
            </div>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default LatestNews;
