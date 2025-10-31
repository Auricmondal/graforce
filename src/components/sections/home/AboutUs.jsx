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
import { useLanguage } from "@/hooks/useLanguage";
import { aboutUsQuery } from "@/Queries/home/AboutUs";


const AboutUs = () => {
  const { showSpecificationsContent } = useSidebarActions();
  const { language } = useLanguage();

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
    "Power-to-X plants generate CO<sub>2</sub>-free or CO\
                          <sub>2</sub>-negative hydrogen and synthetic raw\
                          materials. The technology leader in sustainable\
                          solutions and negative emission technologies holds\
                          three patents for applying different plasma processes\
                          (high-frequency discharge, dielectric barrier\
                          discharge and coronal low-frequency discharge).\
                          Production capacities: Methane plasmalysis expansion\
                          to up to 50 MW/a. through customers and partners."
  );
  const [buttonText, setButtonText] = useState("Learn More");
  const [buttonUrl, setButtonUrl] = useState("#");
  // mainImage may be a string URL (from urlFor) or a static import (aboutUsImage)
  const [mainImage, setMainImage] = useState(aboutUsImage);
  const [loading, setLoading] = useState(true);

  // Fetch data from Sanity (language-aware)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const lang = language || "en";
        const sanityData = await client.fetch(aboutUsQuery, { language: lang });
        const about = sanityData?.aboutUs;
        console.log("about: ", about,about.companyName)

        if (about && typeof about === "object") {
          setTitle(about.title || "Trusted. Proven. Driven.");
          setFoundation(typeof about.foundation === "number" ? about.foundation : 2012);
          setLocation(about.location || "Berlin Adlershof");
          if (typeof about.companyName === "string" && about.companyName.trim().length > 0) {
            setCompanyName(about.companyName);
          }

          setDescription(
            typeof about.description === "string" && about.description.trim().length > 0
              ? about.description
              : "Power-to-X plants generate CO<sub>2</sub>-free or CO\
                          <sub>2</sub>-negative hydrogen and synthetic raw\
                          materials. The technology leader in sustainable\
                          solutions and negative emission technologies holds\
                          three patents for applying different plasma processes\
                          (high-frequency discharge, dielectric barrier\
                          discharge and coronal low-frequency discharge).\
                          Production capacities: Methane plasmalysis expansion\
                          to up to 50 MW/a. through customers and partners."
          );
          setButtonText(about.buttonText || "Learn More");
          setButtonUrl(about.buttonUrl || "#");

          // Main image
          try {
            const hasAsset =
              about.image &&
              typeof about.image === "object" &&
              about.image.asset &&
              typeof about.image.asset === "object";
            if (hasAsset) {
              const imageUrl = urlFor(about.image)?.url?.();
              setMainImage(imageUrl || aboutUsImage);
            } else {
              setMainImage(aboutUsImage);
            }
          } catch {
            setMainImage(aboutUsImage);
          }

          // Brand logos
          if (Array.isArray(about.brandLogos) && about.brandLogos.length > 0) {
            const logos = about.brandLogos.map((logoItem) => {
              const hasLogoAsset =
                logoItem?.logo &&
                typeof logoItem.logo === "object" &&
                logoItem.logo.asset &&
                typeof logoItem.logo.asset === "object";
              let src = `${brandLogoBase}default-logo.webp`;
              try {
                if (hasLogoAsset) {
                  const built = urlFor(logoItem.logo)?.url?.();
                  if (built && typeof built === "string") src = built;
                }
              } catch {
                // keep default
              }
              return {
                name: logoItem?.name || "Brand",
                src,
              };
            });
            setBrandLogos(logos);
          } else {
            setBrandLogos(fallbackLogos);
          }
        } else {
          setBrandLogos(fallbackLogos);
          setMainImage(aboutUsImage);
        }
      } catch (err) {
        console.warn("⚠️ Failed to fetch from Sanity. Using fallback data.", err);
        setBrandLogos(fallbackLogos);
        setMainImage(aboutUsImage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Handle broken logos
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
                key={`${logo.name}-${i}`}
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
              <div
                className="flex items-center gap-1"
                title={Number.isFinite(foundation) ? `Founded in ${foundation}` : "Founded"}
              >
                <LuClock3 className="text-base sm:text-2xl" />
                Founded in {Number.isFinite(foundation) ? foundation : 2012}
              </div>
              <div className="flex items-center gap-1">
                <MdOutlineLocationOn className="text-base sm:text-2xl" />
                {location || "Berlin Adlershof"}
              </div>
            </div>

            <div className="flex-row pt-6 sm:pt-10 w-full">
              <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full h-full">
                {/* Left Section */}
                <div className="h-full">
                  <div className="w-full h-full flex flex-col justify-between space-y-[70px] sm:space-y-[70px]">
                    <div className="text-[48px] text-left capitalize font-bold">
                      <h2>
                        {companyName}
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
                            buttonUrl && buttonUrl !== "#"
                              ? window.open(buttonUrl, "_blank", "noopener,noreferrer")
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
                      src={typeof mainImage === "string" && mainImage ? mainImage : aboutUsImage}
                      alt={`${companyName} Technology`}
                      width={600}
                      height={450}
                      className="object-cover w-full h-full aspect-[3/4] sm:aspect-auto"
                      unoptimized
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
