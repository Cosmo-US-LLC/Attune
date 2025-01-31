import "./App.css";
import Navbar from "./components/Desktop1/Navbar";
import Footer from "./components/Desktop1/Footer";
import NavbarMobile from "./components/Mobile1/NavbarMobile";
import FooterMobile from "./components/Mobile1/FooterMobile";

import HomeDesktop from "./components/Desktop1/Main";
import HomeMobile from "./components/Mobile1/Main";

import { BrowserRouter, Routes, Route } from "react-router";

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
          <Route path="/young-adults" element={<HomeDesktop />} />
        </Routes>
      </div>
      {/* Mobile */}
      <div className="lg:hidden">
        <Routes>
          {/* <HomeMobile /> */}
          <Route path="/" element={<HomeMobile />} />
          <Route path="/young-adults" element={<HomeMobile />} />
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
