import React from "react";
import Image from "next/image";
import SectionWrapper from "@/wrappers/SectionWrapper";
import bulb from "@/assets/bulb.png";
import ElevatedButton from "@/components/utils/buttons/ElevatedButton";

const FinalCTA = () => {
  return (
    <div className="bg-primary-700">
      <SectionWrapper className="max-w-[1460px] relative overflow-hidden">
        {/* Bulb Image */}
        <div className="absolute z-0 -bottom-8 right-1/12 -rotate-30 w-1/7 min-w-30">
          <Image src={bulb} alt="bulb" className=""></Image>
        </div>

        {/* Text */}
        <div className="relative z-10 flex flex-col gap-4 md:items-baseline items-center">
          <h2 className="text-3xl font-bold text-white">Ready to cut CO2 ?</h2>
          <p className="text-md text-center md:text-left text-white">
            Book a demo and see how Graforce can fuel your hydrogen strategy.
          </p>
          <ElevatedButton className="!w-fit">Contact Now ❯ </ElevatedButton>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default FinalCTA;