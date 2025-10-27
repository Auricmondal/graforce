"use client";

import React from "react";
import YouNeedUs from "../home/hero/YouNeedUs";
import shapeDiamond1 from "@/assets/service/shapeDiamond2.png";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomBlogData from "@/data/customBlogData.json";

const HowThisWorks = () => {
  const { showReadingContent } = useSidebarActions();
  return (
    <div>
      <YouNeedUs
        sectionHeader={`How This Works`}
        sectionSubHeader="Process Flow"
        sectionColorVariant="dark"
        sectionImage={shapeDiamond1}
        learnMoreOnClick={() => showReadingContent(CustomBlogData)}
      />
    </div>
  );
};

export default HowThisWorks;
