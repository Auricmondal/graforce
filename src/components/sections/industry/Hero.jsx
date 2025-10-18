import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import HeroImage from '@/assets/industry/IndustryHeroImage.jpg'
import React from 'react'
import Image from 'next/image'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'

const Hero = () => {
  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1 h-screen"
      className='h-full'
    >
      <CardWrapper className='relative h-full flex items-center justify-center overflow-hidden'>
        <div className="relative z-1 text-center mx-auto md:w-2/3 md:px-8">
        <AnimatedHeader>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-4">Hydrogen for Every Sector</h2>
        </AnimatedHeader>
        <AnimatedHeader>
          <p className="text-base md:text-xl lg:text-2xl text-white md:px-8">
            From energy systems to heavy industry, Graforce solutions cut emissions and lower costs — powering a net-zero future.
          </p>
        </AnimatedHeader>
        </div>
        <Image src={HeroImage} alt="Industry Hero" className="absolute inset-0 object-cover brightness-50 w-full h-full" />
      </CardWrapper>
    </SectionWrapper>
  )
}

export default Hero