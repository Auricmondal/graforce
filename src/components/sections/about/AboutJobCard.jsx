'use client';
import { useSidebarActions } from '@/hooks/useSidebarActions';
import CardWrapper from '@/wrappers/CardWrapper';
import CustomJobContent from '@/data/customJobData.json'
import React from 'react'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader';
import ExploreButton from '@/components/utils/buttons/ExploreButton';

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
      <ExploreButton showContent={showJobContent} buttonContent={buttonContent} content={CustomJobContent}/>
    </CardWrapper>
  )
}

export default AboutJobCard