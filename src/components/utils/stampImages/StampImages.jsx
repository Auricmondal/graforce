import React from 'react'
import AnimatedHeader from '../animations/AnimatedHeader'
import FounderImage from "@/assets/about/FounderImage.png"
import Image from 'next/image'

const templateDetails = {
  name: "Dr. Jens Hanke",
  title: "Founder and Chief Technology Officer",
  imageClassName: "w-[100%] h-[100%] object-cover translate-y-0 min-[910px]:-translate-y-10 min-[910px]:translate-x-10 scale-100 min-[910px]:scale-100",
  stampClassName: "bottom-2 left-2 min-[910px]:bottom-16 min-[910px]:left-14"
};

const StampImages = ({ 
  className = "", 
  stockImage = FounderImage, 
  name = templateDetails.name, 
  title = templateDetails.title,
  imageClassName = templateDetails.imageClassName,
  stampClassName = templateDetails.stampClassName,
  stampSize = "medium"
}) => {
  const nameSizeClass = {
    small: "text-base md:text-xl",
    medium: "text-lg md:text-3xl",
    large: "text-2xl md:text-5xl"
  }
  const titleSizeClass = {
    small: "text-xs md:text-sm",
    medium: "text-sm md:text-base",
    large: "text-base md:text-lg"
  }
  return (
    <div className={`relative flex w-full ${className}`}>
      <Image
        src={stockImage}
        alt="Our Team"
        className={`${imageClassName}`}
      />
      <div className={`absolute ${stampClassName}`}>
        <div className="bg-white/28 p-2 rounded-lg backdrop-blur-xs">
          <div className="bg-white/50 backdrop-blur-xs px-4 py-2 rounded-lg">
            <AnimatedHeader>
              <h3 className={`${nameSizeClass[stampSize]} font-semibold text-black`}>{name}</h3>
              <p className={`${titleSizeClass[stampSize]} text-cst-neutral-4`}>{title}</p>
            </AnimatedHeader>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StampImages