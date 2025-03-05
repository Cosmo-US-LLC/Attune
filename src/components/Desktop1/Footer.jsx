import { useEffect } from "react";
import {Link} from "react-router-dom"
function Footer() {

  const handleLogoClick = () => {
    // Scroll to the top of the page on logo click
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };
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
    <footer className="bg-[#E5DDD4] overflow-hidden relative w-full">
      <div className="max-w-[1440px] h-[500] mx-auto  ">
        <div className="relative flex flex-row w-[100%] py-[30px] px-[50px]">
          <div className="absolute bottom-[30px] left-[0px]">
            <img src="/desktop1/feelattune.webp" alt="Attune logo" />
          </div>
          <div className="w-[25%] flex justify-center items-center relative z-10">
            <h1 className="text-[55px] font-[400] font-miniature leading-[69px] w-[301px]">
              Talk to a
              <br />
              professional
            </h1>
          </div>
          <div className="w-[50%] flex gap-6 flex-col justify-center items-start px-4 pt-6 relative z-10">
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-[16px] font-[700] leading-[20px]">
                Looking for someone to listen?
              </p>
              <p className="text-[16px] leading-[22px] capitalize ">
                Our trained Listeners are here to provide non-judgmental,
                compassionate support whenever you need it. Whether you’re
                managing stress, navigating life transitions, or simply craving
                a connection, we’re here to help.
              </p>
            </div>
            <div className="space-y-[10px]">
            <div className="text-[16px] font-[500] mt-8 flex gap-10 relative z-40">
              <a
              className="relative z-10"
                href="#path-to-support"
                onClick={(e) => handleScroll(e, "path-to-support", 90)}
              >
                Path To Support
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleScroll(e, "how-it-works", 90)}
              >
                How It Works
              </a>
              <a
                href="#why-choose-a-listener"
                onClick={(e) => handleScroll(e, "why-choose-a-listener", 90)}
              >
                Our Approach
              </a>
              <a href="#FAQs" onClick={(e) => handleScroll(e, "FAQs", 90)}>
                FAQs
              </a>
            </div>
            <div className="space-x-10 text-[16px] font-[500] ">
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
            <div className="relative z-10 flex items-end justify-center w-full mt-12" onClick={handleLogoClick}>
              <img
                src="/desktop1/feel-attune-logo.webp"
                alt="Attune Logo"
                className="cursor-pointer w-[174px] h-[54px]"
              />
            </div>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-[80px]">
            <div className="relative z-10 pt-2 mt-4">
              <img
                src="/desktop1/heart.webp"
                alt="Mental Wellness"
                className="w-[233px] h-[185px]"
              />
            </div>

            <div className="flex gap-4 justify-end items-center w-[50%] z-20">
              <a href="https://www.linkedin.com/company/easecare/">
                <img
                  src="/desktop1/footer/link-4.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.facebook.com/easecare.ca">
                <img
                  src="/desktop1/footer/link-1.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.instagram.com/easecare.ca/">
                <img
                  src="/desktop1/footer/link-2.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-[50px] py-[30px]  border-t border-black">
          <div className="text-black text-center font-inter text-[12px] font-[400] leading-[16px] capitalize">
            We would like to acknowledge the traditional, ancestral, and unceded
            territory of the many First Nations, Metis, and Inuit who have lived
            and cared for the lands known as Canada for generations. We are
            grateful for the traditional knowledge keepers and elders who are
            still with us today and those who have gone before us. We make this
            acknowledgment as an act of reconciliation and gratitude to those
            whose territory we reside on.
          </div>
        </div>
        <div className="flex justify-center items-center h-[60px] px-[50px] border-t  border-black">
          <div className="text-black font-inter text-[16px] font-[400] leading-[20px] capitalize">
            &copy; 2025 Attune. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
