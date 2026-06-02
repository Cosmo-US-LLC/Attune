import React from "react";

const steps = [
  {
    title: "Identify your goals",
    body: "Most people have a vague sense of what they want, but struggle to name it clearly. Your coach helps you cut through the noise and land on what truly matters to you not what others expect.",
    bodyPre: false,
    points: [
      "Uncover what's really holding you back",
      "Separate your values from external pressure",
      "Define goals that are genuinely yours",
      "Turn abstract wishes into concrete direction",
    ],
  },
  {
    title: "Build practical strategies",
    body:
      "Insight alone doesn't move the needle. Your coach works with you to design real, personalized strategies that fit your life  and holds you to them between sessions.",
    bodyPre: true,
    points: [
      "Create an action plan that fits your schedule",
      "Break down big goals into manageable steps",
      "Build habits that compound over time",
      "Adapt when life doesn't go to plan",
    ],
  },
  {
    title: "Rebuild confidence & momentum",
    body:
      "The longer you've felt stuck, the harder it is to trust yourself. Coaching rebuilds that self-trust  session by session, win by win  until moving forward feels natural again.",
    bodyPre: true,
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
    <div id="how-it-works" className="bg-white px-5 py-8 flex flex-col gap-8">
      <div className="flex flex-col gap-6 text-center items-center">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ How it works
          </p>
        </div>
        <p className="font-miniature text-[42px] text-[#0d0d0d] text-center w-full">
          <span className="font-normal leading-[50px] whitespace-pre-wrap">
            The coaching{"  "}
          </span>
          <span className="font-bold italic leading-[50px] text-[#ff6f61]">
            journey
          </span>
        </p>
        <p className="text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)]">
          Life coaching isn&apos;t a quick fix. It&apos;s a structured, human
          process that builds on itself each session taking you further than the
          last.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-[#f4efea] rounded-[24px] px-5 py-6 flex flex-col gap-3"
          >
            <h3 className="font-miniature text-[24px] font-bold leading-[32px] text-[#0d0d0d] capitalize">
              {step.title}
            </h3>
            <p
              className={`text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)] ${
                step.bodyPre ? "whitespace-pre-wrap" : ""
              }`}
            >
              {step.body}
            </p>
            <ul className="flex flex-col gap-2">
              {step.points.map((point, j) => (
                <li key={j} className="flex items-start gap-[10px]">
                  <span className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 border border-[#5200ff] rounded-[9px] flex items-center justify-center bg-white/30">
                    <span className="text-[#5200ff] text-[10px] leading-none">✓</span>
                  </span>
                  <span className="text-[14px] leading-[22px] font-medium text-[#0d0d0d]">
                    {point}
                  </span>
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
