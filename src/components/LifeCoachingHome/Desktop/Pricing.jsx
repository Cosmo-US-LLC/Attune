import React from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    badge: "Most popular",
    badgeColor: "bg-[#96adf0]",
    type: "4-Session Pack",
    price: "269",
    perSession: "$67 per session · sessions never expire",
    features: [
      "4 video sessions (50 min each)",
      "Same coach every session",
      "Flexible scheduling",
      "Best for building real momentum",
      "Use at your own pace",
    ],
    cta: "Get started →",
  },
  {
    badge: "Best value",
    badgeColor: "bg-[#f097dd]",
    type: "Monthly Membership",
    price: "239",
    perSession: "$60 per session · ongoing · cancel anytime",
    features: [
      "4 sessions per month (50 min each)",
      "Dedicated coach, every session",
      "Priority scheduling",
      "Continuous progress tracking",
      "Best for lasting, ongoing change",
    ],
    cta: "Get Started →",
  },
];

function CheckIcon() {
  return (
    <div className="border border-[#5200ff] bg-white/30 rounded-[9px] flex-shrink-0 size-[18px] flex items-center justify-center">
      <span className="text-[#5200ff] text-[10px] font-bold">✓</span>
    </div>
  );
}

function Pricing() {
  return (
    <div id="pricing" className="bg-[#f4efea] px-[114px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-[32px] items-center max-w-[1006px]">
          <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px]">
            <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
              ✦ Simple pricing
            </span>
          </div>
          <div className="text-center">
            <p className="font-miniature text-[55px] font-semibold leading-[67px] text-[#0d0d0d]">
              Choose what{" "}
              <span className="font-miniature italic text-[#ff6f61]">works for you</span>
            </p>
            <p className="mt-[24px] text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
              No lock-in contracts. Every plan begins with a free conversation
              <br />
              no payment until you&apos;re ready to start.
            </p>
          </div>
        </div>

        {/* Plan cards */}
        <div className="flex gap-[32px] items-center">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] overflow-hidden w-[429px] h-[360px] relative flex-shrink-0"
            >
              {/* Badge */}
              <div
                className={`absolute top-[22px] right-[18px] ${plan.badgeColor} rounded-[26px] px-[14px] py-[6px]`}
              >
                <span className="font-semibold text-[14px] text-white capitalize">
                  {plan.badge}
                </span>
              </div>

              <div className="px-[31px] pt-[32px] pb-[0px]">
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)]">{plan.type}</p>
                <div className="flex items-baseline gap-[4px] mt-[4px]">
                  <span className="text-[14px] text-[rgba(13,13,13,0.7)]">CAD $</span>
                  <span className="font-miniature text-[40px] text-black leading-tight">
                    {plan.price} /mo
                  </span>
                </div>
                <p className="italic text-[14px] font-medium text-[rgba(13,13,13,0.7)] mt-[2px]">
                  {plan.perSession}
                </p>

                <ul className="mt-[12px] mb-[20px] flex flex-col gap-[7px]">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-[10px]">
                      <CheckIcon />
                      <span className="font-medium text-[14px] text-[#0d0d0d]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <div className="absolute bottom-[18px] left-[18px] right-[18px] pt-6">
                <Link to="/signup-anxiety">
                  <button className="w-full bg-[#5200ff] text-white font-semibold text-[18px] capitalize tracking-[0.72px] py-[12px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
                    {plan.cta}
                  </button>
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
