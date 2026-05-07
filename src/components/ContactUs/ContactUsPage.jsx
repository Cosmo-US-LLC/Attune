import { useState, useEffect } from "react";
import Hero from "./Hero";
import Stats from "./Stats";
import HeroMobile from "./Mobile/HeroMobile";
import StatsMobile from "./Mobile/StatsMobile";

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

function ContactUsPage() {
  const isMobile = useIsMobile();
  return isMobile ? (
    <>
      <HeroMobile />
      <StatsMobile />
    </>
  ) : (
    <>
      <Hero />
      <Stats />
    </>
  );
}

export default ContactUsPage;
