'use client'
import PrimaryButton from '@/components/utils/buttons/PrimaryButton'
import CardWrapper from '@/wrappers/CardWrapper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const GraforceSolutionCard = ({ icon, title, description, className, onClick }) => {
  const descriptionRef = React.useRef(null);
  const buttonRef = React.useRef(null);
  const hoverIn = () => {
    gsap.to(descriptionRef.current, {
      opacity: 0, y: 20, duration: 0.3, ease: 'power2.out', onStart: () => {
        if (window.innerWidth >= 768) {
          gsap.to(descriptionRef.current, { display: 'none', duration: 0.3 });
          gsap.to(buttonRef.current, { display: 'block', delay: 0.3, duration: 0.3 });
        }
      }
    });
    gsap.to(buttonRef.current, { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' });
  }
  const hoverOut = () => {
    gsap.to(descriptionRef.current, {
      opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', onStart: () => {
        if (window.innerWidth >= 768) {
          gsap.to(buttonRef.current, { display: 'none', duration: 0.3 });
          gsap.to(descriptionRef.current, { display: 'block', delay: 0.3, duration: 0.3 });
        }
      }
    });
    gsap.to(buttonRef.current, { opacity: 0, y: 20, duration: 0.3, ease: 'power2.out' });
  }

  return (
    <div className={`${className} group`} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
      <CardWrapper align='center' className='px-4 py-2 flex flex-row items-center justify-between text-start gap-2 transition-all duration-300 ease-in-out md:min-h-[140px]'>
        <div className='flex flex-row items-center md:justify-between gap-4 w-[60%] md:w-[70%]'>
          <Image src={icon} alt={title} className='w-8 md:w-12 h-8 md:h-12' />
          <div className="flex md:mx-auto text-center">
            <h3 className='text-lg md:text-3xl font-semibold capitalize'>{title}</h3>
          </div>
        </div>
        <div className='flex items-center justify-end w-[40%] md:w-[30%]'>
          <div ref={descriptionRef} className="hidden md:flex md:grop-hover:hidden">
            <p className='text-base text-cst-neutral-5'>{description}</p>
          </div>
          <div ref={buttonRef} className='md:hidden md:grop-hover:block'>
            <PrimaryButton className='group/button flex items-center gap-0 md:gap-2 bg-transparent border border-primary text-primary rounded-xl py-2 md:py-4 px-2 md:px-8 text-sm' onClick={() => {
              if (onClick) {
                const fn = eval(onClick);
                fn();
              }
            }}>
              Learn More
              <IoMdArrowForward className='ml-0 md:ml-2 text-2xl group-hover/button:translate-x-2 transition-transform duration-200' />
            </PrimaryButton>
          </div>
        </div>
      </CardWrapper>
    </div>
  )
}

export default GraforceSolutionCard