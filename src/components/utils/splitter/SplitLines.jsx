import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function SplitLines({ children, className = "", textId = "" }) {
  const ref = useRef(null);
  const splitInstance = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    // Split the text into lines
    splitInstance.current = new SplitText(ref.current, {
      type: "lines",
      linesClass: `gsap-line`,
    });

    // Replace <div> with <span> for proper inline rendering and add unique IDs
    splitInstance.current.lines = splitInstance.current.lines.map((lineEl, index) => {
      if (lineEl.tagName === "DIV") {
        const span = document.createElement("span");
        span.className = lineEl.className;
        span.id = `gsap-line-${index}`;
        span.style.display = "block";
        span.innerHTML = lineEl.innerHTML;
        lineEl.replaceWith(span);
        return span;
      } else {
        // Add ID to existing elements
        lineEl.id = `gsap-line-${index}`;
      }
      return lineEl;
    });

    return () => {
      if (splitInstance.current) splitInstance.current.revert();
    };
  }, []);

  return (
    <span ref={ref} className={className} id={textId}>
      {children}
    </span>
  );
}
