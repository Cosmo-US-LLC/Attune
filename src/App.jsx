import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFavicon from "./hooks/useFavicon";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

import HomeDesktop from "./components/Desktop1/Main";
import HomeMobile from "./components/Mobile1/Main";
import HomeMobileMental from "./components/Mobile3/Home";
import HomeMobileLonely from "./components/Mobile2/Home";
import HomeDesktopLonely from "./components/Desktop2/Home";
import HomeDesktopMental from "./components/Desktop3/Home";
import HomeDesktopCaregiverSeeking from "./components/Desktop4/Home";
import HomeMobileCaregiverSeeking from "./components/Mobile4/Home";
import HomeDesktopCaregiversFacingMentalHealthChallenges from "./components/Desktop5/Home";
import HomeMobileCaregiversFacingMentalHealthChallenges from "./components/Mobile5/Home";
import AllAgeGroupsMentalHealthBarriers from "./components/Desktop6/Home";
import AllAgeGroupsMentalHealthBarriersMobile from "./components/Mobile6/Home";
import SeniorsAgeLonelinessDesktop from "./components/Desktop7/Home";
import SeniorsAgeLonelinessMobile from "./components/Mobile7/Home";
import SeniorsAgeMentalHealthBarriersDesktop from "./components/Desktop8/Home";
import SeniorsAgeMentalHealthBarriersMobile from "./components/Mobile8/Home";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ListenerRecruitmentDesktop from "./components/ListenerRecruitment/Desktop";
import ListenerRecruitmentMobile from "./components/ListenerRecruitment/Mobile";

function App() {
  useFavicon();
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
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
            path="/listener-recruitment"
            element={
              <>
                <div className="max-lg:hidden">
                  <ListenerRecruitmentDesktop />
                </div>
                <div className="lg:hidden">
                  <ListenerRecruitmentMobile />
                </div>
              </>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsAndConditions />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;