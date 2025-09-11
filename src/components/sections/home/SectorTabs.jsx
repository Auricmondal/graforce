export default function SectorTabs({ tabs, activeTab, onTabClick }) {
  return (
    <div className="overflow-x-auto overflow-y-hidden scrollbar-hide">
      <div className="flex w-max md:w-full justify-center border-b border-white/20 pt-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabClick(tab)}
            className={`text-white text-xl cursor-pointer tracking-tight border-r border-white/20 pb-2 px-4`}
          >
            <span
              className={`pb-2 transition-all duration-300 text-nowrap ${
                tab === activeTab
                  ? "border-b-2 border-white font-semibold"
                  : "opacity-60"
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
