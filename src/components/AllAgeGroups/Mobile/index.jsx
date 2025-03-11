import React from 'react'
import HeroMobile from './HeroMobile'
import AsSeen from './AsSeen'
import YourPath from './YourPath'
import HowIt from './HowIt'
import WhyListeners from './WhyListeners'
import WhyChoose from './WhyChoose'
import Testimonials from './Testimonials'
import AnyQuestions from './AnyQuestions'
import ListenerMobile from './ListenerMobile'
import Feel from './Feel'
import Values from './Values'
import MentalHealthEveryAgeMob from './MentalHealthEveryAgeMob'
 
 

function AllAgeGroupsMobile() {
  return (
    <div>
      <HeroMobile />
      <AsSeen />
      {/* <AsSeenMob1 /> */}
      <YourPath />
      <ListenerMobile/>
      <MentalHealthEveryAgeMob/>
      <Testimonials />
      <WhyListeners />
      <HowIt />
      <Feel/>
      <WhyChoose />
      <Values/>
      <AnyQuestions />
    
    </div>
  )
}

export default AllAgeGroupsMobile
