import SectionWrapper from "@/wrappers/SectionWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import TopSection from "./joinUs/TopSection";
import Image from "next/image";
import timelineImage from "@/assets/investor/timeline.png";

const JoinUs = () => {
  return (
    <SectionWrapper
      className="text-black space-y-2 min-h-screen h-max"
      sectionClassName="bg-cst-neutral-1"
    >
      <CardWrapper
        className="gap-2 p-8 !rounded-2xl bg-[linear-gradient(90deg,_#102044_0%,_#284FA9_100%)] text-white"
        variant="custom"
        color="default"
        align="center"
      >
        <SectionLabel text="Team & Leadership" textColor="text-white" />
        <h2 className="text-2xl lg:text-5xl md:text-[48px] tracking-tight font-medium">
          <AnimatedHeader>Join Us in Scaling Hydrogen</AnimatedHeader>
        </h2>
        <p className="max-w-sm">
          <AnimatedHeader>
            Graforce is seeking long-term equity partners to accelerate growth.
          </AnimatedHeader>
        </p>
      </CardWrapper>
      <div className="rounded-2xl bg-[linear-gradient(90deg,_#102044_0%,_#284FA9_100%)] py-16 px-4 md:px-6">
        <div className="md:p-8 flex flex-col gap-27">
          <div className="lg:px-[10vw]">
            <TopSection />
          </div>
          <div className="">
            <Image
              src={timelineImage}
              style={{ objectFit: "contain" }}
              alt="timelineImg"
              className="mx-auto"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default JoinUs;
