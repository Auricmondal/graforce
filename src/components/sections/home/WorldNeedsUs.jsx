"use client";

import { useEffect, useRef, useState } from "react";
import SectorTabs from "./SectorTabs";
import SectorCard from "./SectorCard";
import { TbSquareRotatedFilled } from "react-icons/tb";
import sectors from "@/data/sectors.json";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";

const TAB_ROTATION_INTERVAL = 30000; // 30 seconds
const CARD_ROTATION_INTERVAL = 10000; // 10 seconds

export default function WorldNeedsUs() {
  const tabs = Object.keys(sectors);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const tabIntervalRef = useRef(null);
  const cardIntervalRef = useRef(null);

  // Rotate cards in current tab
  const startCardRotation = (startFromIndex = 0) => {
    clearInterval(cardIntervalRef.current);

    let index = startFromIndex;
    setActiveCardIndex(index); // Show first card immediately

    cardIntervalRef.current = setInterval(() => {
      index = (index + 1) % sectors[activeTab].length;
      setActiveCardIndex(index);
    }, CARD_ROTATION_INTERVAL);
  };

  // Rotate tabs, and reset cards for each
  const startTabRotation = (startFromIndex = 0) => {
    clearInterval(tabIntervalRef.current);

    let index = startFromIndex;

    tabIntervalRef.current = setInterval(() => {
      index = (index + 1) % tabs.length;
      setActiveTab(tabs[index]);
      startCardRotation(0); // restart card loop at index 0
    }, TAB_ROTATION_INTERVAL);
  };

  // On mount
  useEffect(() => {
    const initialTabIndex = tabs.findIndex((tab) => tab === activeTab);
    startTabRotation(initialTabIndex);
    startCardRotation(0);

    return () => {
      clearInterval(tabIntervalRef.current);
      clearInterval(cardIntervalRef.current);
    };
  }, []);

  // Restart card rotation on tab change
  useEffect(() => {
    startCardRotation(0);
  }, [activeTab]);

  // Card click handler
  const handleCardClick = (index) => {
    setActiveCardIndex(index);
    startCardRotation(index); // continue loop from clicked card
  };

  // Tab click handler
  const handleTabClick = (tab) => {
    const index = tabs.findIndex((t) => t === tab);
    setActiveTab(tab);
    startTabRotation(index); // continue loop from clicked tab
    startCardRotation(0); // always start card loop from 0
  };

  return (
    <SectionWrapper
      className="bg-no-repeat bg-cover bg-center py-6 my-10 text-white"
      style={{
        backgroundImage: `linear-gradient(206.41deg, #0C1731 17.27%, #92ABE5 47.98%, #6E8FDD 65.61%, #102044 91.31%),
                          url(lightning.svg)`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-[1460px] mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <GradientBadge
            text={"This is Why The World Needs us"}
            icon={<TbSquareRotatedFilled />}
          />
          <h2 className="text-[24px] md:text-[52px]">Powering Every Sector</h2>
        </div>

        {/* Tabs */}
        <SectorTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 py-6">
          {sectors[activeTab].map((card, index) => (
            <SectorCard
              key={card.id}
              data={card}
              isActive={activeCardIndex === index}
              onClick={() => handleCardClick(index)}
              intervalDuration={CARD_ROTATION_INTERVAL}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
