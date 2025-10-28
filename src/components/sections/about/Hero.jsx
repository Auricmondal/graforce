'use client'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import AboutImageFallback from "@/assets/about/aboutus.jpg"
import client from '@/lib/sanityClient'
import { aboutHeroQuery } from '@/Queries/about/abouthero'

const Hero = () => {
  const AboutImageRef = useRef(null)
  const tl = gsap.timeline()

  const [heroData, setHeroData] = useState({
    header: "Building a Circular, Carbon Free Future.",
    subHeader: "",
    imageUrl: AboutImageFallback.src,
    alt: "About Us",
  })

  // Fetch data from Sanity
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await client.fetch(aboutHeroQuery)
        const hero = res?.hero
        if (hero) {
          setHeroData({
            header: hero.header || heroData.header,
            subHeader: hero.subHeader || "",
            imageUrl: hero.imageUrl || AboutImageFallback.src,
            alt: hero.alt || "About Us",
          })
        }
      } catch (err) {
        console.error("Failed to fetch hero section:", err)
      }
    }
    fetchHero()
  }, [])

  // GSAP animation
  useGSAP(() => {
    tl.to(AboutImageRef.current, {
      scale: 1,
      filter: "blur(0px) brightness(60%)",
      duration: 1,
      ease: "power3.out",
    })
  }, [])

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1 w-full h-screen' className='flex items-center justify-center h-full'>
      <CardWrapper variant='custom' className='relative flex items-center justify-center w-full overflow-hidden h-full'>
        <div className="relative flex items-center justify-center z-2 w-5/6 text-center mx-auto">
          <AnimatedHeader className='flex items-center justify-center my-auto'>
            <h2 className='text-[48px] sm:text-[64px] lg:text-[128px] text-white capitalize leading-12 sm:leading-16 lg:leading-32'>
              {heroData.header}
            </h2>
            {heroData.subHeader && (
              <p className="text-white mt-4 text-base sm:text-lg lg:text-xl">{heroData.subHeader}</p>
            )}
          </AnimatedHeader>
        </div>

        <Image
          ref={AboutImageRef}
          src={heroData.imageUrl}
          alt={heroData.alt}
          fill
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-60 scale-150 blur-md"
        />
      </CardWrapper>
    </SectionWrapper>
  )
}

export default Hero
