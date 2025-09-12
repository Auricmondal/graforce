import GradientBadge from "@/components/utils/badges/GradientBadge";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import SectionWrapper from "@/wrappers/SectionWrapper";
import Image from "next/image";
import aboutUsImage from "@/assets/home/aboutimg.png";
import { TbSquareRotatedFilled } from "react-icons/tb";

export default function AboutUs() {
  return (
    <div className="bg-white">
    <SectionWrapper className="bg-white text-black py-10 space-y-10 mx-auto max-w-[1460px]">
      <section className="text-center max-w-3xl mx-auto flex flex-col items-center gap-2">
        <GradientBadge text="About Us" icon={<TbSquareRotatedFilled />} />
        <h2 className="text-2xl md:text-[64px] tracking-tight">
          Trusted. Proven. Driven.
        </h2>
        <p className="text-black text-base">
          Graforce is recognized worldwide for pioneering plasma technology that
          delivers clean hydrogen without CO₂. Our mission is to scale
          sustainable energy solutions that decarbonize industries and power a
          carbon-free future.
        </p>
        <FloatupButton
          variant="custom"
          className={
            "bg-cst-neutral-800 text-white rounded-md py-3 px-4 flex gap-2 items-center justify-center font-medium mx-auto !w-fit"
          }
        >
          Learn More
        </FloatupButton>
      </section>

      {/* Partners + Image Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Partners */}
        <div>
          <h2 className="text-xl md:text-[40px] mb-4 text-center lg:text-left">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="w-full h-[184px] bg-gray-200 rounded-md border border-gray-300 flex items-center justify-center"
              >
                <span className="text-gray-400">Logo</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Image */}
        <div className="relative w-full h-full">
          <div className="absolute -bottom-1 -right-0 w-[95%] h-[95%] bg-cst-neutral-200 rounded-3xl z-0"></div>
          <div className="relative z-10 rounded-3xl overflow-hidden w-[95%] h-[95%]">
            <Image
              src={aboutUsImage}
              alt="Graforce Technology"
              width={600}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <section>
        <p className="text-center md:text-2xl ">
          At Graforce, we engineer breakthrough plasma technologies that turn
          methane and biogas into CO₂-free hydrogen. With global collaborators
          and award-winning innovation, we are building the clean energy systems
          of tomorrow.
        </p>
      </section>
    </SectionWrapper>
    </div>
  );
}
