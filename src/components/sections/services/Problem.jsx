"use client";

import { useEffect, useState } from "react";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";

import tempProblemData from "@/data/tempProblems.json";
import CustomBlogData from "@/data/customBlogData.json";

import client from "@/lib/sanityClient";
import { problemSectionQuery } from "@/Queries/services/problems";

export default function EmissionPage() {
  const { showReadingContent } = useSidebarActions();
  const [problemData, setProblemData] = useState(tempProblemData);
  const [header, setHeader] = useState("The Problem We Discovered");
  const [subHeader, setSubHeader] = useState("The Emission Burden");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(problemSectionQuery);
        const section = res?.problemSection;

        if (!section) {
          console.warn("⚠️ No problemSection found in Sanity, using fallback data.");
          return;
        }

        // ✅ Now matches schema exactly
        setHeader(section.sectionHeader || "The Problem We Discovered");
        setSubHeader(section.sectionSubHeader || "The Emission Burden");

        const problems = Array.isArray(section.problems)
          ? section.problems.filter(Boolean)
          : [];

        setProblemData(problems.length ? problems : tempProblemData);
      } catch (err) {
        console.error("❌ Failed to fetch problems from Sanity:", err);
        setProblemData(tempProblemData);
      }
    };

    fetchData();
  }, []);

  return (
    <CircularAnimationGraph
      header={header}
      subHeader={subHeader}
      onButtonClick={() => showReadingContent(CustomBlogData)}
      problemData={problemData}
    />
  );
}
