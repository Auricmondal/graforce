export default function ElevatedButton({
  children,
  onClick,
  className,
  variant = "default",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "default"
          ? "bg-primary-50 text-primary-500 shadow-[0px_2px_6px_2px_rgba(0,0,0,0.15),_0px_1px_2px_0px_rgba(0,0,0,0.3)] rounded-xl md:rounded-2xl py-3 px-4 flex gap-2 items-center justify-center font-medium w-full md:w-fit"
          : ""
      } ${className} text-[14px] md:text-[16px]`}
      {...props}
    >
      {children}
    </button>
  );
}
