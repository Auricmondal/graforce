import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'
import BrandLogos from '@/components/shared/brands/brands'

const OurTeam = () => {
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1'>
        <CardWrapper variant='custom' color='transparent' align='center' className='py-20 px-8 gap-4'>
          <div className="flex flex-col justify-center items-center gap-4">
            <SectionLabel text={'Our Team'} invertIcon={false} textColor='text-black' />
            <AnimatedHeader>
              <h2 className={`text-5xl sm:text-2xl md:text-3xl capitalize`}>
                Backed By Top Brands
              </h2>
            </AnimatedHeader>
            <a>
              <p className="text-center text-cst-neutral-5 underline hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer">Explore More with Our News</p>
            </a>
          </div>
          <div className="flex w-full justify-center items-center">
            <BrandLogos />
          </div>
        </CardWrapper>
      </SectionWrapper>
    </div>
  )
}

export default OurTeam