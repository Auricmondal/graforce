import React from "react";

import SS1 from "@/assets/service/ServiceSolution1.jpg";
import SS2 from "@/assets/service/ServiceSolution2.jpg";
import carbon from "@/assets/carbon.svg";
import handshield from "@/assets/handshield.svg";

import DemoCard from "@/components/utils/cards/DemoCard";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";
import ScrollCardSection from "@/components/utils/animations/ScrollCardSection";
import { TbSquareRotatedFilled } from "react-icons/tb";

import ScrollReveal from "@/wrappers/ScrollReveal";

const Solutions = ({ isStraight = false }) => {
  const subsections = [
    {
      title: "Impact",
      description:
        "Proven efficiency, lower costs, and near-zero emissions — validated in real-world applications.",
      img: SS1,
      points: [
        {
          title: "Lower Costs",
          description: "Grey hydrogen ~€9/kg vs. Graforce ~€1.8–3.6/kg.",
          icon: handshield,
        },
        {
          title: "Carbon Advantage",
          description: "Avoid €50–100/ton CO₂ taxes under EU ETS.",
          icon: carbon,
        },
        {
          title: "New Revenue Stream",
          description: "Solid carbon sells for €400–600/ton in industry.",
          icon: handshield,
        },
        {
          title: "Scalable Deployment",
          description: "Compatible with current gas pipelines & future biogas.",
          icon: handshield,
        },
      ],
    },
    {
      title: "The Technicalities",
      description:
        "Proven efficiency, lower costs, and near-zero emissions — validated in real-world applications.",
      img: SS2,
      points: [
        {
          title: "High Efficiency",
          description: ">80% methane split at plasma temps \n>1,300 °C.",
          icon: handshield,
        },
        {
          title: "Fuel Cell Grade",
          description: "Hydrogen purity: 99.999%.",
          icon: handshield,
        },
        {
          title: "Massive CO₂ Reduction",
          description: "Up to 95% lifecycle emissions cut vs. SMR.",
          icon: handshield,
        },
        {
          title: "Valuable Byproducts",
          description: "High-grade carbon black & graphite.",
          icon: handshield,
        },
      ],
    },
  ];

  return (
    <SectionWrapper className="bg-[#E8EEFA] !py-0">
      <div className="max-w-[2000px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col justify-center text-center gap-4 md:gap-2">
          <span>
            <GradientBadge
              className="mb-5"
              text={"Graforce's Solution"}
              icon={<TbSquareRotatedFilled />}
            />
          </span>

          <ScrollReveal>
            <div className="pb-4 w-full max-w-[90%] sm:max-w-[600px] lg:max-w-[90%] h-auto lg:h-[168px] mx-auto flex flex-col justify-center gap-2 lg:gap-[10px] opacity-100 lg:pb-12 md:pb-6 xl:pb-2 lg:mb-4">
              <h2 className="text-[3rem] md:text-[3.3rem] lg:max-xl:mt-6 sm:text-[2rem] lg:text-[4rem] font-semibold leading-[1.1] tracking-[-0.01em] text-primary-dark mb-4 ">
                Zero Emission Hydrogen
              </h2>

              <p className="mx-auto w-full lg:max-w-[65%] text-[0.875rem] sm:text-[1rem] lg:text-[1rem] font-normal leading-[1.6] tracking-[0] text-center text-black ">
                Graforce's Plasmalyzer® converts methane or biogas into clean
                hydrogen using plasma catalysis at over 1,300 °C. Instead of
                releasing CO₂, carbon is captured as a valuable solid. The
                result: a cost-effective, emission-free fuel for energy,
                industry, and mobility.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Subsections with Scroll Animation */}
        <ScrollCardSection direction="vertical">
          {subsections.map((subsection, index) => (
            <div key={index} className="item w-full h-full bg-[#E8EEFA] py-2">
              <DemoCard
                subsection={subsection}
                index={index}
                isReversed={isStraight ? false : index % 2 === 0}
                isStraight={isStraight}
              />
              {index < subsections.length - 1 && (
                <hr className="w-full lg:hidden mx-auto border-0 border-b mt-8 border-dark-tint/80" />
              )}
            </div>
          ))}
        </ScrollCardSection>

        {/* Mobile Only (no scroll animation) */}
        <div className="space-y-16 lg:space-y-10 xl:space-y-24 xl:hidden">
          {subsections.map((subsection, index) => (
            <React.Fragment key={index}>
              <DemoCard
                subsection={subsection}
                index={index}
                isReversed={isStraight ? false : index % 2 === 0}
                isStraight={isStraight}
              />
              {/* {index < subsections.length - 1 && (
                <hr className="w-full lg:hidden mx-auto border-0 border-t border-dark-tint/80" />
              )} */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Solutions;
