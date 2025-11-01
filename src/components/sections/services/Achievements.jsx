"use client";

import React from "react";
import YouNeedUs from "../home/hero/YouNeedUs";
import Electrolysis from "@/assets/Electrolysis.png";
import CustomJobData from "@/data/customJobData.json";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomBlogData from "@/data/customBlogData.json";
import { achievementsSectorsData } from "@/data/sectorData";

const Achievements = () => {
  const { showJobContent, showReadingContent } = useSidebarActions();
  return (
    <div>
      <YouNeedUs
        sectionHeader="Our Achievements"
        sectionSubHeader="Zero Emission Hydrogen"
        sectorsData={achievementsSectorsData}
        sectionColorVariant="blue"
        sectionColor="bg-cst-neutral-4"
        doubleButton={true}
        learnMoreOnClick={() => showJobContent(CustomJobData)}
        specificationsOnClick={() => showReadingContent(CustomBlogData)}
      />
    </div>
  );
};

export default Achievements;
