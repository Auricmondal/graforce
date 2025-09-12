"use client";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TbSquareRotatedFilled } from "react-icons/tb";
import ServiceSolution from "@/assets/service/ServiceSolution2.jpg";
import Image from "next/image";
import { gsap } from "gsap";

const OtherServices = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(1);
  const [activeImage, setActiveImage] = useState(ServiceSolution);
  const otherServices = [
    {
      id: 1,
      title: "Water purification",
      image: ServiceSolution,
    },
    {
      id: 2,
      title: "Energy generation",
      image: ServiceSolution,
    },
  ];

  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".image",
      { opacity: 1, y: 0 },
      { opacity: 0, y: 50, duration: 0.2, ease: "power2.inOut" },
      0
    ).fromTo(
      ".image",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.3, ease: "power2.inOut" },
      0.4
    );
  }, [isActive]);

  return (
    <SectionWrapper
      className={`flex flex-row items-start justify-between bg-gradient-to-tr from-[#081124] via-[#132957] to-[#1E428A] text-white w-full`}
    >
      <div className="flex flex-col gap-2 items-start w-full">
        <div className="block">
          <GradientBadge
            variant="services"
            text="Other Services"
            className={`p-[4px_16px] rounded-full opacity-100 inline-flex items-center justify-start bg-gradient-to-r from-primary-50 to-primary-300 text-white text-xs md:text-sm font-medium`}
            icon={<TbSquareRotatedFilled className="rotate-45" />}
          />
        </div>
        <div className="flex-1 gap-1 sm:gap-2 md:gap-3 lg:gap-6 flex flex-col w-full">
          <div className="text-3xl md:text-4xl lg:text-7xl text-white">
            Explore Our Other Solutions
          </div>
          <div className="mt-4 gap-2 justify-start items-start flex flex-col lg:gap-6">
            {otherServices.map((service) => (
              <div
                onMouseEnter={() => {
                  setIsActive(service.id);
                  setActiveImage(service.image);
                }}
                key={service.id}
                className="flex flex-col items-start justify-start gap-5 w-full cursor-pointer"
              >
                <div 
                className="flex flex-row items-center justify-start gap-3"
                onClick={() => {router.push('/services/' + service.title.toLowerCase().replace(/\s+/g, '-'))}}
                >
                  <div
                    className={`text-xl transition-all duration-300 ease-in-out ${
                      isActive === service.id
                        ? "text-primary-200"
                        : "text-primary-200 md:text-gray-500"
                    }`}
                  >
                    0{service.id}
                  </div>
                  <div
                    className={`text-3xl sm:text-4xl md:text-6xl transition-all duration-300 ease-in-out capitalize ${
                      isActive === service.id
                        ? "text-white"
                        : "text-white md:text-gray-500"
                    }`}
                  >
                    {service.title}
                  </div>
                </div>
                <div className="flex flex-col w-full min-[1100px]:hidden">
                  <div
                    className={`w-full bg-transparent transition-all duration-300 ease-in-out origin-bottom ${
                      isActive ? " h-[50vh]" : "h-0"
                    }`}
                  >
                    <Image
                      src={activeImage}
                      alt="Service Solution"
                      className="object-cover w-full h-full rounded-lg transition-all duration-300 ease-in-out origin-bottom"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-col hidden min-[1100px]:flex">
        <div
          className={`image w-[40vw] h-[60vh] rounded-lg bg-white transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden`}
        >
          <Image
            src={activeImage}
            alt="Service Solution"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OtherServices;
