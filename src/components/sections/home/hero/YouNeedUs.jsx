"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
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
import CustomSpecData from "@/data/customSpecData.json";
import { Layout, useRive } from "@rive-app/react-canvas";
import Tower from "@/assets/tower.png";

const RiveAutoplay = dynamic(
  () => import("@/components/utils/animations/RiveAutoplay"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);
const AchievementRive = dynamic(
  () => import("@/components/sections/services/AchievementRive"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

gsap.registerPlugin(ScrollTrigger);

const defaultSectorsData = [
  {
    id: 1,
    label: "energy management",
    title:
      "Graforce helps energy providers and plant operators replace fossil-fuel based methane or biogas with CO₂-free and CO₂-negative hydrogen using its Plasmalyzer® systems. This lets them generate clean heat and power, reduce energy costs (since plasmalysis uses far less electricity than water electrolysis), and remove CO₂ rather than just capturing it.",
    image: Tower,
    riveFile: null,
  },
  {
    id: 2,
    label: "industrial applications",
    title:
      "Graforce enables industrial manufacturers to decarbonize their production processes by integrating plasma-based hydrogen generation. This technology reduces dependency on natural gas, lowers operational costs by up to 40%, and helps achieve net-zero emissions targets while maintaining production efficiency.",
    image: Tower,
    riveFile: null,
  },
];

const YouNeedUs = ({
  learnMoreLink,
  learnMoreOnClick,
  specificationsOnClick,
  sectorsData = defaultSectorsData,
  sectionHeader = "Our contribution",
  sectionSubHeader = "Powering Every Sector",
  sectionColorVariant = "default",
  sectionColor = "",
  doubleButton = false,
  fullWidthHeader = true,
}) => {
  const sectionRef = useRef(null);
  const needRef = useRef(null);
  const labelRef = useRef(null);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [currentSector, setCurrentSector] = useState(sectorsData[0]);
  const triggerRef = useRef(null); // Container for step triggers (desktop)
  const createdTriggersRef = useRef([]); // Track triggers we create for cleanup
  const { showSpecificationsContent, showJobContent } = useSidebarActions();

  const { RiveComponent } = useRive({
    src: currentSector.riveFile,
    autoplay: true,
    layout: new Layout({
      fit: "contain",
      alignment: "center",
    }),
  });

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cleanup function for only the triggers we created here
  const cleanup = () => {
    if (createdTriggersRef.current.length) {
      createdTriggersRef.current.forEach((t) => t.kill());
      createdTriggersRef.current = [];
    }
  };

  useGSAP(
    () => {
      cleanup();

      // Desktop-only behavior, like SolutionSection
      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktop || !triggerRef.current || !needRef.current) return;

      const text = needRef.current;
      requestAnimationFrame(() => {
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

        // Initial content
        text.innerHTML = "";
        text.appendChild(wrapCharacters(sectorsData[0].title));
        text.dataset.sector = "0";
        if (labelRef.current)
          labelRef.current.textContent = sectorsData[0].label;
        setCurrentSector(sectorsData[0]);

        // Build per-step ScrollTriggers like SolutionSection
        Array.from(triggerRef.current.children).forEach((stepElement, i) => {
          if (!stepElement) return;
          const trig = ScrollTrigger.create({
            id: `you-need-us-step-${i}`,
            trigger: stepElement,
            start: "top 25%",
            end: "bottom 25%",
            scrub: 1,
            onEnter: () => {
              setCurrentSector(sectorsData[i]);
              text.innerHTML = "";
              text.appendChild(wrapCharacters(sectorsData[i].title));
              text.dataset.sector = String(i);
              if (labelRef.current)
                labelRef.current.textContent = sectorsData[i].label;
            },
            onEnterBack: () => {
              setCurrentSector(sectorsData[i]);
              text.innerHTML = "";
              text.appendChild(wrapCharacters(sectorsData[i].title));
              text.dataset.sector = String(i);
              if (labelRef.current)
                labelRef.current.textContent = sectorsData[i].label;
            },
            onUpdate: (self) => {
              // Character reveal within the current step
              const chars = text.querySelectorAll("span");
              const eased = Math.pow(self.progress, 0.8);
              const charsToShow = Math.floor(eased * chars.length);
              chars.forEach((char, idx) => {
                if (sectionColorVariant === "default") {
                  char.style.color =
                    idx < charsToShow ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)";
                } else {
                  char.style.color =
                    idx < charsToShow
                      ? "rgba(255,255,255,1)"
                      : "rgba(255,255,255,0.1)";
                }
              });
            },
            onLeave: () => {
              // Ensure fully revealed at leave
              const chars = text.querySelectorAll("span");
              chars.forEach((char) => {
                if (sectionColorVariant === "default") {
                  char.style.color = "rgba(0,0,0,1)";
                } else {
                  char.style.color = "rgba(255,255,255,1)";
                }
              });
            },
            onLeaveBack: () => {
              // Reset when scrolling back
              const chars = text.querySelectorAll("span");
              chars.forEach((char) => {
                if (sectionColorVariant === "default") {
                  char.style.color = "rgba(0,0,0,0.1)";
                } else {
                  char.style.color = "rgba(255,255,255,0.1)";
                }
              });
            },
          });
          createdTriggersRef.current.push(trig);
        });

        // Smooth exit transition to prevent lag (same pattern as SolutionSection)
        const exitTrig = ScrollTrigger.create({
          id: `you-need-us-exit`,
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
        createdTriggersRef.current.push(exitTrig);
      });

      return cleanup;
    },
    {
      scope: triggerRef,
      dependencies: [sectionColorVariant, sectorsData],
    }
  );

  // Cleanup on unmount
  // useEffect(() => {
  //   return cleanup;
  // }, []);

  const ButtonWrapper = learnMoreLink
    ? (props) => <Link className="w-full" href={learnMoreLink} {...props} />
    : (props) => <div className="w-full">{props.children}</div>;

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <main className="md:relative w-full">
        {/* Sticky split layout (desktop) */}
        <div
          ref={sectionRef}
          className={`md:sticky top-0 left-0 w-full md:h-[100vh] z-30 h-fit 
            `}
        >
          <CardWrapper
            variant="custom"
            color={sectionColorVariant}
            align="center"
            className={`p-2 gap-2 h-full flex flex-col ${
              sectionColorVariant === "custom" ? sectionColor : ""
            }`}
          >
            {fullWidthHeader && (
              <div className="w-full">
                <CardWrapper
                  color={sectionColorVariant}
                  align="left"
                  className={`md:sticky top-0 z-40 gap-2 border ${
                    fullWidthHeader ? "border-cst-neutral-2" : "!border-primary"
                  }
                  ${sectionColorVariant === "custom" ? sectionColor : ""}`}
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
            )}

            <div className="md:grid md:grid-cols-2 gap-2 w-full h-full">
              {/* Left Side */}
              <div className="w-full h-full flex gap-2">
                <div className="flex flex-col gap-2 w-full">
                  {/* Header card (sticky like SolutionSection) */}
                  {!fullWidthHeader && (
                    <CardWrapper
                      className={`md:sticky top-0 z-40 gap-2 border py-8 px-4 md:px-6 ${
                        fullWidthHeader
                          ? "border-cst-neutral-2"
                          : "!border-primary"
                      }
                    ${sectionColorVariant === "custom" ? sectionColor : ""}`}
                      variant="custom"
                      color={sectionColorVariant}
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
                      <AnimatedHeader>
                        <div
                          className={`text-xl ${
                            sectionColorVariant === "default"
                              ? "text-black"
                              : "text-white"
                          }`}
                        >
                          {sectionSubHeader}
                        </div>
                      </AnimatedHeader>
                    </CardWrapper>
                  )}

                  {/* Desktop animated text + actions */}
                  <div className="hidden md:flex flex-col h-full">
                    <CardWrapper
                      color="transparent"
                      align="left"
                      className={`flex flex-col justify-between items-start gap-2 sm:gap-4 p-4 h-full border ${
                        fullWidthHeader
                          ? "border-cst-neutral-2"
                          : "!border-primary"
                      }`}
                    >
                      <div
                        ref={labelRef}
                        className={`capitalize text-2xl ${
                          sectionColorVariant === "default"
                            ? "text-black"
                            : "text-white"
                        }`}
                        aria-hidden={false}
                      >
                        {sectorsData[0].label}
                      </div>
                      <div>
                        <h3
                          ref={needRef}
                          className="text-white/10 text-base font-semibold md:text-base lg:text-base pt-[100px] sm:pt-0"
                          data-sector="0"
                        />
                        <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                          <ButtonWrapper>
                            <PrimaryButton
                              className={`${
                                sectionColorVariant === "default"
                                  ? "bg-cst-neutral-5 text-white"
                                  : "bg-cst-neutral-1 text-black"
                              } rounded-xl py-4 px-6 w-full text-sm md:text-base ${
                                sectionColorVariant === "blue"
                                  ? "border-2 border-transparent hover:shadow-md"
                                  : ""
                              }`}
                              hoverTextColor={
                                sectionColorVariant === "blue"
                                  ? "cst-neutral-1"
                                  : "text-white"
                              }
                              hoverBgColor={
                                sectionColorVariant === "blue"
                                  ? "cst-neutral-3"
                                  : "bg-primary"
                              }
                              onClick={() =>
                                learnMoreOnClick
                                  ? learnMoreOnClick()
                                  : !learnMoreLink
                                  ? showJobContent(CustomJobData)
                                  : null
                              }
                            >
                              Learn More
                            </PrimaryButton>
                          </ButtonWrapper>
                          {doubleButton && (
                            <PrimaryButton
                              className={`bg-black text-cst-neutral-1 rounded-xl py-4 px-6 w-full text-sm md:text-base ${
                                sectionColorVariant === "blue"
                                  ? "border-2 border-transparent hover:shadow-md"
                                  : ""
                              }`}
                              hoverTextColor={
                                sectionColorVariant === "blue"
                                  ? "cst-neutral-1"
                                  : "text-white"
                              }
                              hoverBgColor={
                                sectionColorVariant === "blue"
                                  ? "cst-neutral-3"
                                  : "bg-primary"
                              }
                              onClick={() =>
                                specificationsOnClick
                                  ? specificationsOnClick()
                                  : showSpecificationsContent(CustomSpecData)
                              }
                            >
                              Specifications
                            </PrimaryButton>
                          )}
                        </div>
                      </div>
                    </CardWrapper>
                  </div>

                  {/* Mobile stacked layout */}
                  <div className="md:hidden flex flex-col gap-2">
                    {sectorsData.map((sector) => (
                      <div
                        key={sector.id}
                        className="grid grid-cols-1 w-full gap-4"
                      >
                        <CardWrapper
                          color="transparent"
                          align="left"
                          className="justify-between items-center gap-2 sm:gap-4 p-4 text-left border border-cst-neutral-2"
                        >
                          <div className="text-left flex items-start text-xl">
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
                            className={`text-sm font-semibold md:text-base pt-[150px] ${
                              sectionColorVariant === "default"
                                ? "text-black"
                                : "text-white"
                            }`}
                            dangerouslySetInnerHTML={{ __html: sector.title }}
                          />
                          <div className="flex gap-2 lg:gap-4 pt-6 w-full capitalize">
                            <ButtonWrapper>
                              <PrimaryButton
                                className="bg-cst-neutral-1 text-black rounded-xl py-4 px-2 sm:px-6 w-full text-sm md:text-base"
                                onClick={() =>
                                  learnMoreOnClick
                                    ? learnMoreOnClick()
                                    : !learnMoreLink
                                    ? showJobContent(CustomJobData)
                                    : null
                                }
                              >
                                Learn More
                              </PrimaryButton>
                            </ButtonWrapper>
                            {doubleButton && (
                              <PrimaryButton
                                className="bg-black text-cst-neutral-2 rounded-xl py-4 px-2 sm:px-6 w-full text-sm md:text-base"
                                onClick={() =>
                                  specificationsOnClick
                                    ? specificationsOnClick()
                                    : showSpecificationsContent(CustomSpecData)
                                }
                              >
                                Specifications
                              </PrimaryButton>
                            )}
                          </div>
                        </CardWrapper>
                        <div className="flex items-center justify-center">
                          {sector.image && (
                            <Image
                              src={sector.image}
                              className={"object-cover w-full h-full"}
                              alt="tower"
                            />
                          )}
                          {sector.riveFile && !sector.scroll && (
                            <RiveAutoplay
                              src={sector.riveFile}
                              className="h-full w-full"
                            />
                          )}

                          {currentSector.riveFile && currentSector.scroll && (
                            <AchievementRive
                              src={currentSector.riveFile}
                              id={currentSector.id}
                            />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div
                className={`w-full border rounded-2xl bg-cover bg-center hidden md:flex md:min-h-0 items-center justify-center p-0 ${
                  fullWidthHeader ? "border-transparent" : "!border-primary"
                }`}
              >
                {currentSector.image && (
                  <Image
                    src={currentSector.image}
                    className="object-cover w-full lg:w-fit aspect-[1] h-full"
                    alt="tower"
                  />
                )}

                {currentSector.riveFile && !currentSector.scroll && (
                  <RiveComponent className="h-full w-full" />
                )}

                {currentSector.riveFile && currentSector.scroll && (
                  <AchievementRive
                    src={currentSector.riveFile}
                    id={currentSector.id}
                  />
                )}
              </div>
            </div>
          </CardWrapper>
        </div>

        {/* Scroll zones for GSAP (desktop only) */}
        <div
          ref={triggerRef}
          className="relative z-10 bg-transparent hidden md:block"
        >
          {sectorsData.map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center"
              style={{ minHeight: "250vh" }}
            ></div>
          ))}
        </div>

        {/* Transition buffer to avoid lag at exit */}
        <div className="hidden md:block h-[100vh] bg-transparent relative z-0"></div>
      </main>
    </SectionWrapper>
  );
};

export default YouNeedUs;
