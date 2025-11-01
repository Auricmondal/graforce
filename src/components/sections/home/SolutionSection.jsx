"use client";

import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";
import solutionData from "@/data/solutions.json";

export default function SolutionSection() {
  return (
    <CircularAnimationGraph
      header={"Splitting methane into solid carbon and clean hydrogen."}
      subHeader={"Our Solution"}
      problemData={solutionData}
    />
  );
}
