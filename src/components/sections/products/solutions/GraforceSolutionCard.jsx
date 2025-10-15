'use client'
import PrimaryButton from '@/components/utils/buttons/PrimaryButton'
import CardWrapper from '@/wrappers/CardWrapper'
import gsap from 'gsap'
import Image from 'next/image'
import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'

const GraforceSolutionCard = ({ icon, title, description, className, onClick }) => {
  return (
    <div className={`${className} group`}>
      <CardWrapper align='center' className='px-4 py-2 flex flex-row items-center justify-between text-start gap-2 transition-all duration-300 ease-in-out'>
        <div className='flex flex-row items-center md:justify-between gap-4 w-[60%] md:w-[70%]'>
          <Image src={icon} alt={title} width={48} height={48} className='w-12 h-12' />
          <div className="flex md:mx-auto text-center">
            <h3 className='text-2xl md:text-3xl font-semibold'>{title}</h3>
          </div>
        </div>
        <div className='flex items-center justify-end w-[40%] md:w-[30%]'>
          <div className="hidden md:flex md:group-hover:hidden">
            <p className='text-base text-cst-neutral-5'>{description}</p>
          </div>
          <div className='md:hidden md:group-hover:block'>
            <PrimaryButton className='group/button flex items-center gap-2 bg-transparent border border-primary text-primary rounded-xl py-4 px-4 md:px-8' onClick={() => {
              if (onClick) {
                const fn = eval(onClick);
                fn();
              }
            }}>
              Learn More
              <IoMdArrowForward className='ml-2 text-2xl group-hover/button:translate-x-2 transition-transform duration-200' />
            </PrimaryButton>
          </div>
        </div>
      </CardWrapper>
    </div>
  )
}

export default GraforceSolutionCard