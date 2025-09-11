"use client";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import { ServiceOptions, ServiceOptionsMobile } from "./navigation/MenuOptions";
import useClickOutside from "@/hooks/useClickOutside";

const NavLink = ({
  children,
  className,
  onClick,
  item,
  active,
  link,
  isMenuOpen,
  setIsMenuOpen,
  ...props
}) => {
  const pathname = usePathname();
  const [hovered, setHovered] = React.useState(false);
  const [mobileMenuHovered, setMobileMenuHovered] = React.useState(false);
  const menuRef = React.useRef(null);
  useClickOutside(menuRef, () => setHovered(false));

  return (
    <>
      <div
        ref={menuRef}
        className={`peer group cursor-pointer ${className} ${
          pathname.split('/')[1] === link.split('/')[1] ? active : ""
        }`}
        onClick={(e) => {
          if (!item.toggle) {
            onClick();
          }
          if (mobileMenuHovered) {
            setMobileMenuHovered(false);
          } else {
            setMobileMenuHovered(true);
          }
          // e.stopPropagation();
        }}
        onMouseEnter={(event) => {
          setMobileMenuHovered(false);
          setHovered(true);
          setMobileMenuHovered(true);
          // event.stopPropagation();
          // setHovered(true);
        }}
        onMouseLeave={() => setMobileMenuHovered(false)}
        tabIndex={0}
        {...props}
      >
        <div
          className={`font-medium flex items-center hover:text-neutral-400 transition-colors duration-200 ${
            isMenuOpen ? "py-2" : "py-0"
          }`}
        >
          <span className="relative block overflow-hidden w-full">
            <span
              className={`flex
          items-center transform transition-transform duration-200
          group-hover:-translate-y-full
          group-hover:delay-0 ${
            isMenuOpen ? "justify-between" : "justify-start"
          }`}
            >
              <div className="">{children}</div>
              <div className="">
                {item.toggle && (
                  <IoIosArrowDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                      isMenuOpen ? "rotate-270" : "rotate-0"
                    }`}
                  />
                )}
              </div>
            </span>
            <span
              className={`flex w-full
          items-center absolute left-0 top-0 transform translate-y-full
          transition-transform duration-300
          group-hover:translate-y-0
          group-hover:delay-100 ${
            isMenuOpen ? "justify-between" : "justify-start"
          }`}
            >
              <div className="">{children}</div>
              <div className="">
                {item.toggle && (
                  <IoIosArrowDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 rotate-180`}
                  />
                )}
              </div>
            </span>
          </span>
        </div>
        {mobileMenuHovered && item.toggle && (
          <ServiceOptionsMobile
            // ref={menuRef}
            className={`transition-transform bg-transparent mx-auto flex [@media(min-width:1080px)]:hidden hover:flex w-full  transform duration-200 ease-in-out`}
            onMouseEnter={() => setMobileMenuHovered(true)}
            setMobileMenuHovered={setMobileMenuHovered}
            setIsMenuOpen={setIsMenuOpen}
            mobileMenuHovered={mobileMenuHovered}
            // onMouseLeave={() => setHovered(false)}
          />
        )}
      </div>
      {hovered && item.toggle && (
        <ServiceOptions
          ref={menuRef}
          className={`transition-transform bg-transparent absolute top-20 mx-auto hidden [@media(min-width:1080px)]:flex right-1/5 transform duration-200 ease-in-out hover:flex`}
          onMouseEnter={() => setHovered(true)}
          setHovered={setHovered}
          // onMouseLeave={() => setHovered(false)}
        />
      )}
    </>
  );
};

export default NavLink;
