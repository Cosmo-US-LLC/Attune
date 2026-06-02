import { Link } from "react-router-dom";
import heroImage from "../../../assets/images/home_hero_emoji.webp";
import CertifiedLifeCoachesSeal from "../CertifiedLifeCoachesSeal";

function Hero() {
  return (
    <div className="relative flex min-h-[680px] items-center overflow-hidden bg-[#e5ff7d] px-4">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-30 lg:flex-row lg:items-center lg:gap-12">
        {/* Left content — Figma 4158:1611 */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-[27px]">
            <div className="inline-flex items-center justify-center self-start rounded-[39px] bg-white px-[20px] py-[16px]">
              <span className="text-center text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
                ✦ Life coaching for anxiety and wellbeing
              </span>
            </div>

            <div className="font-miniature text-[#0d0d0d]">
              <p className="text-[72px] font-normal leading-[80px]">
                Feeling held back?
              </p>
              <p className="text-[72px] font-bold leading-[80px]">
                Let&apos;s change that.
              </p>
            </div>

            <p className="max-w-[607px] text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
              A skilled life coach doesn&apos;t tell you what to do. They help
              you see clearly, choose deliberately, and move forward with the
              confidence you&apos;ve always had inside you.
            </p>

            <Link
              to="/signup-anxiety"
              className="inline-flex h-[76px] shrink-0 items-center justify-center self-start rounded-[39px] bg-[#5200ff] px-6 py-[18px] text-[20px] font-semibold capitalize tracking-[0.72px] text-white no-underline transition-colors hover:bg-[#4000cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5200ff]"
            >
              Start your journey →
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex size-[80px] flex-shrink-0 items-center justify-center rounded-[8px] bg-[#ff6f61] p-[14px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-[52px] w-[52px] text-white"
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
            <div className="flex min-w-0 flex-col gap-1 leading-[0]">
              <p className="text-[16px] font-semibold capitalize leading-[24px] text-[#0d0d0d]">
                Money-back guarantee
              </p>
              <p className="text-[14px] font-normal leading-[22px] text-[rgba(13,13,13,0.55)]">
                Not happy with your results?
                <br />
                We&apos;ll make it right, no questions asked.
              </p>
            </div>
          </div>
        </div>

        <div className="flex overflow-hidden relative flex-1 justify-end items-end pt-16">
          <div className="relative h-auto w-full max-w-[600px]">
            <img
              src={heroImage}
              alt="People expressing different moods aligned with coaching support"
              className="object-contain w-full h-auto"
            />
            <div className="pointer-events-none absolute left-1/2 top-[62%] z-10 -translate-x-1/2 -translate-y-1/2">
              <CertifiedLifeCoachesSeal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
