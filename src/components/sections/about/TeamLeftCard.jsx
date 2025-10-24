'use client'
import AnimatedHeader from '@/components/utils/animations/AnimatedHeader'
import SectionLabel from '@/components/utils/badges/SectionLabel'
import ExploreButton from '@/components/utils/buttons/ExploreButton'
import CardWrapper from '@/wrappers/CardWrapper'
import React, { useState } from 'react'
import TeamDrawer from './TeamDrawer'
import { useScrollLock, useScrollPrevention } from '@/hooks/useScrollLock'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TeamLeftCard = ({ className }) => {
  const drawerRef = React.useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  useScrollLock(isDrawerOpen);
  useScrollPrevention(drawerRef);

  const openDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  useGSAP(() => {
    const drawer = drawerRef.current;
    const tl = gsap.timeline();
    if (isDrawerOpen) {
      tl.to(drawer, { y: 0, duration: 1, ease: "power2.out" });
    } else {
      tl.to(drawer, { y: "200vh", duration: 1, ease: "power2.in" });
    }
  }, [isDrawerOpen]);

  return (
    <CardWrapper variant='custom' color='transparent' className={`${className} flex flex-col h-full justify-center gap-6`}>
      <SectionLabel text='Our Team' className='mb-4' />
      <AnimatedHeader>
        <h3 className='text-3xl'>Driven by Purpose. Defined by Clarity.</h3>
      </AnimatedHeader>
      <p>Our interdisciplinary and highly specialized team of physicists, engineers and designers makes us the technology leader for sustainable and economical energy solutions for use in hydrogen production. Our interdisciplinary knowledge, commitment and experience from the fields of plasma physics, electrical engineering, mechanical engineering and process engineering guarantee quality, know-how and safety at the highest level.</p>
      <ExploreButton buttonContent='Meet the Team' icon={false} isShowContentButton={false} onClick={openDrawer} />
      <TeamDrawer ref={drawerRef} className={`translate-y-[200vh]`} setIsDrawerOpen={setIsDrawerOpen} />
    </CardWrapper>
  )
}

export default TeamLeftCard