"use client";

import { loaderContext } from "@/contexts/LoaderContext";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useRef } from "react";

export default function LoaderProvider({ children, word = 'GRAFORCE' }) {
  const loadingctx = useContext(loaderContext);
  const { loading, setLoading, waitForPageReady } =
    loadingctx;
  const pathname = usePathname();
  const prevPath = useRef(pathname);
  const counts = {};
  const letters = [...word];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    if (prevPath.current !== pathname) {
      setLoading(true);

      (async () => {
        await waitForPageReady();
        await sleep(2000);
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
            className="fixed bg-cst-neutral-5 z-10 flex items-center justify-center w-screen h-screen"
            initial={{
              x: "-50%",
              y: "-50%",
              top: "50%",
              left: "50%",
              opacity: 1,
            }}
            animate={{
              y: "-200vh",
              transition: {
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.6,
              },
            }}
            exit={{
              y: "-200vh",
              display: "none",
              opacity: 0,
              transition: {
                duration: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }}
          >
            <motion.span
              className="text-white text-[10vw] font-bold"
            >
              <div className="loader">
                {letters.map((ch, idx) => {
                  const base = ch.toLowerCase();
                  counts[base] = (counts[base] || 0) + 1;
                  const cls = counts[base] === 1 ? base : `${base}${counts[base]}`;
                  return (
                    <span key={idx} className={cls}>
                      {ch}
                    </span>
                  );
                })}
              </div>
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
