import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const useHideOnScrollNav = (menuRef, navRef, isMenuOpen = false) => {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const touchStartY = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const nav = navRef.current;
    if (!menu) return;

    // gsap.set(nav, { y: "-0.5%", x: "-0.5%" });

    const showNavigation = () => {
      gsap.to(menu, {
        y: "0%",
        x: "0%",
        duration: 0.7,
        ease: "power2.out",
      });
    };

    const hideNavigation = () => {
      gsap.to(menu, {
        y: -100,
        duration: 0.7,
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

    // --- Touch handlers ---
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length === 1) {
        touchStartY.current = e.touches[0].clientY;
      }
    };

    const handleTouchEnd = (e) => {
      if (touchStartY.current === null) return;
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY.current;

      if (Math.abs(deltaY) > 30) { // threshold for swipe
        if (deltaY < 0) {
          // Swipe up → hide menu
          hideNavigation();
        } else {
          // Swipe down → show menu
          showNavigation();
        }
      }
      touchStartY.current = null;
    };

    window.addEventListener("scroll", requestTick);
    document.addEventListener("click", handleClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestTick);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMenuOpen, menuRef, navRef]);
};

export default useHideOnScrollNav;