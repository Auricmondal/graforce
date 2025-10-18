"use client";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomJobData from "@/data/customJobData.json";
import sideImg from "@/assets/service/shapeDiamond.png";
import useIsDesktop from "@/hooks/useIsDesktop";

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    id: 1,
    label: "Drive for Decarbonization",
    title:
      "Graforce&apos;s plasma-based hydrogen technology offers a sustainable solution for the transportation sector, enabling fleets to transition to clean energy. By producing green hydrogen on-site, Graforce helps reduce carbon emissions by up to 70%, lowers fuel costs, and supports the shift towards zero-emission vehicles.",
  },
  {
    id: 2,
    label: "industrial applications",
    title:
      "Graforce enables industrial manufacturers to decarbonize their production processes by integrating plasma-based hydrogen generation. This technology reduces dependency on natural gas, lowers operational costs by up to 40%, and helps achieve net-zero emissions targets while maintaining production efficiency.",
  },
];

const Contribution = ({ sectionHeader, sectionSubHeader, sectionImage }) => {
  const sectionRef = useRef(null);
  const needRef = useRef(null);
  const labelRef = useRef(null);
  const triggerRef = useRef(null); // Store trigger reference
  const { showJobContent } = useSidebarActions();

  const isMobile = !useIsDesktop();

  // Cleanup function
  const cleanup = () => {
    if (triggerRef.current) {
      triggerRef.current.kill();
      triggerRef.current = null;
    }
    // Kill all ScrollTriggers related to this component
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === sectionRef.current) {
        trigger.kill();
      }
    });
  };

  useGSAP(() => {
    // Always cleanup first
    cleanup();

    // Exit early if mobile or refs not available
    if (isMobile || !needRef.current || !sectionRef.current) {
      return;
    }

    const text = needRef.current;

    // Helper to wrap each character in a span
    const wrapCharacters = (html) => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          const chars = node.textContent.split("");
          const fragment = document.createDocumentFragment();
          chars.forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.color = "rgba(255,255,255,0.3)";
            fragment.appendChild(span);
          });
          return fragment;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const newNode = node.cloneNode(false);
          Array.from(node.childNodes).forEach((child) => {
            newNode.appendChild(processNode(child));
          });
          return newNode;
        }
        return node.cloneNode(true);
      };
      const processed = document.createDocumentFragment();
      Array.from(tempDiv.childNodes).forEach((child) => {
        processed.appendChild(processNode(child));
      });
      return processed;
    };

    // Initial render
    text.innerHTML = "";
    text.appendChild(wrapCharacters(cases[0].title));
    if (labelRef.current) labelRef.current.textContent = cases[0].label;

    // Create ScrollTrigger only for desktop
    triggerRef.current = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${cases.length * 400}`,
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        // Calculate which case to show
        const sectorIndex = Math.min(
          cases.length - 1,
          Math.floor(self.progress * cases.length)
        );
        // Only update if different
        if (text.dataset.case !== String(sectorIndex)) {
          text.innerHTML = "";
          text.appendChild(wrapCharacters(cases[sectorIndex].title));
          text.dataset.case = String(sectorIndex);
          if (labelRef.current)
            labelRef.current.textContent = cases[sectorIndex].label;
        }
        // Animate character reveal
        const chars = text.querySelectorAll("span");
        const charsToShow = Math.floor(
          (self.progress * cases.length - sectorIndex) * chars.length
        );
        chars.forEach((char, i) => {
          char.style.color =
            i < charsToShow ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)";
        });
      },
    });

    return cleanup;
  }, [isMobile]); // Add dependencies

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, []);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <div
        ref={sectionRef}
        className={`flex items-start ${
          isMobile ? "h-fit" : "h-fit md:h-screen"
        }`}
      >
        <CardWrapper
          variant="custom"
          color="custom"
          align="center"
          className={`gap-2 h-full`}
        >
          {/* Desktop: Animated single section */}
          <div className="hidden lg:grid grid-cols-2 gap-2 w-full h-full bg-[linear-gradient(269.79deg,_#5527D8_0.13%,_#2D1572_99.77%)] p-2 rounded-2xl">
            <div className="flex flex-col gap-2">
              <div className="w-full">
                <CardWrapper
                  color="transparent"
                  align="left"
                  className="gap-2 border border-[#5426D6] !rounded-2xl"
                >
                  <SectionLabel
                    text={sectionHeader}
                    textColor="text-white"
                  />
                  <h2 className={`text-xl capitalize text-white`}>
                    <AnimatedHeader>
                      {sectionSubHeader}
                    </AnimatedHeader>
                  </h2>
                </CardWrapper>
              </div>
              <CardWrapper
                color="transparent"
                align="left"
                className="flex flex-col !rounded-2xl justify-between items-start gap-2 sm:gap-4 p-4 h-full border border-[#5426D6]"
              >
                {/* animated label controlled via labelRef */}
                <div
                  ref={labelRef}
                  className={`capitalize text-white text-2xl font-semibold`}
                  aria-hidden={false}
                >
                  {cases[0].label}
                </div>
                <div className="">
                  <h3
                    ref={needRef}
                    className="text-white/10 text-base pt-[100px] sm:pt-0"
                    data-case="0"
                  />
                  <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                    <PrimaryButton
                      className={`bg-[#5326D4] text-white rounded-xl py-4 px-6 w-full text-sm md:text-base`}
                      onClick={() => {
                        showJobContent(CustomJobData);
                      }}
                    >
                      Learn More
                    </PrimaryButton>
                  </div>
                </div>
              </CardWrapper>
            </div>
            <div
              className={`flex items-center justify-center p-0 w-full h-full rounded-2xl border border-[#5426D6]`}
            >
              <Image
                src={sectionImage}
                className="object-cover w-full lg:w-fit"
                alt="tower"
              />
            </div>
          </div>

          {/* Mobile: Stacked all sections */}
          <div className="lg:hidden flex flex-col gap-2 w-full">
            {cases.map((sector, index) => (
              <div key={sector.id} className={`grid grid-cols-1 w-full gap-2 ${index%2 === 1 ?  "bg-[linear-gradient(269.79deg,_#416DD2_0.13%,_#204088_99.77%)]" :"bg-[linear-gradient(269.79deg,_#5527D8_0.13%,_#2D1572_99.77%)]"} p-2 rounded-2xl`}>
                <CardWrapper
                  color="transparent"
                  align="left"
                  className={`gap-2 border border-[#5426D6] !rounded-2xl`}
                >
                  <SectionLabel
                    text={sectionHeader}
                    textColor="text-white"
                  />
                  <h2 className={`text-xl capitalize text-white`}>
                    <AnimatedHeader>
                      {sectionSubHeader}
                    </AnimatedHeader>
                  </h2>
                </CardWrapper>

                <CardWrapper
                  color="transparent"
                  align="left"
                  className="justify-between items-center gap-2 sm:gap-4 p-4 text-left border border-[#5426D6] !rounded-2xl"
                >
                  <div className="text-left flex items-start">
                    <SectionLabel
                      icon={false}
                      text={sector.label}
                      textColor={"text-white"}
                    />
                  </div>
                  <h3 className={`text-base pt-[150px] text-white`}>
                    {sector.title}
                  </h3>
                  <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                    <PrimaryButton
                      className="bg-cst-neutral-1 text-black rounded-xl py-4 px-2 sm:px-6 w-full text-sm md:text-base"
                      onClick={() => {
                        showJobContent(CustomJobData);
                      }}
                    >
                      Learn More
                    </PrimaryButton>
                  </div>
                </CardWrapper>
                <div className="flex items-center justify-center rounded-2xl border border-[#5426D6]">
                  <Image
                    src={sectionImage}
                    className={"object-cover w-full h-full"}
                    alt="tower"
                  />
                </div>
              </div>
            ))}
          </div>
        </CardWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Contribution;
