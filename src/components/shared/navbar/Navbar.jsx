"use client";
import React from "react";
import { useRouter } from "next/navigation";
import BrandLogo from "./nav/BrandLogo";
import useHideOnScrollNav from "@/hooks/useHideOnScrollNav";
import Hamburger from "./nav/Hamburger";
import { useSidebar } from "@/contexts/SidebarContext";
import { LanguageToggle } from "./nav/LanguageToggle";

const Navbar = () => {
  const router = useRouter();
  const { isOpen, toggleSidebar } = useSidebar();
  const active = "rounded-full border border-gray-400";
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
          className={`fixed top-0 right-0 w-full z-100  h-fit`}
          ref={menuRef}
        >
          <nav
            ref={navRef}
            className={`mx-auto flex-1 items-center justify-between px-3 py-2 bg-transparent shadow-none m-auto h-14 transition-all duration-500 ease-in-out origin-top sm:mt-3 rounded-2xl w-[100%]
        
        `}
            >
              <div className="justify-between items-center flex sm:px-4 md:px-2 lg:px-4">
                <BrandLogo
                  onClick={toggleSidebar}
                  isMenuOpen={isOpen}
                />
                <div className="language flex items-center gap-2">
                  <LanguageToggle setLanguage={setLanguage} nextLang={nextLang} language={language} />
                  <div
                    className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${
                      isOpen ? "text-white" : "text-black"
                    }`}
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
              className={`text-black text-3xl flex items-center justify-center cursor-pointer p-1 ${
                isOpen ? "text-white" : "text-black"
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
