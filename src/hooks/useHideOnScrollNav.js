import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const useHideOnScrollNav = (menuRef, isMenuOpen) => {
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useGSAP(() => {
    const menu = menuRef.current;
    if (!menu) return;

    const showNavigation = () => {
      gsap.to(menu, {
        y: "0",
        x: "0",
        duration: 0.5,
        ease: "power.inOut",
      });
    };

    const hideNavigation = () => {
      gsap.to(menu, {
        y: "-15vh",
        duration: 0.5,
        ease: "power.inOut",
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

    // faster reaction for wheel / trackpad
    const handleWheel = (e) => {
      if (isMenuOpen) return;
      if (e.deltaY > 0 && window.scrollY > 100) {
        hideNavigation();
      } else if (e.deltaY < 0) {
        showNavigation();
      }
      lastScrollY.current = window.scrollY;
    };

    // basic touch detection
    let touchStartY = 0;
    const onTouchStart = (e) => {
      touchStartY = e.touches?.[0]?.clientY || 0;
    };
    const onTouchMove = (e) => {
      if (isMenuOpen) return;
      const y = e.touches?.[0]?.clientY || 0;
      const delta = touchStartY - y;
      if (Math.abs(delta) < 5) return;
      if (delta > 0 && window.scrollY > 100) hideNavigation();
      else if (delta < 0) showNavigation();
      touchStartY = y;
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", requestTick, { passive: true });
    document.addEventListener("click", handleClick);
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", requestTick);
      document.removeEventListener("click", handleClick);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [isMenuOpen, menuRef]);
};

export default useHideOnScrollNav;
