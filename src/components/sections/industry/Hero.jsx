import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import HeroImage from '@/assets/industry/IndustryHeroImage.jpg'
import React ,{useState,useEffect}from 'react'
import Image from 'next/image'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'

import client from '@/lib/sanityClient'
import { industryHeroQuery } from '@/Queries/industries/industryhero'

const Hero = () => {
  const [data, setData] = useState({
    title: "Hydrogen for Every Sector",
    subtitle:
      "From energy systems to heavy industry, Graforce solutions cut emissions and lower costs — powering a net-zero future.",
    backgroundImageUrl: HeroImage,
  });

  useEffect(() => {
  const fetchHero = async () => {
    try {
      const res = await client.fetch(industryHeroQuery);
      const section = res?.heroSection;

      if (section) {
        setData({
          title: section.title || data.title,
          subtitle: section.subtitle || data.subtitle,
          backgroundImageUrl: section.backgroundImageUrl || data.backgroundImageUrl,
        });
      }
    } catch (err) {
      console.error("❌ Failed to fetch industry hero data:", err);
    }
  };

  fetchHero(); 
}, []);

  return (
    <SectionWrapper
      sectionClassName="bg-cst-neutral-1 h-screen"
      className='h-full'
    >
      <CardWrapper className='relative h-full flex items-center justify-center overflow-hidden'>
        <div className="relative z-1 text-center mx-auto md:w-2/3 md:px-8">
        <AnimatedHeader>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-white mb-4">{data.title}</h2>
        </AnimatedHeader>
        <AnimatedHeader>
          <p className="text-base md:text-xl lg:text-2xl text-white md:px-8">
            {data.subtitle}
          </p>
        </AnimatedHeader>
        </div>
        <Image src={data.backgroundImageUrl} alt="Industry Hero" fill className="absolute inset-0 object-cover brightness-50 w-full h-full" />
      </CardWrapper>
    </SectionWrapper>
  )
}

export default Hero