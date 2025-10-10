"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import details from "@/data/details.json";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import DetailsCard from "./DetailsCard";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import Chart from "@/components/utils/charts/Chart";

gsap.registerPlugin(ScrollTrigger);

export default function ImportantDetails() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
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

  return (
    <main className="md:relative w-full bg-cst-neutral-1 p-2">
      <CardWrapper
        className="rounded-lg gap-2 !bg-secondary-light py-8 px-4 md:px-6 mb-2"
        variant="custom"
      >
        <SectionLabel text={"Important Details"} />
        <AnimatedHeader>
          <div className="text-xl">
            Technical And Other Details About Plasmalyzer
          </div>
        </AnimatedHeader>
      </CardWrapper>
      <div className="md:sticky top-0 left-0 w-full md:h-[98vh] z-30 flex flex-col md:flex-row gap-2 h-fit">
        {/* Left Side */}
        <div className="w-full md:flex-5/8 border-1 border-primary-light rounded-lg bg-cover bg-center min-h-[100dvh] md:min-h-0"></div>

        {/* Right Side */}
        <div className="w-full md:flex-3/8 flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            {/* Solution card */}
            {details.map((problem, index) => (
              <DetailsCard
                key={problem.id}
                id={problem.id}
                title={problem.title}
                description={problem.description}
                progress={index === activeStep ? scrollProgress : 0}
                isActive={index === activeStep}
              />
            ))}

            {/* <div className="md:hidden flex flex-col gap-2">
              {details.map((problem, index) => (
                <DetailsCard
                  key={problem.id}
                  id={problem.id}
                  title={problem.title}
                  description={problem.description}
                  progress={scrollProgress}
                />
              ))}
            </div> */}

            {/* Solution card end */}
          </div>
        </div>
      </div>

      {/* Scroll space for GSAP ScrollTrigger */}
      <div ref={triggerRef} className="relative z-10 hidden md:block">
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
      <div className="hidden md:block w-full" style={{ height: "100vh" }} />
    </main>
  );
}
