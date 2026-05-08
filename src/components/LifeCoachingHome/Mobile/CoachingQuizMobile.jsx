import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const questions = [
  {
    q:
      "When you think about where you want to be in a year, how clear does that picture feel?",
    options: [
      "Completely foggy — I have no idea",
      "Vague — I have feelings but not clarity",
      "Somewhat clear — I know the direction",
      "Very clear — I just need help getting there",
    ],
  },
  {
    q: "How often do you feel like you're making real progress toward the things that matter to you?",
    options: [
      "Rarely — I feel stuck most of the timeAlmost every day",
      "Sometimes — but it doesn't last",
      "Often — but I want to go deeper",
      "Regularly — I'm just looking to accelerate",
    ],
  },
  {
    q: "When you face an important decision, what tends to happen?",
    options: [
      "I freeze and avoid it",
      "I decide but always second-guess myself",
      "I decide, but it takes a long time",
      "I decide with reasonable confidence",
    ],
  },
  {
    q: "How would you describe your current relationship with your own confidence?",
    options: [
      "It's mostly absent — I doubt myself a lot",
      "It shows up sometimes, but not reliably",
      "I'm fairly confident in some areas",
      "I'm confident, but want to expand my capacity",
    ],
  },
  {
    q: "What's the main thing you're hoping coaching could give you?",
    options: [
      "Clarity on what I actually want",
      "A plan I'll finally stick to",
      "More confidence and self-belief",
      "Someone to keep me accountable",
    ],
  },
];

const fitMessages = {
  high: "Based on your answers, life coaching could be a great fit for you right now. You're ready to grow — let's get started.",
  medium: "Coaching could help you gain the clarity and momentum you're looking for. A free intro call can tell you more.",
  low: "You might benefit from some support to get unstuck. Even one session can shift your perspective.",
};

function CoachingQuizMobile() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleSelect = (idx) => setSelected(idx);

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (step < questions.length - 1) {
      setAnswers(newAnswers);
      setSelected(null);
      setStep(step + 1);
    } else {
      const avg = newAnswers.reduce((a, b) => a + b, 0) / newAnswers.length;
      setResult(avg >= 2 ? "high" : avg >= 1 ? "medium" : "low");
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setSelected(null);
    setResult(null);
  };

  return (
    <div id="quiz" className="px-5 py-10 space-y-8 bg-white">
      <div className="space-y-4">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Not sure yet?
        </span>
        <h2 className="font-miniature text-[32px] font-semibold leading-[38px] text-[#0d0d0d]">
          Could coaching{" "}
          <span className="italic text-[#ff6f61]">change</span> things for you?
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(13,13,13,0.7)]">
          You don&apos;t have to know exactly what you need before you start.
          Take the 2-minute quiz and we&apos;ll tell you whether coaching is a
          good fit.
        </p>

        <ul className="space-y-2">
          {[
            "You feel stuck but can't pinpoint why",
            "You know what you want but can't seem to get there",
            "You're tired of going in circles on the same problems",
            "You're ready for something to actually change",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-[13px] font-medium text-[#0d0d0d]">
              <span className="w-[16px] h-[16px] flex-shrink-0 border border-[#5200ff] rounded-[6px] flex items-center justify-center">
                <span className="text-[#5200ff] text-[9px]">✓</span>
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-[#0d0d0d] rounded-[20px] overflow-hidden">
        <div className="bg-[#f4efea] px-5 pt-5 pb-4 space-y-2">
          <h3 className="font-miniature text-[20px] text-center text-black">
            Is life coaching right for you?
          </h3>
          <p className="text-[12px] text-[rgba(0,0,0,0.7)] font-semibold text-center">
            5 quick questions — honest answers only
          </p>
          <div className="bg-[rgba(0,0,0,0.1)] h-1 rounded-full overflow-hidden">
            <div
              className="bg-[#5200ff] h-full rounded-full transition-all duration-300"
              style={{ width: `${((step) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {result ? (
          <div className="px-5 py-6 space-y-5">
            <p className="text-[15px] leading-[22px] text-[#0d0d0d] font-medium">
              {fitMessages[result]}
            </p>
            <Link to="/signup-anxiety">
              <Button className="w-full bg-[#5200ff] rounded-full font-semibold">
                Start your journey →
              </Button>
            </Link>
            <button onClick={reset} className="w-full text-[13px] text-[rgba(0,0,0,0.5)] underline">
              Retake quiz
            </button>
          </div>
        ) : (
          <div className="px-5 py-5 space-y-4">
            <p className="text-[14px] font-semibold text-[#0d0d0d] leading-[20px]">
              {questions[step].q}
            </p>
            <div className="space-y-2">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium border transition-colors ${
                    selected === i
                      ? "border-[#5200ff] bg-[rgba(82,0,255,0.06)] text-[#0d0d0d]"
                      : "border-[rgba(13,13,13,0.12)] text-[#0d0d0d]"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-[rgba(13,13,13,0.4)]">
                Question {step + 1} of {questions.length}
              </span>
              <button
                onClick={handleNext}
                disabled={selected === null}
                className="bg-[#5200ff] disabled:opacity-40 text-white text-[13px] font-semibold px-5 py-2 rounded-full"
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoachingQuizMobile;
