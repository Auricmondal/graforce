"use client";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ onSearch }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);

  // Collapse on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsExpanded(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Call parent onSearch
  const handleSearch = () => {
    if (onSearch) {
      onSearch(query.trim());
    }
  };

  // Handle click on icon (expand or search)
  const handleIconClick = () => {
    if (isExpanded || window.innerWidth >= 640) {
      handleSearch();
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div
        className={`flex items-center bg-[#eef2fc] rounded-full md:rounded-2xl transition-all duration-300 ease-in-out py-3
          ${isExpanded ? "w-64 px-4" : "w-10 px-2"}
          sm:w-64 sm:px-4`}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Blog"
          className={`
            bg-transparent outline-none text-black text-sm w-full
            ${isExpanded ? "block" : "hidden"}
            sm:block
          `}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleIconClick} className="text-[#0a194e] text-lg">
          <FiSearch />
        </button>
      </div>
    </div>
  );
}
