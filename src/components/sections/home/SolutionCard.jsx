// import FloatupButton from "@/components/utils/buttons/FloatupButton";
// import { FaChevronRight } from "react-icons/fa";

// export default function SolutionCard({ count, cardTitle, cardDescription }) {
//   return (
//     <div className="h-full py-5 lg:pt-10">
//       <div className="bg-[linear-gradient(206.41deg,_var(--color-primary-700)_17.27%,_var(--color-primary-100)_47.98%,_var(--color-primary-200)_65.61%,_var(--color-primary-500)_91.31%)] text-white p-6 rounded-xl w-full flex flex-col gap-[10px] h-full justify-between">
//         <span className="text-2xl text-primary-50 font-light">{count}</span>
//         <div className="flex-1">
//           <h3 className="text-xl md:text-[40px] mt-8">{cardTitle}</h3>
//           <p className="md:text-xl mb-4">{cardDescription}</p>
//         </div>

//         <FloatupButton
//           variant="custom"
//           fullWidth={true}
//           icon={<FaChevronRight />}
//           className="rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium bg-white text-black "
//         >
//           Explore Now
//         </FloatupButton>
//         <div className="min-h-[374px] flex-1 rounded-lg bg-white/10 grid place-items-center">
//           <div className="text-xs text-white">Image Placeholder</div>
//         </div>
//       </div>

//     </div>
//   );
// }

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
