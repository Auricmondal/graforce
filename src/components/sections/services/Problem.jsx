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
  // 12 months data (monthly) - with more dynamic patterns and crossovers
  { month: "JAN", 2015: 850000, 2020: 650000, 2025: 750000 },
  { month: "FEB", 2015: 920000, 2020: 800000, 2025: 500000 },
  { month: "MAR", 2015: 800000, 2020: 900000, 2025: 650000 },
  { month: "APR", 2015: 1250000, 2020: 750000, 2025: 850000 },
  { month: "MAY", 2015: 980000, 2020: 1100000, 2025: 680000 },
  { month: "JUN", 2015: 1150000, 2020: 650000, 2025: 900000 },
  { month: "JUL", 2015: 750000, 2020: 850000, 2025: 500000 },
  { month: "AUG", 2015: 1200000, 2020: 700000, 2025: 800000 },
  { month: "SEP", 2015: 900000, 2020: 1050000, 2025: 650000 },
  { month: "OCT", 2015: 1350000, 2020: 800000, 2025: 950000 },
  { month: "NOV", 2015: 1100000, 2020: 1200000, 2025: 750000 },
  { month: "DEC", 2015: 950000, 2020: 900000, 2025: 850000 },
];

// 30 days data (daily for last 30 days) - with dynamic crossovers
const thirtyDaysData = [
  { month: "Day 1", 2015: 45000, 2020: 35000, 2025: 40000 },
  { month: "Day 2", 2015: 42000, 2020: 48000, 2025: 28000 },
  { month: "Day 3", 2015: 52000, 2020: 32000, 2025: 45000 },
  { month: "Day 4", 2015: 38000, 2020: 55000, 2025: 32000 },
  { month: "Day 5", 2015: 58000, 2020: 40000, 2025: 50000 },
  { month: "Day 6", 2015: 35000, 2020: 45000, 2025: 28000 },
  { month: "Day 7", 2015: 48000, 2020: 30000, 2025: 42000 },
  { month: "Day 8", 2015: 41000, 2020: 52000, 2025: 35000 },
  { month: "Day 9", 2015: 55000, 2020: 38000, 2025: 48000 },
  { month: "Day 10", 2015: 32000, 2020: 50000, 2025: 33000 },
  { month: "Day 11", 2015: 49000, 2020: 35000, 2025: 45000 },
  { month: "Day 12", 2015: 44000, 2020: 48000, 2025: 29000 },
  { month: "Day 13", 2015: 51000, 2020: 31000, 2025: 41000 },
  { month: "Day 14", 2015: 36000, 2020: 53000, 2025: 38000 },
  { month: "Day 15", 2015: 47000, 2020: 29000, 2025: 52000 },
  { month: "Day 16", 2015: 53000, 2020: 46000, 2025: 25000 },
  { month: "Day 17", 2015: 39000, 2020: 35000, 2025: 48000 },
  { month: "Day 18", 2015: 50000, 2020: 51000, 2025: 31000 },
  { month: "Day 19", 2015: 43000, 2020: 38000, 2025: 46000 },
  { month: "Day 20", 2015: 56000, 2020: 47000, 2025: 33000 },
  { month: "Day 21", 2015: 34000, 2020: 42000, 2025: 49000 },
  { month: "Day 22", 2015: 48000, 2020: 33000, 2025: 27000 },
  { month: "Day 23", 2015: 41000, 2020: 54000, 2025: 44000 },
  { month: "Day 24", 2015: 52000, 2020: 36000, 2025: 38000 },
  { month: "Day 25", 2015: 37000, 2020: 49000, 2025: 51000 },
  { month: "Day 26", 2015: 54000, 2020: 32000, 2025: 29000 },
  { month: "Day 27", 2015: 40000, 2020: 50000, 2025: 43000 },
  { month: "Day 28", 2015: 47000, 2020: 39000, 2025: 36000 },
  { month: "Day 29", 2015: 33000, 2020: 45000, 2025: 47000 },
  { month: "Day 30", 2015: 51000, 2020: 41000, 2025: 32000 },
];

// 7 days data (daily for last 7 days) - with interesting crossover patterns
const sevenDaysData = [
  { month: "Mon", 2015: 8500, 2020: 7200, 2025: 6800 },
  { month: "Tue", 2015: 7800, 2020: 9000, 2025: 5500 },
  { month: "Wed", 2015: 9200, 2020: 6500, 2025: 8200 },
  { month: "Thu", 2015: 6900, 2020: 8700, 2025: 4900 },
  { month: "Fri", 2015: 9800, 2020: 7100, 2025: 7800 },
  { month: "Sat", 2015: 7200, 2020: 8900, 2025: 5200 },
  { month: "Sun", 2015: 8600, 2020: 6800, 2025: 6900 },
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
    if (selectedTimeframe === "30 days") return thirtyDaysData;
    if (selectedTimeframe === "7 days") return sevenDaysData;
    return fullData;
  };

  const filteredData = getFilteredData();

  return (
    <SectionWrapper className="bg-white ">
      <div className="py-6 md:py-12 max-w-[2000px] mx-auto">
        <div className="text-center mx-auto mb-8 md:mb-12">
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
        <div className="shadow-[0px_1px_3px_0px_rgba(13,10,44,0.08)]">  
        <div className=" rounded-lg p-4 md:p-6">
          {/* large screen */}

          <div className="hidden lg:flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div className="w-full lg:w-auto text-left">
              <p className="text-cst-neutral-400 text-xs md:text-lg">
                Statistics
              </p>
              <p className="font-bold text-sm md:text-[22px]">Co2 Emmission</p>
            </div>

            {/* Year Filters */}
            <div className="flex gap-2 md:gap-[6px] justify-end lg:justify-start">
              {["2015", "2020", "2025"].map((year) => (
                <button
                  key={year}
                  onClick={() => toggleYear(year)}
                  className={`py-1 md:py-2  md:px-4 rounded-lg border border-cst-neutral-500 transition flex items-center gap-1 text-xs md:text-base whitespace-nowrap
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
          </div>

          <div className=" rounded-lg p-0 pr-0 md:pr-0">
          {/* Chart */}
          <div className="w-full overflow-x-auto pointer-events-none">
            <ResponsiveContainer width="98%" height={250} minWidth={200}>
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
      </div>
    </SectionWrapper>
  );
}
