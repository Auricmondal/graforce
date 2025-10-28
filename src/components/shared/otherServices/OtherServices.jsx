'use client'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import ServicesOption from './ServicesOption'
import { useRouter } from 'next/navigation'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import client from '@/lib/sanityClient'
import { otherServicesQuery } from '@/Queries/services/otherservices'

// Default fallback images
import shapeDiamond1 from '@/assets/service/shapeDiamond.png'
import shapeDiamond2 from '@/assets/service/shapeDiamond2.png'
import shapeDiamond3 from '@/assets/service/shapeDiamond3.png'

const fallbackServices = [
  {
    index: 0,
    title: 'Hydrogen production',
    image: shapeDiamond1,
    slug: 'hydrogen-production',
  },
  {
    index: 1,
    title: 'Water purification',
    image: shapeDiamond2,
    slug: 'water-purification',
  },
  {
    index: 2,
    title: 'Co2 free energy generation',
    image: shapeDiamond3,
    slug: 'co2-free-energy-generation',
  },
]

const OtherServices = () => {
  const router = useRouter()
  const serviceImageRef = React.useRef()
  const [serviceImage, setServiceImage] = useState(fallbackServices[0].image)
  const [sectionLabel, setSectionLabel] = useState('Explore our services')
  const [servicesOptions, setServicesOptions] = useState(fallbackServices)

  // Fetch services from Sanity
  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await client.fetch(otherServicesQuery)
        const data = res?.otherServicesSection

        setSectionLabel(data?.sectionLabel || 'Explore our services')

        if (data?.services?.length > 0) {
          const options = data.services.map((s, idx) => ({
            index: idx,
            title: s.title || fallbackServices[idx]?.title || `Service ${idx + 1}`,
            image: s.image?.asset?.url || fallbackServices[idx]?.image || fallbackServices[0].image,
            onClick: () => router.push(s.slug ? `/services/${s.slug}` : '#'),
          }))
          setServicesOptions(options)
          setServiceImage(options[0].image)
        }
      } catch (error) {
        console.error('Error fetching services:', error)
        // fallback already set
      }
    }
    fetchServices()
  }, [router])

  // GSAP animation for image
  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (serviceImageRef.current) {
        gsap.fromTo(
          serviceImageRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 }
        )
      }
    })
    return () => ctx.revert()
  }, [serviceImage])

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1'>
      <CardWrapper className='relative pt-2 md:pt-8 min-h-screen overflow-hidden' variant='standard' color='dark' align='left'>
        <div ref={serviceImageRef} className="absolute top-0 right-0 h-full w-full lg:w-1/2 opacity-30 translate-x-[50%] lg:translate-x-0">
          {serviceImage ? (
            <Image src={serviceImage} alt="Shape" className="object-fit h-full w-full" fill />
          ) : (
            <div className="h-full w-full bg-gray-200" />
          )}
        </div>

        <div className="relative flex flex-row justify-center items-center my-auto h-full w-full">
          <div className='relative z-10 flex flex-col h-full w-full items-start justify-center gap-8 pr-4 md:pr-0'>
            <SectionLabel text={sectionLabel} textColor='text-white' />
            <div className="flex flex-col gap-4">
              {servicesOptions.length > 0 ? (
                servicesOptions.map((option) => (
                  <ServicesOption
                    key={option.index}
                    onHover={() => setServiceImage(option.image)}
                    onClick={option.onClick}
                    {...option}
                  />
                ))
              ) : (
                <p className="text-white">No services available.</p>
              )}
            </div>
          </div>
        </div>
      </CardWrapper>
    </SectionWrapper>
  );
};

export default OtherServices
