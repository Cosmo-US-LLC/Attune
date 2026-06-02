import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

/** Lime stroke — Figma 4193:1204. z-1 under WebP (z-2); pt-12 clears a white band so the crest reads above the photo. */
function BeginJourneySwoosh() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[calc(50%-86px)] top-0 z-[1] h-[176px] w-[768px] max-w-none -translate-x-1/2 select-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="768"
        height="176"
        viewBox="0 0 390 186"
        fill="none"
        className="size-full max-w-none text-[#E5FF7D]"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M-275 122.19C-234.473 130.287 -120.874 129.626 9.39205 62.2408C9.47986 62.1954 9.56528 62.1432 9.64574 62.0858C114.612 -12.8384 286.048 -10.3527 335.402 48.217C336.101 49.0466 336.008 50.243 335.216 50.9847C280.323 102.402 212.442 197.884 370.52 178.423C529.936 158.797 500.248 84.4228 465.477 49.689"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function BeginJourneyMobile() {
  return (
    <div className="relative overflow-x-clip bg-white">
      <div className="relative z-[30] px-5 pb-6 pt-10">
        <h2 className="flex flex-col gap-2 font-miniature text-black">
          <span className="text-[40px] font-normal leading-[48px]">
            Begin Your Journey
          </span>
          <span className="text-[64px] italic leading-[72px]">Today!</span>
        </h2>

        <div className="mt-6">
          <Link to="/signup-anxiety">
            <Button className="h-auto rounded-[100px] bg-[#5200ff] px-5 py-3.5 font-inter text-[14px] font-semibold leading-6 text-white">
              Start Your Journey →
            </Button>
          </Link>
        </div>
      </div>

      {/* Collage: swoosh under image; padding-top = visible crest on white before the photo covers the stroke */}
      <div className="relative z-10 w-full bg-white">
        <div className="relative pt-16">
          <BeginJourneySwoosh />
          <img
            src="/figma/home-mobile/begin-journey-illustration.webp"
            alt=""
            className="relative z-[2] block h-auto w-full max-w-none origin-left border-0 bg-white outline-none ring-0 [transform:translateZ(0)_scaleX(1.008)]"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

export default BeginJourneyMobile;
