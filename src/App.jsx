import "./App.css";
import Navbar from "./components/Desktop3/Navbar";
import Footer from "./components/Desktop3/Footer";
import NavbarMobile from "./components/Mobile3/NavbarMobile";
import FooterMobile from "./components/Mobile3/FooterMobile";

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

      {/* Desktop */}
      <div className="max-lg:hidden">
        <Routes>
          {/* <HomeDesktop /> */}
          <Route path="/" element={<HomeDesktop />} />
          <Route path="/young-adults-lonliness" element={<HomeDesktopLonely />} />
          <Route path="/young-adults-mental-health-barriers" element={<HomeDesktopMental />} />
        </Routes>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <Routes>
          {/* <HomeMobile /> */}
          <Route path="/" element={<HomeMobile />} />
          <Route path="/young-adults-lonliness" element={<HomeMobileLonely />} />
          <Route path="/young-adults-mental-health-barriers" element={<HomeMobileMental />} />
        </Routes>
      </div>

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
