import Image from 'next/image'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const TeamCard = ({ name, position, department, description, linkedin, imagePath, className }) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <Image src={imagePath} alt={name} className='w-full aspect-2/1 object-cover rounded-lg' />
      <div className="flex flex-col gap-4 pt-6">
        <div className="flex flex-col gap-0">
          <h3 className='text-[40px]'>{name}</h3>
          <p className='text-base text-cst-neutral-2'>{position}, {department}</p>
        </div>
        <div className="">
          <p className='text-base'>{description}</p>
        </div>
        <div className="">
          <a href={linkedin} className='text-cst-neutral-4'>
            <button className={`group flex gap-2 text-sm md:text-base items-center py-2 md:py-2 px-4 md:px-6 border border-cst-neutral-4 cursor-pointer rounded-2xl hover:bg-cst-neutral-5 hover:text-cst-neutral-1 transition-all duration-300 ease-in-out`}
            >
              LinkedIn
              <IoIosArrowForward className='text-xl md:group-hover:translate-x-2 ease-in-out duration-300 transition-all' />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeamCard