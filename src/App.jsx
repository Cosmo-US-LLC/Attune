import "./App.css";
import Navbar from "./components/Desktop/Navbar";
import Footer from "./components/Desktop/Footer";
import NavbarMobile from "./components/Mobile/NavbarMobile";
import FooterMobile from "./components/Mobile/FooterMobile";

import HomeDesktop from "./components/Desktop/Home"
import HomeMobile from "./components/Mobile/Home"

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
      <div className="max-lg:hidden"><HomeDesktop /></div>
      {/* Mobile */}
      <div className="lg:hidden"><HomeMobile /></div>


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
