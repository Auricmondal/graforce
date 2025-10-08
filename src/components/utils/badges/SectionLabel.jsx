import React from 'react';
import dropSvg from '@/assets/drop.svg';
import Image from 'next/image';

const SectionLabel = ({ text, textColor = "text-black" }) => {
  return (
    <div className={`flex items-center space-x-2 ${textColor}`}>
      <Image src={dropSvg} alt="Drop Icon" className="w-6 h-6" />
      <span className='capitalize'>{text}</span>
    </div>
  );
};

export default SectionLabel;
