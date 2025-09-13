"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import { useDisableZoom } from "@/hooks/useDisableZoom";
import LanguageOptions from "./nav/LanguageOptions";
import DesktopNav from "./nav/navigation/DesktopNav";
import BrandLogo from "./nav/BrandLogo";
import MobileNav from "./nav/navigation/MobileNav";
import useClickOutside from "@/hooks/useClickOutside";
import useHideOnScrollNav from "@/hooks/useHideOnScrollNav";
import ContactModal from "./nav/ContactModal";

const Navbar = () => {
  const router = useRouter();
  const active = "rounded-full border border-gray-400";
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const navRef = React.useRef(null);
  const navItems = [
    { id: 1, name: "Home", href: "/", toggle: false },
    { id: 2, name: "Services", href: "/services", toggle: true },
    { id: 3, name: "Products", href: "/products", toggle: true },
    { id: 4, name: "Industries", href: "/industries", toggle: true },
    { id: 5, name: "About Us", href: "/about", toggle: false },
  ];

  const navigateTo = (href) => {
    router.push(href);
    setIsMenuOpen(false);
  };
  // useDisableZoom();

  useClickOutside(menuRef, () => setIsMenuOpen(false));

  useHideOnScrollNav(menuRef, navRef, isMenuOpen);

  return (
    <div
      className={`fixed top-0 right-0 w-full z-100 transition-all duration-500 ease-in-out ${
        isMenuOpen ? "h-full" : "h-14"
      }`}
      ref={menuRef}
    >
      <nav
        ref={navRef}
        className={`mx-auto flex-1 items-center justify-between px-4 py-2 bg-white shadow-sm [@media(min-width:1080px)]:overflow-hidden overflow-auto m-auto transition-all duration-300 ease-in-out
        ${
          isMenuOpen
            ? "h-full w-full transition-all duration-500 ease-in-out origin-top mt-0 bg-gradient-to-l from-[#1E428A] to-[#081124]"
            : "h-14 transition-all duration-500 ease-in-out origin-top mt-3  rounded-2xl w-[85%]"
        }
        `}
      >
        <div className="justify-between items-center flex sm:px-1 md:px-2 lg:px-4">
          <BrandLogo
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            isMenuOpen={isMenuOpen}
          />
          <DesktopNav
            navItems={navItems}
            active={active}
            navigateTo={navigateTo}
            isMenuOpen={isMenuOpen}
          />
          <div className="language">
            <LanguageOptions />
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <MobileNav
            navItems={navItems}
            active={active}
            navigateTo={navigateTo}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            className={isMenuOpen ? "pt-6" : "pt-0 h-0 overflow-hidden"}
          />
        </div>
      </nav>
      <ContactModal />
    </div>
  );
};

export default Navbar;
