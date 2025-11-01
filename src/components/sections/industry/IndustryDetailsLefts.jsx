import dynamic from "next/dynamic";

const AchievementRive = dynamic(
  () => import("@/components/sections/services/AchievementRive"),
  {
    ssr: false,
    loading: () => <div className="bg-gray-200 h-64 w-full animate-pulse" />,
  }
);

export const leftTypes = {
  1: (
    <div className="p-2 flex flex-col h-full justify-center">
      <AchievementRive src="/animations/methane.riv" id="methane-1" />
    </div>
  ),
  2: (
    <div className="p-2 flex flex-col h-full justify-center">
      <AchievementRive src="/animations/methane.riv" id="methane-2" />
    </div>
  ),
  3: (
    <div className="p-2 flex flex-col h-full justify-center">
      <AchievementRive src="/animations/methane.riv" id="methane-3" />
    </div>
  ),
  4: (
    <div className="p-2 flex flex-col h-full justify-center">
      <AchievementRive src="/animations/methane.riv" id="methane-4" />
    </div>
  ),
  5: (
    <div className="p-2 flex flex-col h-full justify-center">
      <AchievementRive src="/animations/methane.riv" id="methane-5" />
    </div>
  ),
};
