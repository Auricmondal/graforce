"use client";
import React ,{useState,useEffect}from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import bgImg from "@/assets/product/synthetic-carbon-quality.webp";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";

import client from "@/lib/sanityClient";
import { syntheticCarbonHeroQuery } from "@/Queries/products/synthetic-carbon-quality/syntheticcarbonqualityhero";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  const [data, setData] = useState({
    title: "Exceptional Carbon. Engineered for Performance.",
    subtitle:
      "Deep-purity carbon with high thermal stability, electrical conductivity and long-term structural integrity.",
    primaryButtonText: "Talk to an Expert",
    secondaryButtonText: "Download Brochure",
    backgroundImage: bgImg,
      });

      useEffect(() => {
    (async () => {
      try {
        const res = await client.fetch(syntheticCarbonHeroQuery);
        const section = res?.heroSection;

        if (section) {
          setData((prev) => ({
            ...prev,
            title: section.title || prev.title,
            subtitle: section.subtitle || prev.subtitle,
            primaryButtonText: section.primaryButtonText || prev.primaryButtonText,
            secondaryButtonText: section.secondaryButtonText || prev.secondaryButtonText,
            backgroundImage: section.backgroundImage || prev.backgroundImage,
          }));
        }
      } catch (err) {
        console.error("❌ Failed to fetch synthetic carbon hero data:", err);
      }
    })();
  }, []);

  return (
    <main className="text-white overflow-hidden h-screen bg-cst-neutral-1 p-2 relative">
      <div className="flex flex-col w-full rounded-2xl px-[3vw] h-full absolute inset-0 z-10 justify-center">
        <div className="flex flex-col gap-6">
          <h1 className="relative text-[clamp(40px,6vw,128px)] font-medium  w-full px-6 leading-[100%] mx-auto text-center">
            <AnimatedHeader>
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
      </div>

      {/* background Image */}
      <div className="w-full h-full relative">
        <Image
          src={data.backgroundImage}
          alt="Background Image"
          fill
          className="z-0 object-cover rounded-2xl brightness-70"
          style={{ objectFit: "cover" }}
        />
      </div>
    </main>
  );
};

export default Hero;
