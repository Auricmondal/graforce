import RippleCard from "./cards/RippleCard";
import Card from "./cards/AnimatedBorderCard";
import SectionWrapper from "@/wrappers/SectionWrapper";

export default function GraforceCards() {
  return (
    <SectionWrapper
      className="h-fit rounded-2xl bg-[linear-gradient(228.4deg,_#102044_26.33%,_#2850AA_93.72%)] py-16 px-4 md:px-6 text-white"
      sectionClassName="bg-cst-neutral-1"
    >
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-10 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-4">
          <RippleCard>Graforce</RippleCard>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 lg:col-span-6 gap-4">
          <Card
            title="IP Ownership"
            description="Full control of tech & patents."
            className={"col-span-2 !p-6 md:p-[12px]"}
            animationDelay="2s"
          ></Card>
          <Card
            title="Manufacturing & Maintenance"
            description="Managed by licensees (EPCs)."
            className={"md:col-span-1 col-span-2 !p-6 md:p-[12px]"}
          ></Card>
          <Card
            title="Positive Cash Flow"
            description="Expected by 2028."
            className={"md:col-span-1 col-span-2 !p-6 md:p-[12px]"}
          ></Card>
          <Card
            title="Licensing Fees"
            className={"col-span-2 !p-6 md:p-[12px]"}
            description="Scalable revenue streams."
          ></Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
