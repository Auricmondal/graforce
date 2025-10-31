import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import FounderImage from "@/assets/about/FounderImage.png"
import { TfiLinkedin } from 'react-icons/tfi'
import React from 'react'
import StampImages from '@/components/utils/stampImages/StampImages'
import Link from 'next/link'

const OurFounder = () => {
  const data = {
    header: "The Minds Powering a Hydrogen Revolution",
    linkedInUrl: "https://www.linkedin.com/in/dr-jens-hanke-123b6212/",
    subHeader: ["Grafoce was founded by Dr. Jens Hanke, a visionary scientist and entrepreneur driven by the belief that technology can reverse climate change. Under his leadership, we’ve built a team of physicists, engineers, and designers united by one goal — to make clean hydrogen accessible and scalable for every industry.", "Our interdisciplinary team blends expertise in plasma physics, electrical engineering, and process design, pushing the boundaries of what’s possible in sustainable energy innovation. Together, we turn bold ideas into real, world-changing technologies."],
  };

  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1 overflow-hidden '>
        <CardWrapper variant='custom' color='dark' className='overflow-hidden'>
          <div className="flex flex-col min-[910px]:flex-row gap-0 min-[910px]:gap-0 w-full">
            <div className="flex flex-col w-full min-[910px]:w-[60%] lg:w-[65%] py-20 px-6 text-white gap-16">
              <div className="flex flex-col gap-4">
                <SectionLabel text={'Our Founder'} invertIcon={true} textColor='text-white' />
                <AnimatedHeader>
                  <h2 className={`text-xl sm:text-2xl min-[910px]:text-3xl capitalize`}>
                    {data.header}
                  </h2>
                </AnimatedHeader>
              </div>
              <div className="flex flex-col justify-start mt-6">
                <Link href={data.linkedInUrl} target='_blank' rel='noopener noreferrer' className='mb-4'>
                  <TfiLinkedin size={36} className='text-white hover:text-primary transition-colors duration-300 ease-in-out cursor-pointer border p-2 rounded-lg border-white hover:border-primary' />
                </Link>
                <div className="flex flex-col min-[910px]:flex-row my-2 gap-4 w-full">
                  {data.subHeader.map((paragraph, index) => (
                    <p key={index} className={`w-full min-[910px]:w-1/2`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <StampImages
              className='min-[910px]:w-[40%] lg:w-[35%]'
              Image={FounderImage}
            />
          </div>
        </CardWrapper>
      </SectionWrapper>
    </div >
  )
}

export default OurFounder