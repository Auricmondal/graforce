import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Globe from "@/assets/about/Globe.png"
import Image from 'next/image'
import React from 'react'

const ImpactOpportunity = () => {
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1'>
        <CardWrapper variant='custom' className='relative flex flex-col sm:flex-row gap-4 px-8 py-16 h-screen w-full bg-[#102044] overflow-hidden' color='custom' align='left'>
          <div className="w-full sm:w-1/2 md:w-[40%] h-full flex flex-col justify-between">
            <div className="relative z-1 flex flex-col gap-4">
              <SectionLabel text={'Impact & Opportunity'} invertIcon={true} textColor='text-white' />
              <AnimatedHeader>
                <h2 className={`text-xl sm:text-2xl md:text-3xl capitalize text-white`}>
                  Engineering the Shift to a Zero Emission World
                </h2>
              </AnimatedHeader>
            </div>
            <div className="relative z-1 mt-4 flex flex-col gap-4">
              <p className={`text-base sm:text-lg md:text-xl text-white`}>
                The transition to a zero-emission world presents both challenges and opportunities for innovation and growth.
              </p>
              <p className={`mt-2 text-base sm:text-lg md:text-xl text-white`}>
                By developing cutting-edge green hydrogen solutions, we aim to empower industries to reduce their carbon footprint, enhance energy efficiency, and contribute to a sustainable future.
              </p>
            </div>
          </div>
          <div className="relative flex justify-end h-full w-full sm:w-1/2 md:w-[60%]">
            <Image
              src={Globe}
              alt="Impact Opportunity"
              layout="responsive"
              className="absolute object-contain w-full scale-110 -bottom-20 -right-20 sm:scale-120 md:scale-110 sm:-bottom-10 sm:-right-10 md:-bottom-40 md:-right-30 transition-all duration-300 ease-in-out"
            />
          </div>
        </CardWrapper>
      </SectionWrapper>
    </div>
  )
}

export default ImpactOpportunity