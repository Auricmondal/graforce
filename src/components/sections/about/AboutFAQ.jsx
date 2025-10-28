'use client'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React, { useEffect, useState } from 'react'
import FAQItem from '@/components/shared/faq/FAQItem'
import AboutJobCard from './AboutJobCard'
import client from '@/lib/sanityClient'
import { aboutFAQQuery } from '@/Queries/about/aboutFAQ'

const AboutFAQ = () => {
  const [faqData, setFaqData] = useState({
    header: "Real impact needs real people. That’s where you come in.",
    subHeader: "We’re not looking for passengers — we’re looking for builders. People who see the world not as it is, but as it could be. At Grafoce, every design, every calculation, and every idea pushes the planet closer to a cleaner, more resilient future. If that excites you, you’re already one of us.",
    buttonContent: "Explore Job Openings",
    faqItems: [
      { question: "How do I apply for a job at Grafoce?", answer: "To apply for a job at Grafoce, visit our careers page and submit your application online." },
      { question: "What is the interview process like?", answer: "Our interview process typically involves a phone screening, a technical interview, and a final interview with the team." },
      { question: "Do you offer remote work options?", answer: "Yes, we offer remote work options for many positions. Please check the job listing for more details." },
      { question: "What benefits does Grafoce provide to its employees?", answer: "We offer a comprehensive benefits package including health insurance, retirement plans, paid time off, and professional development opportunities." },
    ]
  })

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const res = await client.fetch(aboutFAQQuery, {}, { cache: 'no-store' }) // ensures fresh data
        const data = res?.faqSection
        if (data) {
          setFaqData({
            header: data.header || faqData.header,
            subHeader: data.subHeader || faqData.subHeader,
            buttonContent: data.buttonContent || faqData.buttonContent,
            faqItems: Array.isArray(data.faqItems) && data.faqItems.length > 0 ? data.faqItems : faqData.faqItems
          })
        }
      } catch (err) {
        console.error("Failed to fetch FAQ section:", err)
      }
    }
    fetchFAQ()
  }, [])

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1' className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
      <AboutJobCard 
        className={`gap-6 w-full`} 
        header={faqData.header} 
        subHeader={faqData.subHeader} 
        buttonContent={faqData.buttonContent} 
      />
      <CardWrapper className='justify-evenly w-full gap-2' color='transparent' variant='custom'>
        {faqData.faqItems.map((faq, index) => (
          <FAQItem question={faq.question} answer={faq.answer} key={index} className='w-full' />
        ))}
      </CardWrapper>
    </SectionWrapper>
  )
}

export default AboutFAQ
