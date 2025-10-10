import React from 'react'
import YouNeedUs from '../home/hero/YouNeedUs';
import Electrolysis from '@/assets/electrolysis.png';

const Achievements = () => {
  return (
    <div>
      <YouNeedUs sectionHeader='Our Achievements' sectionSubHeader='Zero Emission Hydrogen' sectionImage={Electrolysis} sectionColor='blue' doubleButton={true} />
    </div>
  )
}

export default Achievements;
