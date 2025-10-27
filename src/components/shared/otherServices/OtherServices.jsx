"use client";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import Image from "next/image";
import shapeDiamond1 from "@/assets/service/shapeDiamond.png";
import shapeDiamond2 from "@/assets/service/shapeDiamond2.png";
import shapeDiamond3 from "@/assets/service/shapeDiamond3.png";
import React, { useState } from "react";
import ServicesOption from "./ServicesOption";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const defaultServicesOptions = [
  {
    index: 1,
    title: "Hydrogen production",
    link: "/services/hydrogen-production",
    image: shapeDiamond1,
  },
  {
    index: 2,
    title: "Water purification",
    link: "/services/water-purification",
    image: shapeDiamond2,
  },
  {
    index: 3,
    title: "Co2 free energy generation",
    link: "/services/co2-free-energy-generation",
    image: shapeDiamond3,
  },
];

const OtherServices = ({ servicesOptions = defaultServicesOptions }) => {
  const router = useRouter();
  const [serviceImage, setServiceImage] = useState(shapeDiamond1);
  const serviceImageRef = React.useRef();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        serviceImageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5 }
      );
    });
    return () => ctx.revert();
  }, [serviceImage]);

  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper
        className="relative pt-2 md:pt-8 min-h-screen overflow-hidden"
        variant="standard"
        color="dark"
        align="left"
      >
        <div
          ref={serviceImageRef}
          className="absolute top-0 right-0 h-full w-full lg:w-1/2 opacity-30 translate-x-[50%] lg:translate-x-0"
        >
          <Image
            src={serviceImage}
            alt="Shape"
            className="object-fit h-full w-full"
          />
        </div>
        <div className="relative flex flex-row justify-center items-center my-auto h-full w-full">
          <div className="relative z-10 flex flex-col h-full w-full items-start justify-center gap-8 pr-4 md:pr-0">
            <SectionLabel text="explore our services" textColor="text-white" />
            <div className="flex flex-col gap-4">
              {servicesOptions.map((option) => (
                <ServicesOption
                  key={option.index}
                  onHover={() => {
                    setServiceImage(option.image);
                  }}
                  onClick={() => router.push(option.link)}
                  {...option}
                />
              ))}
            </div>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default OtherServices;
