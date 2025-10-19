// components/HeroSection.jsx
import SectionWrapper from "@/wrappers/SectionWrapper";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";
import jobImg1 from "@/assets/job/jobs-img1.jpg";
import jobImg2 from "@/assets/job/jobs-img2.jpg";
import jobImg3 from "@/assets/job/jobs-img3.jpg";
import jobImg4 from "@/assets/job/jobs-img4.jpg";
import jobImg5 from "@/assets/job/jobs-img5.jpg";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

const images = [
  "/images/building.jpg",
  "/images/black-white-columns.jpg",
  "/images/people-walking.jpg",
  "/images/woman-festive.jpg",
  "/images/car-headlight.jpg",
];

export default function HeroSection() {
  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1"
      className="bg-white rounded-2xl pt-[155px]"
    >
      {/* Top part */}
      <div className="text-center flex flex-col items-center gap-6 px-4 md:px-6 lg:px-16">
        <div className="flex flex-col gap-2">
          <div className="relative flex items-center justify-center w-fit mx-auto p-2 bg-[#416DD21A] rounded-full">
            {/* <span className="absolute inline-flex h-9 w-24 rounded-full bg-[#416DD21A] opacity-75 animate-ping"></span> */}
            <div className="relative px-8 py-2 h-14 bg-[#416DD238] text-primary font-medium rounded-full flex items-center justify-center z-10">
              We Are Hiring
            </div>
          </div>

          <h1 className="text-5xl md:text-[64px] lg:text-[88px] font-medium leading-[100%]">
            <AnimatedHeader>
              Where bold minds meet big challenges.
            </AnimatedHeader>
          </h1>
        </div>
        <p className="text-black font-light max-w-[950px] text-sm md:text-xl lg:text-2xl">
          <AnimatedHeader>
            Join Grafoce and turn daring ideas into tangible progress. Create,
            innovate, and leave a mark that lasts. Be part of a team where every
            project pushes the boundaries of clean energy and reshape
            industries, and every contribution matters.
          </AnimatedHeader>
        </p>
        <PrimaryButton className="bg-cst-neutral-5 text-white rounded-2xl py-4 px-6 font-medium flex items-center gap-2">
          Explore Open Roles
          <FaChevronRight />
        </PrimaryButton>
      </div>

      <div className="mt-12 grid grid-cols-2 grid-rows-27 gap-4 h-[654px]">
        <div className="relative col-span-1 row-span-15">
          <Image
            src={jobImg1}
            alt="Building with lit windows"
            fill
            className="object-cover rounded-lg "
            priority
          />
        </div>
        <div className="relative md:block rounded-lg overflow-hidden col-span-1 row-span-5">
          <Image
            src={jobImg3}
            alt="Black and white columns"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden col-span-1 row-span-15">
          <Image
            src={jobImg4}
            alt="Woman with festive decoration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden col-span-1 row-span-14">
          <Image
            src={jobImg2}
            alt="People walking on a bridge"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative rounded-lg overflow-hidden col-span-1 row-span-9">
          <Image
            src={jobImg5}
            alt="Car headlight close up"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
