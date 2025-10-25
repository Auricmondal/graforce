"use client";

import React from "react";
import CardsSection from "@/components/sections/blogs/CardsSection";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import OtherServices from "@/components/shared/otherServices/OtherServices";

const Blogs = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      {/* Latest news */}
      <CardsSection />
      <OtherServices />
      <FinalCTA />
    </div>
  );
};

export default Blogs;
