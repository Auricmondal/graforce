"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import GradientBadge from "@/components/utils/badges/GradientBadge";
import { TbSquareRotatedFilled } from "react-icons/tb";
import SectionWrapper from "@/wrappers/SectionWrapper";
import { GoDotFill } from "react-icons/go";
import { motion, AnimatePresence } from "motion/react";

import ScrollReveal from "@/wrappers/ScrollReveal";

const colorMap = {
  2015: { code: "#102044", text: "text-primary-500" },
  2020: { code: "#ADC0EC", text: "text-primary-50" },
  2025: { code: "#24489A", text: "text-primary-400" },
};

const timeframes = ["7 days", "30 days", "12 months"];

const fullData = [
  { month: "JAN", 2015: 0, 2020: 0, 2025: 0 },
  { month: "FEB", 2015: 1100000, 2020: 500000, 2025: 500000 },
  { month: "MAR", 2015: 1200000, 2020: 600000, 2025: 1000000 },
  { month: "APR", 2015: 800000, 2020: 400000, 2025: 5200000 },
  { month: "MAY", 2015: 700000, 2020: 300000, 2025: 200000 },
  { month: "JUN", 2015: 600000, 2020: 250000, 2025: 150000 },
  { month: "JUL", 2015: 100000, 2020: 150000, 2025: 100000 },
  { month: "AUG", 2015: 300000, 2020: 200000, 2025: 250000 },
  { month: "SEP", 2015: 800000, 2020: 400000, 2025: 500000 },
  { month: "OCT", 2015: 1000000, 2020: 600000, 2025: 1100000 },
  { month: "NOV", 2015: 400000, 2020: 300000, 2025: 900000 },
  { month: "DEC", 2015: 100000, 2020: 100000, 2025: 100000 },
];

export default function EmissionPage() {
  const [activeYears, setActiveYears] = useState(["2015", "2020", "2025"]);
  const [selectedTimeframe, setSelectedTimeframe] = useState("12 months");

  const toggleYear = (year) => {
    setActiveYears((prev) => {
      const newActiveYears = prev.includes(year)
        ? prev.filter((y) => y !== year)
        : [...prev, year];

      // If all buttons become inactive, reactivate all of them
      if (newActiveYears.length === 0) {
        return ["2015", "2020", "2025"];
      }

      return newActiveYears;
    });
  };

  const getFilteredData = () => {
    if (selectedTimeframe === "12 months") return fullData;
    if (selectedTimeframe === "30 days") return fullData.slice(-3); // last 3 months
    if (selectedTimeframe === "7 days") return fullData.slice(-1); // last month
    return fullData;
  };

  const filteredData = getFilteredData();

  return (
    <SectionWrapper>
      <div className="py-6 md:py-12">
        <div className="text-center max-w-[2000px] mx-auto mb-8 md:mb-12">
          <GradientBadge
            text={"The Problem We Discovered"}
            icon={<TbSquareRotatedFilled />}
          />
          <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] mt-4">
            The Emission Burden
          </h2>
          <p className="text-base md:text-xl mt-2 mx-auto">
            95% of today's hydrogen is fossil-based, emitting millions of tons
            of CO₂ annually.
          </p>
          </ScrollReveal>
        </div>

        <div className="shadow-[0px_1px_3px_0px_rgba(13,10,44,0.08)] rounded-lg p-4 md:p-6">

          {/* large screen */}

          <div className="hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="w-full lg:w-auto text-left">
              <p className="text-cst-neutral-400 text-xs md:text-lg">
                Statistics
              </p>
              <p className="font-bold text-sm md:text-[22px]">
                Co2 Emmission
              </p>
            </div>

            {/* Year Filters */}
            <div className="flex gap-2 md:gap-[6px] justify-end lg:justify-start">
              {["2015", "2020", "2025"].map((year) => (
                <button
                  key={year}
                  onClick={() => toggleYear(year)}
                  className={`py-1 md:py-2 px-2 md:px-4 rounded-lg border border-cst-neutral-500 transition flex items-center gap-1 text-xs md:text-base whitespace-nowrap
                ${activeYears.includes(year) ? "" : " text-cst-neutral-500"}`}
                >
                  <GoDotFill
                    className={`text-sm md:text-2xl ${
                      activeYears.includes(year)
                        ? colorMap[year].text
                        : "text-cst-neutral-500"
                    }`}
                  />
                  {year}
                </button>
              ))}
            </div>

            {/* Timeframe Filter */}
            <div className="relative inline-flex bg-primary-50/10 p-1 rounded-xl w-full lg:w-auto min-w-fit">
              {timeframes.map((label) => {
                const isActive = selectedTimeframe === label;

                return (
                  <button
                    key={label}
                    onClick={() => setSelectedTimeframe(label)}
                    className={`relative z-10 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium transition-colors duration-200 rounded-xl flex-1 lg:flex-none whitespace-nowrap ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 z-0 rounded-xl bg-[#0F1C48]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* medium screen and below */}
          <div className="flex flex-col gap-4 mb-6 lg:hidden">
            {/* Statistics and Year Filters on same line for sm/md, separate for lg */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start lg:flex-col lg:items-start gap-4">
              <div className="text-left">
                <p className="text-cst-neutral-400 text-xs md:text-lg">
                  Statistics
                </p>
                <p className="font-bold text-sm md:text-[22px]">
                  Co2 Emmission
                </p>
              </div>

              {/* Year Filters */}
              <div className="flex gap-2 md:gap-[6px] justify-start sm:justify-end lg:justify-start">
                {["2015", "2020", "2025"].map((year) => (
                  <button
                    key={year}
                    onClick={() => toggleYear(year)}
                    className={`py-1 md:py-2 px-2 md:px-4 rounded-lg border border-cst-neutral-500 transition flex items-center gap-1 text-xs md:text-base whitespace-nowrap
                  ${activeYears.includes(year) ? "" : " text-cst-neutral-500"}`}
                  >
                    <GoDotFill
                      className={`text-sm md:text-2xl ${
                        activeYears.includes(year)
                          ? colorMap[year].text
                          : "text-cst-neutral-500"
                      }`}
                    />
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeframe Filter - separate row for all screen sizes */}
            <div className="relative inline-flex bg-primary-50/10 p-1 rounded-xl w-full lg:w-auto min-w-fit">
              {timeframes.map((label) => {
                const isActive = selectedTimeframe === label;

                return (
                  <button
                    key={label}
                    onClick={() => setSelectedTimeframe(label)}
                    className={`relative z-10 px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium transition-colors duration-200 rounded-xl flex-1 lg:flex-none whitespace-nowrap ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="pill"
                        className="absolute inset-0 z-0 rounded-xl bg-[#0F1C48]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chart */}
          <div className="w-full overflow-x-auto">
            <ResponsiveContainer width="100%" height={250} minWidth={300}>
              <LineChart data={filteredData}>
                <XAxis
                  dataKey="month"
                  stroke="#ccc"
                  fontSize={12}
                  tickMargin={8}
                />
                <YAxis
                  tickFormatter={(v) => `${v / 1000}k`}
                  stroke="#ccc"
                  fontSize={12}
                  width={60}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                {activeYears.map((year) => (
                  <Line
                    key={year}
                    type="monotone"
                    dataKey={year}
                    stroke={colorMap[year].code}
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
