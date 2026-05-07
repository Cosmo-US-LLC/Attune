import { useState, useEffect } from "react";
import Hero from "./Hero";
import HeroMobile from "./HeroMobile";
import Ticker from "./Ticker";
import OurStory from "./OurStory";
import OurStoryMobile from "./OurStoryMobile";
import Stats from "./Stats";
import StatsMobile from "./StatsMobile";
import EaseCare from "./EaseCare";
import EaseCareMobile from "./EaseCareMobile";
import FourCommitments from "./FourCommitments";
import FourCommitmentsMobile from "./FourCommitmentsMobile";
import ReadyToStart from "./ReadyToStart";
import ReadyToStartMobile from "./ReadyToStartMobile";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

function AboutUsPage() {
  const isMobile = useIsMobile();
  return (
    <div className="bg-white w-full">
      {isMobile ? <HeroMobile /> : <Hero />}
      <Ticker />
      {isMobile ? <OurStoryMobile /> : <OurStory />}
      {isMobile ? <StatsMobile /> : <Stats />}
      {isMobile ? <EaseCareMobile /> : <EaseCare />}
      {isMobile ? <FourCommitmentsMobile /> : <FourCommitments />}
      {isMobile ? <ReadyToStartMobile /> : <ReadyToStart />}
    </div>
  );
}

export default AboutUsPage;
