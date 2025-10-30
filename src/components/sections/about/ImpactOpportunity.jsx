'use client'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React, { useRef, useEffect } from 'react'

const ImpactOpportunity = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) videoRef.current?.play()
    })
    if (videoRef.current) observer.observe(videoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1'>
      <CardWrapper
        variant='custom'
        className='relative flex !flex-col sm:!flex-row gap-8 px-4 sm:px-8 pt-20 sm:py-16 h-full md:h-[700px] w-full bg-[#102044] overflow-hidden'
        color='custom'
        align='left'
      >
        <div className='w-full sm:w-1/2 md:w-[40%] h-full flex flex-col justify-between gap-6 sm:gap-16'>
          <div className='z-10 flex flex-col gap-4 w-full'>
            <SectionLabel text='Impact & Opportunity' invertIcon textColor='text-white' />
            <AnimatedHeader>
              <h2 className='text-xl sm:text-3xl md:text-4xl capitalize text-white drop-shadow-md'>
                Engineering the Shift to a Zero Emission World
              </h2>
            </AnimatedHeader>
          </div>

          <div className='z-10 mt-16 sm:mt-0 flex flex-col gap-6'>
            <p className='text-base md:text-xl text-white'>
              The transition to a zero-emission world presents both challenges and opportunities for innovation and growth.
            </p>
            <p className='mt-2 text-base md:text-xl text-white'>
              By developing cutting-edge green hydrogen solutions, we aim to empower industries to reduce their carbon footprint, enhance energy efficiency, and contribute to a sustainable future.
            </p>
          </div>
        </div>
          <video
            ref={videoRef}
            src='https://cdn.sanity.io/files/sib3yr4f/production/f125f737cd7466d06b29fb7d319aa9620c55a7f9.webm'
            className='sm:absolute object-cover sm:h-scree w-full sm:w-1/2 md:w-6/10 h-auto bg-transparent scale-110 bottom-0 right-0 sm:scale-120 md:scale-110 translate-x-[10%] sm:translate-y-[0%] md:translate-y-[30%] md:translate-x-[10%] transition-all duration-300 ease-in-out'
            autoPlay
            loop
            muted
            playsInline
          />
      </CardWrapper>
    </SectionWrapper>
  )
}

export default ImpactOpportunity
