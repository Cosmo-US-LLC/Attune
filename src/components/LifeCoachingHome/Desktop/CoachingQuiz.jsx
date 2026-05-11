import React, { useState } from "react";
import { Link } from "react-router-dom";

const quizQuestions = [
  {
    question:
      "When you think about where you want to be in a year, how clear does that picture feel?",
    options: [
      "Completely foggy — I have no idea",
      "Vague — I have feelings but not clarity",
      "Somewhat clear — I know the direction",
      "Very clear — I just need help getting there",
    ],
  },
  {
    question: "How often do you feel like you're making real progress toward the things that matter to you?",
    options: [
      "Rarely — I feel stuck most of the time",
      "Sometimes — but it doesn't last",
      "Often — but I want to go deeper",
      "Regularly — I'm just looking to accelerate",
    ],
  },
  {
    question: "When you face an important decision, what tends to happen?",
    options: [
      "I freeze and avoid it",
      "I decide but always second-guess myself",
      "I decide, but it takes a long time",
      "I decide with reasonable confidence",
    ],
  },
  {
    question: "How would you describe your current relationship with your own confidence?",
    options: [
      "It's mostly absent — I doubt myself a lot",
      "It shows up sometimes, but not reliably",
      "I'm fairly confident in some areas",
      "I'm confident, but want to expand my capacity",
    ],
  },
  {
    question: "What's the main thing you're hoping coaching could give you?",
    options: [
      "Clarity on what I actually want",
      "A plan I'll finally stick to",
      "More confidence and self-belief",
      "Someone to keep me accountable",
    ],
  },
];

const quizReasons = [
  "You feel stuck but can't pinpoint why",
  "You know what you want but can't seem to get there",
  "You're tired of going in circles on the same problems",
  "You're ready for something to actually change",
];

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
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setCompleted(true);
    }
  };

  const q = quizQuestions[currentQ];
  /** Figma 4082:280 — bar fill reflects current step (Q1 = 20%). */
  const progress = ((currentQ + 1) / quizQuestions.length) * 100;

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
                    Next →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center gap-6 bg-[#f4efea] px-10 py-[60px] text-center">
              <div className="text-[48px]">🎉</div>
              <h3 className="font-miniature text-[28px] leading-normal text-[#0d0d0d]">
                Coaching sounds like a great fit for you!
              </h3>
              <p className="max-w-xl text-[16px] leading-[1.25] text-[rgba(13,13,13,0.7)]">
                Based on your answers, you&apos;re exactly the kind of person who thrives with life
                coaching support. Let&apos;s get you started.
              </p>
              <Link
                to="/signup-anxiety"
                className="inline-flex rounded-[39px] bg-[#5200ff] px-8 py-4 text-[18px] font-semibold capitalize text-white no-underline transition-colors hover:bg-[#4000cc]"
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
