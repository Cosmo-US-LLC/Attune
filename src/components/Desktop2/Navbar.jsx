import React, { useState } from "react";

function Navbar() {
  const [sideOpen, setSideOpen] = useState(false);
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <div className="pb-[5.5rem]">
      <div className="fixed top-0 w-[100%] z-[99]">
        <nav className="bg-white h-[99px] flex-shrink-0 shadow-sm">
          <div className="max-w-[1440px] w-full h-full mx-auto px-8 pr-16 flex items-center justify-between">
            <div className="relative flex flex-col items-center">
            <a href="/" className="relative flex flex-col items-center">
              <a
                href="/"
                className="min-w-[200px] flex max-xl:items-center items-end"
              >
                <img
                  src="/desktop2/feel-attune-logo.webp"
                  alt="Attune Logo"
                  className="w-[196px] "
                />
              </a>
            </a>
            </div>

            <div className="hidden space-x-8 md:flex">
              <a
                href={"#PathToSupport"}
                onClick={(e) => handleScroll(e, "PathToSupport", 30)}
                className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
              >
                Path To Support
              </a>
              <a
                href={"#how-it-work"}
                onClick={(e) => handleScroll(e, "how-it-work-D", 50)}
                className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize  flex-shrink-0 hover:text-gray-900"
              >
                How It Works
              </a>
              <a
                href={"#whychooselistener"}
                onClick={(e) => handleScroll(e, "why-choose-listener", 20)}
                className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
              >
                Our Approach
              </a>
              <a
                href={"#FaqD"}
                onClick={(e) => handleScroll(e, "FaqD", 20)}
                className="flex flex-col justify-center text-center text-black font-medium text-[16.222px] leading-[98.144px] capitalize   flex-shrink-0 hover:text-gray-900"
              >
                FAQs
              </a>
            </div>

            <div>
              <a href="https://innovacare.tech/listenerhub/signup">
                <button className="flex justify-center items-center gap-2 w-[160px] h-[37px] px-[24px] py-[16px] bg-[#FF6F61] text-white rounded-[34.878px] border-[1.622px] border-white hover:bg-red-500">
                  Connect Now
                </button>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
