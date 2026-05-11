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
      "Rarely — I feel stuck most of the time",
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
    <div id="quiz" className="bg-white px-5 py-8 flex flex-col gap-6">
      <div className="flex flex-col gap-8">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ Not sure yet?
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="font-miniature font-bold text-[42px] leading-[50px] text-[#0d0d0d]">
            Could coaching{" "}
            <span className="italic font-bold text-[#ff6f61]">change </span>
            things for you?
          </h2>
          <p className="text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)]">
            You don&apos;t have to know exactly what you need before you start.
            Take the 2-minute quiz and we&apos;ll tell you whether coaching is a
            good fit and what kind of support would help most.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {[
            "You feel stuck but can't pinpoint why",
            "You know what you want but can't seem to get there",
            "You're tired of going in circles on the same problems",
            "You're ready for something to actually change",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-0.5 w-[18px] h-[18px] flex-shrink-0 border border-[#5200ff] rounded-[9px] flex items-center justify-center bg-white/30">
                <span className="text-[#5200ff] text-[10px] leading-none">✓</span>
              </span>
              <span className="text-[14px] leading-[1.25] font-medium text-[#0d0d0d]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-[#0d0d0d] rounded-[24px] overflow-hidden bg-white">
        <div className="bg-[#f4efea] p-5 space-y-2">
          <h3 className="font-miniature text-[20px] leading-[28px] text-center text-black">
            Is life coaching right for you?
          </h3>
          <p className="text-[14px] leading-[17.5px] text-[rgba(0,0,0,0.7)] text-center">
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
            <p className="text-[14px] leading-[22px] text-[#0d0d0d] font-medium pb-4">
              {fitMessages[result]}
            </p>
            <Link to="/signup-anxiety">
              <Button className="w-full bg-[#5200ff] rounded-full font-semibold">
                Start Your Journey →
              </Button>
            </Link>
            <button onClick={reset} className="w-full text-[13px] text-[rgba(0,0,0,0.5)] underline">
              Retake quiz
            </button>
          </div>
        ) : (
          <div className="px-5 pt-5 space-y-5">
            <p className="text-[14px] font-semibold text-[#0d0d0d] leading-[22px]">
              {questions[step].q}
            </p>
            <div className="space-y-2.5">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-[9px] py-[9px] rounded-[12px] text-[13px] font-medium border transition-colors flex items-center gap-2 ${
                    selected === i
                      ? "border-[#5200ff] bg-[rgba(82,0,255,0.06)] text-[#0d0d0d]"
                      : "border-[rgba(13,13,13,0.12)] text-[#0d0d0d]"
                  }`}
                >
                  <span
                    className={[
                      "box-border w-[12px] h-[12px] rounded-full border flex-shrink-0",
                      selected === i
                        ? "border-[#5200ff] bg-[#5200ff]"
                        : "border-[rgba(13,13,13,0.2)] bg-white",
                    ].join(" ")}
                    aria-hidden
                  />
                  <span className="leading-normal">{opt}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between pt-1 pb-6 px-2">
              <span className="text-[12px] text-[rgba(13,13,13,0.4)] font-medium">
                Question {step + 1} of {questions.length}
              </span>
              <button
                onClick={handleNext}
                disabled={selected === null}
                className="bg-[#5200ff] disabled:opacity-40 text-white text-[14px] font-semibold px-[22px] py-[10px] rounded-full"
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
