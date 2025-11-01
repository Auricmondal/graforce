"use client";

import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";
import tempProblemData from "@/data/tempProblems.json";

export default function WhyWeMatter() {
  return (
    <CircularAnimationGraph
      header={"Our Mission is to Save the Earth"}
      subHeader={"Here is Why We Matter"}
      problemData={tempProblemData}
      buttonLink={"/industries"}
    />
  );
}
