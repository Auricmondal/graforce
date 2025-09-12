"use client";
import { createContext, useState, useEffect } from "react";

export const loaderContext = createContext(null);

export const LoaderContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // ✅ Start as true on first load
  const [revealStarted, setRevealStarted] = useState(false);

  // ✅ Wait function moved inside context
  async function waitForPageReady(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", check);
      } else {
        check();
      }

      function check() {
        const currentPath = window.location.pathname;
        const effectiveSelector =
          selector || (currentPath === "/" ? "#video-section" : null);

        if (!effectiveSelector) return resolve(true);

        const poll = () => {
          const el = document.querySelector(effectiveSelector);
          if (el) return resolve(el);
          if (Date.now() - start > timeout)
            return reject(
              `Element ${effectiveSelector} not found in ${timeout}ms`
            );
          requestAnimationFrame(poll);
        };

        poll();
      }
    });
  }

  // ✅ Handle reload / first mount
  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await waitForPageReady();
      } catch (e) {
        console.warn(e);
      }
      if (mounted) {
        // play reveal animation AFTER page is ready
        setRevealStarted(true);
        setTimeout(() => {
          setRevealStarted(false);
          setLoading(false);
        }, 600); // same as animation duration
      }
    })();

    return () => (mounted = false);
  }, []);

  const methods = {
    loading,
    setLoading,
    revealStarted,
    setRevealStarted,
    waitForPageReady,
  };

  return (
    <loaderContext.Provider value={methods}>{children}</loaderContext.Provider>
  );
};
