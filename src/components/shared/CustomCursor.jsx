"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const variants = {
    default: {
      x: pos.x,
      y: pos.y,
    },
  };

  return (
    <motion.div
      className="fixed z-[999] h-12 w-12 pointer-events-none rounded-full transform -translate-x-1/2 -translate-y-1/2 bg-white mix-blend-exclusion"
      variants={variants}
      animate="default"
    />
  );
}

// "use client";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [isOnText, setIsOnText] = useState(false);

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });

//       const tag = e.target.tagName.toLowerCase();
//       if (["p", "span", "a", "h1", "h2", "h3", "h4", "h5", "h6"].includes(tag)) {
//         setIsOnText(true);
//       } else {
//         setIsOnText(false);
//       }
//     };

//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   const variants = {
//     default: {
//       x: pos.x,
//       y: pos.y,
//     },
//   };

//   return (
//     <motion.div
//       className={`fixed z-[999] h-12 w-12 pointer-events-none rounded-full transform -translate-x-1/2 -translate-y-1/2 ${
//         isOnText ? "bg-white mix-blend-difference" : "bg-black"
//       }`}
//       variants={variants}
//       animate="default"
//     />
//   );
// }
