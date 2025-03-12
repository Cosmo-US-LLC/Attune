import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Desktop/Navbar.jsx";
import NavbarMobile from "../Navbar/Mobile/NavbarMobile.jsx";
import Footer from "../Footer/desktop/Footer.jsx";
import FooterMobile from "../Footer/mobile/FooterMobile.jsx";

const Layout = () => {
  return (
    <>
      <div className="max-lg:hidden">
        <Navbar />
      </div>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div className="max-lg:hidden">
        <Footer/>
      </div>
      <div className="lg:hidden">
        <FooterMobile/>
      </div>
    </>
  );
};

export default Layout;
