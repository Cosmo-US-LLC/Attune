import React from "react";
import HeroMobile from "./HeroMobile";
import WhyBecomeListenerMobile from "./WhyBecomeListenerMobile";
import ListenerMobile from "./ListenerMobile";
import PrivatePracticeMobile from "./PrivatePracticeMobile";
import HowItWorks from "./HowItWorks";
import WhoCanBecomeListenerMobile from "./WhoCanBecomeListenerMobile";
import ReadyToMakeMobile from "./ReadyToMakeMobile";
import DiffersTherapyCounselingMobile from "./DiffersTherapyCounselingMobile";
import CoachesSection from "./CoachesSection";

function ListenerRecruitmentMobile() {
  return (
    <>
      <HeroMobile />
      <WhyBecomeListenerMobile />
      {/* <MeaningfulMovementMobile/> */}
      <PrivatePracticeMobile />
      <ListenerMobile />
      <HowItWorks />
      <DiffersTherapyCounselingMobile/>
      <ReadyToMakeMobile />
      <WhoCanBecomeListenerMobile />
      <CoachesSection/>
    </>
  );
}

export default ListenerRecruitmentMobile;
