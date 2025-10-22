'use client'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import ExploreButton from '@/components/utils/buttons/ExploreButton'
import { useSidebarActions } from '@/hooks/useSidebarActions'
import CustomJobContent from '@/data/customJobData.json'
import CardWrapper from '@/wrappers/CardWrapper'
import React from 'react'

const TeamLeftCard = ({ className }) => {
  const { showJobContent } = useSidebarActions();

  return (
    <CardWrapper color='transparent' className={`${className} flex flex-col h-full justify-center gap-6`}>
      <SectionLabel text='Our Team' className='mb-4' />
      <AnimatedHeader>
        <h3 className='text-3xl'>Driven by Purpose. Defined by Clarity.</h3>
      </AnimatedHeader>
      <p>Our interdisciplinary and highly specialized team of physicists, engineers and designers makes us the technology leader for sustainable and economical energy solutions for use in hydrogen production. Our interdisciplinary knowledge, commitment and experience from the fields of plasma physics, electrical engineering, mechanical engineering and process engineering guarantee quality, know-how and safety at the highest level.</p>
      <ExploreButton buttonContent='Meet the Team' icon={false} showContent={showJobContent} content={CustomJobContent} />
    </CardWrapper>
  )
}

export default TeamLeftCard