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
      "Rarely — I feel stuck most of the timeAlmost every day",
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
    <div className="border border-[#5200ff] bg-white/30 rounded-[9px] flex-shrink-0 size-[18px] flex items-center justify-center">
      <span className="text-[#5200ff] text-[10px] font-bold">✓</span>
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
  const progress = ((currentQ) / quizQuestions.length) * 100;

  return (
    <div id="quiz" className="bg-white px-[114px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex gap-[80px] items-start">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-[32px]">
          <div className="flex flex-col gap-[32px]">
            <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px] self-start">
              <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
                ✦ Not sure yet?
              </span>
            </div>
            <div>
              <p className="font-miniature text-[55px] font-semibold leading-[67px] text-[#0d0d0d]">
                Could coaching{" "}
                <span className="font-miniature italic text-[#ff6f61]">change </span>
                things for you?
              </p>
              <p className="mt-[24px] text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                You don&apos;t have to know exactly what you need before you start. Take the
                2-minute quiz and we&apos;ll tell you whether coaching is a good fit and what kind
                of support would help most.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            {quizReasons.map((reason, i) => (
              <div key={i} className="flex items-center gap-[8px]">
                <CheckIcon />
                <span className="font-medium text-[14px] text-[#0d0d0d]">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quiz card */}
        <div className="flex-1 border border-[#0d0d0d] rounded-[28px] overflow-hidden">
          {!completed ? (
            <>
              {/* Card header */}
              <div className="bg-[#f4efea] px-[28px] pt-[28px] pb-[20px]">
                <h3 className="font-miniature text-[22px] text-black text-center leading-normal">
                  Is life coaching right for you?
                </h3>
                <p className="text-[14px] font-normal text-[rgba(0,0,0,0.7)] text-center leading-[1.25] pb-[8px]">
                  5 quick questions — honest answers only
                </p>
                {/* Progress bar */}
                <div className="bg-black/10 h-[4px] rounded-[2px] overflow-hidden mt-2">
                  <div
                    className="bg-[#5200ff] h-full rounded-[2px] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question + options */}
              <div className="bg-white px-[28px] pt-[20px] pb-[24px] flex flex-col gap-[20px]">
                <p className="font-semibold text-[16px] text-[#0d0d0d] leading-[1.25]">
                  {q.question}
                </p>
                <div className="flex flex-col gap-[10px]">
                  {q.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`flex items-center gap-[12px] px-[17px] py-[14px] rounded-[12px] border text-left transition-colors ${
                        selected === i
                          ? "border-[#5200ff] bg-[#f3eeff]"
                          : "border-[rgba(13,13,13,0.12)] hover:border-[#5200ff]/40"
                      }`}
                    >
                      <div
                        className={`border rounded-[9px] flex-shrink-0 size-[18px] ${
                          selected === i ? "border-[#5200ff] bg-[#5200ff]" : "border-[rgba(13,13,13,0.2)]"
                        }`}
                      />
                      <span className="font-medium text-[14px] text-[#0d0d0d]">{opt}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[rgba(13,13,13,0.4)]">
                    Question {currentQ + 1} of {quizQuestions.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={selected === null}
                    className="bg-[#5200ff] text-white font-semibold text-[14px] tracking-[0.72px] capitalize px-[22px] py-[10px] rounded-full disabled:opacity-40 hover:bg-[#4000cc] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-[#f4efea] px-[40px] py-[60px] flex flex-col items-center gap-[24px] text-center">
              <div className="text-[48px]">🎉</div>
              <h3 className="font-miniature text-[28px] text-[#0d0d0d] leading-normal">
                Coaching sounds like a great fit for you!
              </h3>
              <p className="text-[16px] text-[rgba(13,13,13,0.7)] leading-[1.25]">
                Based on your answers, you&apos;re exactly the kind of person who thrives with
                life coaching support. Let&apos;s get you started.
              </p>
              <Link to ="/signup-anxiety">
                <button className="bg-[#5200ff] text-white font-semibold text-[18px] px-[32px] py-[16px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
                  Start your journey →
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoachingQuiz;
