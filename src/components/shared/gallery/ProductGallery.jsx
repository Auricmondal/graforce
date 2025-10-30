import SectionLabel from '@/components/utils/badges/SectionLabel'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'
import GalleryScroller from './GallerScroller'

const ProductGallery = () => {
  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1'>
      <CardWrapper
        color={`default`}
        variant='custom'
        align='left'
        className='px-4 py-12 flex flex-col items-center gap-4'
      >
        <div className="w-full">
          <SectionLabel className={`capitalize`} text={`Product Gallery`}/>
        </div>
        <div className="flex flex-col w-full gap-4">
          <GalleryScroller direction='left' />
          <GalleryScroller direction='right' />
        </div>
      </CardWrapper>
    </SectionWrapper>
  )
}

export default ProductGallery