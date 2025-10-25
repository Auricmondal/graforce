import Image from 'next/image';
import React from 'react'
import { GoDotFill } from 'react-icons/go';

export const PartnershipBadge = ({
  text = 'Partnership',
  className = '',
  icon = true,
  bgColor = "bg-transparent",
  border = "border-white",
  textColor = "text-white",
  paddingX = "px-8 sm:px-16",
}) => {
  return (
    <div className={`${paddingX} py-2 ${bgColor} ${textColor} text-xs sm:text-base ${border !== 'none' ? `border ${border}` : ''} rounded-full uppercase text-center ${className}`}>
      <div className="flex flex-row items-center justify-center gap-2">
        {icon && <GoDotFill />} {text}
      </div>
    </div>
  );
}

const AuthorBadge = ({ name, date, badgeImage, size = 'default', padding = 'default', className = '' }) => {
  const scaleSize = {
    default: "w-8 sm:w-16 h-8 sm:h-16",
    small: "w-6 h-6 sm:w-12 sm:h-12",
    large: "w-10 h-10 sm:w-20 sm:h-20"
  }
  const paddings = {
    default: "p-2 sm:p-4",
    small: "p-1 sm:p-2",
    large: "p-3 sm:p-6"
  }
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString('en-US', options);
  }
  return (
    <div className={`${paddings[padding]} flex flex-row gap-1 sm:gap-2 bg-white rounded-full items-center shadow-2xl ${className}`}>
      <Image
        src={badgeImage}
        alt="Side Hot News"
        className={`object-cover ${scaleSize[size] } rounded-full`}
      />
      <div className="flex flex-col items-center justify-start">
        <h4 className="text-sm sm:text-base">{name}</h4>
        <p className="text-xs sm:text-sm text-gray-500">{formatDate(date)}</p>
      </div>
    </div>

  )
}

export default AuthorBadge