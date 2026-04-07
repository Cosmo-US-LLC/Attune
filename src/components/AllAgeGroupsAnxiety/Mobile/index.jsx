import React from "react";
import HeroMobile from "./HeroMobile";
import AsSeen from "./AsSeen";
import YourPath from "./YourPath";
import HowIt from "./HowIt";
import WhyListeners from "./WhyListeners";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import AnyQuestions from "./AnyQuestions";
import ListenerMobile from "./ListenerMobile";
import Feel from "./Feel";
import Values from "./Values";
import MentalHealthEveryAgeMob from "./MentalHealthEveryAgeMob";
import AnxietyPathSupportMobile from "./AnxietyPathSupportMobile";
import AnxietyBreakingBarriersMobile from "./AnxietyBreakingBarriersMobile";

function AllAgeGroupsAnxietyMobile() {
  return (
    <div>
      <HeroMobile />
      <AsSeen />
      <AnxietyPathSupportMobile />
      <AnxietyBreakingBarriersMobile />
      <ListenerMobile />
      {/* <MentalHealthEveryAgeMob /> */}

      <WhyListeners />
      <HowIt />
      <Testimonials />
      <Feel />
      <WhyChoose />
      <Values />
      <AnyQuestions />
    </div>
  );
}

export default AllAgeGroupsAnxietyMobile;
