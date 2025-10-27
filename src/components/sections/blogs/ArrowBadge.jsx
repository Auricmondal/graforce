import React from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'

const ArrowBadge = ({ onClick, size = "default", className = "" }) => {
  const scaleSize = {
    micro: "scale-50",
    small: "scale-75",
    default: "",
    large: "scale-125"
  }
  return (
    <div className={`group p-4 sm:p-6 bg-white text-xl sm:text-4xl rounded-full -rotate-45 shadow-2xl ${scaleSize[size]} ${className}`} onClick={onClick}>
      {/* <span className='flex overflow-hidden'>
        <span className='shrink-0'>
          <IoMdArrowRoundForward className='group-hover:scale-130 group-hover:translate-x-2 group-hover:text-primary transition-all duration-300' />
        </span>
        <span className='shrink-0'>
          <IoMdArrowRoundForward className='group-hover:scale-130 group-hover:translate-x-2 group-hover:text-primary transition-all duration-300' />
        </span>
      </span> */}
      <span className="relative flex overflow-hidden">
        <span className={`flex transform transition-transform duration-300 group-hover:-translate-x-full`}>
          <IoMdArrowRoundForward className='transition-all duration-300' />
        </span>
        <span className={`text-black flex absolute right-0 top-0 transform translate-x-full transition-transform duration-300 group-hover:translate-x-0`}>
          <IoMdArrowRoundForward className='transition-all duration-300 ease-in-out' />
        </span>
      </span>
    </div>
  )
}

export default ArrowBadge