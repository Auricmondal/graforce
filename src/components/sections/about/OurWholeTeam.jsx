import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'
import TeamLeftCard from './TeamLeftCard'
import TeamRightCard from './TeamRightCard'

const OurWholeTeam = () => {
  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1 h-screen' className='h-full'>
      <CardWrapper variant='normal' className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full'>
      <div className='h-full w-full'>
        <TeamLeftCard />
      </div>
      <div className='h-full w-full'>
        <TeamRightCard/>
      </div>
      </CardWrapper>
    </SectionWrapper>
  )
}

export default OurWholeTeam