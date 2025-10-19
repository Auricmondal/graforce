import AboutUs from '@/components/sections/jobs/AboutUs'
import Hero from '@/components/sections/jobs/Hero'
import SecondaryCTA from '@/components/shared/finalCta/SecondaryCTA'
import React from 'react'

const JobsPage = () => {
  return (
    <div>
        <Hero />
        <AboutUs/>
        <SecondaryCTA />
    </div>
  )
}

export default JobsPage