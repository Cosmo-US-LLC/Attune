import React from "react";
import { Button } from "@/components/ui/button";

function BeginJourneyMobile() {
  return (
    <div className="bg-white px-5 py-10 space-y-6">
      <img
        src="/life-coaching/desktop/begin-journey/photo-main.webp"
        alt="Person starting their coaching journey"
        className="w-full rounded-[20px] object-cover max-h-[260px]"
      />

      <div className="space-y-4 text-center">
        <h2 className="font-miniature text-[40px] leading-[46px] text-black">
          Begin Your Journey
          <br />
          <span className="italic">Today!</span>
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(0,0,0,0.65)]">
          You don&apos;t need to wait for the right moment. The right moment is
          now — and your coach will meet you exactly where you are.
        </p>
      </div>

      <a href="https://signup.feelattune.com/sign-up">
        <Button className="w-full bg-[#5200ff] rounded-full font-semibold py-5 text-[15px]">
          Start your journey →
        </Button>
      </a>
    </div>
  );
}

export default BeginJourneyMobile;
