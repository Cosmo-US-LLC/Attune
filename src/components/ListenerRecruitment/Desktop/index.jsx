import React from "react";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import SafeSpace from "./SafeSpace";
import ReadyToMake from "./ReadyToMake";
import DiffersTherapyCounseling from "./DiffersTherapyCounseling";
import WhyBecomeListener from "./WhyBecomeListener";
import PrivatePractice from "./PrivatePractice";
import WhoCanBecomeListenerDesktop from "./WhoCanBecomeListenerDesktop";
import CoachesSection from "./CoachesSection";

function ListenerRecruitmentDesktop() {
  return (
    <>
      <Hero />
      <WhyBecomeListener />
      {/* <MeaningfulMovement /> */}
      <PrivatePractice />
      <SafeSpace />     
      <HowItWorks />
      <DiffersTherapyCounseling />
      <ReadyToMake />
      <WhoCanBecomeListenerDesktop />
      <CoachesSection />
    </>
  );
}

export default ListenerRecruitmentDesktop;
