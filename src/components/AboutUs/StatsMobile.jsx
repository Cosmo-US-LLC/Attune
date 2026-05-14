/**

 * Stats row — three photo panels + overlapping circular badges (Figma mobile parity).

 * Photo assets aligned with desktop `Stats.jsx` (nodes 4141:809).

 */

function StarBadge() {
  return (
    <div
      className="flex size-[8px] shrink-0 items-center justify-center rounded-[5.8px] bg-[#e5ff7d]"
      aria-hidden="true"
    >
      <img src="/about-us/stats/star.webp" alt="" className="size-[4.8px]" />
    </div>
  );
}

function StatsMobile() {
  const stats = [
    { bg: "bg-[#e5ff7d]", value: "94%", labels: ["Client satisfaction rate"] },

    {
      bg: "bg-[#00e4c6]",

      value: "4.9",

      labels: ["Average rating across", "all sessions"],

      showStars: true,
    },

    { bg: "bg-[#f097dd]", value: "20+", labels: ["Years of Care Experience"] },

    // { bg: "bg-[#96adf0]", value: "500+", labels: ["People coached to date"] },
  ];

  return (
    <section className="pb-16 bg-white lg:hidden">
      {/* Full-viewport bleed so the three panels match edge-to-edge Figma */}

      <div className="relative left-1/2 w-[100vw] max-w-none -translate-x-1/2">
        <div className="relative w-full">
          <div className="flex w-full gap-0 overflow-hidden bg-white aspect-[1440/477]">
            {/* Left — phone */}

            <div className="overflow-hidden relative flex-1 min-w-0 min-h-0">
              <img
                src="/about-us/stats/coach-phone-new.webp"
                alt="Person using FeelAttune app"
                className="object-cover absolute inset-0 size-full"
              />
            </div>

            {/* Centre — laptop coach */}

            <div className="overflow-hidden relative flex-1 min-w-0 min-h-0">
              <img
                src="/about-us/stats/coach-laptop-new.webp"
                alt="Life coach on video call"
                className="object-cover absolute inset-0 size-full"
              />
            </div>

            {/* Right — headset coach */}

            <div className="overflow-hidden relative flex-1 min-w-0 min-h-0">
              <img
                src="/about-us/stats/coach-headset-new.webp"
                alt="Life coach with headset"
                className="object-cover absolute inset-0 size-full"
              />
            </div>
          </div>

          <div className="flex absolute top-full left-1/2 z-10 justify-center items-start -translate-x-1/2 -translate-y-1/2">
            {stats.map((stat, idx) => (
              <div
                key={stat.value}
                className={[
                  stat.bg,

                  "flex size-[92px] shrink-0 flex-col items-center justify-center rounded-[46px] px-2 py-[18px] text-center text-black",

                  idx > 0 ? "-ml-[6px]" : "",
                ].join(" ")}
              >
                <p className="font-miniature text-[29px] font-bold leading-[32px] text-black">
                  {stat.value}
                </p>

                {stat.showStars ? (
                  <div
                    className="mt-[3px] flex items-center gap-[1.6px]"
                    aria-hidden="true"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarBadge key={`star-${i}`} />
                    ))}
                  </div>
                ) : null}

                <div className="mt-[4px] text-[7.2px] font-semibold uppercase leading-[1.1] tracking-[0.06em] text-black">
                  {stat.labels.map((line) => (
                    <p key={line} className="m-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsMobile;
