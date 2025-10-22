import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

const categories = [
  "All",
  "Partnership",
  "Environment",
  "Geopolitics",
  "Energy",
  "Hydrogen",
];

export default function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="flex gap-2 max-w-[293px] md:max-w-[340px] lg:max-w-fit overflow-x-scroll scrollbar-hide">
      {categories.map((category) => (
        <PrimaryButton
          variant="custom"
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium hover:shadow-lg !w-fit ${
            selected === category
              ? "bg-dark text-white"
              : "bg-cst-neutral-1 text-black hover:bg-primary-50"
          }`}
        >
          {category}
        </PrimaryButton>
      ))}
    </div>
  );
}
