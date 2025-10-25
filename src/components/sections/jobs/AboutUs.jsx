"use client";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useState } from "react";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import aboutUsImage from "@/assets/home/aboutimg.png";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import Link from "next/link";

const AboutUs = () => {
  const { showSpecificationsContent } = useSidebarActions();

  const [foundation, setFoundation] = useState(2012);
  const [location, setLocation] = useState("Berlin Adlershof");

  return (
    <SectionWrapper
      className="bg-[#E6E6E6] text-black"
      sectionStyle={{ backgroundColor: "#E6E6E6" }}
    >
      <div className="space-y-2">
        <CardWrapper
          className="gap-2"
          variant="featured"
          color="default"
          align="center"
        >
          <SectionLabel text="About Us" />
          <AnimatedHeader>
            <h2 className="text-2xl md:text-3xl md:text-[48px] tracking-tight">
              What Do We Do
            </h2>
          </AnimatedHeader>
        </CardWrapper>

        <CardWrapper
          variant="custom"
          align="center"
          color="default"
          className="px-4 md:px-14 pt-[52px] pb-[88px] md:pt-[80px] md:pb-[112px]"
        >
          <div className="flex-col w-full">
            <div className="flex flex-row items-center justify-between gap-4 text-sm sm:text-lg">
              <div className="flex items-center gap-1">
                <LuClock3 className="text-base sm:text-2xl" />
                Founded in {foundation}
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineLocationOn className="text-base sm:text-2xl" />
                {location}
              </div>
            </div>
            <div className="flex-row pt-6 sm:pt-10 w-full">
              {/* Partners + Image Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full h-full">
                {/* Partners */}
                <div className="h-full">
                  <div className="w-full h-full flex flex-col justify-between space-y-[70px] sm:space-y-[70px]">
                    <div className="text-[48px] text-left capitalize font-bold">
                      <h2 className="">
                        <AnimatedHeader>graforce</AnimatedHeader>
                      </h2>
                    </div>
                    <div className="">
                      <AnimatedHeader>
                        <p className="text-black text-base text-left">
                          Power-to-X plants generate CO<sub>2</sub>-free or CO
                          <sub>2</sub>-negative hydrogen and synthetic raw
                          materials. The technology leader in sustainable
                          solutions and negative emission technologies holds
                          three patents for applying different plasma processes
                          (high-frequency discharge, dielectric barrier
                          discharge and coronal low-frequency discharge).
                          Production capacities: Methane plasmalysis expansion
                          to up to 50 MW/a. through customers and partners.{" "}
                        </p>
                      </AnimatedHeader>
                      <div className="pt-6">
                        <Link href="/about">
                          <PrimaryButton className="bg-cst-neutral-5 text-white rounded-xl py-4 px-6 w-full">
                            Learn More
                          </PrimaryButton>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology Image */}
                <div className="relative w-full h-full">
                  <div className="absolute w-[100%] h-[100%] bg-cst-neutral-2 rounded-3xl z-0 translate-3"></div>
                  <div className="relative z-10 rounded-3xl overflow-hidden w-[100%] h-[100%]">
                    <Image
                      src={aboutUsImage}
                      alt="Graforce Technology"
                      width={600}
                      height={450}
                      className="object-cover w-full h-full aspect-[3/4] sm:aspect-auto"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
        </CardWrapper>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
