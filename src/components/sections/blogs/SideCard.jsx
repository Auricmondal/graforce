import React from 'react'
import sidehotpic from "@/assets/blogs/SideHotPic.jpg";
import ProfilePic from "@/assets/about/gallery-image-1.jpg";
import AuthorBadge, { PartnershipBadge } from './AuthorBadge';
import ArrowBadge from './ArrowBadge';
import Image from 'next/image';

const SideCard = ({ 
  picture = sidehotpic, 
  badgeText = 'Technology', 
  name = 'John Smith', 
  date = '2024-06-10', 
  description = 'Graforce & Kawasaki Partner for Zero Carbon Heat & Power',   
  ProfilePicture = ProfilePic 
}) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-[60vh]">
      <Image
        src={picture}
        alt="Side Hot News"
        className="object-cover absolute brightness-75 w-full h-full"
      />
      <div className="absolute z-1 bg-blue-700/30 w-full h-full" />
      <div className="relative z-1 grid grid-cols-1 py-2 md:py-4 px-2 md:px-6 w-full h-full">
        <div className="flex flex-col items-start gap-2 justify-start w-full">
          <div className="flex flex-row items-center justify-between w-full p-4 md:p-0">
            <div className="flex min-[880px]:hidden"></div>
            <PartnershipBadge
              text={badgeText}
              bgColor="bg-white/60"
              textColor="text-black"
              border="none"
              paddingX="small"
              className="hidden min-[880px]:flex"
            />
            <ArrowBadge
              onClick={() => {
                console.log("Clicked on arrow.");
              }}
              // size="small"
              className="scale-75 min-[880px]:scale-50"
            />
          </div>
          <div className="hidden text-white text-base min-[880px]:flex font-semibold">
            {description}
          </div>
        </div>
        <div className="flex items-center justify-start">
          <AuthorBadge
            name={name}
            date={date}
            badgeImage={ProfilePicture}
            size="small"
            padding="small"
            className="hidden min-[880px]:flex"
          />
          <div className="flex min-[880px]:hidden text-white text-xl font-semibold">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideCard