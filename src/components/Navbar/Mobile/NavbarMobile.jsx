import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import CountdownTimer from "../../ui/CountdownTimer";

function NavbarMobile() {
  const [sideOpen, setSideOpen] = useState(false);
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
  }, [location]);

  const handleClick = (targetId, offset) => {
    setSideOpen(false);
    setTimeout(() => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 200);
  };

  return (
    <>
      <div className={`${currentPath === "/" ? "pb-[9.5rem]" : "pb-[3.5rem]"}`}>
        <div className="fixed top-0 w-[100%] z-[99]">
          {currentPath === "/" && <CountdownTimer />}
          <div className="bg-white h-[68px] flex justify-between items-center py-[14px] px-5">
            <div className="flex gap-3 relative z-[100]">
              <Sheet open={sideOpen} onOpenChange={setSideOpen}>
                <SheetTrigger asChild>
                  <button
                    onClick={() => setSideOpen(true)}
                    className="bg-[#F4EFEA] w-[40px] h-[40px] p-2 rounded-sm"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className=""
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 18H4M14.5 12H4M20 6H4"
                        stroke="#5200FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </SheetTrigger>
                <SheetContent
                  side={"left"}
                  className="bg-[#e5ddd4] z-[101] flex flex-col"
                >
                  <SheetHeader>
                    <SheetTitle>
                      <Link
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          setSideOpen(false);
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }, 100);
                        }}
                      >
                        <img
                          src="/mobile1/feel-attune-logo.webp"
                          alt="Attune Logo"
                          className="w-[140px] h-[60px] object-contain"
                        />
                      </Link>
                    </SheetTitle>
                    <SheetDescription hidden></SheetDescription>
                  </SheetHeader>
                  <div className="relative bg-[#E5DDD4] py-[30px] grow overflow-y-auto">
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-col justify-between grow">
                        <div className="flex flex-row items-start justify-start">
                          <h1 className="text-left font-miniature text-[38px] leading-[48px]">
                            Talk to a <br />
                            professional
                          </h1>
                        </div>
                        <div className="relative mt-8">
                          <div className="flex flex-col gap-4 font-[500]">
                            {currentPath !== "/privacy-policy" &&
                              currentPath !== "/terms-of-use" && (
                                <Link
                                  smooth
                                  to={`${window.location.pathname}#mobile-path-to-support`}
                                  onClick={(e) => {
                                    handleClick("mobile-path-to-support", 50);
                                  }}
                                >
                                  Path To Support
                                </Link>
                              )}

                            {currentPath !== "/privacy-policy" &&
                              currentPath !== "/terms-of-use" && (
                                <Link
                                  smooth
                                  to={`${window.location.pathname}#mobile-how-it-works`}
                                  onClick={(e) => {
                                    handleClick("mobile-how-it-works", 50);
                                  }}
                                >
                                  How It Works
                                </Link>
                              )}
                            {currentPath !== "/privacy-policy" &&
                              currentPath !== "/terms-of-use" && (
                                <Link
                                  smooth
                                  to={`${window.location.pathname}#mobile-our-approach`}
                                  onClick={(e) => {
                                    handleClick("mobile-our-approach", 50);
                                  }}
                                >
                                  Our Approach
                                </Link>
                              )}
                            {currentPath !== "/listener-recruitment" &&
                              currentPath !== "/privacy-policy" &&
                              currentPath !== "/terms-of-use" && (
                                <Link
                                  smooth
                                  to={`${window.location.pathname}#mobile-FAQs`}
                                  onClick={(e) => {
                                    handleClick("mobile-FAQs", 50);
                                  }}
                                >
                                  FAQs
                                </Link>
                              )}
                            <div className="flex flex-row items-center justify-center gap-2">
                              <a href="https://innovacare.tech/listenerhub/login">
                                <Button className="bg-[#FFF] text-[#5200FF] border border-[#5200FF] hover:border-[#FFF] hover:bg-[[#FF6F61] rounded-full text-[15px]">
                                  Log In
                                </Button>
                              </a>
                              {/* <a
                                href={
                                  currentPath === "/listener-recruitment"
                                    ? "https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
                                    : "https://signup.feelattune.com/sign-up"
                                }
                              >
                                <Button className="bg-[#FF6F61] rounded-full text-[15px]">
                                  {currentPath === "/listener-recruitment"
                                    ? "Apply Now"
                                    : "Connect Now"}
                                </Button>
                              </a> */}
                              <a
                                href={
                                  currentPath === "/"
                                    ? "https://signup.feelattune.com/t/jcLDEqP45Aus?Terms_of_Use=https%3A%2F%2Ffeelattune.com%2Fterms-of-use"
                                    : currentPath === "/listener-recruitment"
                                    ? "https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
                                    : "https://innovacare.tech/listenerhub/signup"
                                }
                              >
                                <Button className="bg-[#FF6F61] rounded-full text-[15px]">
                                  {currentPath === "/listener-recruitment"
                                    ? "Apply Now"
                                    : "Connect Now"}
                                </Button>
                              </a>
                            </div>

                            {currentPath === "/listener-recruitment" && (
                              <Link
                                smooth
                                to={`${window.location.pathname}#Become-a-listener`}
                                onClick={(e) => {
                                  handleClick("mobile-Become-a-listener", 50);
                                }}
                              >
                                Become A Listener
                              </Link>
                            )}
                          </div>
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
                      </div>
                      <div>
                        <p className="mt-8 text-xs text-left">
                          © 2025 FeelAttune. All rights reserved
                        </p>
                        <div className="my-4 border-[0.5px] border-[black] w-full" />
                        <p className="mt-4 text-xs text-left capitalize">
                          We would like to acknowledge the traditional,
                          ancestral, and unceded territory of the many First
                          Nations, Metis, and Inuit who have lived and cared for
                          the lands known as Canada for generations. We are
                          grateful for the traditional knowledge keepers and
                          elders who are still with us today and those who have
                          gone before us. We make this acknowledgment as an act
                          of reconciliation and gratitude to those whose
                          territory we reside on.
                        </p>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 w-[43%] h-[28dvh] z-0 flex justify-start items-center">
                      <h1 className="font-miniature text-center rotate-90 w-full text-[#ded6ce] text-[20dvh] z-0">
                        Att<span className="italic">une</span>
                      </h1>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Link
                to="/"
                // onClick={(e) => {
                //   e.preventDefault();
                //   setSideOpen(false);
                //   setTimeout(() => {
                //     window.scrollTo({ top: 0, behavior: "smooth" });
                //   }, 100);
                // }}
              >
                <img
                  src="/mobile1/feel-attune-logo.webp"
                  alt="Attune Logo"
                  className="w-[105px] object-contain"
                />
              </Link>
            </div>

            <a
              href={
                currentPath === "/"
                  ? "https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true"
                  : currentPath === "/listener-recruitment"
                  ? "https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
                  : "https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true"
              }
            >
              <Button className="bg-[#FF6F61] rounded-full text-[15px]">
                {currentPath === "/listener-recruitment"
                  ? "Apply Now"
                  : "Connect Now"}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarMobile;
