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
    setActiveYears((prev) =>
      prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
    );
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
      <div className="py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <GradientBadge
            text={"The Problem We Discovered"}
            icon={<TbSquareRotatedFilled />}
          />
          <h2 className="text-2xl lg:text-[64px] ">The Emission Burden</h2>
          <p className="md:text-xl">
            95% of today's hydrogen is fossil-based, emitting millions of tons
            of CO₂ annually.
          </p>
        </div>

        <div className="shadow-[0px_1px_3px_0px_rgba(13,10,44,0.08)]">
          <div className="flex justify-between items-center gap-2 mb-6">
            <div className="">
              <p className="text-cst-neutral-400 text-[9px] md:text-lg">
                Statistics
              </p>
              <p className="font-bold text-[11px] md:text-[22px]">
                Co2 Emmission
              </p>
            </div>

            {/* Year Filters */}
            <div className="flex gap-[6px] h-[15px] md:h-[30px]">
              {["2015", "2020", "2025"].map((year) => (
                <button
                  key={year}
                  onClick={() => toggleYear(year)}
                  className={`py-2 pl-2 pr-4 rounded-lg border border-cst-neutral-500 transition flex items-center gap-1
                ${activeYears.includes(year) ? "" : " text-cst-neutral-500"}`}
                >
                  <GoDotFill
                    className={`text-2xl ${
                      activeYears.includes(year)
                        ? colorMap[year].text
                        : "text-cst-neutral-500"
                    }`}
                  />
                  {year}
                </button>
              ))}
            </div>

            <div className="relative inline-flex bg-primary-50/10 p-1 rounded-xl">
              {timeframes.map((label) => {
                const isActive = selectedTimeframe === label;

                return (
                  <button
                    key={label}
                    onClick={() => setSelectedTimeframe(label)}
                    className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-xl ${
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
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <XAxis dataKey="month" stroke="#ccc" />
              <YAxis tickFormatter={(v) => `${v / 1000}k`} stroke="#ccc" />
              <Tooltip />
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
    </SectionWrapper>
  );
}
