import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

export default function SolutionCard({ id, title, description, progress }) {
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <div className="border-primary-light border-1 rounded-lg flex flex-col justify-between py-8 px-6 h-[100vh] md:h-full">
      <div className="mb-4 flex items-center gap-4">
        {/* Circular Progress Bar */}
        <div className="relative w-16 h-16">
          <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
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

        <div className="text-[clamp(24px,2.5vw,56px)] leading-[125%] mb-2">
          {title}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <p className="text-black">{description}</p>
        <PrimaryButton className="bg-cst-neutral-5 text-white rounded-lg py-4 px-6">
          Learn More
        </PrimaryButton>
      </div>
    </div>
  );
}
