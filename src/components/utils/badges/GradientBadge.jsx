export default function GradientBadge({
  icon,
  text,
  className,
  variant = "default",
}) {
  return (
    <span
      className={`${
        variant === "default"
          ? "p-[8px_16px] rounded-full opacity-100 inline-flex items-center justify-center bg-gradient-to-r from-primary-50 to-primary-300 text-white text-xs md:text-sm font-medium border-[0.5px] border-black/10"
          : ""
      } ${className} `}
    >
      {icon && <span className="mr-1 text-black">{icon}</span>}
      {text}
    </span>
  );
}
