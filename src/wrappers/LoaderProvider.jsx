"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { LoaderContext } from "@/contexts/LoaderContext";

export default function LoaderProvider({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start loading animation on path change
    setLoading(true);
    setShowContent(false);

    const timeout = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2000); // Match animation duration

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && (
        <AnimatePresence mode="wait">
          <motion.div
            key="loader"
            className="fixed bg-[linear-gradient(206.41deg,_var(--color-primary-700)_17.27%,_var(--color-primary-100)_47.98%,_var(--color-primary-200)_65.61%,_var(--color-primary-500)_91.31%)] z-1 flex items-center justify-center w-screen h-screen"
            initial={{
              width: 5000,
              height: 5000,
              borderRadius: "50%",
              x: "-50%",
              y: "-50%",
              top: "50%",
              left: "50%",
            }}
            animate={{
              width: 0,
              height: 0,
              borderRadius: "50%",
              x: "-50%",
              y: "-50%",
              top: "50%",
              left: "50%",
              transition: {
                duration: 1.8,
                ease: [0.6, 0.01, -0.05, 0.95],
              },
            }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: "easeInOut",
              },
            }}
          >
            <motion.span
              className="text-white font-bold"
              initial={{ scale: 10 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 1.8,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              Graforce
            </motion.span>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Only render children after animation ends */}
      <LoaderContext.Provider value={{ isReady: showContent }}>
        {showContent && !loading && <main className="z-10">{children}</main>}
      </LoaderContext.Provider>
      {/* {showContent && !loading && <main className="z-10">{children}</main>} */}
    </>
  );
}
