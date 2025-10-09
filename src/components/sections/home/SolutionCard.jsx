import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";
import CardWrapper from "@/wrappers/CardWrapper";
import SectionWrapper from "@/wrappers/SectionWrapper";

export default function SolutionCard({ id, title, description, progress }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <CardWrapper
      variant="custom"
      className="!justify-between md:flex-1 h-[90vh] md:h-full border-1 border-primary-light !bg-secondary-light py-8 px-4 md:px-6"
    >
      <div className="mb-4 flex items-center gap-2 md:gap-4 w-full">
        {/* Circular Progress Bar */}
        <div className="relative w-14 h-14 md:w-16 md:h-16">
          <svg
            className="w-14 h-14 md:w-16 md:h-16 transform -rotate-90"
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
          <div className="absolute inset-0 flex items-center justify-center lg:text-2xl text-primary">
            {id}
          </div>
        </div>

        <AnimatedHeader>
          <div className="text-[clamp(20px,2.5vw,56px)] leading-[100%] mb-2">
            {title}
          </div>
        </AnimatedHeader>
      </div>

      <div className="flex flex-col gap-6">
        <AnimatedHeader>
          <p className="text-black">{description}</p>
        </AnimatedHeader>
        <PrimaryButton className="bg-cst-neutral-5 text-white rounded-lg py-4 px-6">
          Learn More
        </PrimaryButton>
      </div>
    </CardWrapper>
  );
}
