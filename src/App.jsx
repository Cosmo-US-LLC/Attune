import "./App.css";
import Navbar from "./components/Desktop1/Navbar";
import Footer from "./components/Desktop1/Footer";
import NavbarMobile from "./components/Mobile1/NavbarMobile";
import FooterMobile from "./components/Mobile1/FooterMobile";

import HomeDesktop from "./components/Desktop1/Main";
import HomeMobile from "./components/Mobile1/Main";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeMobileMental from "./components/Mobile3/Home";
import HomeMobileLonely from "./components/Mobile2/Home";
import HomeDesktopLonely from "./components/Desktop2/Home";
import HomeDesktopMental from "./components/Desktop3/Home";
import HomeDesktopCaregiverSeeking from "./components/Desktop4/Home";
import HomeMobileCaregiverSeeking from "./components/Mobile4/Home";
import HomeDesktopCaregiversFacingMentalHealthChallenges from "./components/Desktop5/Home";
import HomeMobileCaregiversFacingMentalHealthChallenges from "./components/Mobile5/Home";
import useFavicon from "./hooks/useFavicon";
import AllAgeGroupsMentalHealthBarriers from "./components/Desktop6/Home";
import AllAgeGroupsMentalHealthBarriersMobile from "./components/Mobile6/Home";
import SeniorsAgeLonelinessDesktop from "./components/Desktop7/Home";
import SeniorsAgeLonelinessMobile from "./components/Mobile7/Home";
import SeniorsAgeMentalHealthBarriersDesktop from "./components/Desktop8/Home";
import SeniorsAgeMentalHealthBarriersMobile from "./components/Mobile8/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  useFavicon();
  return (
    <Router>
      <div className="max-lg:hidden">
        <Navbar />
      </div>

      <div className="lg:hidden">
        <NavbarMobile />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="max-lg:hidden">
                <HomeDesktop />
              </div>
              <div className="lg:hidden">
                <HomeMobile />
              </div>
            </>
          }
        />
        <Route
          path="/young-adults-lonliness"
          element={
            <>
              <div className="max-lg:hidden">
                <HomeDesktopLonely />
              </div>
              <div className="lg:hidden">
                <HomeMobileLonely />
              </div>
            </>
          }
        />
        <Route
          path="/young-adults-mental-health-barriers"
          element={
            <>
              <div className="max-lg:hidden">
                <HomeDesktopMental />
              </div>
              <div className="lg:hidden">
                <HomeMobileMental />
              </div>
            </>
          }
        />
        <Route
          path="/middle-age-loneliness"
          element={
            <>
              <div className="max-lg:hidden">
                <HomeDesktopCaregiverSeeking />
              </div>
              <div className="lg:hidden">
                <HomeMobileCaregiverSeeking />
              </div>
            </>
          }
        />
        <Route
          path="/middle-age-mental-health-barriers"
          element={
            <>
              <div className="max-lg:hidden">
                <HomeDesktopCaregiversFacingMentalHealthChallenges />
              </div>
              <div className="lg:hidden">
                <HomeMobileCaregiversFacingMentalHealthChallenges />
              </div>
            </>
          }
        />
        <Route
          path="/all-age-groups-mental-health-barriers"
          element={
            <>
              <div className="max-lg:hidden">
                <AllAgeGroupsMentalHealthBarriers />
              </div>
              <div className="lg:hidden">
                <AllAgeGroupsMentalHealthBarriersMobile />
              </div>
            </>
          }
        />
        <Route 
          path="/seniors-mental-health-barriers"
          element={
            <>
              <div className="max-lg:hidden">
                <SeniorsAgeLonelinessDesktop />
              </div>
              <div className="lg:hidden">
                <SeniorsAgeLonelinessMobile />
              </div>
            </>
          }
        />
        <Route
          path="/seniors-loneliness"
          element={
            <>
              <div className="max-lg:hidden">
                <SeniorsAgeMentalHealthBarriersDesktop />
              </div>
              <div className="lg:hidden">
                <SeniorsAgeMentalHealthBarriersMobile />
              </div>
            </>
          }
        />
          <Route
          path="/privacy-policy"
          element={
            <>
              <div className="">
                <PrivacyPolicy />
              </div>
            </>
          }
        />
      </Routes>

      <div className="max-lg:hidden">
        <Footer />
      </div>

      <div className="lg:hidden">
        <FooterMobile />
      </div>
    </Router>
  );
}

export default App;
