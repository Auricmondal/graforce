'use client'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FiArrowRightCircle } from 'react-icons/fi'
import BrandLogo from '../BrandLogo'
import Link from 'next/link'
import AnimatedText from '@/components/utils/animations/AnimatedText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SideNavMenu = ({ onClick, isMenuOpen }) => {
  const sideNavOverlay = React.useRef(null);
  const sideNavMenu = React.useRef(null);
  const navItemsRef = React.useRef([]);

  const navItems = [
    { id: 1, name: "Home", href: "/", toggle: false },
    { id: 2, name: "Services", href: "#", toggle: true },
    { id: 3, name: "Products", href: "#", toggle: true },
    { id: 4, name: "Industries", href: "#", toggle: false },
    { id: 5, name: "Investors", href: "#", toggle: false },
    { id: 6, name: "Jobs", href: "#", toggle: false },
    { id: 7, name: "About", href: "#", toggle: false },
  ];

  // Helper function to add refs in map
  const addToRefs = (el) => {
    if (el && !navItemsRef.current.includes(el)) {
      navItemsRef.current.push(el);
    }
  };

  useGSAP(() => {
    const overlay = sideNavOverlay.current;
    const menu = sideNavMenu.current;
    const items = navItemsRef.current;

    if (isMenuOpen) {
      // open animation
      gsap.to(overlay, { x: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.to(menu, { x: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.fromTo(
        items,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" }
      );
    } else {
      // close animation
      gsap.to(items, { x: 50, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(menu, { x: '40vw', duration: 0.4, ease: "power2.inOut" });
      gsap.to(overlay, { x: '100vw', duration: 0.4, ease: "power2.inOut" });
    }
  }, [isMenuOpen]);

  return (
    <div
      ref={sideNavOverlay}
      className="sideNavOverlay w-screen h-screen fixed flex justify-end top-0 right-0 bg-black/30 backdrop-blur-sm z-[200] translate-x-[100vw]"
    >
      <div
        ref={sideNavMenu}
        className="sideNavMenu flex flex-col justify-start h-screen w-screen lg:w-[40vw] bg-cst-neutral-1 gap-2 p-2 rounded-l-2xl translate-x-[40vw]"
      >
        <div className="flex items-center justify-between rounded-xl bg-white p-4 capitalize text-3xl font-bold">
          <BrandLogo />
          <div
            className="border border-cst-neutral-2 p-2 rounded-full cursor-pointer"
            onClick={onClick}
          >
            <RxCross1 className="text-2xl" />
          </div>
        </div>

        <div className="rounded-xl bg-white p-4 capitalize h-full overflow-y-auto">
          {navItems.map((item) => (
            <div
              key={item.id}
              ref={addToRefs}
              className="flex items-center justify-start gap-2 hover:gap-4 py-2 transition-all duration-300 ease-in-out cursor-pointer"
            >
              <Link
                href={item.href}
                className="font-bold border-b-2 border-cst-neutral-4"
              >
                <AnimatedText textSize="text-xl md:text-3xl">
                  {item.name}
                </AnimatedText>
              </Link>
              {item.toggle && (
                <span className="text-cst-primary-1 text-lg">
                  <FiArrowRightCircle />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNavMenu;
