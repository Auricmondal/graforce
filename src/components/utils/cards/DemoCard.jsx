import React from "react";
import Image from "next/image";

const DemoCard = ({ subsection, index, isReversed, isStraight = false }) => {
  return (
    <div
      key={index}
      className={`bg-[#E8EEFA] flex flex-col-reverse md:flex-row gap-4 ${isReversed ? "md:flex-row-reverse" : ""}
        `}
    >
      {/* Content Section */}
      <div
        className={`w-full md:w-[63%] h-auto rounded-2xl flex flex-col justify-center items-center lg:items-start gap-6 py-16 px-8 text-center lg:text-left order-1 lg:order-none`}
        style={{
          background:
            "linear-gradient(248.79deg, #1E428A -2.85%, #193570 13.88%, #132957 30.61%, #081124 64.07%)",
        }}
      >
        <div>
          {/* Main Title */}
          <h2 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-semibold leading-[1.2] text-white">
            {subsection.title}
          </h2>

          {/* Description */}
          <p className="text-[1rem] lg:text-[1.125rem] text-cst-neutral-50 leading-[1.6] border-b border-[rgba(255,255,255,0.15)]">
            {subsection.description}
          </p>

          {/* Grid of Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 mt-16 w-full ">
            {subsection.points.map((point, i) => (
              <div
                key={i}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:border-none border-b border-[rgba(255,255,255,0.15)] pb-6 md:pb-0"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center">
                  <Image
                    src={point.icon}
                    alt={`${point.title} Icon`}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>

                {/* Title + description */}
                <div>
                  <h4 className="text-[1.125rem] font-semibold text-white">
                    {point.title}
                  </h4>
                  <p className="text-[0.9rem] text-cst-neutral-50 whitespace-pre-line">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[37%] h-[674px] md:h-auto order-2 lg:order-none relative overflow-hidden rounded-2xl">
        <div
          className={`w-full h-full flex items-center justify-center overflow-hidden`}
        >
          <Image
            src={subsection.img}
            alt={`${subsection.title} Preview`}
            fill
            className="w-full h-full object-cover object-center rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
