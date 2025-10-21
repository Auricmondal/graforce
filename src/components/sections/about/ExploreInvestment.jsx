'use client';
import { useSidebarActions } from '@/hooks/useSidebarActions';
import CardWrapper from '@/wrappers/CardWrapper';
import SectionWrapper from '@/wrappers/SectionWrapper';
import Image from 'next/image';
import InvestmentImage from "@/assets/about/InvestmentImage.jpg";
import React from 'react'
import AboutJobCard from './AboutJobCard';

const templateData = {
  header: "We’re building the bridge between ambition and action.",
  subHeader: "Every breakthrough at Grafoce turns possibility into progress. We’re building scalable clean-energy systems that deliver real impact and long term returns. A future that rewards both the planet and the people who invest in it.",
  buttonContent: "Explore Investment Options"
};

const ExploreInvestment = ({
  header = templateData.header,
  subHeader = templateData.subHeader,
  buttonContent = templateData.buttonContent
}) => {
  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1' className='flex flex-col min-[870px]:flex-row-reverse gap-2 '>
      <AboutJobCard className={`gap-6 w-full min-[870px]:w-1/2`} header={header} subHeader={subHeader} buttonContent={buttonContent} />
      <CardWrapper className='relative justify-evenly gap-2 overflow-hidden w-full min-[870px]:w-1/2' color='transparent' variant='custom'>
        <Image src={InvestmentImage} alt='investment' className='min-[870px]:absolute inset-0 object-cover aspect-3/4 min-[870px]::aspect-auto' />
      </CardWrapper>
    </SectionWrapper>
  )
}

export default ExploreInvestment