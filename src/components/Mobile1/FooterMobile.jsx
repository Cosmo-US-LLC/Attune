import React from "react";
import {Link} from "react-router-dom"

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
  return (
    <div className="relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px] overflow-hidden">
      <div className="relative z-10">
        <div className="relative flex flex-row items-start justify-start">
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
        <p className="mt-6 text-[15px]">
          Looking for someone to listen? Our trained Listeners are here to
          provide non-judgmental, compassionate support whenever you need it.
          Whether you’re managing stress, navigating life transitions, or simply
          craving a connection, we’re here to help.
        </p>
        <div className="relative flex flex-row items-center justify-between mt-8">
          <div className="flex flex-col gap-4 font-[500]">
            <a
              href="#path-to-support"
              onClick={(e) => handleScroll(e, "mobile-path-to-support", 90)}
            >
              Path To Support
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, "mobile-how-it-works", 90)}
            >
              How It Works
            </a>
            <a
              href="#why-choose-a-listener"
              onClick={(e) => handleScroll(e, "mobile-why-choose-a-listener", 90)}
            >
              Our Approach
            </a>
            <a href="#FAQs" onClick={(e) => handleScroll(e, "mobile-FAQs", 90)}>
              FAQs
            </a>
            <div className="space-y-[15px] flex flex-col text-[16px] font-[500] ">
              <Link to="/terms-of-use">
            <a href="" >
              Terms of Use
              </a>
              </Link>
             <Link to="/privacy-policy">
             <a href="" >
              Privacy Policy
              </a>
             </Link>
            </div>
          </div>
          <img
            src="/mobile1/footer/footer_heart.svg"
            alt="Time"
            className="w-[134px] h-[107px]"
          />
        </div>
        <div className="flex items-center justify-between py-0 mt-6">
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://www.linkedin.com/company/easecare/">
              <img
                src="/mobile1/footer/linkedIn.svg"
                alt="linkedIn"
                className=""
              />
            </a>
            <a href="https://www.facebook.com/easecare.ca">
              <img
                src="/mobile1/footer/facebook.svg"
                alt="facebook"
                className=""
              />
            </a>
            <a href="https://www.instagram.com/easecare.ca/">
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
        <p className="mt-5 text-left">© 2025 Attune. All Rights Reserved</p>
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
      <div className="absolute top-0 left-0 z-0 flex items-center w-full h-full">
        <h1 className="font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0">
          Att<span className="italic">une</span>
        </h1>
      </div>
    </div>
  );
}

export default FooterMobile;
