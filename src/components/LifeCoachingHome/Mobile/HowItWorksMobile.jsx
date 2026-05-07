import React from "react";

const steps = [
  {
    title: "Identify your goals",
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
    body: "The longer you've felt stuck, the harder it is to trust yourself. Coaching rebuilds that self-trust — session by session, win by win — until moving forward feels natural again.",
    points: [
      "Reframe the stories that keep you small",
      "Celebrate progress, not just destinations",
      "Develop resilience for hard moments",
      "Leave each session stronger than you arrived",
    ],
  },
];

function HowItWorksMobile() {
  return (
    <div id="how-it-works" className="bg-white px-5 py-10 space-y-8">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ How it works
        </span>
        <h2 className="font-miniature text-[36px] leading-[42px] text-[#0d0d0d]">
          The coaching{" "}
          <span className="italic text-[#ff6f61]">journey</span>
        </h2>
        <p className="text-[15px] leading-[22px] text-[rgba(13,13,13,0.7)]">
          Life coaching isn&apos;t a quick fix. It&apos;s a structured, human
          process that builds on itself — each session taking you further than
          the last.
        </p>
      </div>

      <div className="space-y-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[#f4efea] rounded-[24px] px-5 py-6 space-y-4"
          >
            <h3 className="font-miniature text-[24px] leading-[30px] text-[#0d0d0d] capitalize">
              {step.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
              {step.body}
            </p>
            <ul className="space-y-2">
              {step.points.map((point, j) => (
                <li key={j} className="flex items-start gap-2 text-[14px] text-[#0d0d0d] font-medium">
                  <span className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 border border-[#5200ff] rounded-[6px] flex items-center justify-center">
                    <span className="text-[#5200ff] text-[10px]">✓</span>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorksMobile;
