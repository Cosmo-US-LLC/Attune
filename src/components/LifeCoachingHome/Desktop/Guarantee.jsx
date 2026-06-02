import { Link } from "react-router-dom";

const G = "/life-coaching/desktop/guarantee";

/** Desktop Guarantee — Figma 4079:2813 */

function Guarantee() {
  return (
    <section className="bg-[#e5ff7d] px-4 py-8 sm:px-10 sm:py-10 lg:px-[80px] lg:py-[38px]">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="relative mx-auto flex min-h-[417px] w-full max-w-[1280px] flex-col items-center justify-center overflow-clip rounded-[30px] bg-white">
          {/* Six characters — Figma MCP raster exports */}
          <div className="pointer-events-none absolute left-[-10px] top-[194px] z-[1] hidden h-[142.509px] w-[155.766px] items-center justify-center xl:flex">
            <div className="-scale-y-100">
              <div className="relative h-[131.787px] w-[146.178px] flex-none rotate-[-175.64deg]">
                <img
                  src={`${G}/figma-pink.webp`}
                  alt=""
                  draggable={false}
                  decoding="async"
                  className="block object-contain max-w-none size-full"
                />
              </div>
            </div>
          </div>

          <img
            src={`${G}/figma-green.webp`}
            alt=""
            aria-hidden
            draggable={false}
            decoding="async"
            className="pointer-events-none absolute left-[916px] top-[315px] z-[1] hidden h-[131px] w-[160px] max-w-none object-contain xl:block"
          />

          <div className="pointer-events-none absolute left-[33px] top-[-17px] z-[1] hidden h-[154.899px] w-[174.662px] items-center justify-center xl:flex">
            <div className="relative h-[123.058px] w-[149.896px] flex-none rotate-[13.62deg]">
              <img
                src={`${G}/figma-top-left.webp`}
                alt=""
                draggable={false}
                decoding="async"
                className="object-contain absolute inset-0 max-w-none size-full"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute left-[1123px] top-[calc(50%+17.56px)] z-[1] hidden h-[164.129px] w-[173.802px] -translate-y-1/2 items-center justify-center xl:flex">
            <div className="relative h-[129.454px] w-[143.591px] flex-none rotate-[-16.06deg]">
              <img
                src={`${G}/figma-bottom-right.webp`}
                alt=""
                draggable={false}
                decoding="async"
                className="block object-contain max-w-none size-full"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute left-[1018px] top-[-64px] z-[1] hidden h-[174.7px] w-[174.968px] items-center justify-center xl:flex">
            <div className="relative h-[140.907px] w-[141.299px] flex-none rotate-[163.82deg]">
              <img
                src={`${G}/figma-top-right.webp`}
                alt=""
                draggable={false}
                decoding="async"
                className="object-contain absolute inset-0 max-w-none size-full"
              />
            </div>
          </div>

          <img
            src={`${G}/figma-bottom-left.webp`}
            alt=""
            aria-hidden
            draggable={false}
            decoding="async"
            className="pointer-events-none absolute left-[249px] top-[315px] z-[1] hidden h-[134px] w-[148px] max-w-none object-contain xl:block"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[800px] flex-col items-center gap-6 px-6 py-12 text-center sm:px-8 lg:gap-6 lg:py-10">
            <div className="flex flex-col gap-4 w-full lg:gap-4">
              <h2 className="mx-auto max-w-[759px] font-miniature text-[40px] font-bold leading-[48px] text-[#0d0d0d] sm:text-[48px] sm:leading-[56px] lg:text-[54px] lg:leading-[62px]">
                <span>{`Your results are `}</span>
                <span className="font-miniature italic font-bold text-[#ff6f61]">
                  guaranteed
                </span>
                <span className="font-bold text-[#ff6f61]">.</span>
              </h2>
              <p className="text-[16px] font-normal leading-[24px] text-[rgba(13,13,13,0.7)] sm:text-[18px] sm:leading-[26px]">
                We're committed to finding the right fit for you. If you're not
                happy after your first session, we'll either match you with a
                different coach with the next session on us or give you a full
                refund. No awkward conversations, no fine print.
              </p>
            </div>
            <Link
              to="/signup-anxiety"
              className="inline-flex h-[76px] w-full max-w-[340px] shrink-0 cursor-pointer items-center justify-center rounded-[39px] bg-[#5200ff] px-[21px] py-[18px] font-semibold text-[20px] capitalize tracking-[0.72px] text-white no-underline transition-colors hover:bg-[#4000cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5200ff]"
            >
              Get started, risk free →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guarantee;
