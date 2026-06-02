import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

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

function FooterMobile() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px] overflow-hidden">
      <div className="relative z-10">
        <div className="flex relative flex-row justify-start items-start">
          <h1 className="text-left font-miniature text-[38px]">
            Talk to a <br />
            professional
          </h1>
          <a href="#">
            <img
              src="/mobile1/feel-attune-logo.webp"
              alt="Logo"
              className="absolute top-0 right-0 w-[120px] h-[38px]"
            />
          </a>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <p className="text-[16px] font-[700] leading-[20px]">
            Coaching That Fits Your Life
          </p>
          <p className=" text-[15px]">
            Life coaching built around you. Your goals, your pace, your version
            of a life well lived.
          </p>
        </div>
        <div className="flex relative flex-row justify-between items-center mt-8">
          <div className="flex flex-col gap-4 font-[500]">
            {currentPath !== "/privacy-policy" &&
              currentPath !== "/terms-of-use" && (
                <a
                  href="#path-to-support"
                  onClick={(e) => handleScroll(e, "mobile-path-to-support", 70)}
                >
                  Path To Support
                </a>
              )}
            {currentPath !== "/privacy-policy" &&
              currentPath !== "/terms-of-use" && (
                <a
                  href="#how-it-works"
                  onClick={(e) => handleScroll(e, "mobile-how-it-works", 70)}
                >
                  How It Works
                </a>
              )}
            {currentPath !== "/privacy-policy" &&
              currentPath !== "/terms-of-use" && (
                <a
                  href="#our-approach"
                  onClick={(e) => handleScroll(e, "mobile-our-approach", 70)}
                >
                  Our Approach
                </a>
              )}
            {currentPath !== "/listener-recruitment" &&
              currentPath !== "/privacy-policy" &&
              currentPath !== "/terms-of-use" && (
                <a
                  href="#FAQs"
                  onClick={(e) => handleScroll(e, "mobile-FAQs", 70)}
                >
                  FAQs
                </a>
              )}
            {currentPath === "/listener-recruitment" && (
              <a
                href="#Become-a-listener"
                onClick={(e) => handleScroll(e, "mobile-Become-a-listener", 70)}
              >
                Become A Listener
              </a>
            )}

            <div className="space-y-[15px] flex flex-col text-[16px] font-[500]  mt-4">
              <Link to="/terms-of-use">Terms of Use</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <img
            src="/mobile1/footer/footer_heart.svg"
            alt="Time"
            className="w-[134px] h-[107px]"
          />
        </div>
        <div className="flex justify-between items-center py-0 mt-6">
          <div className="flex flex-row gap-4 justify-center items-center">
            <a href="https://www.linkedin.com/company/feelattune/">
              <img
                src="/mobile1/footer/linkedIn.svg"
                alt="linkedIn"
                className=""
              />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61585879137501#">
              <img
                src="/mobile1/footer/facebook.svg"
                alt="facebook"
                className=""
              />
            </a>
            <a href="https://www.instagram.com/feelattuneofficial">
              <img
                src="/mobile1/footer/instagram.svg"
                alt="instagram"
                className=""
              />
            </a>
          </div>

          {/* <a href="https://innovacare.tech/listenerhub/signup">
            <button className="bg-[#5200FF] text-white px-[10px] h-[38px] my-0 min-w-[112px] rounded-full text-[15px] whitespace-nowrap">
              Get Started
            </button>
          </a> */}
        </div>
        <p className="mt-5 text-left">© 2024 FeelAttune. All Rights Reserved</p>
        <div className="my-4 border-[0.5px] border-[black] w-full" />
        <p className="mt-4 text-left text-[14px] capitalize w-[340px]">
          We would like to acknowledge the traditional, ancestral, and unceded
          territory of the many First Nations, Metis, and Inuit who have lived
          and cared for the lands known as Canada for generations. We are
          grateful for the traditional knowledge keepers and elders who are
          still with us today and those who have gone before us. We make this
          acknowledgment as an act of reconciliation and gratitude to those
          whose territory we reside on.
        </p>
      </div>
      <div className="flex absolute top-0 left-0 z-0 items-center w-full h-full">
        <h1 className="font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0">
          Att<span className="italic">une</span>
        </h1>
      </div>
    </div>
  );
}

export default FooterMobile;
