import React from "react";
import Image from "next/image";
import ScrollReveal from "@/wrappers/ScrollReveal";
import Path from "@/assets/home/hero/Path.png";
import Rectangle from "@/assets/home/hero/Rectangle-5.png";
import Bulb from "@/assets/bulb.png";
import FloatingTip from "@/components/utils/heroutils/FloatingTip";
import FloatingBolt from "@/components/utils/heroutils/FloatingBolt";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import ElevatedButton from "@/components/utils/buttons/ElevatedButton";
import Customer1 from "@/assets/home/hero/Ellipse-10.png";
import Customer2 from "@/assets/home/hero/Ellipse-11.png";
import Customer3 from "@/assets/home/hero/Ellipse-15.png";

const Hero = () => {
  const CustomerAvatar = ({ src, className = "" }) => {
    return (
      <Image
        src={src}
        alt="Avatar"
        className={`w-10 h-10 rounded-full ${className}`}
      />
    );
  };

  return (
    <div>
      <div className="h-screen relative overflow-hidden bg-gradient-to-br from-white to-primary-300">
        <Image
          src={Path}
          alt="Path"
          className="absolute -bottom-1/5 left-0 min-h-full object-cover object-right"
        />
        <Image
          src={Rectangle}
          width={500}
          alt="Rectangle"
          className="absolute top-0 right-0 object-contain"
        />
        <Image
          src={Bulb}
          width={200}
          alt="Rectangle"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />

        <div className="h-1/2 absolute top-28 left-0 w-full z-2">
          <ScrollReveal>
            <div className="flex flex-col gap-8 items-center">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-center">
                Fueling a Carbon <br /> Free Future
              </h1>
              <div className="flex gap-4">
                <FloatupButton className="!w-fit" icon={"❯"}>Book a Demo</FloatupButton>
                <ElevatedButton className="!w-fit">Learn More</ElevatedButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <FloatingTip className="top-90 right-1/6 -translate-y-10 md:translate-0" delay={1}>
        • 100% Carbon Value
      </FloatingTip>
      <FloatingTip className="top-105 left-1/6 -translate-y-10 md:translate-0" delay={0.2}>
        • 0% CO₂ Costs
      </FloatingTip>
      <FloatingTip className="top-120 right-1/3 -translate-y-10 md:translate-0" delay={0.6}>
        • 50% Energy Savings
      </FloatingTip>

      <FloatingBolt className="top-12 right-1/16" size="w-12 h-12" />
      <FloatingBolt className="top-70 left-1/6" size="w-16 h-16" />
      <FloatingBolt className="bottom-30 left-1/20" />
      <FloatingBolt className="bottom-70 right-1/4" />
      <FloatingBolt className="bottom-10 right-1/6" size="w-8 h-8" />

      <div className="absolute z-2 bottom-10 right-10 flex flex-col gap-4 items-center bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
        <h4 className="text-sm text-center font-light">Happy Customers</h4>
        <div className="flex -space-x-4">
          <CustomerAvatar src={Customer1} />
          <CustomerAvatar src={Customer2} />
          <CustomerAvatar src={Customer3} />
        </div>
        <p className="text-3xl md:text-4xl text-primary-400 font-bold">39+</p>
      </div>
    </div>
  );
};

export default Hero;
