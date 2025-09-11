import { useEffect, useRef } from "react";

export default function SolutionItem({
  number,
  title,
  description,
  onClick,
  isActive,
  intervalDuration = 10000, // in ms
}) {
  const progressRef = useRef(null);

  useEffect(() => {
    const el = progressRef.current;

    if (isActive && el) {
      el.style.transition = "none";
      el.style.width = "0%";

      void el.offsetWidth;

      el.style.transition = `width ${intervalDuration}ms linear`;
      el.style.width = "100%";
    } else if (el) {
      el.style.transition = "none";
      el.style.width = "0%";
    }
  }, [isActive, intervalDuration]);

  return (
    <div
      className="relative cursor-pointer transition flex items-center gap-4 pt-4 pb-3 shadow-[inset_0_-1px_0_0_var(--color-cst-neutral-300)]"
      onClick={onClick}
    >
      {/* Animated progress bar overlay (blue) */}
      <div
        ref={progressRef}
        className={`absolute -bottom-0 left-0 h-[1px] bg-primary-300`}
        style={{ width: 0 }}
      />

      <span className="text-2xl text-primary-50 font-light">{number}</span>

      <div>
        <h3 className="text-[24px] md:text-[40px] md:font-medium">{title}</h3>
        <p className="text-gray-600 font-light leading-[100%] tracking-[-1.5%]">
          {description}
        </p>
      </div>
    </div>
  );
}
