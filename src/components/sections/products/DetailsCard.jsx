import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import CardWrapper from "@/wrappers/CardWrapper";

import { IoArrowDownCircleOutline } from "react-icons/io5";

export default function DetailsCard({
  id,
  title,
  description,
  progress,
  isActive,
}) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <CardWrapper
      variant="custom"
      className={`!justify-between !bg-secondary-light py-8 px-4 transition-all duration-300 ease-in-out ${
        isActive ? "md:flex-1" : ""
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          {/* Circular Progress */}
          <div className="relative w-[34px] h-[34px]">
            <svg
              className="w-[34px] h-[34px] transform -rotate-90"
              viewBox="0 0 64 64"
            >
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#b3b3b3"
                strokeWidth="1.5"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#416DD2"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={`${offset}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs text-black">
              {id}
            </div>
          </div>
          <AnimatedHeader>
            <div className="text-xl leading-[100%]">{title}</div>
          </AnimatedHeader>
        </div>
        <IoArrowDownCircleOutline className="h-7 w-7 font-light" />
      </div>

      {/* Only show full content if active */}
      {isActive && (
        <div className="flex flex-col gap-2 w-full transition-opacity duration-300 ease-in-out">
          <AnimatedHeader>
            <p className="text-black font-light">{description}</p>
          </AnimatedHeader>
          <PrimaryButton className="bg-cst-neutral-5 text-white rounded-lg py-4 px-6 text-sm">
            Learn More
          </PrimaryButton>
        </div>
      )}
    </CardWrapper>
  );
}
