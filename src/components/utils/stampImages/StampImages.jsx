import React from 'react'
import AnimatedHeader from '../animations/AnimatedHeader'
import FounderImage from "@/assets/about/FounderImage.png"
import Image from 'next/image'

const templateDetails = {
  name: "Dr. Jens Hanke",
  title: "Founder and Chief Technology Officer",
  imageClassName: "w-[500px] h-[500px] object-contain translate-y-10 min-[910px]:-translate-y-10 min-[910px]:translate-x-10 scale-110 min-[910px]:scale-100",
  stampClassName: "bottom-2 left-2 min-[910px]:bottom-12 min-[910px]:left-12"
};

const StampImages = ({ 
  className = "", 
  stockImage = FounderImage, 
  name = templateDetails.name, 
  title = templateDetails.title,
  imageClassName = templateDetails.imageClassName,
  stampClassName = templateDetails.stampClassName
}) => {
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
              <h3 className="text-3xl font-semibold text-black">{name}</h3>
              <p className="text-sm text-cst-neutral-4">{title}</p>
            </AnimatedHeader>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StampImages