import { Link } from "react-router-dom";

const tags = [
  "More self-awareness",
  "Clearer decisions",
  "Deeper confidence",
  "Better relationships",
  "Real momentum",
  "A version of you you're proud of",
  "Less going in circles",
  "More of what actually matters",
];

/** Desktop Why section — matches Figma 4087:128 (1440 frame, 1212 content, overlaid union). */
function WhyChooseCoaching() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-[1440px] overflow-x-clip overflow-y-visible px-4 pb-14 pt-10 sm:px-6 lg:px-[80px]">
        {/* Header 4087:129 — w-[800px] centered at x=320 in 1440 */}
        <div className="pt-[60px] pb-8 flex flex-col items-center gap-8">
          <div className="rounded-[39px] bg-[#e5ff7d] px-5 py-4 shrink-0">
            <span className="inline-block text-center font-semibold text-[16px] uppercase leading-normal tracking-[0.72px] text-[#0d0d0d]">
              ✦ Why choose coaching
            </span>
          </div>
          <div className="flex w-full max-w-[800px] flex-col gap-6 text-center">
            <h2 className="font-miniature text-[54px] font-bold leading-[62px] text-[#0d0d0d]">
              Coaching meets you where you are and helps you go{" "}
              <span className="font-bold text-[#ff6f61]">further</span>
            </h2>
            <p className="text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
              Life coaching isn&apos;t crisis care. It&apos;s a partnership for
              people ready to grow.
            </p>
          </div>
        </div>

        {/*
          Figma 4087:194 union: podium silhouette (opaque lime on transparent artboard).
          Uses aspect 1212:489 + object-contain so curves match Figma — not object-fill.
          CTA lg:top-[386px], tags lg:top-[701px]; card row lg:pt-12 + pointer-events pass-through over CTA.
        */}
        <div className="relative mt-6 min-h-[560px] overflow-visible pb-16 lg:mt-8 lg:min-h-[820px] lg:pb-24">
          {/* Figma 4087:194 — silhouette via object-contain (no horizontal stretch slabs) */}
          <div className="pointer-events-none absolute inset-x-0 top-[140px] z-[1] flex justify-center sm:top-[128px] lg:top-[326px]">
            <div className="relative aspect-[1212/489] w-[calc(100%-2rem)] max-w-[1280px] sm:w-[calc(100%-5rem)] lg:w-full lg:max-w-[1280px]">
              <img
                src="/life-coaching/desktop/why-coaching/union-bg.webp"
                alt=""
                aria-hidden
                className="size-full select-none object-contain object-center"
              />
            </div>
          </div>

          {/* pointer-events-none on row so transparent center doesn’t block CTA; each card re-enables hits */}
          <div className="relative z-20 mx-auto box-border flex h-auto w-full max-w-[1240px] flex-col gap-6 overflow-visible pt-8 sm:pt-10 lg:pointer-events-none lg:h-[640px] lg:flex-row lg:items-stretch lg:gap-6 lg:pt-12">
            {/* Card 01 */}
            <div className="relative flex w-full shrink-0 flex-col rounded-[24px] bg-[#f4efea] px-6 py-8 lg:pointer-events-auto lg:h-full lg:w-[300px]">
              <div className="absolute left-6 top-[-24px] flex size-[48px] items-center justify-center rounded-[24px] bg-[#38ab9b] px-[15px] py-2">
                <span className="font-miniature text-[20.571px] font-normal leading-none tabular-nums text-white">
                  01
                </span>
              </div>
              <div className="mt-2 flex flex-col items-center gap-12">
                <div className="flex h-[162px] w-[180px] shrink-0 items-center justify-center">
                  <img
                    src="/life-coaching/desktop/why-coaching/character-card-1.webp"
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="flex w-full flex-col gap-2 text-black">
                  <h3 className="font-miniature text-[32px] font-normal leading-[40px]">
                    Direction over drift
                  </h3>
                  <p className="text-[18px] font-normal leading-[26px]">
                    Most of us drift through decisions shaped by habit, fear, or other people&apos;s
                    expectations. Coaching replaces drift with intentional direction choices that
                    reflect who you genuinely are and where you want to go.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 02 — flex-1, Figma h-[262px], gap-[40px], horizontal row */}
            <div className="relative flex w-full min-w-0 flex-1 flex-col gap-8 overflow-visible rounded-[24px] bg-[#f4efea] px-6 py-8 lg:pointer-events-auto lg:h-[262px] lg:max-h-[262px] lg:flex-row lg:self-start lg:items-center lg:justify-center lg:gap-10">
              <div className="absolute left-6 top-[-24px] flex size-[48px] items-center justify-center rounded-[24px] bg-[#38ab9b] px-[15px] py-2">
                <span className="font-miniature text-[20.571px] font-normal leading-none tabular-nums text-white">
                  02
                </span>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-2 self-stretch pt-6 text-black lg:justify-center lg:pt-8 lg:pb-2">
                <h3 className="font-miniature text-[32px] font-normal leading-[40px]">
                  Tools, not just talk
                </h3>
                <div className="text-[18px] font-normal leading-[26px]">
                  <p className="mb-0">
                    A good coaching session leaves you with something concrete: a
                    reframe, a plan, a decision, an action.
                  </p>
                  <p className="mb-0">
                    Not just a feeling. Every session is designed to move you
                    forward, not just help you feel understood.
                  </p>
                </div>
              </div>
              <div className="relative h-[154px] w-[154px] shrink-0 self-center pb-2 lg:self-center lg:pb-0 lg:pr-1">
                <img
                  src="/life-coaching/desktop/why-coaching/character-card-2.webp"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Card 03 — w-[300], gap-[20px] blocks, image area h-[229px] */}
            <div className="relative flex w-full shrink-0 flex-col gap-5 rounded-[24px] bg-[#f4efea] px-6 py-8 lg:pointer-events-auto lg:h-full lg:w-[300px]">
              <div className="absolute left-6 top-[-24px] flex size-[48px] items-center justify-center rounded-[24px] bg-[#38ab9b] px-[15px] py-2">
                <span className="font-miniature text-[20.571px] font-normal leading-none tabular-nums text-white">
                  03
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-2 text-black">
                <h3 className="font-miniature text-[32px] font-normal leading-[40px]">
                  Growth that compounds
                </h3>
                <p className="text-[18px] font-normal leading-[26px]">
                  The person you become through coaching doesn&apos;t revert when
                  the sessions end. The clarity, the habits, the self-trust they
                  compound. Each version of yourself becomes the foundation for
                  the next.
                </p>
              </div>
              <div className="relative h-[229px] w-full overflow-hidden">
                <img
                  src="/life-coaching/desktop/why-coaching/character-card-3.webp"
                  alt=""
                  className="absolute bottom-0 left-1/2 h-[min(100%,267px)] w-[min(100%,281px)] max-w-none -translate-x-1/2 object-contain object-bottom"
                />
              </div>
            </div>
          </div>

          {/* CTA + tags z-[25], pointer-events-auto; card row is pointer-events-none except cards */}
          <div className="relative z-[25] mx-auto mt-12 flex w-full max-w-[500px] flex-col items-center gap-6 px-2 text-center  lg:absolute lg:left-1/2 lg:right-auto lg:top-[386px] lg:mt-0 lg:-translate-x-1/2 lg:translate-y-0 lg:px-0">
            <div className="flex flex-col gap-[14px]">
              <h2 className="font-miniature text-[42px] font-bold leading-[50px] text-black whitespace-normal">
                <span className="block">A little support can go</span>
                <span className="block">
                  <span>a </span>
                  <span className="italic font-bold">long way.</span>
                </span>
              </h2>
              <p className="font-syne text-[16px] font-normal leading-6 text-[rgba(0,0,0,0.65)]">
                You don&apos;t need to be in crisis to benefit from coaching. Most
                people come to us simply because they want to feel a bit clearer,
                a bit more confident, and a bit more like themselves again.
              </p>
            </div>
            <Link
              to="/signup-anxiety"
              className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-[39px] bg-[#5200ff] px-8 py-4 font-semibold text-[20px] capitalize tracking-[0.72px] text-white no-underline leading-normal transition-colors hover:bg-[#4000cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5200ff]"
            >
              Start your journey →
            </Link>
          </div>

          <div className="relative z-[25] mx-auto mt-14 flex w-full max-w-[1052px] flex-wrap items-start justify-center gap-x-[9px] gap-y-[18px] px-1 lg:absolute lg:left-1/2 lg:right-auto lg:top-[701px] lg:mt-0 lg:-translate-x-1/2 lg:translate-y-0 lg:px-0">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="flex h-[34px] items-center rounded-full bg-black/[0.08] px-[18px] py-2"
              >
                <span className="whitespace-nowrap text-center font-medium text-[13px] leading-normal text-[rgba(0,0,0,0.8)]">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseCoaching;
