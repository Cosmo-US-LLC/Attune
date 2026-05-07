import React from "react";
import { Button } from "@/components/ui/button";

function GuaranteeMobile() {
  return (
    <div className="bg-[#e5ff7d] px-5 py-10">
      <div className="bg-white rounded-[24px] px-6 py-10 space-y-5 text-center relative overflow-visible">
        <img
          src="/life-coaching/desktop/guarantee/character-1.webp"
          alt=""
          className="absolute left-[-16px] bottom-[20px] w-[80px] h-[74px] object-contain rotate-[-4deg]"
        />
        <img
          src="/life-coaching/desktop/guarantee/character-6.webp"
          alt=""
          className="absolute right-[-16px] top-[20px] w-[80px] h-[74px] object-contain rotate-[-16deg]"
        />
        <h2 className="font-miniature text-[32px] leading-[38px] text-[#0d0d0d]">
          Your results are{" "}
          <span className="italic text-[#ff6f61]">guaranteed</span>.
        </h2>
        <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
          We believe in coaching deeply enough to put our money behind it. If
          you complete your sessions and don&apos;t feel you&apos;ve made real
          progress, we&apos;ll offer a full refund — no awkward conversations,
          no fine print. Just a genuine commitment to your growth.
        </p>
        <a href="https://signup.feelattune.com/sign-up">
          <Button className="w-full bg-[#5200ff] rounded-full font-semibold py-5 text-[15px]">
            Get started, risk free →
          </Button>
        </a>
      </div>
    </div>
  );
}

export default GuaranteeMobile;
