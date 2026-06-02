import React, { useState } from "react";
import { Link } from "react-router-dom";

const quizQuestions = [
  {
    question: "When you think about where you want to be in a year, how clear does that picture feel?",
    options: [
      "Completely foggy — I have no idea",
      "Vague — I have feelings but not clarity",
      "Somewhat clear — I know the direction",
      "Very clear — I just need help getting there",
    ],
  },
  {
    question: "When you set a goal for yourself, what usually happens?",
    options: [
      "I struggle to even get started",
      "I start, then lose momentum after a few weeks",
      "I make progress but often get in my own way",
      "I follow through, but I want to go deeper or faster",
    ],
  },
  {
    question: "How would you describe the way you talk to yourself when things get hard?",
    options: [
      "Pretty harsh — I'm my own worst critic",
      "I doubt myself a lot, but I try to push through",
      "I'm okay, but I don't always back myself",
      "I'm fairly kind to myself — I just want more support",
    ],
  },
  {
    question: "How often do you feel like your life reflects what actually matters to you?",
    options: [
      "Rarely — it feels like I'm just going through the motions",
      "Sometimes — but something feels off and I can't name it",
      "Often — but there are a few areas I know need work",
      "Most of the time — I just want to accelerate",
    ],
  },
  {
    question: "What would feel most valuable to you right now?",
    options: [
      "Someone to help me figure out what I actually want",
      "A clear plan I'll finally commit to",
      "More confidence to make decisions and back myself",
      "Accountability and a fresh perspective on where I'm heading",
    ],
  },
];

const quizReasons = [
  "You feel stuck but can't pinpoint why",
  "You know what you want but can't seem to get there",
  "You're tired of going in circles on the same problems",
  "You're ready for something to actually change",
];

const resultTiers = [
  {
    range: [5, 10],
    label: "Strong fit",
    labelColor: "#5200ff",
    headline: "Coaching could be a real turning point for you.",
    body: "You're at a stage where having the right support alongside you could unlock a lot. You don't need to have it all figured out — that's exactly what coaching is for.",
  },
  {
    range: [11, 16],
    label: "Good fit",
    labelColor: "#38ab9b",
    headline: "Coaching sounds like the right next step.",
    body: "You have some direction, but there are clear areas where a coach could help you move faster and feel more certain. Most people at this stage see real results within a few sessions.",
  },
  {
    range: [17, 20],
    label: "Ready to accelerate",
    labelColor: "#5a7a00",
    headline: "You're already moving — coaching will help you go further.",
    body: "You have self-awareness and momentum. A coach won't tell you what to do — they'll help you sharpen your thinking, remove the friction, and make sure the progress compounds.",
  },
];

function getResult(score) {
  return resultTiers.find(({ range }) => score >= range[0] && score <= range[1]);
}

function CheckIcon() {
  return (
    <div className="flex size-[18px] flex-shrink-0 items-center justify-center rounded-[9px] border border-[#5200ff] bg-white/30 p-px">
      <span className="text-[10px] font-bold text-[#5200ff]">✓</span>
    </div>
  );
}

function CoachingQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [totalScore, setTotalScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const points = selected + 1; // A=1, B=2, C=3, D=4
    const newScore = totalScore + points;
    if (currentQ < quizQuestions.length - 1) {
      setTotalScore(newScore);
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setTotalScore(newScore);
      setCompleted(true);
    }
  };

  const q = quizQuestions[currentQ];
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;
  const result = completed ? getResult(totalScore) : null;

  return (
    <div id="quiz" className="bg-white px-4 py-[60px] sm:px-6 lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-12 xl:flex-row xl:gap-[80px]">
        <div className="flex flex-1 flex-col gap-8">
          <div className="flex flex-col gap-8">
            <div className="w-fit rounded-[39px] bg-[#e5ff7d] px-5 py-4">
              <span className="text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
                ✦ Not sure yet?
              </span>
            </div>
            <div>
              <p className="font-miniature text-[54px] font-bold leading-[62px] text-[#0d0d0d]">
                <span>{`Could coaching `}</span>
                <span className="italic text-[#ff6f61]">{`change `}</span>
                <span>things for you?</span>
              </p>
              <p className="mt-6 text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
                You don&apos;t have to know exactly what you need before you start. Take the
                2-minute quiz and we&apos;ll tell you whether coaching is a good fit and what kind
                of support would help most.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {quizReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckIcon />
                <span className="text-[14px] font-medium leading-[1.25] text-[#0d0d0d]">
                  {reason}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-hidden rounded-[28px] border border-[#0d0d0d]">
          {!completed ? (
            <>
              <div className="bg-[#f4efea] px-7 pb-5 pt-7">
                <h3 className="font-miniature text-center text-[20px] font-bold leading-7 text-black">
                  Is life coaching right for you?
                </h3>
                <p className="pb-2 text-center text-[14px] font-normal leading-[22px] text-[rgba(0,0,0,0.7)]">
                  5 quick questions — honest answers only
                </p>
                <div className="mt-2 h-1 overflow-hidden rounded-sm bg-black/10">
                  <div
                    className="h-full rounded-sm bg-[#5200ff] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 bg-white px-7 pb-6 pt-5">
                <p className="text-[16px] font-semibold leading-6 text-[#0d0d0d]">{q.question}</p>
                <div className="flex flex-col gap-2.5">
                  {q.options.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`flex items-center gap-3 rounded-xl border px-[17px] py-[13px] text-left transition-colors ${
                        selected === i
                          ? "border-[#5200ff] bg-[#f3eeff]"
                          : "border-[rgba(13,13,13,0.12)] hover:border-[#5200ff]/40"
                      }`}
                    >
                      <div
                        className={`size-[18px] flex-shrink-0 rounded-[9px] border ${
                          selected === i ? "border-[#5200ff] bg-[#5200ff]" : "border-[rgba(13,13,13,0.2)]"
                        }`}
                      />
                      <span className="text-[14px] font-medium leading-[22px] text-[#0d0d0d]">
                        {opt}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between pb-1">
                  <span className="font-syne text-[12px] font-medium leading-5 text-[rgba(13,13,13,0.4)]">
                    Question {currentQ + 1} of {quizQuestions.length}
                  </span>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={selected === null}
                    className="rounded-full bg-[#5200ff] px-[22px] py-2.5 text-[14px] font-semibold capitalize text-white transition-colors hover:bg-[#4000cc] disabled:opacity-40"
                  >
                    {currentQ === quizQuestions.length - 1 ? "See My Result →" : "Next →"}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-6 bg-[#f4efea] px-10 py-[52px] text-center">
              {/* Tier badge */}
              <span
                className="rounded-full px-5 py-2 text-[12px] font-bold uppercase tracking-widest text-white shadow-sm"
                style={{ backgroundColor: result.labelColor }}
              >
                {result.label}
              </span>

              {/* Headline */}
              <h3 className="font-miniature text-[27px] font-bold leading-[35px] text-[#0d0d0d]">
                {result.headline}
              </h3>

              {/* Body */}
              <p className="max-w-[340px] text-[15px] leading-[25px] text-[rgba(13,13,13,0.65)]">
                {result.body}
              </p>

              {/* Score card */}
              <div
                className="w-full rounded-2xl px-6 py-5 flex items-center justify-between gap-4"
                style={{ backgroundColor: `${result.labelColor}12` }}
              >
                <div className="flex flex-col items-start gap-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(13,13,13,0.4)]">
                    Your score
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className="text-[44px] font-bold leading-none tabular-nums"
                      style={{ color: result.labelColor }}
                    >
                      {totalScore}
                    </span>
                    <span className="text-[18px] font-medium text-[rgba(13,13,13,0.3)]">/ 20</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 flex-1">
                  <span className="text-[11px] font-medium text-[rgba(13,13,13,0.4)]">
                    {Math.round((totalScore / 20) * 100)}%
                  </span>
                  <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(totalScore / 20) * 100}%`,
                        backgroundColor: result.labelColor,
                      }}
                    />
                  </div>
                  <span className="text-[14px] font-semibold uppercase tracking-wide"
                    style={{ color: result.labelColor }}
                  >
                    {result.label}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Link
                to="/signup-anxiety"
                className="w-full inline-flex items-center justify-center rounded-[39px] bg-[#5200ff] px-8 py-4 text-[18px] font-semibold capitalize text-white no-underline transition-colors hover:bg-[#4000cc]"
              >
                Start your journey →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoachingQuiz;
