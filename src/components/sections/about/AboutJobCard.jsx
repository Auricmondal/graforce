'use client';
import { useSidebarActions } from '@/hooks/useSidebarActions';
import { IoIosArrowForward } from 'react-icons/io';
import CardWrapper from '@/wrappers/CardWrapper';
import CustomJobContent from '@/data/customJobData.json'
import React from 'react'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader';

const AboutJobCard = ({ header, subHeader, buttonContent, className }) => {
  const { showJobContent } = useSidebarActions();

  return (
    <CardWrapper variant='normal' className={`${className} justify-evenly`}>
      <div className="text-left">
        <AnimatedHeader duration={1}>
          <h3 className='text-3xl md:text-5xl'>{header}</h3>
        </AnimatedHeader>
      </div>
      <div className="text-base">{subHeader}</div>
      <div className="text-black">
        <button className='group flex gap-2 text-sm md:text-base items-center py-4 md:py-4 px-4 md:px-6 border border-cst-neutral-5 rounded-2xl hover:bg-cst-neutral-5 hover:text-white transition-all duration-300 ease-in-out'
          onClick={() => {
            showJobContent(CustomJobContent);
          }}
        >
          {buttonContent}
          <IoIosArrowForward className='text-xl md:group-hover:translate-x-2 ease-in-out duration-300 transition-all' />
        </button>
      </div>
    </CardWrapper>
  )
}

export default AboutJobCard