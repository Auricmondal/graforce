"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const CustomDot = ({ cx, cy, payload, highlightedWeeks }) => {
  if (!highlightedWeeks.includes(payload.week)) return null;

  return (
    <>
      {/* Vertical dashed line */}
      <line
        x1={cx}
        y1={cy}
        x2={cx}
        y2="100%"
        stroke="#CBD5E1"
        strokeDasharray="4 4"
      />

      {/* Large dot */}
      <circle
        cx={cx}
        cy={cy}
        r={8}
        fill="#0F172A"
        stroke="#fff"
        strokeWidth={2}
      />

      {/* Label above dot */}
      <foreignObject x={cx - 25} y={cy - 50} width={50} height={40}>
        <div className="flex flex-col items-center">
          <div className="bg-white text-slate-900 text-sm font-semibold px-2 py-1 rounded shadow">
            {payload.value}
          </div>
          <div
            className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
            style={{ borderTopColor: "white", marginTop: "-1px" }}
          />
        </div>
      </foreignObject>
    </>
  );
};

export default function Chart() {
  const data = [
    { week: "W1", value: 120 },
    { week: "W2", value: 140 },
    { week: "W3", value: 160 },
    { week: "W4", value: 180 },
    { week: "W5", value: 200 },
    { week: "W6", value: 230 },
    { week: "W7", value: 260 },
    { week: "W8", value: 290 },
    { week: "W9", value: 330 },
    { week: "W10", value: 370 },
    { week: "W11", value: 430 },
    { week: "W12", value: 574 },
    { week: "W13", value: 500 },
    { week: "W14", value: 530 },
    { week: "W15", value: 560 },
    { week: "W16", value: 590 },
    { week: "W17", value: 620 },
    { week: "W18", value: 650 },
    { week: "W19", value: 680 },
    { week: "W20", value: 720 },
    { week: "W21", value: 760 },
    { week: "W22", value: 874 },
    { week: "W23", value: 800 },
    { week: "W24", value: 780 },
    { week: "W25", value: 750 },
    { week: "W26", value: 730 },
    { week: "W27", value: 700 },
    { week: "W28", value: 670 },
    { week: "W29", value: 650 },
    { week: "W30", value: 630 },
    { week: "W31", value: 610 },
    { week: "W32", value: 600 },
    { week: "W33", value: 590 },
    { week: "W34", value: 580 },
    { week: "W35", value: 570 },
    { week: "W36", value: 560 },
    { week: "W37", value: 550 },
    { week: "W38", value: 540 },
    { week: "W39", value: 530 },
    { week: "W40", value: 520 },
    { week: "W41", value: 510 },
    { week: "W42", value: 500 },
    { week: "W43", value: 480 },
    { week: "W44", value: 460 },
    { week: "W45", value: 440 },
    { week: "W46", value: 420 },
    { week: "W47", value: 400 },
    { week: "W48", value: 370 },
    { week: "W49", value: 340 },
    { week: "W50", value: 310 },
    { week: "W51", value: 280 },
    { week: "W52", value: 250 },
  ];
  const highlightedWeeks = ["W12", "W22"];

  return (
    <div className="w-full h-[90dvh] md:h-full p-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis hide/>
          <YAxis hide />
          <CartesianGrid vertical stroke="#E2E8F0" strokeDasharray="4 4" />

          <Area
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#area-gradient)"
            dot={<CustomDot highlightedWeeks={highlightedWeeks} />}
            activeDot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
