function Hero() {
  return (
    <div className="bg-[#e5ff7d] relative overflow-hidden min-h-[680px] flex items-center px-[113px] py-[60px]">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex flex-col gap-[32px] max-w-[607px]">
          <div className="flex flex-col gap-[27px]">
            <div className="bg-white inline-flex items-center justify-center px-[21px] py-[14px] rounded-[39px] self-start">
              <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
                ✦ Life coaching for anxiety and wellbeing
              </span>
            </div>

            <div className="font-miniature text-[#0d0d0d] leading-[83px]">
              <p className="text-[72px] font-normal leading-[83px]">
                Feeling held back?
              </p>
              <p className="text-[72px] font-bold leading-[83px]">
                Let&apos;s change that.
              </p>
            </div>

            <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25] max-w-[600px]">
              A skilled life coach doesn&apos;t tell you what to do. They help
              you see clearly, choose deliberately, and move forward with the
              confidence you&apos;ve always had inside you.
            </p>

            <a
              href="https://signup.feelattune.com/sign-up"
              className="self-start"
            >
              <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] px-[32px] py-[20px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
                Start your journey →
              </button>
            </a>
          </div>

          {/* Money-back guarantee badge */}
          <div className="flex items-center gap-[11px]">
            <div className="bg-[#ff6f61] rounded-[8px] p-[14px] flex-shrink-0 flex items-center justify-center size-[80px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[52px] h-[52px] text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-[6px]">
              <p className="font-semibold text-[16px] text-[#0d0d0d] leading-[18px] capitalize">
                Money-back guarantee
              </p>
              <p className="text-[14px] text-[rgba(13,13,13,0.55)] leading-[1.25]">
                Not happy with your results?
                <br />
                We&apos;ll make it right, no questions asked.
              </p>
            </div>
          </div>
        </div>

        {/* Right illustration — 5 coloured bars + 5 characters (node 4158:1628) */}
        <div className="relative flex-shrink-0 w-[585px] h-[596px]">
          {/* Coloured transparent vertical bars */}
          <div className="absolute bg-[rgba(255,106,1,0.26)]  w-[111px] h-[459px] left-[55px]  top-[137px]" />
          <div className="absolute bg-[rgba(68,245,221,0.42)]  w-[127px] h-[459px] left-[155px] top-[137px]" />
          <div className="absolute bg-[rgba(251,121,223,0.37)] w-[194px] h-[459px] left-[196px] top-[137px]" />
          <div className="absolute bg-[rgba(255,210,63,0.38)]  w-[135px] h-[459px] left-[333px] top-[137px]" />
          <div className="absolute bg-[rgba(150,173,240,0.32)] w-[107px] h-[459px] left-[422px] top-[137px]" />

          {/* Characters sitting above the bars */}
          {/* character-1: small yellow — far left */}
          <img
            src="/life-coaching/desktop/hero/character-1.webp"
            alt="Character 1"
            className="absolute w-[128px] object-contain"
            style={{ left: 42, top: 71 }}
          />
          {/* character-2: teal — second from left */}
          <img
            src="/life-coaching/desktop/hero/character-2.webp"
            alt="Character 2"
            className="absolute w-[167px] object-contain"
            style={{ left: 107, top: 49 }}
          />
          {/* character-5: pink large — centre */}
          <img
            src="/life-coaching/desktop/hero/character-5.webp"
            alt="Character 5"
            className="absolute w-[224px] object-contain"
            style={{ left: 181, top: 0 }}
          />
          {/* character-4: orange — second from right */}
          <img
            src="/life-coaching/desktop/hero/character-4.webp"
            alt="Character 4"
            className="absolute w-[167px] object-contain"
            style={{ left: 337, top: 49 }}
          />
          {/* character-3: blue — far right (mirrored) */}
          <img
            src="/life-coaching/desktop/hero/character-3.webp"
            alt="Character 3"
            className="absolute w-[127px] object-contain scale-x-[-1]"
            style={{ left: 420, top: 72 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
