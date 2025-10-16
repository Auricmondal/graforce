"use client";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tower from "@/assets/tower.png";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { sidebarUtils } from "@/utils/sidebarUtils";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomJobData from "@/data/customJobData.json";
import CustomSpecData from "@/data/customSpecData.json";

gsap.registerPlugin(ScrollTrigger);

const sectorsData = [
  {
    id: 1,
    label: "energy management",
    title:
      "Graforce helps energy providers and plant operators replace fossil-fuel based methane or biogas with CO₂-free and CO₂-negative hydrogen using its Plasmalyzer® systems. This lets them generate clean heat and power, reduce energy costs (since plasmalysis uses far less electricity than water electrolysis), and remove CO₂ rather than just capturing it.",
  },
  {
    id: 2,
    label: "industrial applications",
    title:
      "Graforce enables industrial manufacturers to decarbonize their production processes by integrating plasma-based hydrogen generation. This technology reduces dependency on natural gas, lowers operational costs by up to 40%, and helps achieve net-zero emissions targets while maintaining production efficiency.",
  },
];

const YouNeedUs = ({
  sectionHeader = "Our contribution",
  sectionSubHeader = "Powering Every Sector",
  sectionImage = Tower,
  sectionColorVariant = "default",
  sectionColor = "",
  doubleButton = false,
}) => {
  const sectionRef = useRef(null);
  const needRef = useRef(null);
  const labelRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const triggerRef = useRef(null); // Store trigger reference
  const { showCustomContent, showSpecificationsContent, showJobContent } = useSidebarActions();

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
            span.style.color = "rgba(255,255,255,0.1)";
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
    text.appendChild(wrapCharacters(sectorsData[0].title));
    if (labelRef.current) labelRef.current.textContent = sectorsData[0].label;

    // Create ScrollTrigger only for desktop
    triggerRef.current = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${sectorsData.length * 400}`,
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        // Calculate which sector to show
        const sectorIndex = Math.min(
          sectorsData.length - 1,
          Math.floor(self.progress * sectorsData.length)
        );
        // Only update if different
        if (text.dataset.sector !== String(sectorIndex)) {
          text.innerHTML = "";
          text.appendChild(wrapCharacters(sectorsData[sectorIndex].title));
          text.dataset.sector = String(sectorIndex);
          if (labelRef.current)
            labelRef.current.textContent = sectorsData[sectorIndex].label;
        }
        // Animate character reveal
        const chars = text.querySelectorAll("span");
        const charsToShow = Math.floor(
          (self.progress * sectorsData.length - sectorIndex) * chars.length
        );
        chars.forEach((char, i) => {
          if (sectionColorVariant === "default") {
            char.style.color =
              i < charsToShow ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)";
          } else {
            char.style.color =
              i < charsToShow ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)";
          }
        });
      },
    });

    return cleanup;
  }, [isMobile, sectionColorVariant]); // Add dependencies

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
          color={sectionColorVariant}
          align="center"
          className={`p-2 gap-2 h-full ${
            sectionColorVariant === "custom" ? sectionColor : ""
          }`}
        >
          <div className="w-full">
            <CardWrapper
              color="transparent"
              align="left"
              className="gap-2 border border-cst-neutral-2"
            >
              <SectionLabel
                text={sectionHeader}
                textColor={
                  sectionColorVariant === "default"
                    ? "text-black"
                    : "text-white"
                }
                icon={true}
                invertIcon={sectionColorVariant === "blue"}
              />
              <AnimatedHeader
                className={`text-xl capitalize ${
                  sectionColorVariant === "default"
                    ? "text-black"
                    : "text-white"
                }`}
              >
                <h2
                  className={`text-xl capitalize ${
                    sectionColorVariant === "default"
                      ? "text-black"
                      : "text-white"
                  }`}
                >
                  {sectionSubHeader}
                </h2>
              </AnimatedHeader>
            </CardWrapper>
          </div>

          {/* Desktop: Animated single section */}
          <div className="hidden md:grid grid-cols-2 gap-2 w-full h-full">
            <CardWrapper
              color="transparent"
              align="left"
              className="flex flex-col justify-between items-start gap-2 sm:gap-4 p-4 h-full border border-cst-neutral-2"
            >
              {/* animated label controlled via labelRef */}
              <div
                ref={labelRef}
                className={`capitalize ${
                  sectionColorVariant === "default"
                    ? "text-black"
                    : "text-white"
                }`}
                aria-hidden={false}
              >
                {sectorsData[0].label}
              </div>
              <div className="">
                <h3
                  ref={needRef}
                  className="text-white/10 text-base font-semibold md:text-xl lg:text-2xl pt-[100px] sm:pt-0"
                  data-sector="0"
                />
                <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                  <PrimaryButton className={`${sectionColorVariant === "default" ? "bg-cst-neutral-5 text-white" : "bg-cst-neutral-1 text-black"} rounded-xl py-4 px-6 w-full text-sm md:text-base ${sectionColorVariant === "blue" ? "border-2 border-transparent hover:shadow-md" : ""}`}
                    hoverTextColor={sectionColorVariant === "blue" ? "cst-neutral-1" : "text-white"}
                    hoverBgColor={sectionColorVariant === "blue" ? "cst-neutral-3" : "bg-primary"}
                    onClick={() => {
                      showJobContent(CustomJobData);
                    }}
                  >
                    Learn More
                  </PrimaryButton>
                  {doubleButton && (
                    <PrimaryButton className={`bg-black text-cst-neutral-1 rounded-xl py-4 px-6 w-full text-sm md:text-base ${sectionColorVariant === "blue" ? "border-2 border-transparent hover:shadow-md" : ""}`}
                      hoverTextColor={sectionColorVariant === "blue" ? "cst-neutral-1" : "text-white"}
                      hoverBgColor={sectionColorVariant === "blue" ? "cst-neutral-3" : "bg-primary"}
                      onClick={() => {
                        showSpecificationsContent(CustomSpecData);
                      }}
                    >
                      Specifications
                    </PrimaryButton>
                  )}
                </div>
              </div>
            </CardWrapper>
            <div
              className={`flex items-center justify-center p-0 w-full h-full`}
            >
              <Image
                src={sectionImage}
                className="object-cover w-full lg:w-fit"
                alt="tower"
              />
            </div>
          </div>

          {/* Mobile: Stacked all sections */}
          <div className="md:hidden flex flex-col gap-4 w-full">
            {sectorsData.map((sector) => (
              <div key={sector.id} className="grid grid-cols-1 w-full gap-4">
                <CardWrapper
                  color="transparent"
                  align="left"
                  className="justify-between items-center gap-2 sm:gap-4 p-4 text-left border border-cst-neutral-2"
                >
                  <div className="text-left flex items-start">
                    <SectionLabel
                      icon={false}
                      text={sector.label}
                      textColor={
                        sectionColorVariant === "default"
                          ? "text-black"
                          : "text-white"
                      }
                    />
                  </div>
                  <h3
                    className={`text-base font-semibold md:text-lg pt-[150px] ${
                      sectionColorVariant === "default"
                        ? "text-black"
                        : "text-white"
                    }`}
                    dangerouslySetInnerHTML={{ __html: sector.title }}
                  />
                  <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                    <PrimaryButton className="bg-cst-neutral-1 text-black rounded-xl py-4 px-2 sm:px-6 w-full text-sm md:text-base"
                      onClick={() => {
                        showJobContent(CustomJobData);
                      }}
                    >
                      Learn More
                    </PrimaryButton>
                    {doubleButton && (
                      <PrimaryButton className="bg-black text-cst-neutral-2 rounded-xl py-4 px-2 sm:px-6 w-full text-sm md:text-base"
                        onClick={() => {
                          showSpecificationsContent(CustomSpecData);
                        }}
                      >
                        Specifications
                      </PrimaryButton>
                    )}
                  </div>
                </CardWrapper>
                <div className="flex items-center justify-center">
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

export default YouNeedUs;
