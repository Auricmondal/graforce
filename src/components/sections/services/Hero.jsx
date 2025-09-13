import React from "react";
import Image from "next/image";
import ScrollReveal from "@/wrappers/ScrollReveal";

import HeroImg from "@/assets/service/hero/Hero.png";

import FloatingBolt from "@/components/utils/heroutils/FloatingBolt";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import ElevatedButton from "@/components/utils/buttons/ElevatedButton";

import vector from "@/assets/service/hero/Vector.webp";

import SectionWrapper from "@/wrappers/SectionWrapper";

const Hero = () => {
  return (
      <div className="bg-no-repeat lg:bg-repeat bg-cover xl:bg-contain bg-center bg-white"
            style={{ backgroundImage: `url(${vector.src})`, 
                    //backgroundSize: '60%',
                    backgroundPosition: 'center',
                    opacity: 1,
                    mixBlendMode: 'color',
          }}
      >
      <div className="max-w-[2000px] mx-auto relative">
      <div className="overflow-hidden ">

        <ScrollReveal>
        <div className="w-full flex flex-col gap-8 items-center z-10 pt-32 ">
          <h1 className="text-4xl lg:text-7xl 2xl:text-8xl text-center lg:max-2xl:max-w-4xl 2xl:max-w-6xl">Hydrogen. Zero CO2 Emissions.</h1>
          <div className="flex md:flex-wrap md:flex-row gap-4 flex-col items-center justify-center w-full px-8">
            <FloatupButton className="md:!w-fit" icon={"❯"}>Talk to an Expert</FloatupButton>
            <ElevatedButton className="md:!w-fit">Learn More</ElevatedButton>
          </div>
        </div>
        </ScrollReveal>

        <div className="w-full flex justify-center items-center pt-18 mt-12">
          <Image src={HeroImg} alt="HeroImg" className="w-full" />
        </div>
          <div>
            <FloatingBolt className="top-90 left-1/6 md:top-60 md:left-9/50 xl:top-40 2xl:left-4/25" size="sm:w-16 sm:h-16 h-14 w-14" />
            <FloatingBolt className="top-100 right-1/7 md:top-90 md:right-1/5 lg:top-90 lg:right-1/4" size="sm:w-10 sm:h-10 h-8 w-8"  />
          </div>
      </div>



      </div>
    </div>
  );
};

export default Hero;