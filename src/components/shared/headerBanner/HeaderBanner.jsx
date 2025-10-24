"use client";
import { useState } from "react";
import Link from "next/link";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function HeaderBanner({
  text = "",
  readMoreLink = null,
  onReadMore = null,
}) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  if (!text) return null;

  const handleReadMore = (e) => {
    if (onReadMore) {
      e.preventDefault();
      onReadMore();
    }
  };

  return (
    <div className="flex items-center justify-between bg-cst-neutral-5 text-white p-4 shadow-md fixed top-0 left-0 z-100 w-full">
      <span className="px-2 py-1 border border-cst-neutral-1 rounded-full text-xs hidden md:inline-block">
        New
      </span>
      <div className="flex items-center space-x-4">
        <p className="">
          {text}{" "}
          {(readMoreLink || onReadMore) && (
            <Link
              href={readMoreLink || "#"}
              onClick={handleReadMore}
              className="underline text-gray-300 hover:text-white cursor-pointer"
            >
              Read More
            </Link>
          )}
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-cst-neutral-1 hover:text-white cursor-pointer font-bold text-2xl"
      >
        <IoCloseCircleOutline />
      </button>
    </div>
  );
}
