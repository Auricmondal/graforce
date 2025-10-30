"use client";
import { createContext, useState, useEffect } from "react";

export const loaderContext = createContext(null);

export const LoaderContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [revealStarted, setRevealStarted] = useState(false);

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

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        await waitForPageReady();
      } catch (e) {
        console.warn(e);
      }
      if (mounted) {
        setRevealStarted(true);
        setTimeout(() => {
          setRevealStarted(false);
          setLoading(false);
        }, 1500);
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
