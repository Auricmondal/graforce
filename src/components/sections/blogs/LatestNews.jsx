"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import React from "react";
import hotnews from "@/assets/blogs/HotNews.jpg";
import sidehotpic from "@/assets/blogs/SideHotPic.jpg";
import ProfilePic from "@/assets/about/gallery-image-1.jpg";
import CardWrapper from "@/wrappers/CardWrapper";
import Image from "next/image";
import SplitLines from "@/components/utils/splitter/SplitLines";
import AuthorBadge, { PartnershipBadge } from "./AuthorBadge";
import ArrowBadge from "./ArrowBadge";
import SideCard from "./SideCard";

const LatestNews = () => {
  const sideCardData = [
    {
      picture: sidehotpic,
      badgeText: "Technology",
      name: "John Smith",
      date: "2024-06-10",
      description: "Graforce & Kawasaki Partner for Zero Carbon Heat & Power",
      ProfilePicture: ProfilePic
    },
    {
      picture: sidehotpic,
      badgeText: "Innovation",
      name: "Jane Doe",
      date: "2024-06-15",
      description: "New Advances in Plasma Technology Unveiled, Revolutionizing Industry Standards",
      ProfilePicture: ProfilePic
    }
  ];
  return (
    <SectionWrapper sectionClassName="bg-cst-neutral-1">
      <CardWrapper variant="custom" className="px-4 py-8 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-10 w-full gap-8">
          <div className="relative flex flex-col h-full sm:col-span-7 rounded-2xl space-y-8">
            <div className="text-cst-neutral-5 font-semibold capitalize">
              <h2 className="text-3xl sm:text-4xl md:text-6xl">Latest News</h2>
            </div>
            <div className="relative grid grid-cols-1 w-full h-[70vh] sm:h-full rounded-2xl">
              <Image
                src={hotnews}
                alt="Hot News"
                className="absolute brightness-70 top-0 right-0 object-cover w-full h-full rounded-2xl overflow-hidden aspect-3/4 sm:aspect-auto"
              />
              <div className="relative z-20 w-full flex flex-col justify-between items-start px-6 py-6 sm:py-8">
                <div className="flex flex-col gap-4 items-start justify-start">
                  <PartnershipBadge />
                  <div className="w-full text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-black mt-4">
                    <SplitLines className="bg-white rounded-2xl">
                      Zero Carbon CHP with Kawasaki
                    </SplitLines>
                  </div>
                </div>
              </div>
              <div className="relative z-20 w-full flex flex-col justify-end items-start px-6 py-6 sm:py-8">
                <div className="flex flex-row items-center justify-between w-full">
                  <AuthorBadge
                    name="Marry Doe"
                    date="2024-05-20"
                    badgeImage={ProfilePic}
                  />
                  <ArrowBadge onClick={() => {
                    console.log("Clicked on arrow.");
                  }} />
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 grid grid-rows-2 gap-6">
            {sideCardData.map((card, index) => (
              <SideCard
                key={index}
                picture={card.picture}
                badgeText={card.badgeText}
                name={card.name}
                date={card.date}
                description={card.description}
                ProfilePicture={card.ProfilePicture}
              />
            ))}
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default LatestNews;
