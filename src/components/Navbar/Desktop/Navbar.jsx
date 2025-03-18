import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const currentPath = location.pathname;

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 50,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, []);

  const handleScroll = (targetId, offset = 0) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = window.pageYOffset + elementPosition - offset;

      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 100);
    }
  };

  // const handleScroll = (targetId, offset) => {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     const elementPosition = targetElement.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition + window.scrollY - offset;
  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="pb-[5.5rem]">
      <div className="fixed top-0 w-[100%] z-[99]">
        <nav className="bg-white h-[99px] shadow-sm">
          <div className="max-w-[1440px] w-full h-full mx-auto px-8 pr-16 flex items-center justify-between">
            <Link
              smooth
              to={`${currentPath}`}
              className="flex items-center"
              onClick={(e) => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/desktop1/feel-attune-logo.webp"
                alt="Attune Logo"
                className="w-[196px]"
              />
            </Link>

            <div className="flex items-center space-x-8">
              <Link
                smooth
                to={`${currentPath}#path-to-support`}
                onClick={(e) => {
                  handleScroll("path-to-support", 50);
                }}
                className="text-black font-medium text-[16.222px] capitalize hover:text-gray-900"
              >
                Path To Support
              </Link>
              <Link
                smooth
                to={`${currentPath}#how-it-works`}
                onClick={(e) => {
                  handleScroll("how-it-works", 90);
                }}
                className="text-black font-medium text-[16.222px] capitalize hover:text-gray-900"
              >
                How It Works
              </Link>
              <Link
                smooth
                to={`${currentPath}#why-choose-a-listener`}
                onClick={(e) => {
                  handleScroll("why-choose-a-listener", 90);
                }}
                className="text-black font-medium text-[16.222px] capitalize hover:text-gray-900"
              >
                Our Approach
              </Link>
              {currentPath === "/listener-recruitment" ? (
                <p></p>
              ) : (
                <Link
                  smooth
                  to={`${currentPath}#FAQs`}
                  onClick={(e) => {
                    handleScroll("FAQs", 90);
                  }}
                  className="text-black font-medium text-[16.222px] capitalize hover:text-gray-900"
                >
                  FAQs
                </Link>
              )}
            </div>
            <div className="w-[160px] h-[37px]">
              {currentPath !== "/listener-recruitment" && (
                <a
                  href={
                    currentPath === "/listener-recruitment"
                      ? "https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
                      : "https://innovacare.tech/listenerhub/signup"
                  }
                >
                  <button className="w-[160px] h-[37px] bg-[#FF6F61] text-white rounded-[34.878px] hover:bg-red-500">
                    Connect Now
                  </button>
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
