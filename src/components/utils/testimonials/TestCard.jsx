import React from "react";

const TestCard = ({ review, currentIndex, index, totalReviews, className }) => {
  return (
    <div
      key={`${review.id}-${index}`}
      className={`flex-shrink-0 rounded-xl overflow-hidden translate-transform bg-primary-400 sm:w-[70%] md:w-[40%] w-[100%] ease-in-out duration-300 max-h-screen ${
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
      <div className="flex flex-col p-4 space-y-3 max-h-fit h-auto justify-between">
        <div className="mb-8">
          <div className="flex justify-center items-center text-5xl font-bold text-white rounded-full bg-[#193d8f] h-20 w-20">
            <div className="flex justify-center border border-white rounded-full bg-[#193d8f] text-center items-center h-16 w-16">
              {review.place.charAt(0)}
            </div>
          </div>
        </div>
        <div className="flex gap-1 h-10 mt-6 mb-4">
          <div className="flex bg-gradient-to-t from-gray-500 to-transparent w-10 opacity-50 border-l-15 border-l-transparent border-r-25 border-r-transparent border-t-30 border-t-gray-500 rounded-lg"></div>
          <div className="flex bg-gradient-to-t from-gray-500 to-transparent w-10 opacity-50 border-l-15 border-l-transparent border-r-25 border-r-transparent border-t-30 border-t-gray-500 rounded-lg"></div>
        </div>
        <div className="relative flex-1 text-white min-h-[20vh]">
          <div className="flex items-start rotate-180 h-[20vh] sm:h-[27vh] justify-start">
            <div className="flex bg-gradient-to-t from-gray-500 to-transparent w-10 opacity-25 border-l-50 border-l-transparent border-r-70 border-r-transparent border-t-100 border-t-gray-500 rounded-lg"></div>
            <div className="flex bg-gradient-to-t from-gray-500 to-transparent w-10 opacity-25 border-l-50 border-l-transparent border-r-70 border-r-transparent border-t-100 border-t-gray-500 rounded-lg"></div>
          </div>
          <div className="absolute top-0 left-0 text-white">{review.description}</div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img
            src={review.image}
            alt="test-review"
            className="w-15 h-15 rounded-full object-fill"
          />
          <div className="flex-1 items-center">
            <div className="text-white text-sm lg:text-base mt-2">
              {review.author}
            </div>
            <div className="text-white/50 text-sm">{review.place}</div>
          </div>
        </div>
        {/* <div className="text-7xl text-white/80">{review.name}</div>
        <p className="text-white lg:text-xl md:text-xl sm:text-xl font-semibold">
          "{review.quote}"
        </p>
        <div className="text-[#467FFD] lg:text-xl md:text-base sm:text-sm">
          {review.author}
        </div> */}
      </div>
    </div>
  );
};

export default TestCard;
