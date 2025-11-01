"use client";

import { useEffect, useState } from "react";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";

import tempProblemData from "@/data/tempProblems.json";
import CustomBlogData from "@/data/customBlogData.json";

import { client } from "@/lib/sanityClient";
import { problemSectionQuery } from "@/Queries/services/problems";

export default function EmissionPage() {
  const { showReadingContent } = useSidebarActions();
  const [problemData, setProblemData] = useState(tempProblemData); // fallback data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(problemSectionQuery);
        const problems = res?.problemSection?.problems || [];

        // Flatten nested problemItem objects
        const flattened = problems
          .map(p => p.problemItem) // extract nested object
          .filter(Boolean); // remove null/undefined

        setProblemData(flattened.length ? flattened : tempProblemData);
      } catch (err) {
        console.error("Failed to fetch problems from Sanity:", err);
        setProblemData(tempProblemData);
      }
    };

    fetchData();
  }, []);

  return (
    <CircularAnimationGraph
      header={"The Problem We Discovered"}
      subHeader={"The Emission Burden"}
      onButtonClick={() => showReadingContent(CustomBlogData)}
      problemData={problemData} // always pass flattened array
    />
  );
}
