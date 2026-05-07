import React from "react";

function BeginJourney() {
  return (
    <div className="bg-white relative overflow-hidden min-h-[484px] flex items-center">
      {/* Decorative wavy background line */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 484"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-20 242 C200 100 400 380 720 242 C1040 100 1240 380 1460 242"
            stroke="#e5ff7d"
            strokeWidth="140"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-[114px] py-[60px] flex items-center justify-between gap-12 relative z-10">
        {/* Left — illustration */}
        <div className="flex-shrink-0 w-[351px] h-[352px]">
          <img
            src="/life-coaching/desktop/begin-journey/photo-main.webp"
            alt="Person at laptop beginning their journey"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>

        {/* Right — copy */}
        <div className="flex flex-col gap-[37px] max-w-[514px]">
          <div className="flex flex-col gap-[10px] text-black">
            <p className="font-miniature text-[50px] leading-[69px]">Begin Your Journey</p>
            <p className="font-miniature italic text-[92px] leading-[normal]">Today!</p>
          </div>
          <a href="https://signup.feelattune.com/sign-up" className="self-start">
            <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize px-[32px] py-[16px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
              Start your journey →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BeginJourney;
