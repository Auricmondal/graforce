"use client";

import { loaderContext } from "@/contexts/LoaderContext";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";

export default function LoaderProvider({ children }) {
  const loadingctx = useContext(loaderContext);
  const { loading, setLoading, setRevealStarted, waitForPageReady } =
    loadingctx;
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);

      (async () => {
        await waitForPageReady();
        await sleep(1500);
        setLoading(false);
      })();

      prevPath.current = pathname;
    }
  }, [pathname]);
  return (
    <>
      <main className="z-0 relative">{children}</main>

      <AnimatePresence>
        {loading && (
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
              opacity: 1,
            }}
            animate={{
              width: 0,
              height: 0,
              transition: {
                duration: 1.5,
                ease: [0.6, 0.01, -0.05, 0.95],
              },
            }}
          >
            <motion.span
              className="text-white text-[10vw] font-bold"
              initial={{ scale: 1 }}
              animate={{ scale: 0 }}
              transition={{
                duration: 1.5,
                ease: [0.6, 0.01, -0.05, 0.95],
              }}
            >
              Graforce
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
