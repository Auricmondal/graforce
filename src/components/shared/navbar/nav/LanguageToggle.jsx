'use client';
import React from "react";
import { Button } from "@/components/ui/button";

const LanguageToggle = ({ setLanguage, nextLang, language }) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setLanguage(nextLang)}
      className={`relative flex items-center cursor-pointer select-none overflow-hidden rounded-full py-2 px-4 md:py-4 md:px-7 bg-white hover:bg-cst-neutral-1 transition-all duration-300 ease-in-out`}
      aria-label="Toggle language"
    >
      <div className="absolute flex gap-1 items-center h-7 w-8 md:h-6 md:w-6 md:left-0 m-1 rounded-full overflow-hidden border-1">
        <img
          src={`https://flagsapi.com/${language}/shiny/64.png`}
          alt={language}
          className="scale-150"
        />
      </div>
      <p className="hidden md:block absolute right-0 m-1">{language}</p>
    </Button>
  );
};

export default LanguageToggle;
