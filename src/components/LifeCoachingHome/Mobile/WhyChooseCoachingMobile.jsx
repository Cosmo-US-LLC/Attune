import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const cards = [
  {
    num: "01",
    title: "Direction over drift",
    body: "Most of us drift through decisions shaped by habit, fear, or other people's expectations. Coaching replaces drift with intentional direction — choices that reflect who you genuinely are and where you want to go.",
  },
  {
    num: "02",
    title: "Tools, not just talk",
    body: "A good coaching session leaves you with something concrete: a reframe, a plan, a decision, an action. Not just a feeling. Every session is designed to move you forward, not just help you feel understood.",
  },
  {
    num: "03",
    title: "Growth that compounds",
    body: "The person you become through coaching doesn't revert when the sessions end. The clarity, the habits, the self-trust — they compound. Each version of yourself becomes the foundation for the next.",
  },
];

const benefits = [
  "More self-awareness",
  "Clearer decisions",
  "Deeper confidence",
  "Better relationships",
  "Real momentum",
  "A version of you you're proud of",
  "Less going in circles",
  "More of what actually matters",
];

function WhyChooseCoachingMobile() {
  return (
    <div className="px-5 py-10 space-y-8 bg-white">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Why choose coaching
        </span>
        <h2 className="font-miniature text-[32px] leading-[38px] font-semibold text-[#0d0d0d]">
          Coaching meets you where you are and helps you go{" "}
          <span className="text-[#ff6f61]">further</span>
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(13,13,13,0.7)]">
          Life coaching isn&apos;t crisis care. It&apos;s a partnership for
          people ready to grow.
        </p>
      </div>

      <div className="space-y-5">
        {cards.map((card) => (
          <div key={card.num} className="bg-[#f4efea] rounded-[24px] px-5 pt-8 pb-6 relative space-y-3">
            <div className="absolute -top-4 left-5 bg-[#38ab9b] text-white font-miniature text-[16px] w-10 h-10 rounded-2xl flex items-center justify-center">
              {card.num}
            </div>
            <h3 className="font-miniature text-[24px] text-black leading-[30px]">
              {card.title}
            </h3>
            <p className="text-[14px] leading-[22px] text-black">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#e5ff7d] rounded-[24px] px-5 py-8 space-y-4 text-center">
        <h3 className="font-miniature text-[28px] leading-[34px] font-semibold text-black">
          A little support can go a{" "}
          <span className="italic">long way.</span>
        </h3>
        <p className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.65)]">
          You don&apos;t need to be in crisis to benefit from coaching. Most
          people come to us simply because they want to feel a bit clearer, a
          bit more confident, and a bit more like themselves again.
        </p>
        <Link to="/signup-anxiety">
          <Button className="w-full bg-[#5200ff] rounded-full font-semibold py-5">
            Start your journey →
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {benefits.map((b, i) => (
          <span
            key={i}
            className="bg-[rgba(0,0,0,0.07)] text-[rgba(0,0,0,0.8)] text-[12px] font-medium px-3 py-1.5 rounded-full"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseCoachingMobile;
