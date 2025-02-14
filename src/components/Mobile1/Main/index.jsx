import React from 'react'
import HeroMobile from './HeroMobile'
import AsSeenMob1 from './AsSeen'
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
import BreakingBarriersMobile from './BreakingBarriersMobile'

function HomeMobile() {
  return (
    <div>
      <HeroMobile />
      <AsSeenMob1 />
      <YourPath />
      <BreakingBarriersMobile/>
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
