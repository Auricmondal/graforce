import Image from "next/image";

export default function DataCard({
  title,
  text,
  icon,
  bgColor = "bg-[#5627DA]",
  textColor = "text-white",
}) {
  return (
    <div
      className={`${bgColor} ${textColor} relative rounded-xl p-6 overflow-hidden flex flex-col justify-between`}
    >
      <div className="text-lg lg:text-xl z-10">{title}</div>
      <div className="flex flex-col justify-end h-full z-10">
        <p className="text-xl md:text-2xl font-medium leading-snug">{text}</p>
      </div>

      {/* Background Icon */}
      {icon && (
        <div className="absolute top-[50%] -translate-y-[50%] right-0 w-1/3 h-[50%] opacity-100">
          <div className="absolute inset-0 flex items-center justify-end w-full h-full">
            <Image
              src={icon}
              alt=""
              width={40}
              height={40}
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
