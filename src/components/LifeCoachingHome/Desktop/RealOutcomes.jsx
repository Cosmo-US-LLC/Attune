import React from "react";

const stats = [
  {
    pct: "78%",
    labelLines: ["Achieve their goals within", "3 months"],
    desc: "Most clients reach the goals they set in their first session within 12 weeks with a clear plan and someone genuinely in their corner.",
  },
  {
    pct: "80%",
    labelLines: ["Improve confidence and", "self-esteem"],
    desc: "Clients consistently report feeling more grounded, self-assured, and able to trust their own decisions after just a few sessions.",
  },
  {
    pct: "73%",
    labelSingle: "Improve relationships & communication",
    desc: "When you show up more clearly for yourself, it changes how you connect with the people around you at home and at work.",
  },
  {
    pct: "70%",
    labelSingle: "Improve work performance",
    desc: "Clarity and confidence don't stay in your personal life. They follow you into every professional challenge, decision, and conversation.",
  },
  {
    pct: "35%",
    labelSingle: "Increase in productivity",
    desc: "With clearer priorities and reduced mental load, clients consistently get more done without burning out trying.",
  },
  {
    pct: "94%",
    labelSingle: "Client satisfaction rate",
    desc: "Across all sessions and all coaches, the overwhelming majority of our clients say they'd recommend FeelAttune to someone they care about.",
  },
];

function StatLabel({ stat }) {
  if (stat.labelSingle) {
    return (
      <p className="text-[18px] font-bold leading-[26px] text-[rgba(13,13,13,0.9)]">{stat.labelSingle}</p>
    );
  }
  return (
    <div className="text-[18px] font-bold leading-[26px] text-[rgba(13,13,13,0.9)]">
      {stat.labelLines.map((line, i) => (
        <p key={i} className="mb-0">
          {line}
        </p>
      ))}
    </div>
  );
}

function RealOutcomes() {
  return (
    <div className="bg-[#f4efea] px-4 py-[60px] sm:px-6 lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-start">
          <div className="flex max-w-[792px] flex-col gap-8">
            <div className="w-fit rounded-[39px] bg-[#e5ff7d] px-5 py-4">
              <span className="text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
                ✦ Real outcomes
              </span>
            </div>
            <div>
              <p className="font-miniature text-[54px] font-bold leading-[62px] text-[#0d0d0d]">
                What changes when you work with a{" "}
                <span className="italic text-[#ff6f61]">life coach</span>
              </p>
              <div className="mt-6 text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
                <p className="mb-0">{`These aren't abstract promises.`}</p>
                <p className="mb-0">
                  These are the shifts our clients report after working consistently with a FeelAttune
                  coach.
                </p>
              </div>
            </div>
          </div>
          <div className="h-[248px] w-full max-w-[362px] flex-shrink-0">
            <img
              src="/life-coaching/desktop/real-outcomes/coach-illustration.webp"
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col gap-16 py-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="font-miniature text-[50px] font-bold capitalize leading-[31.2px] text-[#96adf0]">
                  {stat.pct}
                </p>
                <div className="flex flex-col gap-3">
                  <StatLabel stat={stat} />
                  <p className="text-[16px] font-normal leading-6 text-[rgba(13,13,13,0.7)]">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
            {stats.slice(3).map((stat, i) => (
              <div key={i} className="flex flex-col gap-4">
                <p className="font-miniature text-[50px] font-bold capitalize leading-[31.2px] text-[#96adf0]">
                  {stat.pct}
                </p>
                <div className="flex flex-col gap-3">
                  <StatLabel stat={stat} />
                  <p className="text-[16px] font-normal leading-6 text-[rgba(13,13,13,0.7)]">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealOutcomes;
