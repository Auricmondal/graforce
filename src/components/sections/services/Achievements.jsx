import React from 'react'
import YouNeedUs from '../home/hero/YouNeedUs';
import Electrolysis from '@/assets/Electrolysis.png';

const Achievements = () => {
  return (
    <div>
      <YouNeedUs sectionHeader='Our Achievements' sectionSubHeader='Zero Emission Hydrogen' sectionImage={Electrolysis} sectionColorVariant='blue' sectionColor='bg-cst-neutral-4' doubleButton={true} />
    </div>
  )
}

export default Achievements;
