"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import solutionImg from "@/assets/home/solution.webp";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import SolutionCard from "../../utils/cards/SolutionCard";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import CardWrapper from "@/wrappers/CardWrapper";
import client from "@/lib/sanityClient";
import { solutionSectionQuery } from "@/Queries/home/Solution";
import { useLanguage } from "@/hooks/useLanguage";
gsap.registerPlugin(ScrollTrigger);

export default function SolutionSection() {
  const [data, setData] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const triggerRef = useRef(null);
  const { language } = useLanguage();

  // Fetch Sanity data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lang = language || "en";
        const res = await client.fetch(solutionSectionQuery , { language: lang });

        setData({
          sectionLabel: res?.solution?.sectionLabel || "Our Solution",
          heading:
            res?.solution?.heading ||
            "Splitting methane into solid carbon and clean hydrogen.",
          backgroundImage: res?.solution?.backgroundImage || null,
          steps: res?.solution?.steps?.length
            ? res.solution.steps
            : [
                { id: "1", title: "Step 1", description: "Description 1", link: "#" },
                { id: "2", title: "Step 2", description: "Description 2", link: "#" },
                { id: "3", title: "Step 3", description: "Description 3", link: "#" },
              ],
        });
      } catch (err) {
        console.error("Error fetching solution section:", err);
        setData({
          sectionLabel: "Our Solution",
          heading: "Splitting methane into solid carbon and clean hydrogen.",
          backgroundImage: null,
          steps: [
            { id: "1", title: "Step 1", description: "Description 1", link: "#" },
            { id: "2", title: "Step 2", description: "Description 2", link: "#" },
            { id: "3", title: "Step 3", description: "Description 3", link: "#" },
          ],
        });
      }
    };

    fetchData();
  }, [language]);

  // GSAP ScrollTrigger
  useGSAP(() => {
    if (!data || !triggerRef.current) return;

    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!triggerRef.current || !isDesktop) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    data.steps.forEach((_, i) => {
      const stepElement = triggerRef.current.children[i];
      if (stepElement) {
        ScrollTrigger.create({
          trigger: stepElement,
          start: "top 75%",
          end: "bottom 25%",
          scrub: 1,
          onEnter: () => {
            setActiveStep(i);
            setScrollProgress(0); // Reset progress when entering new step
          },
          onEnterBack: () => {
            setActiveStep(i);
            setScrollProgress(0); // Reset progress when entering back
          },
          onUpdate: (self) => {
            setScrollProgress(self.progress * 100);
          },
          onLeave: () => {
            // Fixed syntax
            if (data?.steps && i < data.steps.length - 1) {
              setScrollProgress(100);
            }
          },
          onLeaveBack: () => {
            setScrollProgress(0);
          },
        });
      }
    });

    // Smooth exit buffer
    ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "bottom bottom",
      end: "bottom top",
      scrub: true,
      onLeave: () => requestAnimationFrame(() => ScrollTrigger.refresh()),
    });
  }, [data]);

  if (!data) return null;

  return (
    <main className="md:relative w-full bg-secondary-light">
      {/* Fixed split layout */}
      <div className="md:sticky top-0 left-0 w-full md:h-[100vh] z-30 flex flex-col md:flex-row p-2 gap-2 h-fit">
        {/* Left Side */}
        <div className="w-full md:flex-3/7 flex gap-2">
          <div className="flex flex-col gap-2 w-full">
            <CardWrapper
              className="md:sticky top-0 z-40 gap-2 border-1 border-primary-light !bg-secondary-light py-8 px-4 md:px-6"
              variant="custom"
            >
              <SectionLabel text={data.sectionLabel} />
              <AnimatedHeader>
                <div className="text-xl">{data.heading}</div>
              </AnimatedHeader>
            </CardWrapper>

            {/* Desktop solution card */}
            <div className="hidden md:flex flex-col h-full">
              {data.steps[activeStep] && (
                <SolutionCard
                  key={activeStep}
                  id={data.steps[activeStep].id}
                  title={data.steps[activeStep].title}
                  description={data.steps[activeStep].description}
                  progress={scrollProgress}
                  link={data.steps[activeStep].link}
                />
              )}
            </div>

            {/* Mobile solution cards */}
            <div className="md:hidden flex flex-col gap-2">
              {data.steps.map((step, index) => (
                <SolutionCard
                  key={step.id || index}
                  id={step.id}
                  title={step.title}
                  description={step.description}
                  progress={index === activeStep ? scrollProgress : 0}
                  link={`/products/${data.steps[activeStep].link}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="w-full md:flex-4/7 border-1 border-primary-light rounded-2xl bg-cover bg-center min-h-[100dvh] md:min-h-0"
          style={{
            backgroundImage: `url(${data.backgroundImage?.asset?.url || solutionImg.src})`,
          }}
        ></div>
      </div>

      {/* Scroll space for GSAP */}
      <div ref={triggerRef} className="relative z-10 hidden md:block">
        {data.steps.map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{ minHeight: "250vh" }}
          ></div>
        ))}
      </div>

      {/* Smooth buffer */}
      <div className="hidden md:block h-[100vh] bg-secondary-light relative z-0"></div>
    </main>
  );
}
