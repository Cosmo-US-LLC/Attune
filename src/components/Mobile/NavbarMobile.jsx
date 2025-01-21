import React from "react";
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
  return (
    <div className="bg-white h-[68px] flex justify-between items-center py-[14px] px-5">
      <div className="flex gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <button className="bg-[#F4EFEA] w-[40px] h-[40px] p-2 rounded-sm">
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
          <SheetContent side={"left"} className="bg-[#e5ddd4]">
            <SheetHeader>
              <SheetTitle>
                <img
                  src="/mobile/logo.svg"
                  alt="Attune Logo"
                  className="w-[83px] h-[44px] object-contain"
                />
              </SheetTitle>
              <SheetDescription hidden></SheetDescription>
            </SheetHeader>
            <div className="relative h-full max-h-[70dvh] bg-[#E5DDD4] py-[30px]">
              <div className="relative z-10 flex flex-col h-full">
                <div className="grow flex flex-col justify-between">
                  <div className="flex flex-row items-start justify-start">
                    <h1 className="text-left font-miniature text-[38px] leading-[38px]">
                      Talk to a <br />
                      professional
                    </h1>
                  </div>
                  {/* <p className="mt-6">
                    Looking for someone to listen? Our trained Listeners are
                    here to provide non-judgmental, compassionate support
                    whenever you need it. Whether you’re managing stress,
                    navigating life transitions, or simply craving a
                    connection, we’re here to help.
                  </p> */}
                  <div className="relative mt-8">
                    <div className="flex flex-col gap-4">
                      <a href={"#"}>Who we serve</a>
                      <a href={"#"}>our approach</a>
                      <a href={"#"}>What we do</a>
                      <a href={"#"}>resources</a>
                    </div>
                    {/* <img src="/mobile/footer/footer_heart.svg" alt="Time" /> */}
                  </div>
                  <div className="flex flex-row items-center justify-center gap-4 mt-8">
                    <img
                      src="/mobile/footer/facebook.svg"
                      alt="facebook"
                      className=""
                    />
                    <img
                      src="/mobile/footer/instagram.svg"
                      alt="instagram"
                      className=""
                    />
                    <img src="/mobile/footer/x.svg" alt="x" className="" />
                    <img
                      src="/mobile/footer/linkedIn.svg"
                      alt="linkedIn"
                      className=""
                    />
                    <img
                      src="/mobile/footer/youtube.svg"
                      alt="youtube"
                      className=""
                    />
                  </div>

                </div>
                <div>
                  <p className="mt-8 text-left text-xs">
                    © 2024 Attune. All rights reserved
                  </p>
                  <div className="my-4 border-[0.5px] border-[black] w-full" />
                  <p className="mt-4 text-left text-xs">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry. Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-[40%] h-[28dvh] z-0 flex justify-start items-center">
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
          className="w-[83px] h-[44px] object-contain"
        />
      </div>

      <Button className="bg-[#FF6F61] rounded-full text-[15px]">
        Connect Now
      </Button>
    </div>
  );
}

export default NavbarMobile;
