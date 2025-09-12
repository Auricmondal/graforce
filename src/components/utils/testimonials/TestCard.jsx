import React from "react";
import quote from "@/assets/quote.png";
import Image from "next/image";

const TestCard = ({ review, currentIndex, index, totalReviews, className }) => {
  return (
    <div
      key={`${review.id}-${index}`}
      className={`flex-shrink-0 rounded-xl overflow-hidden translate-transform bg-primary-400 sm:w-[70%] md:w-[40%] w-[100%] ease-in-out duration-300 ${
        currentIndex === index
          ? "scale-100 opacity-100"
          : "scale-100 opacity-70"
      } ${
        currentIndex > 0
          ? currentIndex < totalReviews - 1
            ? "lg:translate-x-[50%] md:translate-x-[50%]"
            : "lg:translate-x-[150%] md:translate-x-[150%] sm:translate-x-[40%]"
          : ""
      } ${className}
      `}
    >
      <div className="relative flex flex-col p-4 space-y-3 max-h-fit h-auto justify-between">
        <div className="mb-8">
          <div className="flex justify-center items-center text-5xl font-bold text-white rounded-full bg-[#193d8f] h-20 w-20">
            <div className="flex justify-center border border-white rounded-full bg-[#193d8f] text-center items-center h-16 w-16">
              {review.place.charAt(0)}
            </div>
          </div>
        </div>
        <div className="flex gap-1 mt-3 sm:mt-6 mb-1 md:mb-4">
          <Image
            src={quote}
            alt="quote"
            className="w-[20%] rotate-180 opacity-[120%]"
          />
        </div>
        <div className="text-white h-full w-full min-h-[200px]">
          <div className="text-white">{review.description}</div>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <img
            src={review.image}
            alt="test-review"
            className="w-10 h-10 rounded-full object-fill"
          />
          <div className="flex-1 items-center">
            <div className="text-white text-sm lg:text-base mt-2">
              {review.author}
            </div>
            <div className="text-white/50 text-sm">{review.place}</div>
          </div>
        </div>
        <div className="absolute top-0 right-0 flex items-start rotate-180 justify-start h-full w-full transition-all duration-200 ease-in-out pointer-events-none">
          <Image
            src={quote}
            alt="quote"
            className="w-[90%] 2xl:w-1/2 rotate-180 opacity-[120%] items-start  transition-all duration-200 ease-in-out pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default TestCard;
