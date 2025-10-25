import Hero from '@/components/sections/industry/Hero'
import ImportantDetails from '@/components/sections/products/ImportantDetails'
import DiamondShap from '@/assets/service/shapeDiamond.png'
import React from 'react'
import Contribution from '@/components/sections/industry/Contribution'
import FAQSection from '@/components/shared/faq/FAQ'
import News from '@/components/shared/news/News'
import FinalCTA from '@/components/shared/finalCta/FinalCTA'

const IndustryPage = () => {
  return (
    <div>
      <Hero />
      <ImportantDetails sectionLabel='Industries We Serve' sectionHeader='Explore Solutions that Fits Your Needs' />
      <Contribution sectionHeader='The Impact Opportunity' sectionSubHeader={`Graforce's technology aligns with global energy and climate goals.`} sectionImage={DiamondShap} />
      <FAQSection />
      <News />
      <FinalCTA />
    </div>
  )
}

export default IndustryPage