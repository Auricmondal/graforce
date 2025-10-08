import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'

const YouNeedUs = () => {
  return (
    <SectionWrapper
      sectionClassName='bg-cst-neutral-1'
    >
      <CardWrapper
        variant='custom'
        color='dark'
        align='center'
        className='p-2'
      >
        <div className="w-full">
          <CardWrapper
            color='dark'
            align='left'
            className='border border-cst-neutral-3 gap-4'
          >
            <SectionLabel text="This is why you need us" textColor='text-white' />
            <AnimatedHeader>
              <h2 className="text-3xl md:text-[48px] tracking-tight capitalized text-white">
                Powering every sector
              </h2>
            </AnimatedHeader>
          </CardWrapper>
        </div>
      </CardWrapper>
    </SectionWrapper>
  )
}

export default YouNeedUs