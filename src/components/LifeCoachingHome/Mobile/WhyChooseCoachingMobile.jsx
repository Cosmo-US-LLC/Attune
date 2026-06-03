import React, { useState, useLayoutEffect, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CARD_DURATION_MS = 5200;

const cards = [
  {
    num: "01",
    title: "Direction over drift",
    body:
      "Most of us drift through decisions shaped by habit, fear, or other people's expectations. Coaching replaces drift with intentional direction choices that reflect who you genuinely are and where you want to go.",
    illustration: "/figma/home-mobile/why-card-image.webp",
    illustrationClassName:
      "pointer-events-none select-none float-right ml-3 -mr-2 -mb-2 w-[130px] h-[117px] shrink-0 [shape-outside:margin-box] mt-[92px]",
  },
  {
    num: "02",
    title: "Tools, not just talk",
    body: "A good coaching session leaves you with something concrete: a reframe, a plan, a decision, or an action—not just a feeling. Every session is designed to move you forward, not just help you feel understood.",
    illustration: "/figma/home-mobile/why-card-02.webp",
    illustrationClassName:
      "pointer-events-none select-none float-right ml-3 -mr-2 w-[108px] h-[108px] shrink-0 [shape-outside:margin-box] mt-[20px]",
  },
  {
    num: "03",
    title: "Growth that compounds",
    body: "The person you become through coaching doesn't revert when the sessions end. The clarity, the habits, the self-trust—they compound. Each version of yourself becomes the foundation for the next.",
    illustration: "/figma/home-mobile/why-card-03.webp",
    illustrationClassName:
      "pointer-events-none select-none float-right ml-3 -mr-2 -mb-2 w-[143px] h-[130px] shrink-0 [shape-outside:margin-box] mt-[14px]",
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

function WhyCarouselProgressBar({ durationMs, cycleKey, onFillComplete }) {
  const fillRef = useRef(null);
  const onCompleteRef = useRef(onFillComplete);

  useLayoutEffect(() => {
    onCompleteRef.current = onFillComplete;
  }, [onFillComplete]);

  useLayoutEffect(() => {
    const el = fillRef.current;
    if (!el) return;

    el.style.transition = "none";
    el.style.width = "0%";
    void el.offsetWidth;
    el.style.transition = `width ${durationMs}ms linear`;
    el.style.width = "100%";

    const onEnd = (e) => {
      if (e.propertyName !== "width") return;
      el.removeEventListener("transitionend", onEnd);
      onCompleteRef.current();
    };

    el.addEventListener("transitionend", onEnd);
    return () => el.removeEventListener("transitionend", onEnd);
  }, [durationMs, cycleKey]);

  return (
    <div className="bg-[rgba(0,0,0,0.1)] h-2 rounded-[100px] overflow-hidden">
      <div
        ref={fillRef}
        className="bg-[#5200ff] h-full rounded-[100px]"
        style={{ width: "0%" }}
      />
    </div>
  );
}

function WhyChooseCoachingMobile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useLayoutEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const advance = useCallback(() => {
    setActiveIndex((i) => (i + 1) % cards.length);
  }, []);

  useEffect(() => {
    if (!prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % cards.length);
    }, CARD_DURATION_MS);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <div className="bg-white px-5 py-8 flex flex-col gap-10">
      <div className="flex flex-col gap-6 items-center text-center">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ Why choose coaching
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="section-heading">
            Coaching meets you where you are and helps you go{" "}
            <span className="heading-accent">further</span>
          </h2>
          <p className="text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)]">
            Life coaching isn&apos;t crisis care. It&apos;s a partnership for people
            ready to grow.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative min-h-[280px]" aria-live="polite">
          <div className="overflow-hidden rounded-[24px] bg-[#f4efea]">
            <div
              className={`flex ${
                prefersReducedMotion ? "" : "transition-transform duration-500 ease-out"
              }`}
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
              }}
            >
              {cards.map((card, idx) => (
                <div
                  key={card.num}
                  className="w-full shrink-0 bg-[#f4efea] rounded-[24px] px-4 py-8 flex flex-col gap-2 min-h-[280px]"
                  aria-hidden={idx !== activeIndex}
                >
                  <div className="w-8 h-8 rounded-[16px] bg-[#38ab9b] text-white font-miniature text-[13.714px] flex items-center justify-center leading-none tabular-nums shrink-0">
                    {card.num}
                  </div>
                  <h3 className="font-miniature font-normal text-[24px] leading-[32px] text-black shrink-0">
                    {card.title}
                  </h3>
                  {card.illustration ? (
                    <div className="flow-root flex-1 min-h-0 pb-2">
                      <img
                        src={card.illustration}
                        alt=""
                        className={card.illustrationClassName}
                      />
                      <p className="font-inter text-[14px] leading-[22px] font-normal text-black">
                        {card.body}
                      </p>
                    </div>
                  ) : (
                    <p className="flex-1 font-inter text-[14px] leading-[22px] font-normal text-black pb-2">
                      {card.body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {!prefersReducedMotion && (
          <WhyCarouselProgressBar
            durationMs={CARD_DURATION_MS}
            cycleKey={activeIndex}
            onFillComplete={advance}
          />
        )}

        {prefersReducedMotion && (
          <div className="bg-[rgba(0,0,0,0.1)] h-2 rounded-[100px] overflow-hidden">
            <div
              className="bg-[#5200ff] h-full rounded-[100px] transition-none"
              style={{
                width: `${((activeIndex + 1) / cards.length) * 100}%`,
              }}
            />
          </div>
        )}
      </div>

      <div className="bg-[#e5ff7d] rounded-[24px] px-5 py-8 flex flex-col gap-6 items-center text-center overflow-hidden">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="font-miniature font-bold text-[28px] leading-[36px] text-black">
            <span className="block leading-[36px]">A little support can go</span>
            <span className="block leading-[36px]">
              a{" "}
              <span className="italic font-bold">long way.</span>
            </span>
          </h3>
          <p className="text-[14px] leading-[22px] text-[rgba(0,0,0,0.65)]">
            You don&apos;t need to be in crisis to benefit from coaching. Most people
            come to us simply because they want to feel a bit clearer, a bit more
            confident, and a bit more like themselves again.
          </p>
        </div>

        <Link to="/signup-anxiety" className="w-full">
          <Button className="w-full bg-[#5200ff] rounded-full font-semibold px-5 py-[14px] text-[14px] leading-6 h-auto whitespace-pre">
            {`Start Your Journey  →`}
          </Button>
        </Link>

        <div className="w-full overflow-x-auto">
          <div className="flex gap-2 w-max mx-auto">
            {benefits.map((b, i) => (
              <span
                key={i}
                className="bg-[rgba(0,0,0,0.08)] text-[rgba(0,0,0,0.8)] text-[12px] font-medium px-[14px] py-[8px] rounded-full whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseCoachingMobile;
