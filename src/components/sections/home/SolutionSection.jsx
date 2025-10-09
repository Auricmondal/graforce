"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionImg from "@/assets/home/solution.webp";
import steps from "@/data/solutions.json";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import SolutionCard from "./SolutionCard";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);

  useGSAP(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!triggerRef.current || !isDesktop) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    steps.forEach((_, i) => {
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
            if (i < steps.length - 1) {
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
    <main className="md:relative w-full bg-secondary-light">
      {/* Fixed split layout */}
      <div className="md:sticky top-0 left-0 w-full md:h-[100vh] z-30 flex flex-col md:flex-row p-2 gap-2 h-fit">
        {/* Left Side */}
        <div className="w-full md:flex-3/7 flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <CardWrapper
              className="md:sticky top-0 z-40 rounded-lg gap-2 border-1 border-primary-light !bg-secondary-light py-8 px-4 md:px-6"
              variant="custom"
            >
              <SectionLabel text={"Our Solution"} />
              <AnimatedHeader>
                <div className="text-xl">
                  Hydrogen Today Pollutes. We Change That
                </div>
              </AnimatedHeader>
            </CardWrapper>

            {/* Solution card */}
            <div className="hidden md:flex flex-col h-full">
              <SolutionCard
                key={activeStep}
                id={steps[activeStep].id}
                title={steps[activeStep].title}
                description={steps[activeStep].description}
                progress={scrollProgress}
              />
            </div>

            <div className="md:hidden flex flex-col gap-2">
              {steps.map((step, index) => (
                <SolutionCard
                  key={step.id}
                  id={step.id}
                  title={step.title}
                  description={step.description}
                  progress={scrollProgress}
                />
              ))}
            </div>

            {/* Solution card end */}
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full md:flex-4/7 border-1 border-primary-light rounded-lg bg-cover bg-center min-h-screen md:min-h-0"
          style={{
            backgroundImage: `url(${solutionImg.src})`,
          }}
        ></div>
      </div>

      {/* Scroll space for GSAP ScrollTrigger */}
      <div ref={triggerRef} className="relative z-10 hidden md:block">
        {steps.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ minHeight: "300vh" }}
          >
            {/* Individual scroll trigger zones */}
          </div>
        ))}
      </div>
    </main>
  );
}
