export default function RippleCard({ children }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2">
      <div className="absolute -inset-1 scale-[1] bg-blue-400/20 animate-ripple-rect rounded-xl pointer-events-none z-0" />

      <div
        className="relative z-10 bg-[#3D6AD166] text-white rounded-xl p-6 text-3xl font-semibold w-full flex justify-center items-center shadow-lg h-full"
      >
        {children}
      </div>
    </div>
  );
}
