"use client";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import CardWrapper from "@/wrappers/CardWrapper";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";

const ImpactCard = ({ icon, title, description, className, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`${className} group`}
      layout
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <CardWrapper
        align="center"
        className="flex flex-row items-center text-start gap-2 transition-all duration-300 ease-in-out p-4 md:px-6 md:py-8"
        variant="custom"
      >
        <div className="flex flex-row items-center justify-between gap-4 w-[60%] md:w-[70%]">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <div className="flex md:mx-auto text-center">
            <h3 className="text-xl md:text-[32px] font-medium capitalize">
              {title}
            </h3>
          </div>
        </div>

        {/* Right side: animate justify change smoothly */}
        <motion.div
          layout
          className={`flex items-center w-[40%] md:w-[30%] transition-all duration-300 ease-in-out justify-end ${
            hovered ? "" : "md:justify-start"
          }`}
        >
          <motion.div
            layout
            className={`hidden transition-opacity duration-300 ${
              hovered ? "lg:hidden" : "lg:block"
            }`}
          >
            <p className="text-base text-cst-neutral-5">{description}</p>
          </motion.div>

          <motion.div
            className={`
              block lg:${hovered ? "block" : "hidden"} 
              transition-opacity duration-300
            `}
          >
            <PrimaryButton
              className="group/button flex items-center gap-2 bg-transparent border border-primary text-primary rounded-xl py-4 px-4 md:px-8"
              onClick={() => {
                if (onClick) {
                  const fn = eval(onClick);
                  fn();
                }
              }}
            >
              Learn More
              <IoMdArrowForward className="ml-2 text-2xl group-hover/button:translate-x-2 transition-transform duration-200" />
            </PrimaryButton>
          </motion.div>
        </motion.div>
      </CardWrapper>
    </motion.div>
  );
};

export default ImpactCard;
