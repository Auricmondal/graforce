'use client'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Image from 'next/image'
import shapeDiamond from '@/assets/service/shapeDiamond.png'
import React from 'react'
import ServicesOption from './ServicesOption'
import { useRouter } from 'next/navigation'

const OtherServices = () => {
  const router = useRouter();
  const servicesOptions = [
    { index: 1, title: "Wastewater Plasmalyzer®", onClick: () => router.push('/services/wastewater-plasmalyzer') },
    { index: 2, title: "Plasma Ammonia Cracker", onClick: () => router.push('/services/plasma-ammonia-cracker') },
    { index: 3, title: "Used components and equipment", onClick: () => router.push('/services/used-components') },
    { index: 4, title: "H2/natural gas refuelling", onClick: () => router.push('/services/h2-natural-gas-refuelling') },
    { index: 5, title: "Synthetic carbon", onClick: () => router.push('/services/synthetic-carbon') },
    { index: 6, title: "Properties and Qualities of Our synthetic Carbon", onClick: () => router.push('/services/properties-and-qualities-of-our-synthetic-carbon') },
    { index: 7, title: "Syngas Production", onClick: () => router.push('/services/syngas-production') },
  ];
  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1'>
      <CardWrapper className='relative pt-2 md:pt-8 min-h-screen overflow-hidden' variant='standard' color='dark' align='left'>
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 opacity-30 translate-x-[50%] lg:translate-x-0">
          <Image src={shapeDiamond} alt="Shape" className="object-fit h-full w-full" />
        </div>
        <div className="relative flex flex-row justify-center items-center my-auto h-full w-full">
          <div className='relative z-10 flex flex-col h-full w-full items-start justify-center gap-8 pr-4 md:pr-0'>
            <SectionLabel text='explore our services' textColor='text-white' />
            <div className="flex flex-col gap-4">
              {servicesOptions.map((option) => (
                <ServicesOption key={option.index} {...option} />
              ))}
            </div>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  )
}

export default OtherServices