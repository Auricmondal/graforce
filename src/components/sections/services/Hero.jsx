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
      <div className="max-w-[2000px] mx-auto">
      <div className="h-screen relative overflow-hidden ">
        <Image src={HeroImg} alt="HeroImg" className="absolute bottom-0 " />

        <ScrollReveal>
        <div className="h-1/2 absolute top-32 left-0 w-full flex flex-col gap-8 items-center z-10">
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl text-center lg:max-2xl:max-w-4xl 2xl:max-w-6xl">Hydrogen. Zero CO2 Emissions.</h1>
          <div className="flex md:flex-wrap md:flex-row gap-4 flex-col items-center justify-center  w-full px-8">
            <FloatupButton className="md:!w-fit" icon={"❯"}>Talk to an Expert</FloatupButton>
            <ElevatedButton className="md:!w-fit">Learn More</ElevatedButton>
          </div>
        </div>
        </ScrollReveal>

      </div>

        <FloatingBolt className="top-120 left-1/6 md:top-60 md:left-9/50 xl:top-40 2xl:left-4/25" size="w-16 h-16" />
        <FloatingBolt className="top-140 right-1/7 md:top-100 md:right-1/5 lg:top-90 lg:right-1/4" size="w-10 h-10"  />
      
      </div>
    </div>
  );
};

export default Hero;