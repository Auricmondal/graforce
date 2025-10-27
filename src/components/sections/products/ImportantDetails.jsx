"use client";

import { useState, useRef, act } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import details from "@/data/details.json";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import DetailsCard from "./DetailsCard";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import Chart from "@/components/utils/charts/Chart";
import { leftTypes } from "./ImpDetailsLefts";

import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomBlogData from "@/data/customBlogData.json";

gsap.registerPlugin(ScrollTrigger);

export default function ImportantDetails({
  sectionLabel = "Important Details",
  sectionHeader = "Technical And Other Details About Plasmalyzer",
  isOneLeftType = true,
}) {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);

  const { showReadingContent } = useSidebarActions();

  useGSAP(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!triggerRef.current || !isDesktop) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    details.forEach((_, i) => {
      const stepElement = triggerRef.current.children[i];
      if (stepElement) {
        ScrollTrigger.create({
          trigger: stepElement,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
          onEnter: () => {
            console.log(`Entering step ${i}`);
            setActiveStep(i);
            setScrollProgress(0); // Reset progress when entering new step
          },
          onEnterBack: () => {
            console.log(`Entering back step ${i}`);
            setActiveStep(i);
            setScrollProgress(0); // Reset progress when entering back
          },
          onUpdate: (self) => {
            // Only update progress for current step being scrolled
            setScrollProgress(self.progress * 100);
          },
          onLeave: () => {
            // When leaving a step, set progress to 100%
            if (i < details.length - 1) {
              setScrollProgress(100);
            }
          },
          onLeaveBack: () => {
            setScrollProgress(0);
          },
        });
      }
    });
  }, []);

  const handleCardClick = (index) => {
    // Only handle click for tablet and mobile (non-desktop)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) {
      setActiveStep(index);
    }
  };

  return (
    <main className="lg:relative w-full bg-cst-neutral-1 p-2">
      <CardWrapper
        className="rounded-lg gap-2 !bg-secondary-light py-8 px-4 lg:px-6"
        variant="custom"
      >
        <SectionLabel text={sectionLabel} />
        <AnimatedHeader>
          <div className="text-xl">{sectionHeader}</div>
        </AnimatedHeader>
      </CardWrapper>
      <div className="lg:sticky top-0 left-0 w-full lg:h-[98vh] z-30 flex flex-col lg:flex-row gap-2 h-fit mt-2">
        {/* Left Side */}
        <div className="w-full hidden lg:block lg:flex-5/8 bg-primary rounded-lg bg-cover bg-center min-h-[100dvh] lg:min-h-0">
          {isOneLeftType
            ? leftTypes[details[0].leftType]
            : leftTypes[details[activeStep].leftType] || null}
        </div>

        {/* Right Side */}
        <div className="w-full lg:flex-3/8 flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            {details.map((problem, index) => (
              <div
                className={`${
                  index === activeStep
                    ? "min-h-[100dvh] lg:min-h-0 lg:grow"
                    : "min-h-0"
                } flex flex-col gap-2 transition-all duration-500 ease-in-out`}
                key={problem.id}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex-1/2 ">
                  <DetailsCard
                    key={problem.id}
                    id={problem.id}
                    title={problem.title}
                    description={problem.description}
                    progress={index === activeStep ? scrollProgress : 0}
                    isActive={index === activeStep}
                    learnMoreOnClick={() => showReadingContent(CustomBlogData)}
                  />
                </div>
                {index === activeStep && (
                  <div className="w-full flex-1/2 lg:hidden bg-primary rounded-lg bg-cover bg-center lg:min-h-0 animate-in slide-in-from-top delay-300 duration-300 ease-in-out">
                    {leftTypes[problem.leftType] || null}
                  </div>
                )}
              </div>
            ))}
            {/* Solution card end */}
          </div>
        </div>
      </div>

      {/* Scroll space for GSAP ScrollTrigger */}
      <div ref={triggerRef} className="relative z-10 hidden lg:block">
        {details.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ minHeight: "300vh" }}
          >
            {/* Individual scroll trigger zones */}
          </div>
        ))}
      </div>
      <div className="hidden lg:block w-full" style={{ height: "100vh" }} />
    </main>
  );
}
