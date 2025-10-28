"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SectionLabel from "@/components/utils/badges/SectionLabel";
import SolutionCard from "@/components/utils/cards/SolutionCard";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import Chart from "@/components/utils/charts/TempChart";

import client from "@/lib/sanityClient";
import { problemSectionQuery } from "@/Queries/services/problems";

gsap.registerPlugin(ScrollTrigger);

export default function EmissionPage() {
  const [problemData, setProblemData] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("The Problem");
  const [sectionHeading, setSectionHeading] = useState("The Emission Burden");
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);

  // ✅ Fetch from Sanity
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await client.fetch(problemSectionQuery);
        const problemSection = res?.problemSection || {};
        setProblemData(problemSection.problems || []);
        if (problemSection.sectionTitle)
          setSectionTitle(problemSection.sectionTitle);
        if (problemSection.sectionHeading)
          setSectionHeading(problemSection.sectionHeading);
      } catch (error) {
        console.error("Error fetching Sanity data:", error);
      }
    }
    fetchData();
  }, []);

  // ✅ GSAP Scroll logic
  useGSAP(() => {
    if (!problemData.length) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!triggerRef.current || !isDesktop) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    problemData.forEach((_, i) => {
      const stepElement = triggerRef.current.children[i];
      if (stepElement) {
        ScrollTrigger.create({
          trigger: stepElement,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
          onEnter: () => {
            setActiveStep(i);
            setScrollProgress(0);
          },
          onEnterBack: () => {
            setActiveStep(i);
            setScrollProgress(0);
          },
          onUpdate: (self) => {
            setScrollProgress(self.progress * 100);
          },
          onLeave: () => {
            if (i < problemData.length - 1) setScrollProgress(100);
          },
          onLeaveBack: () => {
            setScrollProgress(0);
          },
        });
      }
    });

    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
      onLeave: () => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });
      },
    });
  }, [problemData]);

  if (!problemData.length)
    return (
      <main className="w-full flex justify-center items-center h-[100vh] bg-secondary-light">
        Loading problems...
      </main>
    );

  return (
    <main className="md:relative w-full bg-secondary-light">
      <div className="md:sticky top-0 left-0 w-full md:h-[100vh] z-30 flex flex-col md:flex-row p-2 gap-2 h-fit">
        {/* Left Side */}
        <div className="w-full md:flex-3/7 flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <CardWrapper
              className="md:sticky top-0 z-40 rounded-lg gap-2 border-1 border-primary-light !bg-secondary-light py-8 px-4 md:px-6"
              variant="custom"
            >
              <SectionLabel text={sectionTitle} />
              <AnimatedHeader>
                <div className="text-xl">{sectionHeading}</div>
              </AnimatedHeader>
            </CardWrapper>

            {/* Solution card */}
            <div className="hidden md:flex flex-col h-full">
              <SolutionCard
                key={activeStep}
                id={problemData[activeStep].id}
                title={problemData[activeStep].title}
                description={problemData[activeStep].description}
                progress={scrollProgress}
                onClick={() => showReadingContent(CustomBlogData)}
              />
            </div>

            <div className="md:hidden flex flex-col gap-2">
              {problemData.map((problem, index) => (
                <SolutionCard
                  key={problem.id}
                  id={problem.id}
                  title={problem.title}
                  description={problem.description}
                  progress={index === activeStep ? scrollProgress : 0}
                  onClick={() => showReadingContent(CustomBlogData)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:flex-4/7 border-1 border-primary-light rounded-lg bg-cover bg-center min-h-[100dvh] md:min-h-0">
          <Chart
            data={problemData[activeStep ?? 0].data}
            dataIndex={activeStep ?? 0}
          />
        </div>
      </div>

      {/* Scroll space for GSAP ScrollTrigger */}
      <div ref={triggerRef} className="relative z-10 hidden md:block">
        {problemData.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ minHeight: "250vh" }}
          ></div>
        ))}
      </div>

      {/* Smooth transition buffer */}
      <div className="hidden md:block h-[100vh] bg-secondary-light relative z-0"></div>
    </main>
  );
}
