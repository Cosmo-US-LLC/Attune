import "./App.css";
import Navbar from "./components/Desktop1/Navbar";
import Footer from "./components/Desktop1/Footer";
import NavbarMobile from "./components/Mobile1/NavbarMobile";
import FooterMobile from "./components/Mobile1/FooterMobile";

import HomeDesktop from "./components/Desktop1/Main";
import HomeMobile from "./components/Mobile1/Main";

import { BrowserRouter, Routes, Route } from "react-router";
import HomeMobileMental from "./components/Mobile3/Home";
import HomeMobileLonely from "./components/Mobile2/Home";
import HomeDesktopLonely from "./components/Desktop2/Home";
import HomeDesktopMental from "./components/Desktop3/Home";

function App() {
  return (
    <>
      {/* Desktop */}
      <div className="max-lg:hidden">
        <Navbar />
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <NavbarMobile />
      </div>

      <Routes>
        {/* <HomeDesktop /> */}
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
      </Routes>

      {/* Desktop */}
      <div className="max-lg:hidden">
        <Footer />
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <FooterMobile />
      </div>
    </>
  );
}

export default App;
