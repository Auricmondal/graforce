"use client";
import { usePathname } from "next/navigation";
import HeaderBanner from "@/components/shared/headerBanner/HeaderBanner";
import { useToast } from "@/hooks/useToast";

export default function BannerProvider({ children }) {
  const toast = useToast()
  return (
    <>
      <HeaderBanner
        text="We've launched a new feature! Check it out now."
        readMoreLink=""
        onReadMore={()=>toast.warning({
            title: "Profile updated",
            description: "Your changes have been saved successfully.",
          })}
      />
      {children}
    </>
  );
}
