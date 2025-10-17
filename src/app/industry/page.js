import YouNeedUs from '@/components/sections/home/hero/YouNeedUs'
import Hero from '@/components/sections/industry/Hero'
import ImportantDetails from '@/components/sections/products/ImportantDetails'
import DiamondShap from '@/assets/service/shapeDiamond.png'
import React from 'react'

const IndustryPage = () => {
  return (
    <div>
      <Hero />
      <ImportantDetails sectionLabel='Industries We Serve' sectionHeader='Explore Solutions that Fits Your Needs' />
      <YouNeedUs sectionColorVariant='custom' fullWidthHeader={false} sectionColor='bg-gradient-to-tl from-[#5527D8] to-[#2D1572]' sectionImage={DiamondShap} />
    </div>
  )
}

export default IndustryPage