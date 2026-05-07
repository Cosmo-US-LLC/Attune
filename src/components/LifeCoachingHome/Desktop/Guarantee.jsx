import React from "react";

function Guarantee() {
  return (
    <div className="bg-[#e5ff7d] px-[80px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-center">
        <div className="bg-white rounded-[30px] overflow-hidden w-full max-w-[1280px] min-h-[417px] relative flex items-center justify-center px-[40px] py-[60px]">
          {/* Decorative character images (corners) */}
          <img
            src="/life-coaching/desktop/guarantee/character-1.webp"
            alt=""
            className="absolute left-[-10px] bottom-[50px] w-[140px] h-[130px] object-contain opacity-90 rotate-[-4deg]"
          />
          <img
            src="/life-coaching/desktop/guarantee/character-2.webp"
            alt=""
            className="absolute left-[33px] top-[-17px] w-[150px] h-[123px] object-contain rotate-[14deg]"
          />
          <img
            src="/life-coaching/desktop/guarantee/character-3.webp"
            alt=""
            className="absolute left-[249px] bottom-[40px] w-[148px] h-[134px] object-contain"
          />
          <img
            src="/life-coaching/desktop/guarantee/character-4.webp"
            alt=""
            className="absolute right-[180px] bottom-[20px] w-[160px] h-[131px] object-contain"
          />
          <img
            src="/life-coaching/desktop/guarantee/character-5.webp"
            alt=""
            className="absolute right-[120px] top-[-64px] w-[141px] h-[141px] object-contain rotate-[164deg]"
          />
          <img
            src="/life-coaching/desktop/guarantee/character-6.webp"
            alt=""
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[144px] h-[129px] object-contain rotate-[-16deg]"
          />

          {/* Main content */}
          <div className="flex flex-col items-center gap-[27px] max-w-[818px] text-center relative z-10">
            <h2 className="font-miniature text-[55px] leading-[67px] text-[#0d0d0d]">
              Your results are{" "}
              <span className="font-miniature italic text-[#ff6f61]">guaranteed</span>
              <span className="text-[#ff6f61]">.</span>
            </h2>
            <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
              We believe in coaching deeply enough to put our money behind it. If you complete your
              sessions and don&apos;t feel you&apos;ve made real progress, we&apos;ll offer a full
              refund — no awkward conversations, no fine print. Just a genuine commitment to your
              growth.
            </p>
            <a href="https://signup.feelattune.com/sign-up">
              <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize px-[32px] py-[20px] rounded-[39px] hover:bg-[#4000cc] transition-colors w-[340px]">
                Get started, risk free →
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
