"use client";

import tempProblemData from "@/data/tempProblems.json";
import CustomBlogData from "@/data/customBlogData.json";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";

export default function EmissionPage({ problemData = tempProblemData }) {
  const { showReadingContent } = useSidebarActions();
  return (
    <CircularAnimationGraph
      header={"The Problem We Discovered"}
      subHeader={"The Emission Burden"}
      onButtonClick={() => showReadingContent(CustomBlogData)}
      problemData={problemData}
    />
  );
}
