import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFavicon from "./hooks/useFavicon";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";
import ThankYouPage from "./components/ThankYouPage/ThankYouPage";
// import ContactUs from "./components/ContactUs/ContactUs";

import FeelAttuneHomeDesktop from "./components/FeelAttuneHome/Desktop";
import FeelAttuneHomeMobile from "./components/FeelAttuneHome/Mobile";
import YoungAdultsLonlinessDesktop from "./components/YoungAdultsLonliness/Desktop";
import YoungAdultsLonlinessMobile from "./components/YoungAdultsLonliness/Mobile";
import YoungAdultsMentalHealthBarriersDesktop from "./components/YoungAdultsMentalHealthBarriers/Desktop";
import YoungAdultsMentalHealthBarriersMobile from "./components/YoungAdultsMentalHealthBarriers/Mobile";
import MiddleAgeLonelinessDesktop from "./components/MiddleAgeLoneliness/Desktop";
import MiddleAgeLonelinessMobile from "./components/MiddleAgeLoneliness/Mobile";
import MiddleAgeMentalHealthBarriersDesktop from "./components/MiddleAgeMentalHealthBarriers/Desktop";
import MiddleAgeMentalHealthBarriersMobile from "./components/MiddleAgeMentalHealthBarriers/Mobile";
import AllAgeGroupsDesktop from "./components/AllAgeGroups/Desktop";
import AllAgeGroupsMobile from "./components/AllAgeGroups/Mobile";
import SeniorsMentalHealthBarriersDesktop from "./components/SeniorsMentalHealthBarriers/Desktop";
import SeniorsMentalHealthBarriersMobile from "./components/SeniorsMentalHealthBarriers/Mobile";
import SeniorsLonelinessDesktop from "./components/SeniorsLoneliness/Desktop";
import SeniorsLonelinessMobile from "./components/SeniorsLoneliness/Mobile";
import ListenerRecruitmentDesktop from "./components/ListenerRecruitment/Desktop";
import ListenerRecruitmentMobile from "./components/ListenerRecruitment/Mobile";

import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsandConditions";
import ContactUs from "./components/ContactUs";


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
                  <FeelAttuneHomeDesktop />
                </div>
                <div className="lg:hidden">
                  <FeelAttuneHomeMobile />
                </div>
              </>
            }
          />
          <Route
            path="/young-adults-lonliness"
            element={
              <>
                <div className="max-lg:hidden">
                  <YoungAdultsLonlinessDesktop />
                </div>
                <div className="lg:hidden">
                  <YoungAdultsLonlinessMobile />
                </div>
              </>
            }
          />
          <Route
            path="/young-adults-mental-health-barriers"
            element={
              <>
                <div className="max-lg:hidden">
                  <YoungAdultsMentalHealthBarriersDesktop />
                </div>
                <div className="lg:hidden">
                  <YoungAdultsMentalHealthBarriersMobile />
                </div>
              </>
            }
          />
          <Route
            path="/middle-age-loneliness"
            element={
              <>
                <div className="max-lg:hidden">
                  <MiddleAgeLonelinessDesktop />
                </div>
                <div className="lg:hidden">
                  <MiddleAgeLonelinessMobile />
                </div>
              </>
            }
          />
          <Route
            path="/middle-age-mental-health-barriers"
            element={
              <>
                <div className="max-lg:hidden">
                  <MiddleAgeMentalHealthBarriersDesktop />
                </div>
                <div className="lg:hidden">
                  <MiddleAgeMentalHealthBarriersMobile />
                </div>
              </>
            }
          />
          <Route
            path="/all-age-groups-mental-health-barriers"
            element={
              <>
                <div className="max-lg:hidden">
                  <AllAgeGroupsDesktop />
                </div>
                <div className="lg:hidden">
                  <AllAgeGroupsMobile />
                </div>
              </>
            }
          />

          <Route
            path="/seniors-loneliness"
            element={
              <>
                <div className="max-lg:hidden">
                  <SeniorsLonelinessDesktop />
                </div>
                <div className="lg:hidden">
                  <SeniorsLonelinessMobile />
                </div>
              </>
            }
          />
          <Route
            path="/seniors-mental-health-barriers"
            element={
              <>
                <div className="max-lg:hidden">
                  <SeniorsMentalHealthBarriersDesktop />
                </div>
                <div className="lg:hidden">
                  <SeniorsMentalHealthBarriersMobile />
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
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/ghl-contact-us" element={<ContactUs />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
