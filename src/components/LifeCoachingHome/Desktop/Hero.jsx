import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/home_hero_emoji.webp";

function Hero() {
  return (
    <div className="bg-[#e5ff7d] relative overflow-hidden min-h-[680px] flex items-center px-[113px]">
      <div className="max-w-[1440px] mx-auto w-full flex items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex flex-col gap-[32px]">
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

            <Link to="/signup-anxiety" className="self-start">
              <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] px-[32px] py-[20px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
                Start your journey →
              </button>
            </Link>
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

        {/* <div className="relative flex-1 flex-shrink-0">
          <img
            src={heroImage}
            alt="Hero"
            className="absolute right-0 -bottom-[300px]  object-cover"
          />
        </div> */}
        {/* Right illustration */}
        <div className="relative flex items-end justify-end flex-1 pt-12 overflow-hidden">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
