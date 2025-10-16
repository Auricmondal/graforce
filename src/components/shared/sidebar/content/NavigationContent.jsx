'use client'
import React from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { BsArrowLeftCircle } from 'react-icons/bs';
import Link from 'next/link';
import AnimatedText from '@/components/utils/animations/AnimatedText';
import PrimaryButton from '@/components/utils/buttons/PrimaryButton';
import { useSidebar } from '@/contexts/SidebarContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { sidebarUtils } from '@/utils/sidebarUtils';

const NavigationContent = () => {
  const { closeSidebar } = useSidebar();
  const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);
  const [menu, setMenu] = React.useState([]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [subItem, setSubItem] = React.useState(null);
  const navTalkButton = React.useRef(null);
  const navContainer = React.useRef(null);

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
    setMenu(navItems);
    setIsSubMenuOpen(false);
    setIsTransitioning(false);
  }, []);

  // Animate menu transitions
  const animateMenuTransition = (callback) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    const tl = gsap.timeline();
    tl.to(".nav-menu-item", {
      x: -300,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.inOut",
      onComplete: () => {
        callback();
        gsap.set(".nav-menu-item", { x: 300, opacity: 0 });
        gsap.to(".nav-menu-item", {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.1,
          ease: "power2.out",
          onComplete: () => setIsTransitioning(false)
        });
      }
    });
    if (!isSubMenuOpen) {
      tl.to(".nav-talk-button", {
        y: 50,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(".nav-talk-button", { y: 50, opacity: 0 });
          navTalkButton.current && navTalkButton.current.classList.add("hidden");
          navContainer.current && navContainer.current.classList.toggle("h-full", isSubMenuOpen);
          // gsap.to(".nav-talk-button", {
          //   y: 0,
          //   opacity: 1,
          //   duration: 0.3,
          //   ease: "power2.out"
          // });
        }
      });
    }
  };

  // Re-run animation when submenu state changes
  useGSAP(() => {
    const tl = gsap.timeline();

    // Reset any previous states
    gsap.set(".nav-menu-item", { x: 300, opacity: 0 });
    gsap.set(".nav-talk-button", { y: 50, opacity: 0 });

    // Open animation
    tl.to(".nav-menu-item", {
      x: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.out",
      onComplete: () => {
        navTalkButton.current && navTalkButton.current.classList.remove("hidden");
        navContainer.current && navContainer.current.classList.toggle("h-full", !isSubMenuOpen);
      },
    });
    if (!isSubMenuOpen) {
      tl.to(".nav-talk-button", {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out"
      }, "<0.2");
    }
  }, [isSubMenuOpen]);

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
    });
  };

  return (
    <div ref={navContainer} className="flex flex-col justify-between">
      <div className="flex flex-col justify-start">
        {/* Back Button for Submenu */}
        {isSubMenuOpen && (
          <div
            className="nav-menu-item group flex flex-row items-center gap-2 cursor-pointer mb-4 px-2"
            onClick={closeSubMenu}
          >
            <BsArrowLeftCircle className='text-xl group-hover:translate-x-[-4px] transition-all duration-300 ease-in-out' />
            <span className='text-lg font-semibold'>
              {subItem}
            </span>
          </div>
        )}

        {/* Menu Items Container */}
        <div className={`h-fit ${isSubMenuOpen ? "border border-cst-neutral-3 rounded-lg p-3" : ""}`}>
          <div className="">
            {menu.map((item, index) => (
              <div
                key={`${isSubMenuOpen ? 'sub' : 'main'}-${item.id || index}`}
                className='nav-menu-item group flex items-center py-0 cursor-pointer gap-2 my-4'
              >
                <div className="flex items-center justify-start gap-3">
                  {!item.toggle ? (
                    <Link
                      href={item.href}
                      className="font-bold text-left"
                      onClick={closeSidebar}
                    >
                      <AnimatedText textSize={isSubMenuOpen ? "text-lg md:text-3xl" : "text-2xl md:text-4xl"} className={`border-b-2 `}>
                        {item.name}
                      </AnimatedText>
                    </Link>
                  ) : (
                    <div
                      className="font-bold text-left"
                      onClick={() => openSubMenu(item.name)}
                    >
                      <AnimatedText textSize={isSubMenuOpen ? "text-xl md:text-3xl" : "text-2xl md:text-4xl"} className={`border-b-2 `}>
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
      </div>

      {/* Talk Button - Only show in main menu */}
      {true && (
        <div ref={navTalkButton} className="w-full nav-talk-button mt-auto">
          <PrimaryButton className='bg-black text-cst-neutral-1 rounded-xl py-4 px-6 w-full text-sm md:text-base'
            onClick={() => {
              sidebarUtils.openContact();
            }}
          >
            Let's Talk
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default NavigationContent;