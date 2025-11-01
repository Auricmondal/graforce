import React from "react";
import YouNeedUs from "../home/hero/YouNeedUs";
import { whyWorldNeedsUsSectorsData } from "@/data/sectorData";

const WhyWorldNeedsUs = () => {
  return (
    <div>
      <YouNeedUs
        sectionColorVariant="default"
        learnMoreLink={"/industries"}
        sectorsData={whyWorldNeedsUsSectorsData}
      />
    </div>
  );
};

export default WhyWorldNeedsUs;
