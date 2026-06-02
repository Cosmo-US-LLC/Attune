import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const questions = [
  {
    q: "When you think about where you want to be in a year, how clear does that picture feel?",
    options: [
      "Completely foggy — I have no idea",
      "Vague — I have feelings but not clarity",
      "Somewhat clear — I know the direction",
      "Very clear — I just need help getting there",
    ],
  },
  {
    q: "When you set a goal for yourself, what usually happens?",
    options: [
      "I struggle to even get started",
      "I start, then lose momentum after a few weeks",
      "I make progress but often get in my own way",
      "I follow through, but I want to go deeper or faster",
    ],
  },
  {
    q: "How would you describe the way you talk to yourself when things get hard?",
    options: [
      "Pretty harsh — I'm my own worst critic",
      "I doubt myself a lot, but I try to push through",
      "I'm okay, but I don't always back myself",
      "I'm fairly kind to myself — I just want more support",
    ],
  },
  {
    q: "How often do you feel like your life reflects what actually matters to you?",
    options: [
      "Rarely — it feels like I'm just going through the motions",
      "Sometimes — but something feels off and I can't name it",
      "Often — but there are a few areas I know need work",
      "Most of the time — I just want to accelerate",
    ],
  },
  {
    q: "What would feel most valuable to you right now?",
    options: [
      "Someone to help me figure out what I actually want",
      "A clear plan I'll finally commit to",
      "More confidence to make decisions and back myself",
      "Accountability and a fresh perspective on where I'm heading",
    ],
  },
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

function CoachingQuizMobile() {
  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const handleSelect = (idx) => setSelected(idx);

  const handleNext = () => {
    if (selected === null) return;
    const points = selected + 1; // A=1, B=2, C=3, D=4
    const newScore = totalScore + points;
    if (step < questions.length - 1) {
      setTotalScore(newScore);
      setSelected(null);
      setStep(step + 1);
    } else {
      setTotalScore(newScore);
      setResult(getResult(newScore));
    }
  };

  const reset = () => {
    setStep(0);
    setTotalScore(0);
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
              style={{ width: result ? "100%" : `${((step + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {result ? (
          <div className="px-5 py-6 flex flex-col items-center gap-4 text-center">
            <span
              className="rounded-full px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: result.labelColor }}
            >
              {result.label}
            </span>
            <p className="text-[18px] font-bold leading-[26px] text-[#0d0d0d] font-miniature">
              {result.headline}
            </p>
            <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
              {result.body}
            </p>
            <div className="w-full rounded-2xl bg-[#f4efea] px-5 py-4 flex flex-col items-center gap-1">
              <span
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: result.labelColor }}
              >
                {result.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-[42px] font-bold leading-none"
                  style={{ color: result.labelColor }}
                >
                  {totalScore}
                </span>
                <span className="text-[18px] font-medium text-[rgba(13,13,13,0.35)]">/ 20</span>
              </div>
              <span className="text-[11px] font-medium text-[rgba(13,13,13,0.45)]">Your score</span>
            </div>
            <Link to="/signup-anxiety" className="w-full">
              <Button className="w-full bg-[#5200ff] rounded-full font-semibold">
                Start Your Journey →
              </Button>
            </Link>
            {/* <button onClick={reset} className="w-full text-[13px] text-[rgba(0,0,0,0.5)] underline">
              Retake quiz
            </button> */}
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
                {step === questions.length - 1 ? "See My Result →" : "Next →"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoachingQuizMobile;
