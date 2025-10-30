import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useHideOnScrollNav = (menuRef, isMenuOpen) => {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;


    const showNavigation = () => {
      gsap.to(menu, {
        y: "0%",
        x: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const hideNavigation = () => {
      gsap.to(menu, {
        y: -150,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const updateNavigation = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down → hide menu
        hideNavigation();
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up → show menu
        showNavigation();
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const requestTick = () => {
      if (!ticking.current && !isMenuOpen) {
        requestAnimationFrame(updateNavigation);
        ticking.current = true;
      }
    };

    const handleClick = (e) => {
      if (!menu.contains(e.target)) {
        showNavigation();
      }
    };

    window.addEventListener("scroll", requestTick);
    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      document.removeEventListener("click", handleClick);
    };
  }, [isMenuOpen, menuRef]);
};

export default useHideOnScrollNav;
