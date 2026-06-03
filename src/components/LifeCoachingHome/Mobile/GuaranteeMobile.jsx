import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function GuaranteeMobile() {
  return (
    <div className="flex items-center justify-center bg-[#e5ff7d] px-5 py-16">
      <div className="relative w-full min-w-0 flex-1 overflow-clip rounded-[30px] bg-white px-6 pb-20 pt-[100px]">
        <div className="relative z-[1] flex w-full flex-col items-center justify-center gap-4">
          <h2 className="section-heading w-full">
            <span>Your results are </span>
            <span className="heading-accent">guaranteed</span>
            {/* <span className="text-[#ff6f61]">.</span> */}
          </h2>
          <p className="w-full text-center font-inter text-[16px] font-normal leading-6 text-[rgba(13,13,13,0.7)]">
            We're committed to finding the right fit for you. If you're not
            happy after your first session, we'll either match you with a
            different coach with the next session on us or give you a full
            refund. No awkward conversations, no fine print.
          </p>
          <Link
            to="/signup-anxiety"
            className="flex justify-center mt-1 w-full shrink-0"
          >
            <Button className="h-auto rounded-[100px] bg-[#5200ff] px-5 py-3.5 font-inter text-[14px] font-semibold leading-6 text-white">
              Get started, risk free →
            </Button>
          </Link>
        </div>

        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden>
          {/* Top-left */}
          <div className="absolute left-[-10px] top-0 flex h-[77.45px] w-[87.33px] items-center justify-center">
            <div className="flex-none rotate-[13.62deg]">
              <div className="relative h-[61.53px] w-[74.95px]">
                <img
                  src="/figma/home-mobile/guarantee-deco-01.webp"
                  alt=""
                  className="block object-contain absolute inset-0 max-w-none size-full"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          {/* Top-right */}
          <div className="absolute right-[8.52px] top-[-28px] flex h-[87.35px] w-[87.48px] items-center justify-center">
            <div className="flex-none rotate-[163.82deg]">
              <div className="relative h-[70.45px] w-[70.65px]">
                <img
                  src="/figma/home-mobile/guarantee-deco-02.webp"
                  alt=""
                  className="block object-contain absolute inset-0 max-w-none size-full"
                  draggable={false}
                />
              </div>
            </div>
          </div>
          {/* Mid-left */}
          <div className="absolute left-[-24px] top-[372px] flex h-[71.25px] w-[77.88px] items-center justify-center">
            <div className="flex-none -scale-y-100 rotate-[-175.64deg]">
              <div className="relative h-[65.89px] w-[73.09px]">
                <div className="absolute inset-[0_0_0_-0.68%]">
                  <img
                    src="/figma/home-mobile/guarantee-deco-03.webp"
                    alt=""
                    className="block object-contain max-w-none size-full"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Mid-right */}
          <div className="absolute left-[calc(50%+154.45px)] top-[368px] flex h-[82.06px] w-[86.9px] -translate-x-1/2 items-center justify-center">
            <div className="flex-none rotate-[-16.06deg]">
              <div className="relative h-[64.73px] w-[71.79px]">
                <div className="absolute inset-[0_0_0_-0.68%]">
                  <img
                    src="/figma/home-mobile/guarantee-deco-04.webp"
                    alt=""
                    className="block object-contain max-w-none size-full"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom (center-ish) */}
          <div className="absolute bottom-[-4.8px] right-[264.9px] h-[66.8px] w-[74.1px]">
            <div className="absolute inset-[0_0_0_-0.68%]">
              <img
                src="/figma/home-mobile/guarantee-deco-05.webp"
                alt=""
                className="block object-cover max-w-none size-full"
                draggable={false}
              />
            </div>
          </div>
          {/* Bottom-right */}
          <div className="absolute bottom-[-2.65px] right-[32px] h-[65.65px] w-[79.97px]">
            <div className="absolute inset-[0_0_0_-0.47%]">
              <img
                src="/figma/home-mobile/guarantee-deco-06.webp"
                alt=""
                className="block object-cover max-w-none size-full"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeMobile;
