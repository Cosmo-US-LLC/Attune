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
    <div className="bg-[#f4efea] px-5 py-8 flex flex-col gap-12">
      <div className="flex flex-col gap-7">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ Real outcomes
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="section-heading text-left">
            What changes when you work with a{" "}
            <span className="heading-accent">life coach</span>
          </h2>
          <p className="text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)]">
            These aren&apos;t abstract promises. These are the shifts our clients
            report after working consistently with a FeelAttune coach.
          </p>
        </div>

        <img
          src="/figma/home-mobile/real-outcomes-illustration.webp"
          alt=""
          className="w-[280px] h-auto"
        />
      </div>

      <div className="grid grid-cols-2">
        {stats.map((stat, i) => {
          const isRightCol = i % 2 === 1;
          const isTopRow = i < 2;
          return (
            <div
              key={i}
              className={[
                "flex flex-col gap-2",
                "py-6",
                isRightCol ? "pl-6 border-l border-[rgba(13,13,13,0.12)]" : "pr-6",
                !isTopRow ? "border-t border-[rgba(13,13,13,0.12)]" : "",
              ].join(" ")}
            >
            <p className="font-miniature text-[28px] leading-[34px] text-[#96adf0] capitalize">
              {stat.percent}
            </p>
            <p className="text-[14px] leading-[22px] font-bold text-[rgba(13,13,13,0.9)]">
              {stat.label}
            </p>
            <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
              {stat.detail}
            </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RealOutcomesMobile;
