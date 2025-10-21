import AnimatedHeader from "@/components/utils/animations/AnimatedHeader";

export default function AnimatedBorderCard({
  title,
  description,
  className,
  animationDelay = "0s",
}) {
  return (
    <div className={`animated-border-container ${className}`}>
      <div className="animated-border-layer " style={{ animationDelay }}></div>

      <div className="animated-border-content !h-[166px]">
        <div className="text-center w-full">
          <AnimatedHeader className="font-semibold">{title}</AnimatedHeader>
          <AnimatedHeader className="text-sm text-[#BACFFF]">
            {description}
          </AnimatedHeader>
        </div>
      </div>
    </div>
  );
}
