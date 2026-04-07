import PromoBanner from "../components/anxiety-page/PromoBanner";
import Navbar from "../components/anxiety-page/Navbar";
import HeroSection from "../components/anxiety-page/HeroSection";
import ProudlySupportingBar from "../components/anxiety-page/ProudlySupportingBar";
import PathToSupport from "../components/anxiety-page/PathToSupport";
import BreakingBarriersHeading from "../components/anxiety-page/BreakingBarriersHeading";
import AnxietyCardsSlider from "../components/anxiety-page/AnxietyCardsSlider";
import HowLifeCoachHelps from "../components/anxiety-page/HowLifeCoachHelps";
import StatisticsSection from "../components/anxiety-page/StatisticsSection";
import HowItWorks from "../components/anxiety-page/HowItWorks";
import SessionsPricing from "../components/anxiety-page/SessionsPricing";
import TestimonialsSection from "../components/anxiety-page/TestimonialsSection";
import BeginJourney from "../components/anxiety-page/BeginJourney";
import WhyChooseCoach from "../components/anxiety-page/WhyChooseCoach";
import CoreValues from "../components/anxiety-page/CoreValues";
import FAQSection from "../components/anxiety-page/FAQSection";
import Footer from "../components/anxiety-page/Footer";

function AnxietyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden pt-[90px]">
      <PromoBanner />
      <Navbar />
      <HeroSection />
      <ProudlySupportingBar />
      <PathToSupport />
      <BreakingBarriersHeading />
      <AnxietyCardsSlider />
      <HowLifeCoachHelps />
      <StatisticsSection />
      <HowItWorks />
      <SessionsPricing />
      <TestimonialsSection />
      <BeginJourney />
      <WhyChooseCoach />
      <CoreValues />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default AnxietyPage;
