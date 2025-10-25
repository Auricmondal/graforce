'use client'
import CardWrapper from '@/wrappers/CardWrapper'
import SectionWrapper from '@/wrappers/SectionWrapper'
import React from 'react'
import FAQItem from '@/components/shared/faq/FAQItem'
import AboutJobCard from './AboutJobCard'

const templateData = {
  header: "Real impact needs real people. That’s where you come in.",
  subHeader: "We’re not looking for passengers — we’re looking for builders. People who see the world not as it is, but as it could be. At Grafoce, every design, every calculation, and every idea pushes the planet closer to a cleaner, more resilient future. If that excites you, you’re already one of us.",
  buttonContent: "Explore Job Openings"
};

const AboutFAQ = ({ 
  header = templateData.header, 
  subHeader = templateData.subHeader, 
  buttonContent = templateData.buttonContent 
}) => {
  const faqData = [
    {
      question: "How do I apply for a job at Grafoce?",
      answer: "To apply for a job at Grafoce, visit our careers page and submit your application online."
    },
    {
      question: "What is the interview process like?",
      answer: "Our interview process typically involves a phone screening, a technical interview, and a final interview with the team."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes, we offer remote work options for many positions. Please check the job listing for more details."
    },
    {
      question: "What benefits does Grafoce provide to its employees?",
      answer: "We offer a comprehensive benefits package including health insurance, retirement plans, paid time off, and professional development opportunities."
    },
  ];

  return (
    <SectionWrapper sectionClassName='bg-cst-neutral-1' className='grid grid-cols-1 md:grid-cols-2 gap-2 '>
      <AboutJobCard className={`gap-6 w-full`} header={header} subHeader={subHeader} buttonContent={buttonContent} />
      <CardWrapper className='justify-evenly w-full gap-2' color='transparent' variant='custom'>
        {faqData.map((faq, index) => (
            <FAQItem question={faq.question} answer={faq.answer} key={index} className='w-full' />
        ))}
      </CardWrapper>
    </SectionWrapper>
  )
}

export default AboutFAQ