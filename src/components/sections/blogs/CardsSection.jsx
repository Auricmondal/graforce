import { useState } from "react";
import BlogCard from "@/components/utils/cards/BlogCard";
import CategoryFilter from "./CategoryFilter";
import SectionWrapper from "@/wrappers/SectionWrapper";
import { useNews } from "@/hooks/useNews";
import SearchBar from "./SearchBar";
import CardWrapper from "@/wrappers/CardWrapper";
import useWindowWidth from "@/hooks/useWindowWidth.jsx";
import PrimaryButton from "@/components/utils/buttons/PrimaryButton";

const pattern = [1, 3, 2, 3];

const colsByWidthMap = {
  1: () => 1,
  2: (width) => (width < 1024 ? 1 : 2),
  3: (width) => (width < 768 ? 1 : width < 1024 ? 2 : 3),
};

export default function CardsSection() {
  const { news, loadMore, hasMore } = useNews();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((blog) => blog.category === selectedCategory);

  const width = useWindowWidth();
  const rows = [];

  let i = 0;
  let patternIndex = 0;

  while (i < filteredNews.length) {
    const patternCount = pattern[patternIndex % pattern.length];
    const cols = colsByWidthMap[patternCount]?.(width) || 1;

    console.log({ patternIndex, patternCount, cols });

    const rowItems = filteredNews.slice(i, i + cols);

    rows.push(
      <div
        key={`row-${patternIndex}`}
        className={`grid grid-cols-${cols} gap-6 mb-6 w-full`}
      >
        {rowItems.map((item) => (
          <BlogCard
            key={item.id}
            blog={item}
            variant={patternCount === 1 ? "side" : "default"}
          />
        ))}
      </div>
    );

    i += cols;
    patternIndex++;
  }

  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1"
      className="flex flex-col gap-2"
    >
      <CardWrapper variant="custom" className="py-6 px-4 md:px-6 w-full">
        <div className="flex justify-between w-full">
          <CategoryFilter
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SearchBar
            onSearch={(query) => console.log("Searching for:", query)}
          />
        </div>
      </CardWrapper>

      <CardWrapper variant="custom" className="py-6 px-4 md:px-6">
        {rows}
        {hasMore && (
          <div className="flex justify-center w-full m-6">
            <PrimaryButton
              icon={"❯"}
              onClick={loadMore}
              className={`rounded-2xl py-4 px-6 flex gap-2 items-center justify-center font-medium hover:shadow-lg !w-fit bg-cst-neutral-5 mx-auto text-white`}
            >
              Load More
            </PrimaryButton>
          </div>
        )}
      </CardWrapper>
    </SectionWrapper>
  );
}
