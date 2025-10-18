import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Image from 'next/image'
import AboutImage from "@/assets/about/aboutus.jpg"
import React from 'react'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'

const Hero = () => {
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1 w-full'>
        <CardWrapper variant='custom' className='relative flex items-center justify-center h-screen w-full overflow-hidden'>
          <div className="relative z-2 w-5/6 text-center px-4 mx-auto">
            <AnimatedHeader>
              <h2 className='text-[48px] sm:text-[64px] lg:text-[128px] text-white capitalize leading-12 sm:leading-16 lg:leading-32'>Building a Circular, Carbon Free Future.</h2>
            </AnimatedHeader>
          </div>
          <Image
            src={AboutImage}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className='absolute top-0 left-0 w-full h-full z-0 brightness-60'
          />
        </CardWrapper>
      </SectionWrapper>
    </div>
  )
}

export default Hero