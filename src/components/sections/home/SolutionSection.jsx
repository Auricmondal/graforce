"use client";

import { useEffect, useState } from "react";
import CircularAnimationGraph from "@/components/shared/scrollIndicator/CircularAnimationGraph";
import solutionData from "@/data/solutions.json"; // local fallback
import client from "@/lib/sanityClient";
import { solutionSectionQuery } from "@/Queries/home/Solution";

export default function SolutionSection() {
  const [fetchedData, setFetchedData] = useState(null); // start as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sanityData = await client.fetch(solutionSectionQuery);
        const data = sanityData?.solutionSection;

        if (data && Array.isArray(data.problemData) && data.problemData.length > 0) {
          setFetchedData({
            header: data.header || "Splitting methane into solid carbon and clean hydrogen.",
            subHeader: data.subHeader || "Our Solution",
            problemData: data.problemData.map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description,
              image: item.imageUrl || null,
              link: item.link || "#",
            })),
            riveFile: data.riveFileUrl || "/animations/electrolysis.riv",
          });
        } else {
          // fallback to local JSON
          setFetchedData({
            header: "Splitting methane into solid carbon and clean hydrogen.",
            subHeader: "Our Solution",
            problemData: solutionData,
            riveFile: "/animations/electrolysis.riv",
          });
        }
      } catch (err) {
        console.error("⚠️ Failed to fetch Solution Section from Sanity:", err);
        // ensure fallback still loads
        setFetchedData({
          header: "Splitting methane into solid carbon and clean hydrogen.",
          subHeader: "Our Solution",
          problemData: solutionData,
          riveFile: "/animations/electrolysis.riv",
        });
      }
    };

    fetchData();
  }, []);

  // ✅ wait until data is ready before rendering component
  if (!fetchedData || !Array.isArray(fetchedData.problemData) || fetchedData.problemData.length === 0) {
    return null; // or <div>Loading...</div> if you prefer a placeholder
  }

  return (
    <CircularAnimationGraph
      header={fetchedData.header}
      subHeader={fetchedData.subHeader}
      problemData={fetchedData.problemData}
      riveFile={fetchedData.riveFile}
    />
  );
}
