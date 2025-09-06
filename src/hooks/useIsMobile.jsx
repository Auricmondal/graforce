"use client";

import { useEffect, useState } from "react";

/**
 * useIsMobile
 *
 * Custom hook using `useState`, `useEffect`, and `window`—client-only APIs.
 *
 * *Important: This hook should **only** be imported in Client Components, [add "use client" in the parent file].
 */

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
