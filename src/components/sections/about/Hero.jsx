'use client'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Image from 'next/image'
import AboutImage from "@/assets/about/aboutus.jpg"
import React, { useRef } from 'react'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  const AboutImageRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(AboutImageRef.current, {
      scale: 1,
      filter: "blur(0px)",
      filter: "brightness(60%)",
      duration: 1,
      ease: "power3.out",
    })
  }, [])
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1 w-full h-screen' className='flex items-center justify-center h-full'>
        <CardWrapper variant='custom' className='relative flex items-center justify-center w-full overflow-hidden h-full'>
          <div className="relative flex items-center justify-center z-2 w-5/6 text-center mx-auto">
            <AnimatedHeader className='flex items-center justify-center my-auto'>
              <h2 className='text-[48px] sm:text-[64px] lg:text-[128px] text-white capitalize leading-12 sm:leading-16 lg:leading-32'>Building a Circular, Carbon Free Future.</h2>
            </AnimatedHeader>
          </div>
          <Image
            ref={AboutImageRef}
            src={AboutImage}
            alt="About Us"
            layout="fill"
            objectFit="cover"
            className='absolute top-0 left-0 w-full h-full z-0 brightness-60 scale-150 blur-md'
          />
        </CardWrapper>
      </SectionWrapper>
    </div>
  )
}

export default Hero