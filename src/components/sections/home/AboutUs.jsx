"use client";

import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const brandLogoBase = "/brand/img/";

  // Hardcoded fallback logos
  const fallbackLogos = [
    { src: `${brandLogoBase}digicert_icon.png.webp`, name: "Brand 1" },
    { src: `${brandLogoBase}Group.webp`, name: "Brand 2" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 3" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 4" },
    { src: `${brandLogoBase}WSJ.webp`, name: "Brand 5" },
    { src: `${brandLogoBase}Vector.webp`, name: "Brand 6" },
  ];

  const [brandLogos, setBrandLogos] = useState(fallbackLogos); // default = fallback
  const [loading, setLoading] = useState(true);

  const API_URL = "/api/brands"; // replace with your real endpoint

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch logos");

        const data = await res.json();

        // If API returns logos, use them; else use fallback
        if (data && Array.isArray(data.logos) && data.logos.length > 0) {
          setBrandLogos(data.logos);
        } else {
          setBrandLogos(fallbackLogos);
        }
      } catch (err) {
        console.warn("API fetch failed, using fallback logos:", err);
        setBrandLogos(fallbackLogos);
      } finally {
        setLoading(false);
      }
    };

    fetchLogos();
  }, []);

  // Local fallback for individual broken images
  const handleImgError = (e) => {
    e.target.src = `${brandLogoBase}default-logo.webp`;
  };

  return (
    <SectionWrapper
      maxWidth="2000px"
      className="bg-[#E6E6E6] text-black space-y-10 px-2 py-4"
      sectionStyle={{ backgroundColor: "#E6E6E6" }}
    >
      <div className="space-y-4">
        <CardWrapper
          className="gap-4"
          variant="featured"
          color="default"
          align="center"
        >
          <SectionLabel text="About Us" />
          <h2 className="text-3xl md:text-[48px] tracking-tight">
            Trusted. Proven. Driven.
          </h2>
        </CardWrapper>

        {loading ? (
          <p className="text-center text-gray-500">Loading brand logos...</p>
        ) : (
          <div
            id="brands"
            className="grid md:grid-cols-3 grid-cols-2 gap-4 p-4 h-fit w-full bg-white rounded-lg"
          >
            {brandLogos.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center bg-black/10 rounded-lg h-[131px] md:h-[196px]"
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
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
