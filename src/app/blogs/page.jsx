import HeroBlogs from "@/components/sections/blogs/Hero";
import LatestNews from "@/components/sections/blogs/LatestNews";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import React from "react";

const Blogs = () => {
  return (
    <div className="">
      <HeroBlogs />
      <LatestNews />
      <FinalCTA />
    </div>
  );
};

export default Blogs;
