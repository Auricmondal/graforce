"use client";

import React from "react";
import CardsSection from "@/components/sections/blogs/CardsSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";

const Blogs = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      {/* Latest news */}
      <CardsSection />
      {/* OtherServices */}
      <FinalCTA />
    </div>
  );
};

export default Blogs;
