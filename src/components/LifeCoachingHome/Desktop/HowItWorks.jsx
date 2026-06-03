import React from "react";

/** Copy from Figma 4114:129 / 4170:3443 / 4170:3470 — spacing uses double spaces where exported. */
const steps = [
  {
    titleLines: ["Identify your", "goals"],
    bodyParagraphs: [
      "Most people have a vague sense of what they want, but struggle to name it clearly.",
      "Your coach helps you cut through the noise and land on what truly matters to you not what others expect.",
    ],
    points: [
      "Uncover what's really holding you back",
      "Separate your values from external pressure",
      "Define goals that are genuinely yours",
      "Turn abstract wishes into concrete direction",
    ],
    twoLinePoints: new Set([1, 3]),
  },
  {
    titleLines: ["Build practical", "strategies"],
    bodyParagraphs: [
      `Insight alone doesn't move the needle. Your coach works with you to design real, personalized strategies that fit your life  and holds you to them between sessions.`,
    ],
    points: [
      "Create an action plan that fits your schedule",
      "Break down big goals into manageable steps",
      "Build habits that compound over time",
      "Adapt when life doesn't go to plan",
    ],
    twoLinePoints: new Set([0, 1, 3]),
  },
  {
    titleLines: ["Rebuild confidence &", "momentum"],
    bodyParagraphs: [
      `The longer you've felt stuck, the harder it is to trust yourself. Coaching rebuilds that self-trust  session by session, win by win  until moving forward feels natural again.`,
    ],
    points: [
      "Reframe the stories that keep you small",
      "Celebrate progress, not just destinations",
      "Develop resilience for hard moments",
      "Leave each session stronger than you arrived",
    ],
    twoLinePoints: new Set([0, 3]),
  },
];

function CheckIcon() {
  return (
    <div className="flex size-[18px] flex-shrink-0 items-center justify-center rounded-[9px] border border-[#5200ff] bg-white/30 p-px">
      <span className="text-[10px] font-bold text-[#5200ff]">✓</span>
    </div>
  );
}

function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white px-4 py-[60px] sm:px-6 lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <div className="flex max-w-[717px] flex-col items-center gap-8">
          <div className="rounded-[39px] bg-[#e5ff7d] px-5 py-4">
            <span className="text-center text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
              ✦ How it works
            </span>
          </div>
          <div className="text-center">
            <h2 className="section-heading">
              <span className="whitespace-pre">The coaching </span>
              <span className="heading-accent"> journey</span>
            </h2>
            <p className="mt-6 text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
              Life coaching isn&apos;t a quick fix. It&apos;s a structured, human process that builds
              on itself each session taking you further than the last.
            </p>
          </div>
        </div>

        <div className="flex w-full items-stretch gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col gap-12 overflow-hidden rounded-[30px] bg-[#f4efea] px-5 py-8"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-miniature text-[30px] font-bold capitalize leading-[38px] text-[#0d0d0d]">
                  {step.titleLines.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </h3>
                <div className="text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
                  {step.bodyParagraphs.map((para, j) => (
                    <p key={j} className={j < step.bodyParagraphs.length - 1 ? "mb-0" : "mb-0"}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {step.points.map((point, j) => {
                  const tall = step.twoLinePoints.has(j);
                  return (
                    <li
                      key={j}
                      className={`flex gap-2.5 ${tall ? "items-start" : "items-center"}`}
                    >
                      <div className={tall ? "flex h-6 items-center" : ""}>
                        <CheckIcon />
                      </div>
                      <span className="text-[16px] font-medium leading-6 text-[#0d0d0d]">
                        {point}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
