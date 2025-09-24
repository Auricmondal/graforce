import { useState } from "react";
import BlogCard from "@/components/utils/cards/BlogCard";
import CategoryFilter from "./CategoryFilter";
import SectionWrapper from "@/wrappers/SectionWrapper";
import { useNews } from "@/hooks/useNews";
import FloatupButton from "@/components/utils/buttons/FloatupButton";
import SearchBar from "./SearchBar";

export default function CardsSection() {
  const { news, loadMore, hasMore } = useNews();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews =
    selectedCategory === "All"
      ? news
      : news.filter((blog) => blog.category === selectedCategory);

  return (
    <SectionWrapper className="max-w-[2000px] mx-auto">
      <div className="flex justify-between">
        <CategoryFilter
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <SearchBar onSearch={(query) => console.log("Searching for:", query)} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
        {filteredNews.map((item) => (
          <BlogCard key={item.id} blog={item} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-8">
          <FloatupButton icon={"❯"} onClick={loadMore} className="!w-fit">
            Load More
          </FloatupButton>
        </div>
      )}
    </SectionWrapper>
  );
}
