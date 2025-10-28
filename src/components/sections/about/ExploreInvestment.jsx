'use client';
import CardWrapper from '@/wrappers/CardWrapper';
import SectionWrapper from '@/wrappers/SectionWrapper';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AboutJobCard from './AboutJobCard';
import client from '@/lib/sanityClient';
import { exploreInvestmentQuery } from '@/Queries/about/exploreinvestments';
import InvestmentImageFallback from "@/assets/about/InvestmentImage.jpg";

const ExploreInvestment = () => {
  const [data, setData] = useState({
    header: "We’re building the bridge between ambition and action.",
    subHeader: "Every breakthrough at Grafoce turns possibility into progress. We’re building scalable clean-energy systems that deliver real impact and long term returns. A future that rewards both the planet and the people who invest in it.",
    buttonContent: "Explore Investment Options",
    imageUrl: InvestmentImageFallback.src,
    imageAlt: "investment"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(exploreInvestmentQuery, {}, { cache: 'no-store' });
        if (res) {
          setData({
            header: res.header || data.header,
            subHeader: res.subHeader || data.subHeader,
            buttonContent: res.buttonContent || data.buttonContent,
            imageUrl: res.imageUrl || InvestmentImageFallback.src,
            imageAlt: res.imageAlt || "investment"
          });
        }
      } catch (err) {
        console.error("Failed to fetch Explore Investment section:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1' className='flex flex-col min-[870px]:flex-row-reverse gap-2 '>
      <AboutJobCard 
        className={`gap-6 w-full min-[870px]:w-1/2`} 
        header={data.header} 
        subHeader={data.subHeader} 
        buttonContent={data.buttonContent} 
      />
      <CardWrapper className='relative justify-evenly gap-2 overflow-hidden w-full min-[870px]:w-1/2' color='transparent' variant='custom'>
        <Image 
          src={data.imageUrl} 
          alt={data.imageAlt} 
          fill
          className='min-[870px]:absolute w-full inset-0 object-cover aspect-3/4 min-[870px]:aspect-auto' 
        />
      </CardWrapper>
    </SectionWrapper>
  );
}

export default ExploreInvestment;
