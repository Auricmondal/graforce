"use client";

import React from "react";
import CardsSection from "@/components/sections/blogs/CardsSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import OtherServices from "@/components/shared/otherServices/OtherServices";
import HeroBlogs from "@/components/sections/blogs/Hero";
import LatestNews from "@/components/sections/blogs/LatestNews";

const Blogs = () => {
  return (
    <div className="bg-white">
      <HeroBlogs />
      <LatestNews />
      <CardsSection />
      <OtherServices />
      <FinalCTA />
    </div>
  );
};

export default Blogs;
