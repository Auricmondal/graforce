"use client";
import useClickOutside from "@/hooks/useClickOutside";
import { useLanguage } from "@/hooks/useLanguage";
import Image from "next/image";
import React, { useState, useRef } from "react";

const LanguageOptions = ({ downMenu = false }) => {
  // get language state & setter from your hook (expects 'en' | 'de')
  const { language, setLanguage: setGlobalLanguage } = useLanguage();

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const dropdownRef = useRef(null);

  // local translations in this file
  const translations = {
    en: {
      translate: "Translate",
      german: "German",
      english: "English",
      altGerman: "German Lang",
      altEnglish: "English Lang",
    },
    de: {
      translate: "Übersetzen",
      german: "Deutsch",
      english: "Englisch",
      altGerman: "Deutsch",
      altEnglish: "Englisch",
    },
  };

  // normalize language key (default to 'en' if undefined)
  const langKey = language === "de" ? "de" : "en";
  const tLocal = translations[langKey];

  // map language to flag code used by flagsapi (keep UI the same)
  const flagCode = langKey === "de" ? "DE" : "GB";

  const toggleLanguageOptions = () => {
    setShowLanguageOptions((prev) => !prev);
  };

  const handleSetLanguage = (lang) => {
    // lang should be 'en' or 'de'
    setGlobalLanguage(lang);
    setShowLanguageOptions(false);
  };

  useClickOutside(dropdownRef, () => setShowLanguageOptions(false));

  return (
    <div ref={dropdownRef} className={`${downMenu ? "flex flex-col" : ""}`}>
      <div className="flex gap-2 items-center">
        <div
          onClick={toggleLanguageOptions}
          className="[@media(min-width:470px)]:flex hidden items-center border-0 rounded-full text-sm px-3 py-1 bg-[#edf0f7] select-none cursor-pointer text-black font-medium hover:bg-[#adc0ec] transition-all ease-in-out duration-300"
        >
          {tLocal.translate}
        </div>
        <div
          onClick={toggleLanguageOptions}
          className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 cursor-pointer"
        >
          <Image
            src={`https://flagsapi.com/${flagCode}/shiny/64.png`}
            width={36}
            height={36}
            alt={langKey === "de" ? tLocal.altGerman : tLocal.altEnglish}
            className="scale-180 relative border border-amber-400 rounded-full object-cover"
          />
        </div>
      </div>

      <div
        className={`absolute gap-2 flex flex-col w-50 rounded-xl shadow bg-[#edf0f7] overflow-hidden p-4 my-6 [@media(min-width:645px)]:translate-x-[-25%] [@media(min-width:470px)]:translate-x-[-23%] translate-x-[-80%] transition-transform duration-300 ease-in-out text-black ${
          showLanguageOptions ? "scale-100" : "scale-0 z-50"
        }
        ${downMenu ? "order-first -translate-y-[140%] origin-bottom-right sm:origin-bottom" : " origin-top-right sm:origin-top"}
        `}
      >
        {/* German Option */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white hover:bg-[#adc0ec] transition-all ease-in-out duration-300 cursor-pointer"
          onClick={() => handleSetLanguage("de")}
        >
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 hover:text-blue-800">
            <Image
              src={`https://flagsapi.com/DE/shiny/64.png`}
              width={36}
              height={36}
              alt={translations.de.altGerman}
              className="scale-180 rounded-full object-cover"
            />
          </div>
          <span>{tLocal.german}</span>
        </div>

        {/* English Option */}
        <div
          className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white hover:bg-[#adc0ec] cursor-pointer transition-all ease-in-out duration-300"
          onClick={() => handleSetLanguage("en")}
        >
          <div className="flex items-center w-8 h-8 overflow-hidden rounded-full border border-gray-300 hover:text-blue-800">
            <Image
              src="https://flagsapi.com/GB/shiny/64.png"
              width={36}
              height={36}
              alt={translations.en.altEnglish}
              className="scale-180 rounded-full object-cover"
            />
          </div>
          <span>{tLocal.english}</span>
        </div>
      </div>
    </div>
  );
};

export default LanguageOptions;
