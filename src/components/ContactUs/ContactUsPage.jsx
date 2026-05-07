import Hero from "./Hero";
import Stats from "./Stats";
import HeroMobile from "./Mobile/HeroMobile";
import StatsMobile from "./Mobile/StatsMobile";

function ContactUsPage() {
  return (
    <>
      <div className="max-lg:hidden">
        <Hero />
        <Stats />
      </div>
      <div className="lg:hidden">
        <HeroMobile />
        <StatsMobile />
      </div>
    </>
  );
}

export default ContactUsPage;
