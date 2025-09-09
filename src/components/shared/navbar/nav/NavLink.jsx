import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({
  children,
  className,
  onClick,
  item,
  active,
  // navigateTo,
  link,
  ...props
}) => {
  const pathname = usePathname();

  return (
    <div
      className={`group cursor-pointer ${className} ${
        pathname === link ? active : ""
      }`}
      onClick={onClick}
      {...props}
    >
      <div className="">
        <span className="relative block overflow-hidden">
          <span
            className="flex
          items-center transform transition-transform duration-200
          group-hover:-translate-y-full
          group-hover:delay-0"
          >
            {children}
            {item.toggle && (
              <IoIosArrowDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 rotate-0`}
              />
            )}
          </span>
          <span
            className="flex
          items-center absolute left-0 top-0 transform translate-y-full
          transition-transform duration-300
          group-hover:translate-y-0
          group-hover:delay-100"
          >
            {children}
            {item.toggle && (
              <IoIosArrowDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 rotate-180`}
              />
            )}
          </span>
        </span>
      </div>
    </div>
  );
};

export default NavLink;
