'use client'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'

const Stats = () => {
  const statsData = [
    {
      value: '120,000+',
      prefix: '',
      description: 'CO₂ avoided annually through hydrogen-based fuel and process innovations.',
      suffix: 'tons',
    },
    {
      value: '35%',
      prefix: '',
      description: 'Higher energy efficiency compared to conventional hydrogen production methods.',
      suffix: '',
    },
    {
      value: '70%',
      prefix: 'Up to',
      description: 'CO₂ avoided annually through hydrogen-based fuel and process innovations.',
      suffix: 'tons',
    }
  ];
  return (
    <div>
      <SectionWrapper sectionClassName='bg-cst-neutral-1'>
        <CardWrapper variant='standard' className='flex justify-center items-center md:h-fit' color='default' align='center'>
          <div className="grid grid-cols-1 min-[910px]:grid-cols-3 gap-4 justify-evenly w-full">
            {statsData.map((stat, index) => (
              <div id={`stat-${index}`} key={index} className="flex flex-col gap-2 items-center border-2 border-primary bg-white p-6 rounded-full aspect-square mx-auto justify-center w-full sm:w-1/2 md:w-auto scale-80">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-end text-sm text-cst-neutral-5">
                    <div className="mb-1">
                      {stat.prefix}
                    </div>
                    <h3 className="text-5xl md:text-6xl flex items-end">{stat.value}</h3>
                  </div>
                  <p className="text-sm text-cst-neutral-5">{stat.suffix}</p>
                </div>
                <p className="text-sm text-cst-neutral-5">{stat.description}</p>
              </div>
            ))}
          </div>
        </CardWrapper>
      </SectionWrapper>
      <style jsx>
        {`
          #stat-0 {
            border-bottom: var(--white) 1px solid;
          }
          #stat-1 {
            border-bottom: var(--white) 1px solid;
          }
          #stat-2 {
            border-bottom: var(--white) 1px solid;
          }
        `}
      </style>
    </div>
  )
}

export default Stats