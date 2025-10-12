'use client'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FiArrowRightCircle } from 'react-icons/fi'
import BrandLogo from '../BrandLogo'
import Link from 'next/link'
import AnimatedText from '@/components/utils/animations/AnimatedText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PrimaryButton from '@/components/utils/buttons/PrimaryButton'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { set } from 'nprogress'

const SideNavMenu = ({ onClick, isMenuOpen }) => {
  const sideNavOverlay = React.useRef(null);
  const sideNavMenu = React.useRef(null);
  const menuItemsContainer = React.useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [menu, setMenu] = React.useState([]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [playAnimation, setPlayAnimation] = React.useState(true);
  const [subItem, setSubItem] = React.useState(null);

  const subMenuItems = [{
    subItem: "Products",
    contents: [
      { id: 1, name: "Methane Plasmalyzer®", href: "/products/methane-plasmalyzer", toggle: false },
      { id: 2, name: "Wastewater Plasmalyzer®", href: "/products/wastewater-plasmalyzer", toggle: false },
      { id: 3, name: "Plasma Ammonia Cracker", href: "/products/plasma-ammonia-cracker", toggle: false },
      { id: 4, name: "Used components", href: "/products/used-components", toggle: false },
      { id: 5, name: "H2/natural gas refuelling", href: "/products/h2-natural-gas-refuelling", toggle: false },
      { id: 6, name: "Synthetic carbon", href: "/products/synthetic-carbon", toggle: false },
      { id: 7, name: "Synthetic Carbon Quality", href: "/products/synthetic-carbon-quality", toggle: false },
      { id: 8, name: "Syngas Production", href: "/products/syngas-production", toggle: false }
    ]
  },
  {
    subItem: "Services",
    contents: [
      { id: 1, name: "Hydrogen Production", href: "/services/hydrogen-production", toggle: false },
      { id: 2, name: "Water Purification", href: "/services/water-purification", toggle: false },
      { id: 3, name: "Co2-Free Energy Generation", href: "/services/co2-free-energy-generation", toggle: false }
    ]
  }];

  const navItems = [
    { id: 1, name: "Home", href: "/", toggle: false },
    { id: 2, name: "Services", href: "#", toggle: true },
    { id: 3, name: "Products", href: "#", toggle: true },
    { id: 4, name: "Industries", href: "/industries", toggle: false },
    { id: 5, name: "Investors", href: "/investors", toggle: false },
    { id: 6, name: "Jobs", href: "/jobs", toggle: false },
    { id: 7, name: "About", href: "/about", toggle: false },
  ];

  React.useEffect(() => {
    if (isMenuOpen) {
      setMenu(navItems);
      setIsSubMenuOpen(false);
      setIsTransitioning(false);
    }
  }, [isMenuOpen]);

  // Main menu animation
  useGSAP(() => {
    const overlay = sideNavOverlay.current;
    const sideNavOverlayBackdrop = overlay?.children[0];
    const menuContainer = sideNavMenu.current;
    const tl = gsap.timeline();

    if (isMenuOpen) {
      // Reset any previous states
      gsap.set(".menu-item", { x: 300, opacity: 0 });
      gsap.set(".sideMenuTalkButton", { y: 50, opacity: 0 });

      // Open animation
      tl.to(overlay, { x: 0, duration: 0.3, ease: "power2.inOut" });
      tl.to(sideNavOverlayBackdrop, { x: 0, duration: 0.3, ease: "power2.inOut" }, "<0.1");
      tl.to(menuContainer, { x: 0, duration: 0.3, ease: "power2.inOut" });
      tl.to(".menu-item", {
        x: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.out"
      });
      tl.to(".sideMenuTalkButton", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "<0.2");
    } else {
      // Close animation
      tl.to(".sideMenuTalkButton", { y: 50, opacity: 0, duration: 0.3, ease: "power2.in" });
      tl.fromTo(".menu-item", {
          x: 0,
          opacity: 1
        }, {
          x: 300,
          opacity: 0,
          duration: 0.3,
          stagger: -0.05,
          ease: "power2.in"
        });
      tl.to(menuContainer, { x: '40vw', duration: 0.3, ease: "power2.inOut" });
      tl.to(sideNavOverlayBackdrop, { x: '100vw', duration: 0.3, ease: "power2.inOut" }, "<0.1");
      tl.to(overlay, { x: '100vw', duration: 0.3, ease: "power2.inOut" });
    }
  }, [isMenuOpen, playAnimation]);

  // Animate menu transitions
  const animateMenuTransition = (callback) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const tl = gsap.timeline();

    tl.to(".menu-item", {
      x: -300,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        callback();
        gsap.set(".menu-item", { x: 300, opacity: 0 });
        gsap.to(".menu-item", {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => setIsTransitioning(false)
        });
      }
    });
    tl.to(".sideMenuTalkButton", {
      y: 50,
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(".sideMenuTalkButton", { y: 50, opacity: 0 });
        gsap.to(".sideMenuTalkButton", {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  };

  const openSubMenu = (subMenuName) => {
    if (isTransitioning) return;

    const selectedSubMenu = subMenuItems.find(item => item.subItem === subMenuName);
    if (selectedSubMenu) {
      animateMenuTransition(() => {
        setIsSubMenuOpen(!isSubMenuOpen);
        setSubItem(selectedSubMenu.subItem);
        setMenu(selectedSubMenu.contents);
      });
    }
  };

  const closeSubMenu = () => {
    if (isTransitioning) return;

    animateMenuTransition(() => {
      setIsSubMenuOpen(!isSubMenuOpen);
      setSubItem(null);
      setMenu(navItems);
      setPlayAnimation(!playAnimation);
    });
  };

  return (
    <div
      ref={sideNavOverlay}
      className="sideNavOverlay w-screen h-screen fixed flex flex-row justify-end top-0 right-0 bg-black/30 backdrop-blur-sm z-[200] translate-x-[100vw]"
    >
      <div
        className="sideNavOverlayBackdrop w-0 lg:w-[60vw] h-screen translate-x-[100vw]"
        onClick={onClick}
      ></div>

      <div
        ref={sideNavMenu}
        className="sideNavMenu flex flex-col justify-start h-screen w-screen lg:w-[40vw] bg-cst-neutral-1 gap-2 p-2 rounded-l-2xl translate-x-[40vw]"
      >
        {/* Header */}
        <div className="flex items-center justify-between rounded-xl bg-white p-4 capitalize text-3xl font-bold">
          <BrandLogo />
          <div
            className="group border border-cst-neutral-2 hover:border-primary p-2 rounded-full cursor-pointer hover:bg-primary transition-all ease-in-out duration-300"
            onClick={onClick}
          >
            <RxCross1 className="text-2xl group-hover:text-cst-primary-1 group-hover:text-white group-hover:rotate-180 transition-all ease-in-out duration-300" />
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col justify-between rounded-xl bg-white p-4 capitalize h-full overflow-hidden">
          <div className="overflow-hidden">
            {/* Back Button for Submenu */}
            {isSubMenuOpen && (
              <div
                className="menu-item group flex flex-row items-center gap-2 cursor-pointer mb-4 px-2"
                onClick={closeSubMenu}
              >
                <BsArrowLeftCircle className='text-xl group-hover:translate-x-[-4px] transition-all duration-300 ease-in-out' />
                <span className='text-lg font-semibold'>
                  {subItem}
                </span>
              </div>
            )}

            {/* Menu Items Container */}
            <div className={`${isSubMenuOpen ? "border border-cst-neutral-3 rounded-lg p-3" : ""}`}>
              {menu.map((item, index) => (
                <div
                  key={`${isSubMenuOpen ? 'sub' : 'main'}-${item.id || index}`}
                  className='menu-item group flex items-center py-0 cursor-pointer gap-2 my-4'
                >
                  <div className="flex items-center gap-3">
                    {!item.toggle ? (
                      <Link
                        href={item.href}
                        className="font-bold"
                        onClick={onClick}
                      >
                        <AnimatedText textSize={isSubMenuOpen ? "text-lg md:text-3xl" : "text-xl md:text-4xl"} className={`border-b-2 `}>
                          {item.name}
                        </AnimatedText>
                      </Link>
                    ) : (
                      <div
                        className="font-bold"
                        onClick={() => openSubMenu(item.name)}
                      >
                        <AnimatedText textSize="text-xl md:text-4xl" className={`border-b-2 `}>
                          {item.name}
                        </AnimatedText>
                      </div>
                    )}
                  </div>

                  {item.toggle && (
                    <span className="text-cst-primary-1 text-xl group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                      <FiArrowRightCircle />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Talk Button - Only show in main menu */}
          {!isSubMenuOpen && (
            <div className="w-full sideMenuTalkButton">
              <PrimaryButton className='bg-black text-cst-neutral-1 rounded-xl py-4 px-6 w-full text-sm md:text-base'>
                Let's Talk
              </PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideNavMenu;
