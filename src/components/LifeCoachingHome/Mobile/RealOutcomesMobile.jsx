import React from "react";

const stats = [
  {
    percent: "78%",
    label: "Achieve their goals within 3 months",
    detail:
      "Most clients reach the goals they set in their first session within 12 weeks with a clear plan and someone genuinely in their corner.",
  },
  {
    percent: "80%",
    label: "Improve confidence and self-esteem",
    detail:
      "Clients consistently report feeling more grounded, self-assured, and able to trust their own decisions after just a few sessions.",
  },
  {
    percent: "73%",
    label: "Improve relationships & communication",
    detail:
      "When you show up more clearly for yourself, it changes how you connect with the people around you — at home and at work.",
  },
  {
    percent: "70%",
    label: "Improve work performance",
    detail:
      "Clarity and confidence don't stay in your personal life. They follow you into every professional challenge, decision, and conversation.",
  },
  {
    percent: "35%",
    label: "Increase in productivity",
    detail:
      "With clearer priorities and reduced mental load, clients consistently get more done without burning out trying.",
  },
  {
    percent: "94%",
    label: "Client satisfaction rate",
    detail:
      "Across all sessions and all coaches, the overwhelming majority of our clients say they'd recommend FeelAttune to someone they care about.",
  },
];

function RealOutcomesMobile() {
  return (
    <div className="bg-[#f4efea] px-5 py-10 space-y-8">
      <div className="space-y-4">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Real outcomes
        </span>
        <h2 className="font-miniature text-[32px] font-semibold leading-[38px] text-[#0d0d0d]">
          What changes when you work with a{" "}
          <span className="italic text-[#ff6f61]">life coach</span>
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(13,13,13,0.7)]">
          These aren&apos;t abstract promises. These are the shifts our clients
          report after working consistently with a FeelAttune coach.
        </p>
      </div>

      <img
        src="/life-coaching/desktop/real-outcomes/coach-illustration.webp"
        alt="Life coaching illustration"
        className="w-full max-w-[240px] mx-auto"
      />

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="space-y-1 border-t border-[rgba(13,13,13,0.12)] pt-4">
            <p className="font-miniature text-[40px] leading-[44px] text-[#96adf0]">
              {stat.percent}
            </p>
            <p className="font-bold text-[13px] leading-[18px] text-[rgba(13,13,13,0.7)]">
              {stat.label}
            </p>
            <p className="text-[12px] leading-[17px] text-[rgba(13,13,13,0.55)]">
              {stat.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealOutcomesMobile;
