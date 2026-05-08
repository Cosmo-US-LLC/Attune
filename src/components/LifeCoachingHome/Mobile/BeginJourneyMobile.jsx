import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function BeginJourneyMobile() {
  return (
    <div className="px-5 py-10 space-y-6 bg-white">
      <img
        src="/life-coaching/desktop/begin-journey/begin_image.webp"
        alt="Person starting their coaching journey"
        className="w-full rounded-[20px] object-cover h-full"
      />

      <div className="pb-4 space-y-4 text-center">
        <h2 className="font-miniature text-[40px] font-semibold leading-[46px] text-black">
          Begin Your Journey
          <br />
          <span className="italic">Today!</span>
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(0,0,0,0.65)]">
          You don&apos;t need to wait for the right moment. The right moment is
          now — and your coach will meet you exactly where you are.
        </p>
      </div>

      <Link to="/signup-anxiety">
        <Button className="w-full bg-[#5200ff] rounded-full font-semibold py-5 text-[15px]">
          Start your journey →
        </Button>
      </Link>
    </div>
  );
}

export default BeginJourneyMobile;
