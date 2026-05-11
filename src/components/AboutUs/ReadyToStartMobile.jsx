import { Link } from "react-router-dom";

const womanMaskStyle = {
  WebkitMaskImage: "url(/about-us/cta/figma-ready/photo-mask.svg)",
  maskImage: "url(/about-us/cta/figma-ready/photo-mask.svg)",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

/**
 * Ready to start — Figma mobile node 4232:4648 (< 350px column + illustration 4232:4656).
 * Layout: content max 350px; art is 286×316, right-aligned (Figma x=84 → 64px inset + 286px).
 * Illustration is layered (lime + masked photo + phone / clouds / mood) to match Figma icon placement.
 */
function ReadyToStartMobile() {
  return (
    <section className="overflow-visible bg-white px-5 py-12 lg:hidden">
      {/* 350px column — matches Figma “Text Container” width; centered with side margins */}
      <div className="mx-auto flex w-full max-w-[350px] flex-col gap-20 overflow-visible">
        <div className="flex w-full flex-col items-start gap-8">
          <div className="flex w-full flex-col gap-2 text-black">
            <p className="font-miniature text-[40px] font-normal leading-[48px]">Ready to start?</p>
            <p className="font-miniature text-[64px] font-normal italic leading-[72px]">
              We&apos;re ready too.
            </p>
          </div>

          <p className="text-[16px] font-normal leading-[24px] text-[#0d0d0d]/70">
            Book your session today. No credit card, no commitment just a conversation about where
            you want to go and whether we&apos;re the right fit to help you get there.
          </p>

          <Link
            to="/signup-anxiety"
            className="inline-flex min-h-[44px] items-center justify-center gap-1 whitespace-nowrap rounded-[100px] bg-[#5200ff] px-5 py-[14px] text-[14px] font-semibold leading-none text-white hover:bg-[#4000cc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5200ff] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Get started"
          >
            Get started{" "}
            <span className="text-[16px] font-normal leading-none" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        {/* Illustration: 286×316, flush right; overflow visible for clouds above frame */}
        <div className="flex w-full justify-end overflow-visible">
          <div className="relative h-[316px] w-[286px] shrink-0 overflow-visible">
            {/* Lime panel + photo — anchored to bottom of 316px frame; icons use this box as origin */}
            <div className="absolute bottom-0 left-0 h-[287px] w-[286px] overflow-visible">
              <img
                src="/about-us/cta/figma-ready/lime-base.svg"
                alt=""
                width={286}
                height={287}
                className="pointer-events-none absolute inset-0 z-0 block h-full w-full select-none object-fill"
                decoding="async"
                draggable={false}
              />
              <img
                src="/about-us/cta/figma-ready/woman.webp"
                alt="Woman on a call with coaching materials"
                width={277}
                height={278}
                className="absolute bottom-[5px] left-[5px] z-[1] block h-[290px] w-[290px] object-cover object-center"
                style={womanMaskStyle}
                decoding="async"
              />

              {/* Mood — centered on left edge of lime (half on panel, half on white); slightly above bottom */}
              <img
                src="/about-us/cta/figma-ready/mood-strip.webp"
                alt=""
                width={48}
                height={72}
                className="pointer-events-none absolute bottom-[6px] left-[-60px] z-[3] h-auto w-[48px] -translate-x-1/2 select-none"
                decoding="async"
                draggable={false}
              />

              {/* Phone — cord end overlaps top-left corner of lime; handset sits in white above */}
              <img
                src="/about-us/cta/figma-ready/icons-phone.svg"
                alt=""
                width={94}
                height={122}
                className="pointer-events-none absolute -top-[50px] left-[-90px] z-[3] h-auto w-[94px] select-none rotate-[20deg]"
                decoding="async"
                draggable={false}
              />
            </div>

            {/* Clouds — sibling above top-right of panel (Figma clip group ~79px above panel top) */}
            <img
              src="/about-us/cta/figma-ready/clouds.svg"
              alt=""
              width={85}
              height={55}
              className="pointer-events-none absolute -top-[60px] right-0 z-[2] h-auto w-[85px] select-none"
              decoding="async"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStartMobile;
