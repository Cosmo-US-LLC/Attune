import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <>
      {/* Mobile — Figma 4777:16168 */}
      <section className="relative overflow-hidden bg-[#E5FF7D] lg:hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.17] mix-blend-screen"
          aria-hidden="true"
        >
          <img
            src="/images/anxiety-page/v2/hero-bg-texture.webp"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <div className="relative mx-auto flex flex-col gap-12 px-4 py-12">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full items-center justify-center rounded-lg bg-white px-2 py-3.5">
                <p className="w-full text-center text-[14px] font-semibold uppercase leading-normal text-[#0d0d0d]">
                  ✦ Life coaching for anxiety and wellbeing
                </p>
              </div>

              <div className="flex w-full flex-col gap-3.5">
                <h1 className="font-miniature text-[56px] leading-[64px] text-[#0d0d0d]">
                  <span className="font-bold">Anxiety holding you back?</span>{" "}
                  <span className="font-normal">Let&apos;s change that.</span>
                </h1>
                <p className="text-[16px] leading-6 text-[rgba(13,13,13,0.7)]">
                  No stigma. No diagnosis needed. Just real, one-on-one coaching
                  with someone who gets what anxiety feels like and knows how to
                  help you move through it. On your terms, at your pace.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-2">
              <Link
                to="/signup-anxiety"
                className="inline-flex items-center justify-center rounded-full bg-[#5200FF] px-5 py-3.5 text-[14px] font-semibold leading-6 text-white transition-opacity hover:opacity-90"
              >
                Book a Free 15-Min Discovery Call →
              </Link>
              <span className="font-miniature text-[20px] leading-7 text-black">
                Starting from $39
              </span>
            </div>
          </div>

          <div className="relative h-[314px] w-full shrink-0">
            <img
              src="/images/anxiety-page/v2/hero-curve-1.svg"
              alt=""
              className="pointer-events-none absolute left-1/2 top-[-82px] h-[241px] w-[532px] max-w-none -translate-x-1/2 -scale-y-100"
              aria-hidden="true"
            />
            <img
              src="/images/anxiety-page/v2/hero-curve-2.svg"
              alt=""
              className="pointer-events-none absolute left-1/2 top-[71px] h-[350px] w-[484px] max-w-none -translate-x-1/2"
              aria-hidden="true"
            />
            <div className="absolute left-[-10px] top-[-29px] h-[343px] w-[355px]">
              <img
                src="/images/anxiety-page/v2/hero-frame.svg"
                alt=""
                className="absolute left-[38px] top-[25px] h-[318px] w-[317px]"
                aria-hidden="true"
              />
              <div className="absolute left-0 top-0 h-[343px] w-[355px] overflow-hidden">
                <img
                  src="/images/anxiety-page/v2/hero-woman.webp"
                  alt="Woman on a coaching call, smiling with confidence"
                  className="h-[109%] w-[111%] max-w-none object-cover object-top"
                />
              </div>
              <img
                src="/images/anxiety-page/v2/hero-phone.svg"
                alt=""
                className="pointer-events-none absolute right-[12px] top-[-18px] h-[40px] w-auto"
                aria-hidden="true"
              />
            </div>
            <img
              src="/images/anxiety-page/v2/hero-phone-deco.svg"
              alt=""
              className="pointer-events-none absolute left-[-18px] top-[-29px] h-[177px] w-[153px] rotate-[20deg]"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      {/* Desktop — unchanged */}
      <section className="relative hidden h-[680px] overflow-hidden bg-[#E5FF7D] lg:block">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.17] mix-blend-screen"
          aria-hidden="true"
        >
          <img
            src="/images/anxiety-page/v2/hero-bg-texture.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-row items-center justify-between px-[114px]">
          <div className="flex w-full max-w-[700px] flex-col gap-6">
            <div className="flex flex-col gap-5">
              <h1 className="font-miniature text-[72px] leading-[83px] text-[#0d0d0d]">
                <span className="font-bold">Anxiety holding you back?</span>{" "}
                <span className="font-normal">Let&apos;s change that.</span>
              </h1>
              <p className="text-[18px] leading-[1.25] text-[rgba(13,13,13,0.7)]">
                No stigma. No diagnosis needed. Just real, one-on-one coaching
                with someone who gets what anxiety feels like and knows how to
                help you move through it. On your terms, at your pace.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/signup-anxiety"
                className="inline-flex items-center justify-center rounded-[39px] bg-[#5200FF] px-[22px] py-6 text-[20px] font-semibold capitalize tracking-[0.72px] text-white transition-opacity hover:opacity-90"
              >
                Book a Free 15-Min Discovery Call →
              </Link>
              <span className="font-miniature text-[24px] leading-8 text-black">
                Starting from $39
              </span>
            </div>
          </div>

          <div className="relative h-[453px] w-[455px] shrink-0">
            <img
              src="/images/anxiety-page/v2/hero-curve-1.svg"
              alt=""
              className="pointer-events-none absolute left-[calc(50%+151px)] top-[-230px] h-[454px] w-[1001px] max-w-none -translate-x-1/2 -scale-y-100"
              aria-hidden="true"
            />
            <img
              src="/images/anxiety-page/v2/hero-curve-2.svg"
              alt=""
              className="pointer-events-none absolute left-[calc(50%+106px)] top-[60px] h-[659px] w-[911px] max-w-none -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="absolute left-[-58px] top-[-42px] h-[495px] w-[512px]">
              <img
                src="/images/anxiety-page/v2/hero-frame.svg"
                alt=""
                className="absolute left-[55px] top-[36px] h-[459px] w-[458px]"
                aria-hidden="true"
              />
              <div className="absolute left-0 top-0 h-[471px] w-[463px] overflow-hidden">
                <img
                  src="/images/anxiety-page/v2/hero-woman.webp"
                  alt="Woman on a coaching call, smiling with confidence"
                  className="h-[109%] w-[111%] max-w-none object-cover object-top"
                />
              </div>
              <img
                src="/images/anxiety-page/v2/hero-phone.svg"
                alt=""
                className="pointer-events-none absolute right-[3px] top-[-47px] h-[64px] w-auto"
                aria-hidden="true"
              />
            </div>

            <img
              src="/images/anxiety-page/v2/hero-phone-deco.svg"
              alt=""
              className="pointer-events-none absolute left-[-69px] top-[-42px] h-[255px] w-[221px] rotate-[20deg]"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </>
  );
}
