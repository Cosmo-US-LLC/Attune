import React from "react";
import { Button } from "@/components/ui/button";

function HeroMobile() {
  return (
    <div className="bg-[#e5ff7d] px-5 py-10 space-y-6">
      <div className="space-y-4">
        <div className="bg-white inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Life coaching for anxiety and wellbeing
        </div>

        <h1 className="font-miniature text-[42px] leading-[48px] text-[#0d0d0d]">
          Feeling held back?{" "}
          <span className="font-bold">Let&apos;s change that.</span>
        </h1>

        <p className="text-[15px] leading-[22px] text-[rgba(13,13,13,0.7)]">
          A skilled life coach doesn&apos;t tell you what to do. They help you
          see clearly, choose deliberately, and move forward with the confidence
          you&apos;ve always had inside you.
        </p>
      </div>

      <a href="https://signup.feelattune.com/sign-up">
        <Button className="w-full bg-[#5200ff] rounded-full text-[16px] font-semibold py-6">
          Start your journey →
        </Button>
      </a>

      <div className="flex items-start gap-3 bg-white/60 rounded-2xl p-4">
        <div className="bg-[#ff6f61] rounded-xl p-2 flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-[14px] text-[#0d0d0d]">
            Money-back guarantee
          </p>
          <p className="text-[13px] text-[rgba(13,13,13,0.55)] leading-[18px]">
            Not happy with your results?
            <br />
            We&apos;ll make it right, no questions asked.
          </p>
        </div>
      </div>

      <img
        src="/life-coaching/desktop/hero/character-group.webp"
        alt="Life coaching illustration"
        className="w-full rounded-2xl"
      />
    </div>
  );
}

export default HeroMobile;
