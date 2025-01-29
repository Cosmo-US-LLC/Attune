import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function NavbarMobile() {
  const [sideOpen, setSideOpen] = useState(false);

  return (
    <div className="bg-white h-[68px] flex justify-between items-center py-[14px] px-5">
      <div className="flex gap-3 items-center">
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
                <a href="/" onClick={() => setSideOpen(false)}>
                  <img
                    src="/mobile/logo.svg"
                    alt="Attune Logo"
                    className="w-[103px] h-[30px] object-contain"
                  />
                </a>
              </SheetTitle>
              <SheetDescription hidden></SheetDescription>
            </SheetHeader>
            <div className="relative bg-[#E5DDD4] py-[30px] grow overflow-y-auto">
              <div className="relative z-10 flex flex-col h-full">
                <div className="grow flex flex-col justify-between">
                  <div className="flex flex-row items-start justify-start">
                    <h1 className="text-left font-miniature text-[38px] leading-[48px]">
                      Talk to a <br />
                      professional
                    </h1>
                  </div>
                  <div className="relative mt-8">
                    <div className="flex flex-col gap-4 font-[500]">
                      <a
                        href={"#Mpathtosupport2"}
                        onClick={() => setSideOpen(false)}
                      >
                        Path To Support
                      </a>
                      <a
                        href={"#Mhowitworks2"}
                        onClick={() => setSideOpen(false)}
                      >
                        How It Works
                      </a>
                      <a
                        href={"#Mourapproach2"}
                        onClick={() => setSideOpen(false)}
                      >
                        Our Approach
                      </a>
                      <a href={"#Mfaqs2"} onClick={() => setSideOpen(false)}>
                        FAQs
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-0 mt-6">
                    <div className="flex flex-row items-center justify-center gap-4">
                      <a href="https://www.linkedin.com/company/easecare/">
                        <img
                          src="/mobile/footer/linkedIn.svg"
                          alt="linkedIn"
                          className=""
                        />
                      </a>
                      <a href="https://www.facebook.com/easecare.ca">
                        <img
                          src="/mobile/footer/facebook.svg"
                          alt="facebook"
                          className=""
                        />
                      </a>
                      <a href="https://www.instagram.com/easecare.ca/">
                        <img
                          src="/mobile/footer/instagram.svg"
                          alt="instagram"
                          className=""
                        />
                      </a>
                    </div>

                    <a href="https://innovacare.tech/listenerhub/signup">
                      <button className="bg-[#5200FF] text-white px-[10px] h-[38px] my-0 min-w-[112px] rounded-full text-[15px] whitespace-nowrap">
                        Get Started
                      </button>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="mt-8 text-left text-xs">
                    © 2024 Attune. All rights reserved
                  </p>
                  <div className="my-4 border-[0.5px] border-[black] w-full" />
                  <p className="mt-4 text-left text-xs capitalize">
                    We would like to acknowledge the traditional, ancestral, and
                    unceded territory of the many First Nations, Metis, and
                    Inuit who have lived and cared for the lands known as Canada
                    for generations. We are grateful for the traditional
                    knowledge keepers and elders who are still with us today and
                    those who have gone before us. We make this acknowledgment
                    as an act of reconciliation and gratitude to those whose
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

        <img
          src="/mobile/logo.svg"
          alt="Attune Logo"
          className="w-[103px] h-[30px] object-contain"
        />
      </div>

      <a href="https://innovacare.tech/listenerhub/signup">
        <Button className="bg-[#FF6F61] rounded-full text-[15px]">
          Connect Now
        </Button>
      </a>
    </div>
  );
}

export default NavbarMobile;
