import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import FounderImage from "@/assets/about/FounderImage.png"
import { TfiLinkedin } from 'react-icons/tfi'
import Image from 'next/image'
import React from 'react'

const OurFounder = () => {
  const founderDetails = {
    name: "Dr. Jens Hanke",
    title: "Founder and Chief Technology Officer",
  };
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1 overflow-hidden '>
        <CardWrapper variant='custom' color='dark' className='overflow-hidden'>
          <div className="flex flex-col min-[910px]:flex-row gap-8 min-[910px]:gap-0 w-full">
            <div className="flex flex-col w-full min-[910px]:w-[60%] lg:w-[65%] py-10 px-6 text-white gap-16">
              <div className="flex flex-col gap-4">
                <SectionLabel text={'Our Founder'} invertIcon={true} textColor='text-white' />
                <AnimatedHeader>
                  <h2 className={`text-xl sm:text-2xl min-[910px]:text-3xl capitalize`}>
                    The Minds Powering a Hydrogen Revolution
                  </h2>
                </AnimatedHeader>
              </div>
              <div className="flex flex-col justify-start mt-6">
                <TfiLinkedin size={36} className='text-white hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer border p-2 rounded-lg border-white hover:border-primary' />
                <div className="flex flex-col min-[910px]:flex-row my-2 gap-4 w-full">
                  <p className={`w-full min-[910px]:w-1/2`}>
                    Graforce was founded by Dr. Jens Hanke, a visionary scientist and entrepreneur driven by the belief that technology can reverse climate change. Under his leadership, we’ve built a team of physicists, engineers, and designers united by one goal — to make clean hydrogen accessible and scalable for every industry.
                  </p>
                  <p className={`w-full min-[910px]:w-1/2`}>
                    Our interdisciplinary team blends expertise in plasma physics, electrical engineering, and process design, pushing the boundaries of what’s possible in sustainable energy innovation. Together, we turn bold ideas into real, world-changing technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex w-full min-[910px]:w-[40%] lg:w-[35%]">
              <Image
                src={FounderImage}
                alt="Our Founder"
                layout="responsive"
                width={500}
                height={500}
                objectFit="contain"
                className='translat-y-10 min-[910px]:-translate-y-10 min-[910px]:translate-x-10 scale-110 min-[910px]:scale-100'
              />
              <div className="absolute bottom-2 left-2 min-[910px]:bottom-12 min-[910px]:left-12">
                <div className="bg-white/28 p-2 rounded-lg backdrop-blur-xs">
                  <div className="bg-white/50 backdrop-blur-xs px-4 py-2 rounded-lg">
                    <AnimatedHeader>
                      <h3 className="text-3xl font-semibold text-black">{founderDetails.name}</h3>
                      <p className="text-sm text-cst-neutral-4">{founderDetails.title}</p>
                    </AnimatedHeader>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardWrapper>
      </SectionWrapper>
    </div>
  )
}

export default OurFounder