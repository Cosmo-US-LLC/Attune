import React from "react";
import NavMobile from "./NavMobile";
import HeroMobile from "./HeroMobile";
import TickerMobile from "./TickerMobile";
import HowItWorksMobile from "./HowItWorksMobile";
import RealOutcomesMobile from "./RealOutcomesMobile";
import CoachingQuizMobile from "./CoachingQuizMobile";
import WhyChooseCoachingMobile from "./WhyChooseCoachingMobile";
import PricingMobile from "./PricingMobile";
import BeginJourneyMobile from "./BeginJourneyMobile";
import TestimonialsMobile from "./TestimonialsMobile";
import GuaranteeMobile from "./GuaranteeMobile";

function LifeCoachingHomeMobile() {
  return (
    <div>
      {/* Nav handled by global NavbarMobile */}
      <HeroMobile />
      <TickerMobile />
      <HowItWorksMobile />
      <RealOutcomesMobile />
      <CoachingQuizMobile />
      <WhyChooseCoachingMobile />
      <PricingMobile />
      <BeginJourneyMobile />
      <TestimonialsMobile />
      <GuaranteeMobile />
    </div>
  );
}

export default LifeCoachingHomeMobile;
