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
import { List } from 'lucide-react'
import ListenerMobile from './ListenerMobile'

function HomeMobile() {
  return (
    <div>
      <HeroMobile />
      <AsSeen />
      <YourPath />
      <ListenerMobile/>
      <HowIt />
      <NoNeed />
      <WhatMakes />
      <Testimonials />
      <WhyListeners />
      {/* <OurCore /> */}
      {/* <MeetFew /> */}
      <WhyChoose />
      
      <AnyQuestions />
      <WeBelieve />
    </div>
  )
}

export default HomeMobile
