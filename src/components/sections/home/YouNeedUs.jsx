"use client";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
// import Tower from '@/components/utils/heroutils/Tower'
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tower from "@/assets/tower.png";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

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
  // {
  //   id: 3,
  //   label: "transportation & mobility",
  //   title: "Graforce supports the transportation sector with scalable hydrogen solutions for fuel cell vehicles, shipping, and aviation. Our Plasmalyzer® technology produces green hydrogen at competitive prices, enabling zero-emission transportation infrastructure and accelerating the transition to sustainable mobility."
  // },
  // {
  //   id: 4,
  //   label: "chemical industry",
  //   title: "Graforce revolutionizes chemical production by providing clean hydrogen and nitrogen compounds through plasma technology. This enables chemical plants to produce ammonia, fertilizers, and other essential chemicals without fossil fuels, reducing carbon footprint by over 80% compared to traditional methods."
  // }
];

const YouNeedUs = () => {
  const sectionRef = useRef(null);
  const needRef = useRef(null);
  const labelRef = useRef(null); // <-- added
  const [isMobile, setIsMobile] = useState(false);
  // const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    if (isMobile || !needRef.current || !sectionRef.current) return;

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
    if (labelRef.current) labelRef.current.textContent = sectorsData[0].label; // <-- set initial label

    // Pin the section and animate text as user scrolls
    const trigger = ScrollTrigger.create({
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
            labelRef.current.textContent = sectorsData[sectorIndex].label; // <-- update label
        }
        // Animate character reveal
        const chars = text.querySelectorAll("span");
        const charsToShow = Math.floor(
          (self.progress * sectorsData.length - sectorIndex) * chars.length
        );
        chars.forEach((char, i) => {
          char.style.color =
            i < charsToShow ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)";
        });
      },
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isMobile]);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <div ref={sectionRef} className="flex items-start h-fit lg:h-screen">
        <CardWrapper
          variant="custom"
          color="dark"
          align="center"
          className="p-2 gap-2 h-full" // changed: allow inner columns to stretch so justify-between works
        >
          <div className="w-full">
            <CardWrapper
              color="dark"
              align="left"
              className="border border-cst-neutral-3 gap-1 sm:gap-4"
            >
              <SectionLabel
                text="This is why you need us"
                textColor="text-white"
              />
              <AnimatedHeader>
                <h2 className="text-2xl lg:text-[48px] tracking-tight capitalized text-white">
                  Powering every sector
                </h2>
              </AnimatedHeader>
            </CardWrapper>
          </div>

          {/* Desktop: Animated single section */}
          <div className="hidden md:grid grid-cols-2 w-full h-full">
            {" "}
            {/* ensure height */}
            <CardWrapper
              color="dark"
              align="left"
              className="flex flex-col justify-between items-start border border-cst-neutral-3 gap-2 sm:gap-4 p-4 h-full"
            >
              {/* animated label controlled via labelRef */}
              <div
                ref={labelRef}
                className="text-white capitalize font-semibold"
                aria-hidden={false}
              >
                {sectorsData[0].label}
              </div>
              <div className="">
                <h3
                  ref={needRef}
                  className="text-white/10 font-bold text-base lg:text-2xl pt-[100px] sm:pt-0"
                  data-sector="0"
                  // No dangerouslySetInnerHTML here, handled by GSAP
                />
                <div className="pt-6 w-full">
                  <PrimaryButton className="bg-cst-neutral-1 text-black rounded-xl py-4 px-6 w-full text-base">
                    Learn More
                  </PrimaryButton>
                </div>
              </div>
            </CardWrapper>
            <div className={`flex items-center justify-center p-0 w-full`}>
              {/* <Tower className={`w-full h-full`} /> */}
              <Image src={Tower} className="object-contain w-fit h-fit" alt="tower" />
            </div>
          </div>

          {/* Mobile: Stacked all sections */}
          <div className="md:hidden flex flex-col gap-4 w-full">
            {sectorsData.map((sector) => (
              <div key={sector.id} className="grid grid-cols-1 w-full gap-4">
                <CardWrapper
                  color="dark"
                  align="left"
                  className="justify-between items-center border border-cst-neutral-3 gap-2 sm:gap-4 p-4 text-left"
                >
                  <div className="text-left flex items-start">
                    <SectionLabel
                      icon={false}
                      text={sector.label}
                      textColor="text-white"
                    />
                  </div>
                  <h3
                    className="text-white font-bold text-base md:text-lg pt-[150px]"
                    dangerouslySetInnerHTML={{ __html: sector.title }}
                  />
                  <div className="pt-6 w-full">
                    <PrimaryButton className="bg-cst-neutral-1 text-black rounded-xl py-4 px-6 w-full text-base">
                      Learn More
                    </PrimaryButton>
                  </div>
                </CardWrapper>
                <div className="flex items-center justify-center">
                  {/* <Tower className="" /> */}
                  <Image
                    src={Tower}
                    className="object-cover w-full h-full"
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
