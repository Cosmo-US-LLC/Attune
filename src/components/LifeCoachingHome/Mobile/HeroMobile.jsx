import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CertifiedLifeCoachesSeal from "../CertifiedLifeCoachesSeal";

/** Figma Hero — Content Container 4170:2579 (~364.41×371.5); Background Shapes 4170:2556 (358×358) layered beneath */
function HeroMobile() {
  return (
    <div className="relative flex flex-col gap-8 overflow-x-clip bg-[#e5ff7d] px-4 pt-12">
      <div className="relative z-[2] flex w-full max-w-[358px] flex-col gap-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="rounded-[8px] bg-white px-[8px] py-[14px]">
              <p className="text-center text-[14px] font-semibold uppercase leading-normal text-[#0d0d0d]">
                ✦ Life coaching for anxiety and wellbeing
              </p>
            </div>

            <div className="flex flex-col gap-[14px]">
              <h1 className="font-miniature text-[56px] leading-[64px] text-[#0d0d0d]">
                <span className="font-normal">Feeling held back? </span>
                <span className="font-bold">Let&apos;s change that.</span>
              </h1>

              <p className="font-inter text-[16px] font-normal leading-6 text-[rgba(13,13,13,0.7)]">
                A skilled life coach doesn&apos;t tell you what to do. They help you see
                clearly, choose deliberately, and move forward with the confidence
                you&apos;ve always had inside you.
              </p>
            </div>
          </div>

          <Link to="/signup-anxiety" className="w-fit">
            <Button className="h-auto rounded-[100px] bg-[#5200ff] px-5 py-[14px] font-inter text-[14px] font-semibold leading-6 text-white whitespace-pre">
              {`Start Your Journey  →`}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-[4.8px] bg-[#ff6f61] px-[12.6px] py-[10.8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[31.2px] w-[31.2px]"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <g stroke="#fff" strokeLinecap="round" strokeWidth="1.5" fill="none">
                <path
                  strokeLinejoin="round"
                  d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2C7.9 2 4.375 4.468 2.832 8M2 4.5l.5 4l4-1"
                />
                <path d="M14.726 10.06c-.1-.762-.973-1.995-2.545-1.995c-1.826 0-2.594 1.014-2.75 1.52c-.243.678-.195 2.071 1.946 2.223c2.675.19 3.747.507 3.61 2.147c-.136 1.64-1.627 1.995-2.806 1.957s-3.107-.58-3.182-2.04M11.994 6.5v1.57m0 7.833V17.5" />
              </g>
            </svg>
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <p className="text-[14px] font-semibold capitalize leading-[18.2px] text-[#0d0d0d]">
              Money-back guarantee
            </p>
            <p className="text-[13px] leading-[1.25] text-[rgba(13,13,13,0.55)]">
              Not happy with your results?
              <br />
              We&apos;ll make it right, no questions asked.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-[1] mx-auto w-full max-w-[390px]">
        <div className="relative aspect-[381/372] w-full">
          <img
            src="/figma/home-mobile/hero-bg-shapes.webp"
            alt=""
            className="pointer-events-none absolute left-1/2 z-0 w-[380px] max-w-[calc(100%-8px)] -translate-x-1/2 select-none"
          />
          <img
            src="/figma/home-mobile/hero-characters-figma.webp"
            alt=""
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full select-none object-contain object-bottom"
          />
          <div className="pointer-events-none absolute left-1/2 top-[62%] z-[2] -translate-x-1/2 -translate-y-1/2">
            <CertifiedLifeCoachesSeal />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroMobile;
