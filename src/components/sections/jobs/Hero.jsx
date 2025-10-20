import SectionWrapper from "@/wrappers/SectionWrapper";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { FaChevronRight } from "react-icons/fa";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import JobScroller from "./JobScroller";

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

      <JobScroller />
    </SectionWrapper>
  );
}
