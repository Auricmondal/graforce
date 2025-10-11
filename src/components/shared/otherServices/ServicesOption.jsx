import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs"

const ServicesOption = ({ index = 1, title = "Wastewater Plasmalyzer®", className = "", onClick }) => {
  return (
    <div className={`group w-full ${className} transition-all duration-300 ease-in-out text-white/30 hover:text-white`} onClick={onClick}>
      <div className="flex flex-row items-center gap-4 md:gap-4 cursor-pointer">
        <div className="flex items-center justify-center h-8 w-8 p-4 rounded-full border border-white/30 group-hover:border-white text-base">{index}</div>
        <div className="text-2xl sm:text-4xl md:text-5xl">{title}</div>
        <div className="text-4xl md:text-5xl "><BsArrowRightCircle className='group-hover:translate-x-5 transition-all duration-300 ease-in-out' /></div>
      </div>
    </div>
  )
}

export default ServicesOption