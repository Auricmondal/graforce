'use client'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React, { useRef, useEffect, useState } from 'react'
import client from '@/lib/sanityClient'
import { impactOpportunityQuery } from '@/Queries/about/impactopportunity'

const defaultData = {
  sectionLabel: "Impact & Opportunity",
  header: "Engineering the Shift to a Zero Emission World",
  paragraphs: [
    "The transition to a zero-emission world presents both challenges and opportunities for innovation and growth.",
    "By developing cutting-edge green hydrogen solutions, we aim to empower industries to reduce their carbon footprint, enhance energy efficiency, and contribute to a sustainable future."
  ],
  videoUrl: "https://cdn.sanity.io/files/sib3yr4f/production/f125f737cd7466d06b29fb7d319aa9620c55a7f9.webm"
}

const ImpactOpportunity = () => {
  const videoRef = useRef(null)
  const [data, setData] = useState(defaultData)

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(impactOpportunityQuery, {}, { cache: 'no-store' })
        const section = res?.impactOpportunity
        if (section) {
          setData({
            sectionLabel: section.sectionLabel || defaultData.sectionLabel,
            header: section.header || defaultData.header,
            paragraphs: section.paragraphs?.length > 0 ? section.paragraphs : defaultData.paragraphs,
            videoUrl: section.videoUrl || defaultData.videoUrl
          })
        }
      } catch (err) {
        console.error("Failed to fetch Impact & Opportunity section:", err)
      }
    }
    fetchData()
  }, [])

  // Auto-play when in viewport
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
            <SectionLabel text={data.sectionLabel} invertIcon textColor='text-white' />
            <AnimatedHeader>
              <h2 className='text-xl sm:text-3xl md:text-4xl capitalize text-white drop-shadow-md'>
                {data.header}
              </h2>
            </AnimatedHeader>
          </div>

          <div className='z-10 mt-16 sm:mt-0 flex flex-col gap-6'>
            {data.paragraphs.map((para, index) => (
              <p key={index} className='text-base md:text-xl text-white'>
                {para}
              </p>
            ))}
          </div>
        </div>

        <video
          ref={videoRef}
          src={data.videoUrl}
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
