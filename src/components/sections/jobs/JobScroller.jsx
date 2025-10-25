"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import jobImg1 from "@/assets/job/jobs-img1.jpg";
import jobImg2 from "@/assets/job/jobs-img2.jpg";
import jobImg3 from "@/assets/job/jobs-img3.jpg";
import jobImg4 from "@/assets/job/jobs-img4.jpg";
import jobImg5 from "@/assets/job/jobs-img5.jpg";

const imagesColumn1 = [jobImg1, jobImg3, jobImg4];
const imagesColumn2 = [jobImg2, jobImg5, jobImg3];

export default function JobScroller() {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);

  useGSAP(() => {
    const animateColumn = (ref, direction = "up") => {
      if (!ref) return;

      const distance = 1044; // 348px height * 3 images

      const tween = gsap.to(ref, {
        y: direction === "down" ? 0 : -distance,
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      if (direction === "down") {
        gsap.set(ref, { y: -distance });
      }
    };

    animateColumn(col1Ref.current, "up");
    animateColumn(col2Ref.current, "down");
  }, []);

  const renderImages = (images) => {
    const doubledImages = images.concat(images); // repeat for infinite effect

    return doubledImages.map((src, index) => (
      <div
        key={index}
        className="relative w-full h-[348px] mb-4 rounded-lg overflow-hidden"
      >
        <Image
          src={src}
          alt={`img-${index}`}
          fill
          className="object-cover rounded-lg"
          priority={index < 3} // improve LCP
        />
      </div>
    ));
  };

  return (
    <div className="w-full h-[654px] overflow-hidden mt-12 rounded-lg">
      <div className="flex gap-4 h-full">
        {/* Column 1 */}
        <div className="w-1/2 h-full overflow-hidden will-change-transform">
          <div ref={col1Ref}>{renderImages(imagesColumn1)}</div>
        </div>

        {/* Column 2 */}
        <div className="w-1/2 h-full overflow-hidden will-change-transform">
          <div ref={col2Ref}>{renderImages(imagesColumn2)}</div>
        </div>
      </div>
    </div>
  );
}
