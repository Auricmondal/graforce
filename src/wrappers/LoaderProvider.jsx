"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function LoaderProvider({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [revealStarted, setRevealStarted] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
    setRevealStarted(false);

    const timeout = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 3500);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <main className="z-0 relative">{children}</main>

      <AnimatePresence>
        {loading && (
          <motion.div
            key="overlay"
            className={`fixed ${
              revealStarted ? "" : "top-0 left-0 w-screen h-screen"
            } z-50 pointer-events-none`}
            style={{
              transform: "translate(-50%, -50%)",
              borderRadius: "50%", // fallback
              backgroundColor: revealStarted ? "transparent" : "white",
              boxShadow: "0 0 0 9999px rgba(255, 255, 255, 1)",
            }}
            initial={{
              height: 0,
              width: 0,
              top: "50%",
              left: "50%",
            }}
            animate={
              revealStarted
                ? {
                    height: 5000,
                    width: 5000, // expanding hole
                    transition: {
                      duration: 1.5,
                      ease: "easeInOut",
                    },
                  }
                : {}
            }
            exit={{
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {/* Shrinking logo animation */}
            {!revealStarted && (
              <motion.div
                className="fixed bg-[linear-gradient(206.41deg,_var(--color-primary-700)_17.27%,_var(--color-primary-100)_47.98%,_var(--color-primary-200)_65.61%,_var(--color-primary-500)_91.31%)] z-10 flex items-center justify-center w-screen h-screen"
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
                  transition: {
                    duration: 1.8,
                    ease: [0.6, 0.01, -0.05, 0.95],
                  },
                }}
                onAnimationComplete={() => setRevealStarted(true)} // ✅ Trigger hole
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
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
