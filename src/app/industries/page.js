"use client"

import Hero from "@/components/sections/industry/Hero";
import ImportantDetails from "@/components/sections/products/ImportantDetails";
import DiamondShap from "@/assets/service/shapeDiamond.png";
import React from "react";
import Contribution from "@/components/sections/industry/Contribution";
import FAQSection from "@/components/shared/faq/FAQ";
import News from "@/components/shared/news/News";
import FinalCTA from "@/components/shared/finalCta/FinalCTA";
import { leftTypes } from "@/components/sections/industry/IndustryDetailsLefts";
import details from "@/data/details.json";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomBlogData from "@/data/customBlogData.json";
import cases from "@/data/cases";

const IndustryPage = () => {
  const { showReadingContent } = useSidebarActions();

  return (
    <div>
      <Hero />
      <ImportantDetails
        sectionLabel="Industries We Serve"
        sectionHeader="Explore Solutions that Fits Your Needs"
        leftTypes={leftTypes}
        details={details}
      />
      <Contribution
        sectionHeader="The Impact Opportunity"
        sectionSubHeader={`Graforce's technology aligns with global energy and climate goals.`}
        sectionImage={DiamondShap}
        onButtonClick={() => showReadingContent(CustomBlogData)}
        cases={cases}
      />
      <FAQSection />
      <News />
      <FinalCTA />
    </div>
  );
};

export default IndustryPage;
