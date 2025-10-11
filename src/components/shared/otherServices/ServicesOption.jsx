import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs"

const ServicesOption = ({ index = 1, title = "Wastewater Plasmalyzer®", className = "", onClick, onMouseEnter, onHover }) => {
  return (
    <div className={`group w-full ${className} transition-all duration-300 ease-in-out text-white md:text-white/30 md:hover:text-white`} onClick={onClick} onMouseEnter={onMouseEnter} onMouseOver={onHover}>
      <div className="flex flex-row items-center gap-4 md:gap-4 cursor-pointer">
        <div className="flex items-center justify-center capitalize h-8 w-8 p-4 rounded-full border border-white md:border-white/30 md:group-hover:border-white text-base transition-all duration-300 ease-in-out">{index}</div>
        <div className="text-2xl sm:text-4xl md:text-5xl capitalize transition-all duration-300 ease-in-out">{title}</div>
        <div className="text-4xl md:text-5xl "><BsArrowRightCircle className='group-hover:translate-x-5 transition-all duration-300 ease-in-out' /></div>
      </div>
    </div>
  )
}

export default ServicesOption