import React from 'react';
import dropSvg from '@/assets/home/drop.svg';
import Image from 'next/image';

const SectionLabel = ({ text }) => {
  return (
    <div className="flex items-center space-x-2 text-black">
      <Image src={dropSvg} alt="Drop Icon" className="w-6 h-6" />
      <span>{text}</span>
    </div>
  );
};

export default SectionLabel;
