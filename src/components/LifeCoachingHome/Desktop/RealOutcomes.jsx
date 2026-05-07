import React from "react";

const stats = [
  {
    pct: "78%",
    label: "Achieve their goals within 3 months",
    desc: "Most clients reach the goals they set in their first session within 12 weeks with a clear plan and someone genuinely in their corner.",
  },
  {
    pct: "80%",
    label: "Improve confidence and self-esteem",
    desc: "Clients consistently report feeling more grounded, self-assured, and able to trust their own decisions after just a few sessions.",
  },
  {
    pct: "73%",
    label: "Improve relationships & communication",
    desc: "When you show up more clearly for yourself, it changes how you connect with the people around you at home and at work.",
  },
  {
    pct: "70%",
    label: "Improve work performance",
    desc: "Clarity and confidence don't stay in your personal life. They follow you into every professional challenge, decision, and conversation.",
  },
  {
    pct: "35%",
    label: "Increase in productivity",
    desc: "With clearer priorities and reduced mental load, clients consistently get more done without burning out trying.",
  },
  {
    pct: "94%",
    label: "Client satisfaction rate",
    desc: "Across all sessions and all coaches, the overwhelming majority of our clients say they'd recommend FeelAttune to someone they care about.",
  },
];

function RealOutcomes() {
  return (
    <div className="bg-[#f4efea] px-[114px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-[32px] max-w-[792px]">
            <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px] self-start">
              <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
                ✦ Real outcomes
              </span>
            </div>
            <div>
              <p className="font-miniature text-[55px] leading-[67px] text-[#0d0d0d]">
                What changes when you work with a{" "}
                <span className="font-miniature italic text-[#ff6f61]">life coach</span>
              </p>
              <p className="mt-[24px] text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                These aren&apos;t abstract promises.
                <br />
                These are the shifts our clients report after working consistently with a FeelAttune
                coach.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 w-[362px] h-[248px]">
            <img
              src="/life-coaching/desktop/real-outcomes/coach-illustration.webp"
              alt="Life coaching illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Stats grid */}
        <div className="flex flex-col gap-[64px] py-[16px]">
          <div className="grid grid-cols-3 gap-[64px]">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <p className="font-miniature text-[50px] leading-[31.2px] text-[#96adf0] capitalize">
                  {stat.pct}
                </p>
                <p className="font-bold text-[16px] text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {stat.label}
                </p>
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[64px]">
            {stats.slice(3).map((stat, i) => (
              <div key={i} className="flex flex-col gap-[10px]">
                <p className="font-miniature text-[50px] leading-[31.2px] text-[#96adf0] capitalize">
                  {stat.pct}
                </p>
                <p className="font-bold text-[16px] text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {stat.label}
                </p>
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealOutcomes;
