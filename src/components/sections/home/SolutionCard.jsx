import FloatupButton from "@/components/utils/buttons/FloatupButton";
import { FaChevronRight } from "react-icons/fa";

export default function SolutionCard({ count, cardTitle, cardDescription }) {
  return (
    <div className="bg-[linear-gradient(206.41deg,_var(--color-primary-700)_17.27%,_var(--color-primary-100)_47.98%,_var(--color-primary-200)_65.61%,_var(--color-primary-500)_91.31%)] text-white p-6 rounded-xl w-full flex flex-col gap-[10px] h-full justify-between">
      <span className="text-2xl text-primary-50 font-light">{count}</span>
      <div className="flex-1">
        <h3 className="text-xl md:text-[40px] mt-8">{cardTitle}</h3>
        <p className="md:text-xl mb-4">{cardDescription}</p>
      </div>

      <FloatupButton
        variant="custom"
        fullWidth={true}
        icon={<FaChevronRight />}
        className="rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium bg-white text-black "
      >
        Explore Now
      </FloatupButton>
      <div className="min-h-[374px] flex-1 rounded-lg bg-white/10 grid place-items-center">
        <div className="text-xs text-white">Image Placeholder</div>
      </div>
    </div>
  );
}
