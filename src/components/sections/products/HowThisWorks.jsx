"use client";

import React from "react";
import YouNeedUs from "../home/hero/YouNeedUs";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomBlogData from "@/data/customBlogData.json";
import { howThisWorksSectorsData } from "@/data/sectorData";

const HowThisWorks = () => {
  const { showReadingContent } = useSidebarActions();
  return (
    <div>
      <YouNeedUs
        sectionHeader={`How This Works`}
        sectionSubHeader="Process Flow"
        sectionColorVariant="dark"
        sectorsData={howThisWorksSectorsData}
        learnMoreOnClick={() => showReadingContent(CustomBlogData)}
      />
    </div>
  );
};

export default HowThisWorks;
