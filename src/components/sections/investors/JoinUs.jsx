"use client";
import SectionWrapper from "@/wrappers/SectionWrapper";
import SectionLabel from "@/components/utils/badges/SectionLabel";
import CardWrapper from "@/wrappers/CardWrapper";
import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";
import TopSection from "./joinUs/TopSection";
import Timeline from "./joinUs/Timeline";

// function Timeline() {
//   const containerRef = useRef(null);
//   const progressRef = useRef(null);
//   const labelRefs = useRef(Array(steps.length).fill(null));

//   useGSAP(
//     (context) => {
//       const container = containerRef.current;
//       const progressEl = progressRef.current;
//       if (!container || !progressEl) return;

//       // Progress bar animation
//       context.add(
//         gsap.fromTo(
//           progressEl,
//           { scaleX: 0 },
//           {
//             scaleX: 1,
//             ease: "none",
//             scrollTrigger: {
//               trigger: container,
//               start: "top center",
//               end: "bottom center",
//               scrub: true,
//               // optionally markers: true for debugging
//             },
//           }
//         )
//       );

//       // For each label: animate in when progress passes approximate position
//       labelRefs.current.forEach((labelEl, i) => {
//         if (!labelEl) return;
//         const amount = (i + 0.5) / steps.length; // approx fractional position
//         context.add(
//           gsap.fromTo(
//             labelEl,
//             { opacity: 0, y: -10 },
//             {
//               opacity: 1,
//               y: 0,
//               duration: 0.3,
//               scrollTrigger: {
//                 trigger: container,
//                 start: `top+=${amount * container.offsetHeight}px center`,
//                 end: `top+=${amount * container.offsetHeight + 50}px center`,
//                 toggleActions: "play reverse play reverse",
//                 scrub: true,
//               },
//             }
//           )
//         );
//       });

//       // Descriptions (optional) - as earlier
//       context.add(
//         gsap.utils.toArray(".step-desc").map((el) =>
//           gsap.fromTo(
//             el,
//             { opacity: 0, y: 50 },
//             {
//               opacity: 1,
//               y: 0,
//               scrollTrigger: {
//                 trigger: el,
//                 start: "top 80%",
//                 end: "top 50%",
//                 toggleActions: "play reverse play reverse",
//               },
//             }
//           )
//         )
//       );

//       return () => {
//         // context cleanup handled automatically
//       };
//     },
//     { scope: containerRef }
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="relative bg-gradient-to-br from-[#001F5C] to-[#0D1A40] py-32 px-8"
//     >
//       <div className="relative mx-auto max-w-5xl">
//         {/* Timeline line */}
//         <div className="relative h-1 bg-white/30 w-full rounded-full">
//           {/* Progress line */}
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
//         {/* Descriptions */}
//         <div className="mt-32 flex flex-col gap-32">
//           {steps.map((step, i) => (
//             <div key={i} className="step‑desc text-white text-center opacity-0">
//               <h3 className="text-2xl font-bold mb-2">{step}</h3>
//               <p className="text-sm max-w-xl mx-auto">
//                 This is the <strong>{step}</strong> stage of the investment
//                 process.
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

const JoinUs = () => {
  return (
    <SectionWrapper
      className="text-black space-y-2 min-h-screen h-max"
      sectionClassName="bg-cst-neutral-1"
    >
      <CardWrapper
        className="gap-2 p-8 !rounded-2xl bg-[linear-gradient(90deg,_#102044_0%,_#284FA9_100%)] text-white"
        variant="custom"
        color="default"
        align="center"
      >
        <SectionLabel text="Team & Leadership" textColor="text-white" />
        <h2 className="text-2xl lg:text-5xl md:text-[48px] tracking-tight font-medium">
          <AnimatedHeader>Join Us in Scaling Hydrogen</AnimatedHeader>
        </h2>
        <p className="max-w-sm">
          <AnimatedHeader>
            Graforce is seeking long-term equity partners to accelerate growth.
          </AnimatedHeader>
        </p>
      </CardWrapper>
      <div className="rounded-2xl bg-[linear-gradient(90deg,_#102044_0%,_#284FA9_100%)] py-16 px-4 md:px-6">
        <div className="md:p-8 flex flex-col gap-27">
          <div className="md:px-[10vw]">
            <TopSection />
          </div>
          <div className="relative">
            <Timeline />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default JoinUs;
