"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";
import { useInView } from "motion/react";

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

export default function Chart({ data, dataIndex }) {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  console.log({isInView, hasAnimated});
  useEffect(() => {
    // if (isInView && !hasAnimated) {
    //   setHasAnimated(true);
    // }
    setHasAnimated(isInView)
  }, [isInView, hasAnimated, data]);

  const highlightedWeeks = useMemo(() => {
    if (!data || data.length === 0) return [];

    let result = new Set();

    const globalHigh = data.reduce((max, curr) =>
      curr.value > max.value ? curr : max
    );
    result.add(globalHigh.week);

    for (let i = 1; i < data.length - 1; i++) {
      if (
        data[i].value > data[i - 1].value &&
        data[i].value > data[i + 1].value
      ) {
        result.add(data[i].week);
      }
    }

    return Array.from(result);
  }, [data]);

  return (
    <div ref={chartRef} className="w-full h-[90dvh] md:h-full p-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis hide />
          <YAxis hide />
          <CartesianGrid vertical stroke="#E2E8F0" strokeDasharray="4 4" />

          <Area
            key={hasAnimated ? `animate-${dataIndex}` : 'static'}
            type="monotone"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={3}
            fill="url(#area-gradient)"
            dot={<CustomDot highlightedWeeks={highlightedWeeks} />}
            activeDot={false}
            isAnimationActive={hasAnimated}
            animationBegin={0}
            animationDuration={3000}
            animationEasing="ease"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
