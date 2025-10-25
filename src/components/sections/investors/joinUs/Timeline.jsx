// "use client";
// import { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// const steps = ["NDA", "Review", "Site Visit", "Signing"];

// export default function Timeline() {
//   const containerRef = useRef(null);
//   const progressRef = useRef(null);
//   const labelRefs = useRef([]);
//   // console.log("Trigger bounds", containerRef.current.getBoundingClientRect());

//   useGSAP(
//     () => {
//       const container = containerRef.current;
//       const progress = progressRef.current;

//       if (!container || !progress) return;

//       // Animate the progress bar
//       gsap.fromTo(
//         progress,
//         { scaleX: 0 },
//         {
//           scaleX: 1,
//           ease: "none",
//           scrollTrigger: {
//             trigger: container,
//             start: "top 80%", // top of component hits 80% of viewport height (starts early)
//             end: "bottom 20%",
//             scrub: true,
//             anticipatePin: 1,
//             refreshPriority: 1,
//           },
//         }
//       );

//       // Animate each label as it enters view
//       labelRefs.current.forEach((el, i) => {
//         if (!el) return;

//         const offsetFraction = (i + 0.5) / steps.length;
//         const offset = container.offsetHeight * offsetFraction;

//         gsap.fromTo(
//           el,
//           { opacity: 0, y: -10 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.3,
//             scrollTrigger: {
//               trigger: container,
//               start: `top+=${offset}px bottom`,
//               end: `top+=${offset + 50}px bottom`,
//               toggleActions: "play reverse play reverse",
//               scrub: true,
//               // markers: true
//             },
//           }
//         );
//       });
//     },

//     { scope: containerRef }
//   );

//   return (
//     <div
//       className="relative px-8 py-16"
//       ref={containerRef}
//     >
//       <div className="relative mx-auto max-w-5xl">
//         {/* Timeline base bar */}
//         <div className="relative h-1 bg-white/30 w-full rounded-full">
//           {/* Progress bar */}
//           <div
//             ref={progressRef}
//             className="absolute top-0 left-0 h-1 bg-white origin-left transform scale-x-0 w-full"
//           />

//           {/* Checkpoints */}
//           <div className="absolute w-full flex justify-between -top-6">
//             {steps.map((step, i) => (
//               <div
//                 key={i}
//                 className="flex flex-col items-center text-white text-sm"
//               >
//                 <div className="w-5 h-5 bg-white rounded-full border-2 border-blue-900 mb-2" />
//                 <div
//                   ref={(el) => (labelRefs.current[i] = el)}
//                   className="opacity-0"
//                 >
//                   {step}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = ["NDA", "Review", "Site Visit", "Signing"];

export default function Timeline() {
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const labelRefs = useRef([]);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        ScrollTrigger.refresh(true);
        const container = containerRef.current;
        const progress = progressRef.current;

        if (!container || !progress) return;

        // Animate the progress bar
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers: {
                startColor: "green",
                endColor: "red",
                fontSize: "12px",
                indent: 10,
              },
              // anticipatePin: 1,
              pin: false,
              refreshPriority: 100,
              id: "timeline-trigger",
            },
          }
        );

        // Animate each label as it enters view
        labelRefs.current.forEach((el, i) => {
          if (!el) return;

          const offsetFraction = (i + 0.5) / steps.length;
          const offset = container.offsetHeight * offsetFraction;

          gsap.fromTo(
            el,
            { opacity: 0, y: -10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              scrollTrigger: {
                trigger: container,
                start: `top+=${offset}px bottom`,
                end: `top+=${offset + 50}px bottom`,
                toggleActions: "play reverse play reverse",
                scrub: true,
              },
            }
          );
        });
      }, containerRef); // 👈 Scoped to containerRef

      return () => ctx.revert(); // 👈 Cleanup on unmount
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative px-8 py-16 border border-red-600 containere"
      ref={containerRef}
    >
      <div className="relative mx-auto max-w-5xl">
        {/* Timeline base bar */}
        <div className="relative h-1 bg-white/30 w-full rounded-full">
          {/* Progress bar */}
          <div
            ref={progressRef}
            className="absolute top-0 left-0 h-1 bg-white origin-left transform scale-x-0 w-full"
          />

          {/* Checkpoints */}
          <div className="absolute w-full flex justify-between -top-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-white text-sm"
              >
                <div className="w-5 h-5 bg-white rounded-full border-2 border-blue-900 mb-2" />
                <div
                  ref={(el) => (labelRefs.current[i] = el)}
                  className="opacity-0"
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
