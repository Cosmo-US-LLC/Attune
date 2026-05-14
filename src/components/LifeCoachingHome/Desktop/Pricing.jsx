import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    badge: "",
    badgeColor: "",
    type: "One Video Session",
    price: "79",
    note: "Pay-as-you-go available",
    features: [
      "No commitment",
      "Great for one-time clarity",
      "Ideal for first-timers",
    ],
    cta: "Get started →",
  },
  {
    badge: "Most popular",
    badgeColor: "bg-[#96adf0]",
    type: "4-Session Pack",
    price: "269 /mo",
    perSession: "$67 per session · sessions never expire",
    features: [
      "4 video sessions (50 min each)",
      "Same coach every session",
      "Flexible scheduling",
      "Best for building real momentum",
      "Use at your own pace",
    ],
  },
  {
    badge: "Best Value",
    badgeColor: "bg-[#f097dd]",
    type: "Monthly Membership",
    price: "239 /mo",
    perSession: "$60 per session · ongoing · cancel anytime",
    features: [
      "4 sessions per month (50 min each)",
      "Dedicated coach, every session",
      "Priority scheduling",
      "Continuous progress tracking",
      "Best for lasting, ongoing change",
    ],
  },
];

function CheckIcon() {
  return (
    <div className="flex size-[18px] flex-shrink-0 items-center justify-center rounded-[9px] border border-[#5200ff] bg-white/30 p-px">
      <span className="text-[10px] font-bold text-[#5200ff]">✓</span>
    </div>
  );
}

function Pricing() {
  return (
    <div
      id="pricing"
      className="bg-[#f4efea] px-4 py-[60px] sm:px-6 lg:px-[80px]"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <div className="flex max-w-[1006px] flex-col items-center gap-8">
          <div className="rounded-[39px] bg-[#e5ff7d] px-5 py-4">
            <span className="text-center text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
              ✦ Simple pricing
            </span>
          </div>
          <div className="text-center">
            <p className="font-miniature text-[54px] font-bold leading-[62px] text-[#0d0d0d]">
              Choose what{" "}
              <span className="italic text-[#ff6f61]">works for you</span>
            </p>
            <div className="mt-6 whitespace-pre-wrap text-[18px] font-normal leading-[26px] text-[rgba(13,13,13,0.7)]">
              <p className="mb-0">
                No lock-in contracts. Not happy after your first session? We'll
                match you with a different coach or give you a full refund. No
                questions asked.
              </p>
              {/* <p className="mb-0">No lock-in contracts. Every plan begins with a free conversation</p>
              <p className="mb-0">{` no payment until you're ready to start.`}</p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-8 justify-center items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="relative flex min-h-[405px] w-full max-w-[390px] flex-shrink-0 flex-col overflow-hidden rounded-[24px] bg-white px-4 py-6"
            >
              <div className="flex gap-2 justify-between items-start">
                <p className="text-[14px] font-normal leading-[22px] text-[rgba(13,13,13,0.7)]">
                  {plan.type}
                </p>
                <div
                  className={`shrink-0 rounded-[26px] px-3.5 py-1.5 ${plan.badgeColor}`}
                >
                  <span className="text-[14px] font-semibold capitalize leading-[22px] text-white">
                    {plan.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-3">
                <div className="flex gap-2 items-center">
                  <span className="text-[14px] font-normal leading-[22px] text-[rgba(13,13,13,0.7)]">
                    CAD $
                  </span>
                  <span className="font-miniature text-[40px] font-bold capitalize leading-[50px] text-black">
                    {plan.price}
                  </span>
                </div>
                <p className="text-[14px] font-medium italic leading-[22px] text-[rgba(13,13,13,0.7)]">
                  {plan.perSession}
                </p>
              </div>

              <ul className="flex overflow-hidden flex-col flex-1 gap-2 mt-3">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex gap-2 items-center">
                    <CheckIcon />
                    <span className="text-[14px] font-medium leading-[22px] text-[#0d0d0d]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 mt-auto">
                <Link
                  to="/signup-anxiety"
                  className="flex w-full items-center justify-center rounded-[39px] bg-[#5200ff] px-[21px] py-4 text-[18px] font-semibold capitalize text-white no-underline transition-colors hover:bg-[#4000cc]"
                >
                  Get started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
