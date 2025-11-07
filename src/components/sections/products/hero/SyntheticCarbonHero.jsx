"use client";
import React ,{useState,useEffect}from "react";
import dynamic from "next/dynamic";
import { FaChevronRight } from "react-icons/fa";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";

import client from "@/lib/sanityClient";
import { carbonHeroQuery } from "@/Queries/products/synthetic-carbon/syntheticcarbonhero";

const RiveAutoplay = dynamic(
  () => import("@/components/utils/animations/RiveAutoplay"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

const Hero = () => {
  const { showContactForm } = useSidebarActions();

const [data, setData] = useState({
    title: "Turning Solid Carbon into Sustainable Value",
    subtitle:
      "Produced via plasma technology, our carbon black delivers technical performance while permanently storing CO₂ in concrete, steel and more.",
    primaryButtonText: "Talk to an Expert",
    secondaryButtonText: "Download Brochure",
    riveAnimation: "/animations/heroanim.riv",
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await client.fetch(carbonHeroQuery);
        const section = res?.heroSection;

        if (section) {
          setData((prev) => ({
            ...prev,
            title: section.title || prev.title,
            subtitle: section.subtitle || prev.subtitle,
            primaryButtonText: section.primaryButtonText || prev.primaryButtonText,
            secondaryButtonText: section.secondaryButtonText || prev.secondaryButtonText,
            riveAnimation: section.riveAnimation || prev.riveAnimation,
          }));
        }
      } catch (err) {
        console.error("❌ Failed to fetch hero data from Sanity:", err);
      }
    })();
  }, []);

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-cst-neutral-5 flex flex-col gap-2 w-full rounded-2xl relative p-2 md:p-16 md:pb-4 h-full">
        <div className="flex flex-col gap-4 pt-16 lg:pt-0">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-medium w-full px-6 leading-[100%] max-w-6xl mx-auto text-center">
            <AnimatedHeader delay={0.4}>
              {data.title}
            </AnimatedHeader>
          </h1>

          <p className="max-w-2xl mx-auto md:text-xl font-light text-center">
            <AnimatedHeader>
              {data.subtitle}
            </AnimatedHeader>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton
              className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              {data.primaryButtonText} <FaChevronRight />
            </PrimaryButton>
            <PrimaryButton
              className="text-black bg-cst-neutral-1 py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center"
              onClick={() => showContactForm()}
            >
              {data.secondaryButtonText}
            </PrimaryButton>
          </div>
        </div>

        {/* Network Image */}
        <div className="w-auto flex-1 relative h-fit py-6 lg:p-0">
          <RiveAutoplay
            src={data.riveAnimation}
            stateMachines={"heroanim"}
            delay={800}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
