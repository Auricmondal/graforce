'use client';
import React from 'react'
import { useSidebarActions } from '@/hooks/useSidebarActions';
import { IoIosArrowForward } from 'react-icons/io';

const ExploreButton = ({
  className = '',
  buttonContent = "Explore Here",
  showContent = showJobContent,
  content = {},
  icon = true,
}) => {
  const { showJobContent } = useSidebarActions();

  return (
    <div className={`text-black ${className}`}>
      <button className='group flex gap-2 text-sm md:text-base items-center py-4 md:py-4 px-4 md:px-6 border border-cst-neutral-5 cursor-pointer rounded-2xl hover:bg-cst-neutral-5 hover:text-white transition-all duration-300 ease-in-out'
        onClick={() => {
          showContent(content);
        }}
      >
        {buttonContent}
        {icon && <IoIosArrowForward className='text-xl md:group-hover:translate-x-2 ease-in-out duration-300 transition-all' />}
      </button>
    </div>
  )
}

export default ExploreButton