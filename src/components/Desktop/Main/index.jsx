import React from 'react'
import Hero from './Hero'
import AsSeenIn from './AsSeenIn'
import ProudlySupporting from './ProudlySupport'
import PathToSupport from './PathToSupport'
import HowItWorks from './HowItWorks'
import WhyChooseListener from './WhyChooseListener'
import Testimonials from './Testimonials'
import FAQAccordion from './FAQAccordion'
import YouGrowth from './YouGrowth'
import WhatMakesUsDifferent from './WhatMakesUsDifferent'
import MeetTheExperts from './MeetTheExperts'
import NoNeed from './NoNeed'
import WhyListenersMatter from './WhyListenersMatter'
import OurCoreValues from './OurCore'
import Listener from './Listener'

function HomeDesktop() {
  return (
    <div>
      <Hero />
      <ProudlySupporting />
      <PathToSupport />
      <Listener />
      <HowItWorks />
      <NoNeed />
      <WhatMakesUsDifferent />
      <Testimonials />
      <WhyListenersMatter />
      {/* <OurCoreValues /> */}
      <WhyChooseListener />     
      <FAQAccordion />
      <YouGrowth />
    </div>
  )
}

export default HomeDesktop
