import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const barVariants = {
  hidden: { height: 0 },
  visible: (customHeight) => ({
    height: customHeight,
    transition: { duration: 0.6, ease: "easeOut" },
  }),
};

const InfoCard = ({
  title,
  subtitle,
  bgColor = "#0f0f10",
  textColor = "white",
  labelColor = "white",
  barData = [],
  outputs = [],
  perHourText = "Per Hour",
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="rounded-xl flex flex-col justify-between p-8 h-1/2"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Header */}
      {title && (
        <motion.div
          variants={itemVariants}
          className="font-light flex justify-between"
        >
          {typeof title === "string" ? (
            <span className="text-gray-400">{title}</span>
          ) : (
            <>
              <span>{title.left}</span>
              <span>{title.right}</span>
            </>
          )}
        </motion.div>
      )}

      {/* Bars */}
      <div className="mt-4 md:mt-0 flex justify-between">
        <div className="flex flex-col">
          <div className="flex items-end gap-2 h-full relative">
            {barData.map(({ label, height, color, opacity = 1 }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center"
                variants={itemVariants}
              >
                <motion.div
                  className="bg-white text-black text-xs font-semibold rounded-full px-2 py-1 mb-2 border-4"
                  style={{ borderColor: color }}
                >
                  {label}
                </motion.div>
                <motion.div
                  custom={height}
                  variants={barVariants}
                  className="w-9 rounded-t-2xl"
                  style={{
                    backgroundColor: color,
                    opacity,
                  }}
                />
              </motion.div>
            ))}
          </div>
          <motion.div
            variants={itemVariants}
            className="text-xs mt-2"
            style={{ color: labelColor }}
          >
            {perHourText}
          </motion.div>
        </div>

        {/* Outputs */}
        <motion.div
          className="mt-auto text-right text-sm font-light space-y-1"
          variants={containerVariants}
        >
          {outputs.map(({ amount, unit, label }, idx) => (
            <motion.p key={idx} variants={itemVariants}>
              <span className="text-2xl font-bold">
                {amount} {unit}
              </span>{" "}
              {label}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default InfoCard;
