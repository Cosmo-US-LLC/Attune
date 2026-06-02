import { Link } from "react-router-dom";

/** Layered deco + handset from MCP; main scene uses marketing export begin_image.webp */
const BJ = "/life-coaching/desktop/begin-journey/figma";
const BEGIN_SCENE = "/life-coaching/desktop/begin-journey/begin_image.webp";

/** Image Container 4117:341 outer size (px) — used for % math */
const IMG_W = 350.95367431640625;
const IMG_H = 352.3687744140625;
const INNER_W = 392.9360046386719;
const INNER_H = 379.7280578613281;

function BeginJourney() {
  return (
    <div className="relative flex min-h-[484px] w-full max-w-full items-center overflow-x-hidden bg-white px-4 sm:px-6 lg:px-[80px]">
      {/* Figma 4117:424 Vector 59 — clip to viewport (no wider-than-100% wrapper → no hz scroll) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 z-0 overflow-hidden"
        style={{
          top: `${(76 / 484) * 100}%`,
          height: `${(373 / 484) * 100}%`,
        }}
      >
        <svg
          viewBox="0 0 1648 393.002"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full min-w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M10.0019 258.362C95.9127 275.522 336.726 274.121 612.87 131.303C613.045 131.212 613.216 131.108 613.377 130.993C835.986 -27.8796 1199.64 -22.535 1304.07 101.765C1305.47 103.426 1305.28 105.818 1303.7 107.301C1187.31 216.233 1043.12 418.802 1378.37 377.538C1716.3 335.944 1653.37 178.322 1579.66 104.71"
            stroke="#e5ff7d"
            strokeWidth={20}
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1100px] items-center justify-between gap-12 py-[60px]">
        {/* Figma 4117:341 cluster — frame scaled down ~15% from design px for tighter hero photo */}
        <div className="relative h-[300px] w-[min(350px,76vw)] shrink-0 overflow-visible">
          {/* 4117:342 Rectangle 2623 — lime squircle */}
          <div className="pointer-events-none absolute left-1/2 top-[0.13%] z-0 h-[99.87%] w-full -translate-x-1/2">
            <img
              src={`${BJ}/rectangle-2623.webp`}
              alt=""
              aria-hidden
              draggable={false}
              decoding="async"
              className="size-full object-fill"
            />
          </div>

          {/* 4117:343 inner artboard */}
          <div
            className="pointer-events-none absolute z-[1] overflow-visible"
            style={{
              left: `${(-41.982421875 / IMG_W) * 100}%`,
              top: `${(-27.359375 / IMG_H) * 100}%`,
              width: `${(INNER_W / IMG_W) * 100}%`,
              height: `${(INNER_H / IMG_H) * 100}%`,
            }}
          >
            {/* Scene — begin_image.webp (marketing composite per Figma export) @ 4117:396 slot */}
            <img
              src={BEGIN_SCENE}
              alt="Person smiling while working on a laptop during a coaching session"
              draggable={false}
              decoding="async"
              className="pointer-events-none absolute z-[4] object-cover object-bottom"
              style={{
                left: `${(1.75390625 / INNER_W) * 100}%`,
                top: `${(14.640625 / INNER_H) * 100}%`,
                width: `${(446 / INNER_W) * 100}%`,
                height: `${(463 / INNER_H) * 100}%`,
              }}
            />

            {/* 4117:347 cloud outlines */}
            <img
              src={`${BJ}/icon-clouds.webp`}
              alt=""
              aria-hidden
              draggable={false}
              decoding="async"
              className="pointer-events-none absolute z-[6] object-contain object-left-top"
              style={{
                left: `${(338.6876525878906 / INNER_W) * 100}%`,
                top: `${(40.567344665527344 / INNER_H) * 100}%`,
                width: `${(66.22476196289062 / INNER_W) * 100}%`,
                height: `${(35.892215728759766 / INNER_H) * 100}%`,
              }}
            />

            {/* 4117:352 mood / emoji stack */}
            <img
              src={`${BJ}/icon-mood-stack.webp`}
              alt=""
              aria-hidden
              draggable={false}
              decoding="async"
              className="pointer-events-none absolute z-[7] object-contain object-left-top"
              style={{
                left: `${(-60.24609375 / INNER_W) * 100}%`,
                top: `${(390.359375 / INNER_H) * 100}%`,
                width: `${(54.712806701660156 / INNER_W) * 100}%`,
                height: `${(81.51581573486328 / INNER_H) * 100}%`,
              }}
            />
          </div>

          {/* 4117:398 handset + stars (page-space → offset from Image Container) */}
          <img
            src={`${BJ}/illustration-handset.webp`}
            alt=""
            aria-hidden
            draggable={false}
            decoding="async"
            className="pointer-events-none absolute z-[10] object-contain select-none"
            style={{
              left: `${((90.818603515625 - 270.228515625) / IMG_W) * 100}%`,
              top: `${((10.999881744384766 - 89) / IMG_H) * 100}%`,
              width: `${(212.1991306541022 / IMG_W) * 100}%`,
              height: `${(234.3482655996222 / IMG_H) * 100}%`,
              transform: "rotate(23.95deg)",
              transformOrigin: "top left",
            }}
          />
        </div>

        {/* Right — copy */}
        <div className="flex min-w-0 max-w-[514px] flex-col gap-[37px] text-black select-none [&_Link]:outline-offset-4">
          <div className="flex flex-col gap-[10px]">
            <p className="font-miniature cursor-default text-[50px] leading-[69px]">
              Begin Your Journey
            </p>
            <p className="font-miniature cursor-default text-[92px] italic leading-[normal]">
              Today!
            </p>
          </div>
          <Link
            to="/signup-anxiety"
            className="inline-flex h-14 w-fit shrink-0 cursor-pointer items-center justify-center self-start rounded-[39px] bg-[#5200ff] px-8 py-4 font-semibold text-[20px] capitalize leading-normal tracking-[0.72px] text-white no-underline transition-colors hover:bg-[#4000cc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5200ff]"
          >
            Start your journey →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BeginJourney;
