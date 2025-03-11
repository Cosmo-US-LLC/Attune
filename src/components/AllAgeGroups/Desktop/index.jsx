import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import WhyChooseListener from "./WhyChooseListener";
import MakeAnImpactCarousel from "./MakeAnImpact";
import FAQAccordion from "./FAQAccordion";
import WhyListenersMatter from "./WhyListenersMatter";
import CoreValues from "./CoreValues";
import FeelHeard from "./FeelHeard";

import UnspokenChallengesOfMiddleAgeLife from "./UnspokenChallengesOfMiddleAgeLife";
import SafeSpace from "./SafeSpace";
import MentalHealthEveryAge from "./MentalHealthEveryAge";
import ProudlySupport from "../../SeniorsLoneliness/Desktop/ProudlySupport";
function AllAgeGroupsDesktop() {
  return (
    <div>
      <Hero />
      <ProudlySupport />
      <UnspokenChallengesOfMiddleAgeLife />
      <SafeSpace />
      <MentalHealthEveryAge />
      <MakeAnImpactCarousel />
      <WhyListenersMatter />
      <HowItWorks />
      <FeelHeard />
      <WhyChooseListener />
      <CoreValues />
      <FAQAccordion />
    </div>
  );
}

export default AllAgeGroupsDesktop;
