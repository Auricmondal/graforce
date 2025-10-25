import sideImg from "@/assets/service/shapeDiamond.png";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionWrapper from "@/wrappers/SectionWrapper";
import globeImg from "@/assets/home/globe.webp";
import Image from "next/image";

export default function MarketEntry() {
  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1 h-screen"
      className="flex w-full gap-2 flex-col lg:flex-row h-full"
    >
      {/* Large Left Box */}
      <div className="w-full lg:w-[500px] rounded-lg flex flex-col justify-end relative overflow-hidden bg-[linear-gradient(90.04deg,_#102044_0.03%,_#2850AA_99.96%)] backdrop-blur-[9.300000190734863px] min-h-[50%] lg:h-full pt-8 pb-16 px-6 gap-[10px] h-max">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={globeImg}
            alt="Globe"
            className="object-contain select-none absolute"
            style={{
              transform: "rotate(140deg)",
              opacity: 1,
              scale: "3",
              top: "42.91%",
              left: "-20%",
              objectFit: "contain"
            }}
          />
        </div>
        <h2 className="text-5xl lg:text-[64px] font-medium z-10 relative text-white">
          <AnimatedHeader>Market Entry in 2025</AnimatedHeader>
        </h2>
        <p className="z-10 relative max-w-sm text-white">
          <AnimatedHeader>
            Commercial interest secured with early customers eager to deploy
            reactors.
          </AnimatedHeader>
        </p>
      </div>

      {/* Top Middle Box */}
      <div className="flex flex-col gap-2 flex-1 text-white lg:text-xl">
        <div className="flex gap-2 flex-1/2">
          <div className="bg-[linear-gradient(90.04deg,_#102044_0.03%,_#2850AA_99.96%)] rounded-lg py-6 px-4 flex items-center justify-center text-center relative overflow-hidden flex-1/2 ">
            <p className="z-10">Demo plant successfully running in Austria.</p>
            <Image
              src={sideImg}
              alt="Globe"
              className="object-contain select-none absolute"
              style={{
                transform: "rotate(215deg)",
                opacity: 1,
                scale: 0.6,
                top: "-45.31%",
                left: "51.02%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Top Right Box */}
          <div className="bg-[linear-gradient(90.04deg,_#102044_0.03%,_#2850AA_99.96%)] rounded-lg py-6 px-4 flex items-center justify-center text-center relative overflow-hidden flex-1/2">
            <p className="z-10">
              0.5 MW reactor developed and ready for commercialization.
            </p>
            <Image
              src={sideImg}
              alt="Globe"
              className="object-contain select-none absolute"
              style={{
                transform: "rotate(45deg)",
                opacity: 1,
                scale: 0.6,
                top: "35.38%",
                left: "-48.78%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* Bottom Right Box */}
        <div className="bg-[linear-gradient(90.04deg,_#102044_0.03%,_#2850AA_99.96%)] rounded-lg py-6 px-4 flex items-center justify-center text-center relative flex-1/2">
          <p className="z-10 max-w-sm mx-auto">
            Active pipeline of industrial partners for early deployment.
          </p>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <Image
              src={sideImg}
              alt="Globe"
              className="object-contain select-none absolute w-full h-full"
              style={{
                transform: "rotate(225deg)",
                opacity: 1,
                scale: 1,
                bottom: "-35.38%",
                right: "-47.86%",
                objectFit: "contain",
              }}
            />
            <Image
              src={sideImg}
              alt="Globe"
              className="object-contain select-none absolute w-full h-full"
              style={{
                transform: "rotate(225deg)",
                opacity: 1,
                scale: 1,
                top: "-44.00%",
                left: "-36.75%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </SectionWrapper>
  );
}
