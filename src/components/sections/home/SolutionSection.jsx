"use client";

import { useEffect, useRef, useState } from "react";
import { TbSquareRotatedFilled } from "react-icons/tb";
import solutionData from "@/data/solutions.json";
import SolutionItem from "./SolutionItem";
import SolutionCard from "./SolutionCard";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import SectionWrapper from "@/wrappers/SectionWrapper";

const ROTATION_INTERVAL = 15000; // 15 seconds per item

export default function SolutionSection() {
  const [selectedId, setSelectedId] = useState(solutionData[0].id);
  const intervalRef = useRef(null);

  const currentIndex = solutionData.findIndex((item) => item.id === selectedId);

  const startRotation = (startFromIndex) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    let index = startFromIndex;

    intervalRef.current = setInterval(() => {
      index = (index + 1) % solutionData.length;
      setSelectedId(solutionData[index].id);
    }, ROTATION_INTERVAL);
  };

  useEffect(() => {
    startRotation(currentIndex);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleItemClick = (id, index) => {
    setSelectedId(id);
    startRotation(index);
  };

  const selectedFeature = solutionData.find((f) => f.id === selectedId);

  return (
    <SectionWrapper className="flex flex-col lg:flex-row justify-between gap-4 items-stretch max-w-[1460px] mx-auto">
      <div className="space-y-6">
        <GradientBadge
          text={"Graforce's Solution"}
          icon={<TbSquareRotatedFilled />}
        />

        <h2 className="text-[32px] md:text-[52px] leading-[100%] tracking-[-1.5%] whitespace-nowrap">
          Hydrogen Today Pollutes.
          <br />
          <span className="text-primary-400">We Change That</span>
        </h2>

        <div className="space-y-6">
          {solutionData.map((item, index) => (
            <div className="" key={item.id}>
              <SolutionItem
                key={item.id}
                number={`0${index + 1}`}
                title={item.title}
                description={item.description}
                isActive={selectedId === item.id}
                onClick={() => handleItemClick(item.id, index)}
                intervalDuration={ROTATION_INTERVAL}
              />
              {selectedId === item.id && (
                <div className="lg:hidden">
                  <SolutionCard
                    count={`0${item.id}`}
                    cardTitle={item.title}
                    cardDescription={item.description}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[48%] h-full hidden lg:block">
        {selectedFeature && (
          <SolutionCard
            count={`0${selectedFeature.id}`}
            cardTitle={selectedFeature.title}
            cardDescription={selectedFeature.description}
          />
        )}
      </div>
    </SectionWrapper>
  );
}
