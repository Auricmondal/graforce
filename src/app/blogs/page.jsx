import HeroBlogs from "@/components/sections/blogs/Hero";
import LatestNews from "@/components/sections/blogs/LatestNews";
import OtherServices from "@/components/sections/services/OtherServices";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <HeroBlogs />
      <LatestNews />
      <OtherServices />
      <FinalCTA />
    </div>
  );
};

export default Blogs;
