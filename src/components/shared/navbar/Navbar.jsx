"use client";
import React from "react";
import BrandLogo from "./nav/BrandLogo";
import useHideOnScrollNav from "@/hooks/useHideOnScrollNav";
import Hamburger from "./nav/Hamburger";
import { useSidebar } from "@/contexts/SidebarContext";
import LanguageToggle from "./nav/LanguageToggle";

const Navbar = () => {
  const { isOpen, toggleSidebar } = useSidebar();
  const menuRef = React.useRef(null);
  const downMenuRef = React.useRef(null);
  const navRef = React.useRef(null);
  const [language, setLanguage] = React.useState('GB');
  const nextLang = language === 'GB' ? 'DE' : 'GB';

  useHideOnScrollNav(menuRef, isOpen);
  useHideOnScrollNav(downMenuRef, isOpen);

  return (
    <>
      {!isOpen && <div className="">
        <div
          className={`fixed top-0 right-0 w-full z-10000 h-fit`}
          ref={menuRef}
        >
          <nav
            ref={navRef}
            className={`mx-auto flex-1 items-center justify-between px-3 py-2 bg-transparent shadow-none m-auto h-14 transition-all duration-500 ease-in-out origin-top sm:mt-3 rounded-2xl w-[100%]`}
          >
            <div className="justify-between items-center backdrop-blur-sm flex sm:py-1 px-4 rounded-4xl border-[0.2px] border-cst-neutral-2/20 bg-cst-neutral-2/25">
              <BrandLogo
                onClick={toggleSidebar}
                isMenuOpen={isOpen}
              />
              <div className="language flex items-center gap-2">
                <LanguageToggle setLanguage={setLanguage} nextLang={nextLang} language={language} />
                <div
                  className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${isOpen ? "text-white" : "text-black"}`}
                  onClick={toggleSidebar}
                >
                  <Hamburger isMenuOpen={true} />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          ref={downMenuRef}
          className="fixed flex items-center gap-2 bg-white py-2 px-4 rounded-xl shadow-lg border border-cst-neutral-1 cursor-pointer z-100 -bottom-[10vh] right-2"
        >
          <LanguageToggle setLanguage={setLanguage} nextLang={nextLang} language={language} />
          <div
            className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${isOpen ? "text-white" : "text-black"
              }`}
            onClick={toggleSidebar}
          >
            <Hamburger isMenuOpen={true} />
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default Navbar;
