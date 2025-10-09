import React from 'react';
import dropSvg from '@/assets/drop.svg';
import Image from 'next/image';

const SectionLabel = ({ text, icon = true, textColor = "text-black" }) => {
  return (
    <div className={`flex items-center space-x-2 ${textColor}`}>
      {icon && <Image src={dropSvg} alt="Drop Icon" className="w-6 h-6" />}
      <span>{text}</span>
    </div>
  );
};

export default SectionLabel;
