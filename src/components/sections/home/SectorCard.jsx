"use client";

import { useEffect, useRef } from "react";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import useIsMobile from "@/hooks/useIsMobile";
import useIsDesktop from "@/hooks/useIsDesktop";
import { motion } from "motion/react";

export default function SectorCard({
  data,
  isActive,
  onClick,
  intervalDuration = 10000,
}) {
  const progressRef = useRef(null);
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    const el = progressRef.current;

    if (isActive && el) {
      el.style.transition = "none";
      el.style.height = "0%";

      void el.offsetHeight; // trigger reflow

      el.style.transition = `height ${intervalDuration}ms linear`;
      el.style.height = "100%";
    } else if (el) {
      el.style.transition = "none";
      el.style.height = "0%";
    }
  }, [isActive, intervalDuration, isMobile]);

  return (
    <motion.div
      onClick={onClick}
      animate={{
        flexGrow: isActive || isMobile ? 1 : 0.6,
        opacity: isActive || isMobile ? 1 : 0.7,
      }}
      transition={{
        duration: 0.3,
        easing: "easeInOut",
      }}
      className={`relative cursor-pointer flex flex-col gap-[10px] p-6 pb-0 border-r-1 border-white/15 
        hover:opacity-100 w-full
        justify-between
      `}
      style={{
        flexBasis: 0,
        minWidth: 0,
      }}
    >
      {/* Vertical progress bar */}
      <div
        ref={progressRef}
        className="absolute bottom-0 right-0 w-[2px] bg-white hidden lg:block"
        style={{ height: 0 }}
      />

      <div className="flex flex-col gap-[10px]">
        <p className="text-primary-50 font-light text-2xl mb-2">{`0${data.id}`}</p>
        <h3 className="text-white text-[40px]">{data.title}</h3>
        <p className="text-white/80 text-xl">{data.description}</p>
      </div>

      {(isActive || !isDesktop) && (
        <FloatupButton
          variant="custom"
          fullWidth={true}
          className="bg-primary-400 text-white rounded-lg py-3 px-4 flex gap-2 items-center justify-center font-medium"
        >
          Explore Your Sector
        </FloatupButton>
      )}

      <div className="bg-white aspect-square w-full rounded-[27px]" />
    </motion.div>
  );
}
