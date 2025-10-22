import AboutFAQ from '@/components/sections/about/AboutFAQ'
import ExploreInvestment from '@/components/sections/about/ExploreInvestment'
import Hero from '@/components/sections/about/Hero'
import ImpactOpportunity from '@/components/sections/about/ImpactOpportunity'
import OurFounder from '@/components/sections/about/OurFounder'
import OurTeam from '@/components/sections/about/OurTeam'
import OurWholeTeam from '@/components/sections/about/OurWholeTeam'
import Stats from '@/components/sections/about/Stats'
import TeamDrawer from '@/components/sections/about/TeamDrawer'
import FinalCTA from '@/components/shared/finalCta/FinalCTA'
import React from 'react'

const About = () => {
  return (
    <div className="">
      {/* <TeamDrawer /> */}
      <Hero />
      <ImpactOpportunity />
      <Stats />
      <OurFounder />
      <OurTeam />
      <OurWholeTeam />
      <AboutFAQ />
      <ExploreInvestment />
      <FinalCTA />
    </div>
  )
}

export default About