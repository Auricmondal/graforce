"use client";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";

import { useSidebarActions } from "@/hooks/useSidebarActions";

const blockData = [
  { header: "Graforce", subHeader: "Invest for a better Future" },
  { header: "€15M", subHeader: "Capital Need" },
  { header: "22%", subHeader: "Shared capital" },
  { header: "€3M", subHeader: "Minimum Ticket Size" },
];

const AnimatedBlock = ({ header, subHeader }) => {
  return (
    <div className="animated-border-container !h-max">
      <div className="animated-border-layer"></div>
      <div className="animated-border-content flex flex-col !py-24">
        <AnimatedHeader className="text-[32px] md:text-2xl lg:text-[32px] font-bold">
          {header}
        </AnimatedHeader>
        <AnimatedHeader className="md:text-xs lg:text-base">
          {subHeader}
        </AnimatedHeader>
      </div>
    </div>
  );
};

export default function TopSection() {
  const { showContactForm } = useSidebarActions();
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center">
        {[[blockData[0]], [blockData[1], blockData[2]], [blockData[3]]].map(
          (column, columnIndex) => (
            <div key={columnIndex} className="col-span-1">
              {column.map((block, blockIndex) => (
                <AnimatedBlock
                  key={blockIndex}
                  header={block.header}
                  subHeader={block.subHeader}
                />
              ))}
            </div>
          )
        )}
      </div>

      <div className="flex justify-center flex-col md:flex-row gap-3">
        <PrimaryButton
          className={`bg-cst-neutral-5 text-white rounded-2xl md:rounded-3xl py-4 px-6 md:py-6 md:px-8 lg:py-8 lg:px-12 w-full md:w-fit text-base md:text-lg lg:text-2xl flex items-center gap-2 justify-center`}
          onClick={() => showContactForm()}
        >
          Book a Call <FaChevronRight />
        </PrimaryButton>
        <PrimaryButton
          className={`bg-cst-neutral-1 rounded-2xl md:rounded-3xl py-4 px-6 md:py-6 md:px-8 lg:py-8 lg:px-12 w-full md:w-fit text-base md:text-lg lg:text-2xl`}
          onClick={() => showContactForm()}
        >
          Download Investor Deck
        </PrimaryButton>
      </div>
    </div>
  );
}
