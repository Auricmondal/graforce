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
      <IoMdArrowRoundForward className='group-hover:scale-130 group-hover:translate-x-2 group-hover:text-primary transition-all duration-300' />
    </div>
  )
}

export default ArrowBadge