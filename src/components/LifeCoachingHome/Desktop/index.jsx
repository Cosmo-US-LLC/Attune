import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Ticker from "./Ticker";
import HowItWorks from "./HowItWorks";
import RealOutcomes from "./RealOutcomes";
import CoachingQuiz from "./CoachingQuiz";
import WhyChooseCoaching from "./WhyChooseCoaching";
import Pricing from "./Pricing";
import BeginJourney from "./BeginJourney";
import Testimonials from "./Testimonials";
import Guarantee from "./Guarantee";

function LifeCoachingHomeDesktop() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Nav /> */}
      <Hero />
      <Ticker />
      <HowItWorks />
      <RealOutcomes />
      <CoachingQuiz />
      <WhyChooseCoaching />
      <Pricing />
      <BeginJourney />
      <Testimonials />
      <Guarantee />
    </div>
  );
}

export default LifeCoachingHomeDesktop;
