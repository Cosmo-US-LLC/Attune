import { Link } from "react-router-dom";

const MONEY_BACK_ICON = `<svg preserveAspectRatio="none" width="40" height="40" overflow="visible" style="display: block;" viewBox="0 0 37.5001 37.5" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><path id="Vector" d="M1.25013 18.75C1.25013 28.4153 9.08488 36.25 18.7501 36.25C28.4154 36.25 36.2501 28.4153 36.2501 18.75C36.2501 9.08475 28.4154 1.25 18.7501 1.25C11.5751 1.25 5.40638 5.569 2.70613 11.75M1.25013 5.625L2.12513 12.625L9.12513 10.875" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path id="Vector_2" d="M23.5187 15.355C23.3437 14.0215 21.816 11.8637 19.065 11.8637C15.8694 11.8637 14.5254 13.6382 14.2524 14.5237C13.8272 15.7102 13.9112 18.148 17.658 18.414C22.3392 18.7465 24.2152 19.3012 23.9755 22.1712C23.7375 25.0412 21.1282 25.6625 19.065 25.596C17.0017 25.5295 13.6277 24.581 13.4964 22.026M18.7377 9.125V11.8725M18.7377 25.5802V28.375" stroke="white" stroke-width="2.5" stroke-linecap="round"/></g></svg>`;

function MoneyBackGuarantee() {
  return (
    <div className="flex w-full max-w-[351px] items-center gap-[14px]">
      <div className="flex size-16 shrink-0 items-center justify-center rounded-[8px] bg-[#FF6F61] px-[21px] py-[18px]">
        <div
          className="h-[40px] w-[40px] [&>svg]:block"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: MONEY_BACK_ICON }}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
        <p className="font-inter text-[16px] font-semibold capitalize leading-[18.2px] text-[#0d0d0d]">
          Money-back guarantee
        </p>
        <p className="font-inter text-[14px] leading-[1.25] text-[rgba(13,13,13,0.55)]">
          Risk-free service with a satisfaction guarantee.
        </p>
      </div>
    </div>
  );
}

function CertifiedLifeCoachesBadge({ className = "size-32 shrink-0" }) {
  return (
    <img
      src="/images/anxiety-page/v2/certified-life-coaches-badge.png"
      alt="Certified Life Coaches"
      className={className}
      draggable={false}
    />
  );
}

function HeroGuarantees({ badgeClassName }) {
  return (
    <div className="flex w-full items-center gap-4">
      <MoneyBackGuarantee />
      <CertifiedLifeCoachesBadge className={badgeClassName} />
    </div>
  );
}

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

        <div className="relative mx-auto flex flex-col gap-[80px] px-4 py-12">
          <div className="flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-3">
              <div className="flex w-full items-center justify-center rounded-lg bg-white px-2 py-3.5">
                <p className="w-full text-center text-[14px] font-semibold uppercase leading-normal text-[#0d0d0d]">
                  ✦ Life coaching for anxiety and wellbeing
                </p>
              </div>

              <div className="flex w-full flex-col gap-3.5">
                <h1 className="font-miniature text-[56px] leading-[64px] text-[#0d0d0d]">
                  <span className="font-bold">Anxiety holding you back? </span>
                  <span className="font-normal">Let&apos;s change that.</span>
                </h1>
                <p className="text-[16px] leading-6 text-[rgba(13,13,13,0.7)]">
                  No stigma. No diagnosis needed. Just real, one-on-one coaching
                  with someone who gets what anxiety feels like and knows how to
                  help you move through it. On your terms, at your pace.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-6">
              <Link
                to="/signup-anxiety"
                className="inline-flex items-center justify-center rounded-full bg-[#5200FF] px-5 py-3.5 text-[14px] font-semibold leading-6 text-white transition-opacity hover:opacity-90"
              >
                Book a Free 15-Min Match Call →
              </Link>

              <HeroGuarantees badgeClassName="size-24 shrink-0 sm:size-32" />

              {/* Starting from $39 */}
              {/* <span className="font-miniature text-[20px] leading-7 text-black">Starting from $39</span> */}
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
            </div>
            <img
              src="/images/anxiety-page/v2/hero-phone-deco.svg"
              alt=""
              className="pointer-events-none absolute left-[-18px] top-[-29px] h-[177px] w-[153px] rotate-[20deg]"
              aria-hidden="true"
            />
            <img
              src="/images/anxiety-page/v2/hero-clouds.svg"
              alt=""
              className="pointer-events-none absolute right-[15px] top-[-50px] z-10 h-[45px] w-[82px]"
              aria-hidden="true"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* Desktop — Figma 4920:484 */}
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
          <div className="flex w-[600px] flex-col items-start gap-6">
            <div className="flex w-full flex-col gap-5">
              <h1 className="font-miniature text-[72px] leading-[83px] text-[#0d0d0d]">
                <span className="font-bold">{`Anxiety holding you back? `}</span>
                <span className="font-normal">{`Let's change that.`}</span>
              </h1>
              <p className="text-[18px] leading-[1.25] text-[rgba(13,13,13,0.7)]">
                No stigma. No diagnosis needed. Just real, one-on-one coaching
                with someone who gets what anxiety feels like and knows how to
                help you move through it. On your terms, at your pace.
              </p>
            </div>

            <div className="flex flex-col items-start gap-8">
              <div className="flex items-center gap-4">
                <Link
                  to="/signup-anxiety"
                  className="inline-flex items-center justify-center rounded-[39px] bg-[#5200FF] px-[22px] py-6 text-[20px] font-semibold capitalize tracking-[0.72px] text-white transition-opacity hover:opacity-90"
                >
                  Book a Free 15-Min Match Call →
                </Link>
                {/* Starting from $39 */}
                {/* <span className="font-miniature text-[24px] leading-8 text-black">Starting from $39</span> */}
              </div>

              <HeroGuarantees badgeClassName="size-32 shrink-0" />
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
            </div>

            <img
              src="/images/anxiety-page/v2/hero-phone-deco.svg"
              alt=""
              className="pointer-events-none absolute left-[-69px] top-[-42px] h-[255px] w-[221px] rotate-[20deg]"
              aria-hidden="true"
            />
            <img
              src="/images/anxiety-page/v2/hero-clouds.svg"
              alt=""
              className="pointer-events-none absolute left-[333px] top-[-89px] z-10 h-[65px] w-[119px]"
              aria-hidden="true"
              draggable={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}
