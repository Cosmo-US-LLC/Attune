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

    { bg: "bg-[#f097dd]", value: "3 yrs", labels: ["Of coaching experience"] },

    { bg: "bg-[#96adf0]", value: "500+", labels: ["People coached to date"] },

  ];



  return (

    <section className="bg-white pb-16 lg:hidden">

      {/* Full-viewport bleed so the three panels match edge-to-edge Figma */}

      <div className="relative left-1/2 w-[100vw] max-w-none -translate-x-1/2">

        <div className="relative w-full">

          <div className="flex w-full gap-0 overflow-hidden bg-white aspect-[1440/477]">

            {/* Left — phone */}

            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">

              <img

                src="/about-us/stats/coach-phone-new.webp"

                alt="Person using FeelAttune app"

                className="absolute inset-0 size-full object-cover"

              />

              <div

                className="pointer-events-none absolute inset-0"

                aria-hidden="true"

                style={{

                  backgroundImage:

                    "linear-gradient(190.51deg, rgba(0,0,0,0) 66.797%, rgba(0,0,0,0.2) 83.781%)",

                }}

              />

              <div className="pointer-events-none absolute left-[18%] top-[12%] h-[clamp(26px,5.5vw,40px)] w-[clamp(76px,20vw,120px)]">

                <img

                  src="/about-us/stats/attune-logo.webp"

                  alt=""

                  aria-hidden="true"

                  className="h-full w-full object-contain"

                />

              </div>

            </div>



            {/* Centre — laptop coach */}

            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">

              <img

                src="/about-us/stats/coach-laptop-new.webp"

                alt="Life coach on video call"

                className="absolute inset-0 size-full object-cover"

              />

            </div>



            {/* Right — headset coach */}

            <div className="relative min-h-0 min-w-0 flex-1 overflow-hidden">

              <img

                src="/about-us/stats/coach-headset-new.webp"

                alt="Life coach with headset"

                className="absolute inset-0 size-full object-cover"

              />

            </div>

          </div>



          <div className="absolute left-1/2 top-full z-10 flex -translate-x-1/2 -translate-y-1/2 items-start justify-center">

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

                  <div className="mt-[3px] flex items-center gap-[1.6px]" aria-hidden="true">

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

