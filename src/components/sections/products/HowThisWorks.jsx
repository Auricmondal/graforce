import React from 'react'
import YouNeedUs from '../home/hero/YouNeedUs'
import shapeDiamond1 from '@/assets/service/shapeDiamond2.png';

const HowThisWorks = () => {
  return (
    <div>
      <YouNeedUs sectionHeader={`How This Works`} sectionSubHeader='Process Flow' sectionColorVariant='dark' sectionImage={shapeDiamond1} />
    </div>
  )
}

export default HowThisWorks