"use client";

import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useEffect, useState } from "react";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
import aboutUsImage from "@/assets/home/aboutimg.png";
import Image from "next/image";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import { useSidebarActions } from "@/hooks/useSidebarActions";
import CustomSpecData from "@/data/customSpecData.json";
import client from "@/lib/sanityClient";
import urlFor from "@/lib/urlFor";
import { aboutUsQuery } from "@/Queries/home/AboutUs";

/*const GROQ_QUERY = `
  *[_type == "home"][0]{
    "aboutUs": aboutUsSection{
      title,
      foundation,
      location,
      companyName,
      description,
      buttonText,
      buttonUrl,
      image,
      brandLogos[] {
        name,
        logo
      }
    }
  }
`;*/

const AboutUs = () => {
  const { showSpecificationsContent } = useSidebarActions();

  const brandLogoBase = "/brand/img/";

  // Default fallback data
  const fallbackLogos = [
    { src: `${brandLogoBase}digicert_icon.png.webp`, name: "Brand 1" },
    { src: `${brandLogoBase}Group.webp`, name: "Brand 2" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 3" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 4" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 5" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 6" },
  ];

  const [brandLogos, setBrandLogos] = useState(fallbackLogos);
  const [foundation, setFoundation] = useState(2012);
  const [location, setLocation] = useState("Berlin Adlershof");
  const [title, setTitle] = useState("Trusted. Proven. Driven.");
  const [companyName, setCompanyName] = useState("graforce");
  const [description, setDescription] = useState(
    "Power-to-X plants generate CO₂-free or CO₂-negative hydrogen and synthetic raw materials."
  );
  const [buttonText, setButtonText] = useState("Learn More");
  const [buttonUrl, setButtonUrl] = useState("#");
  const [mainImage, setMainImage] = useState(aboutUsImage);
  const [loading, setLoading] = useState(true);

  // 🧠 Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sanityData = await client.fetch(aboutUsQuery);
        const about = sanityData?.aboutUs;

        if (about) {
          setTitle(about.title || title);
          setFoundation(about.foundation || foundation);
          setLocation(about.location || location);
          setCompanyName(about.companyName || companyName);
          setDescription(about.description || description);
          setButtonText(about.buttonText || buttonText);
          setButtonUrl(about.buttonUrl || buttonUrl);
          setMainImage(
            about.image ? urlFor(about.image).url() : aboutUsImage
          );

          if (Array.isArray(about.brandLogos) && about.brandLogos.length > 0) {
            const logos = about.brandLogos.map((logo) => ({
              name: logo.name,
              src: logo.logo ? urlFor(logo.logo).url() : `${brandLogoBase}default-logo.webp`,
            }));
            setBrandLogos(logos);
          }
        }
      } catch (err) {
        console.warn("⚠️ Failed to fetch from Sanity. Using fallback data.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🖼️ Handle broken logos
  const handleImgError = (e) => {
    e.target.src = `${brandLogoBase}default-logo.webp`;
  };

  return (
    <SectionWrapper
      className="bg-[#E6E6E6] text-black space-y-10"
      sectionStyle={{ backgroundColor: "#E6E6E6" }}
    >
      <div className="space-y-4">
        {/* Header Section */}
        <CardWrapper
          className="gap-2"
          variant="featured"
          color="default"
          align="center"
        >
          <SectionLabel text="About Us" />
          <AnimatedHeader>
            <h2 className="text-2xl md:text-3xl md:text-[48px] tracking-tight">
              {title}
            </h2>
          </AnimatedHeader>
        </CardWrapper>

        {/* Brand Logos */}
        {loading ? (
          <p className="text-center text-gray-500">Loading brand logos...</p>
        ) : (
          <div
            id="brands"
            className="grid md:grid-cols-3 grid-cols-2 gap-4 p-0 h-fit w-full bg-cst-neutral-1 rounded-lg"
          >
            {brandLogos.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center bg-cst-neutral-1 border border-cst-neutral-2 rounded-lg h-[131px] md:h-[196px]"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  onError={handleImgError}
                  className="w-[25%] h-[25%] object-contain rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        )}

        {/* About Section */}
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
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full h-full">
                {/* Left Section */}
                <div className="h-full">
                  <div className="w-full h-full flex flex-col justify-between space-y-[70px] sm:space-y-[70px]">
                    <div className="text-[48px] text-left capitalize font-bold">
                      <h2>
                        <AnimatedHeader>{companyName}</AnimatedHeader>
                      </h2>
                    </div>
                    <div>
                      <AnimatedHeader>
                        <p className="text-black text-base text-left">
                          {description}
                        </p>
                      </AnimatedHeader>
                      <div className="pt-6">
                        <PrimaryButton
                          className="bg-cst-neutral-5 text-white rounded-xl py-4 px-6 w-full"
                          onClick={() =>
                            buttonUrl
                              ? window.open(buttonUrl, "_blank")
                              : showSpecificationsContent(CustomSpecData)
                          }
                        >
                          {buttonText}
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-full order-first md:order-last">
                  <div className="absolute w-[100%] h-[100%] bg-cst-neutral-2 rounded-3xl z-0 translate-3"></div>
                  <div className="relative z-10 rounded-3xl overflow-hidden w-[100%] h-[100%]">
                    <Image
                      src={mainImage}
                      alt={`${companyName} Technology`}
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
