import SectionWrapper from "@/wrappers/SectionWrapper";
import React from "react";
import Image from "next/image";
import hotnews from "@/assets/blogs/HotNews.jpg";

const LatestNews = () => {
  return (
    <SectionWrapper className="text-black bg-white py-10 space-y-10 mx-auto ">
      <div className="text-2xl font-bold max-w-[2000px] mx-auto">
        <div className="w-full flex justify-center items-start px-4 gap-4 md:min-h-[740px]">
          <div className="w-[70%] borer bordr-red-600 space-y-6">
            <p className="text-5xl">Latest News</p>
            <div className="flex relative">
              <Image src={hotnews} alt="hot-news" className="absolute w-full h-auto rounded-2xl object-cover aspect-[4/3]" />
            </div>
          </div>
          <div className="w-[30%] border border-blue-600"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LatestNews;
