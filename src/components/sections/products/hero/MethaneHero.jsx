"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

import { useSidebarActions } from "@/hooks/useSidebarActions";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

import atomImg from "@/assets/product/atom.webp";
import sparkImg from "@/assets/product/spark_hydro.svg";
import carbonImg from "@/assets/product/carbon.webp";
import hydrogenImg from "@/assets/product/hydrogen.webp";

const RiveAutoplay = dynamic(
  () => import("@/components/utils/animations/RiveAutoplay"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

import { useSidebarActions } from "@/hooks/useSidebarActions";

const Hero = () => {
  const { showContactForm } = useSidebarActions();

  // Fallback/default hero data
  const [heroData, setHeroData] = useState({
    title: "Methane Plasmalyzer®",
    subTitle:
      "We turn methane into clean hydrogen and solid carbon using advanced plasma technology. Our process delivers zero CO₂ emissions and is fully scalable for industrial demand.",
    primaryButtonText: "Talk to an Expert",
    primaryButtonAction: "openModal",
    secondaryButtonText: "Download Brochure",
    secondaryButtonUrl: null,
    backgroundImages: [],
  });

  // Fetch hero data from Sanity
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const res = await client.fetch(methaneHeroQuery);
        const hero = res?.heroSection;

        if (hero) {
          setHeroData((prev) => ({
            ...prev,
            title: hero.title || prev.title,
            subTitle: hero.subTitle || prev.subTitle,
            primaryButtonText: hero.primaryButtonText || prev.primaryButtonText,
            primaryButtonAction: hero.primaryButtonAction || prev.primaryButtonAction,
            secondaryButtonText: hero.secondaryButtonText || prev.secondaryButtonText,
            secondaryButtonUrl: hero.secondaryButtonLink || prev.secondaryButtonUrl,
            backgroundImages: hero.backgroundImages || prev.backgroundImages,
          }));
        }
      } catch (err) {
        console.error("Failed to fetch Hero Section:", err);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <main className="text-white overflow-hidden h-fit bg-cst-neutral-1 p-2">
      <div className="bg-[linear-gradient(90.53deg,_#102044_-1.02%,_#416DD2_99.51%)] flex flex-col w-full rounded-2xl relative p-2 md:p-16 md:pb-4 px-[3vw] h-full overflow-hidden">
        <div className="relative pt-32">
          <div className="absolute right-[-17%] top-[-10vh] md:top-[-27vh] lg:top-[-32vh] w-full lg:w-2/3 bg-no-repeat bg-contain z-1 scale-125">
            <Image
              src={sparkImg}
              alt="left image"
              fill={false}
              className="!aspect-[912/707] z-10"
            />
          </div>

          <div className="absolute right-[0.5vw] bottom-[20vh] bg-no-repeat bg-contain z-1 scale-25 hidden lg:block">
            <Image src={carbonImg} alt="left image" fill={false} className="" />
          </div>
          <div className="absolute left-[15vw] bottom-[-4vh] bg-no-repeat bg-contain z-1 scale-20 hidden lg:block">
            <Image
              src={hydrogenImg}
              alt="left image"
              fill={false}
              className="z-10"
            />
          </div>
          <div className="absolute left-[5%] top-[8%] hidden md:block bg-no-repeat bg-contain z-1 scale-50">
            <Image src={carbonImg} alt="left image" fill={false} className="" />
          </div>

          <div className="flex flex-col gap-6 h-fit my-auto z-100">
            <div className="flex flex-col gap-4">
              <h2 className="relative text-[clamp(40px,6vw,128px)] font-semibold max-w-8xl w-full px-6 leading-[100%] max-w-6xl mx-auto text-center z-100">
                <AnimatedHeader delay={0.4}>
                  Methane Plasmalyzer®
                </AnimatedHeader>
              </h2>
              <p className="max-w-3xl mx-auto md:text-xl font-light text-center">
                <AnimatedHeader delay={0.4}>
                  We turn methane into clean hydrogen and solid carbon using
                  advanced plasma technology. Our process delivers zero CO₂
                  emissions and is fully scalable for industrial demand.
                </AnimatedHeader>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryButton
                className="text-white transition duration-300 border-1 border-transparent hover:border-white py-3 px-4 md:py-4 md:px-6 rounded-2xl font-medium text-sm sm:text-base flex items-center gap-3 bg-primary hover:!bg-cst-neutral-5 w-full md:w-fit justify-center z-100"
                onClick={() => showContactForm()}
              >
                Talk to an Expert <FaChevronRight />
              </PrimaryButton>
              <PrimaryButton
                className="text-black bg-secondary py-3 px-4 md:py-4 md:px-6 rounded-2xl transition font-medium text-sm sm:text-base w-full md:w-fit justify-center z-100"
                onClick={() => showContactForm()}
              >
                Download Brochure
              </PrimaryButton>
            </div>
          </div>
        </div>
        <div className="w-auto flex-1 relative h-fit py-6 lg:p-0 ">
          <RiveAutoplay
            src={"/animations/heroanim.riv"}
            stateMachines={"heroanim"}
            delay={800}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
