import React from "react";

const steps = [
  {
    title: "Identify your goals",
    titleLines: ["Identify your", "goals"],
    body: "Most people have a vague sense of what they want, but struggle to name it clearly. Your coach helps you cut through the noise and land on what truly matters to you — not what others expect.",
    points: [
      "Uncover what's really holding you back",
      "Separate your values from external pressure",
      "Define goals that are genuinely yours",
      "Turn abstract wishes into concrete direction",
    ],
  },
  {
    title: "Build practical strategies",
    titleLines: ["Build practical", "strategies"],
    body: "Insight alone doesn't move the needle. Your coach works with you to design real, personalized strategies that fit your life — and holds you to them between sessions.",
    points: [
      "Create an action plan that fits your schedule",
      "Break down big goals into manageable steps",
      "Build habits that compound over time",
      "Adapt when life doesn't go to plan",
    ],
  },
  {
    title: "Rebuild confidence & momentum",
    titleLines: ["Rebuild confidence &", "momentum"],
    body: "The longer you've felt stuck, the harder it is to trust yourself. Coaching rebuilds that self-trust — session by session, win by win — until moving forward feels natural again.",
    points: [
      "Reframe the stories that keep you small",
      "Celebrate progress, not just destinations",
      "Develop resilience for hard moments",
      "Leave each session stronger than you arrived",
    ],
  },
];

function CheckIcon() {
  return (
    <div className="border border-[#5200ff] bg-white/30 rounded-[9px] flex-shrink-0 size-[18px] flex items-center justify-center">
      <span className="text-[#5200ff] text-[10px] font-bold">✓</span>
    </div>
  );
}

function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white px-[114px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-[32px] items-center max-w-[717px]">
          <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px]">
            <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
              ✦ How it works
            </span>
          </div>
          <div className="text-center">
            <p className="font-miniature text-[55px] font-semibold leading-[67px] text-[#0d0d0d]">
              The coaching{"  "}
              <span className="font-miniature italic text-[#ff6f61]"> journey</span>
            </p>
            <p className="mt-[24px] text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
              Life coaching isn&apos;t a quick fix. It&apos;s a structured, human process that
              builds on itself — each session taking you further than the last.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-[16px] items-stretch w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#f4efea] flex-1 flex flex-col gap-[32px] px-[20px] py-[32px] rounded-[30px] overflow-hidden"
            >
              <div className="flex flex-col gap-[12px]">
                <h3 className="font-miniature text-[30px] font-semibold leading-[38px] text-[#0d0d0d] capitalize">
                  {step.titleLines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="text-[16px] font-normal text-[rgba(13,13,13,0.7)] leading-[24px]">
                  {step.body}
                </p>
              </div>
              <ul className="flex flex-col gap-[8px]">
                {step.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-[10px]">
                    <CheckIcon />
                    <span className="font-medium text-[16px] text-[#0d0d0d] leading-[24px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
