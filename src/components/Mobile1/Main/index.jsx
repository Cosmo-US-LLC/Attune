import React from 'react'
import HeroMobile from './HeroMobile'
import AsSeen from './AsSeen'
import YourPath from './YourPath'
import HowIt from './HowIt'
import NoNeed from './NoNeed'
import WhatMakes from './WhatMakes'
import WhyListeners from './WhyListeners'
import MeetFew from './MeetFew'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import AnyQuestions from './AnyQuestions'
import WeBelieve from './WeBelieve'
import OurCore from './OurCore'

function HomeMobile() {
  return (
    <div>
      <HeroMobile />
      <AsSeen />
      <YourPath />
      <HowIt />
      <NoNeed />
      <WhatMakes />
      <WhyListeners />
      <OurCore />
      {/* <MeetFew /> */}
      <WhyChoose />
      <Testimonials />
      <AnyQuestions />
      <WeBelieve />
    </div>
  )
}

export default HomeMobile
