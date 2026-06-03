import React from "react";
import { Button } from "@/components/ui/button";
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
    note: "$67 per session · sessions never expire",
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
    badge: "Best Value",
    badgeColor: "bg-[#f097dd]",
    type: "Monthly Membership",
    price: "239 /mo",
    note: "$60 per session · ongoing · cancel anytime",
    features: [
      "4 sessions per month (50 min each)",
      "Dedicated coach, every session",
      "Priority scheduling",
      "Continuous progress tracking",
      "Best for lasting, ongoing change",
    ],
    cta: "Get started →",
  },
];

function PricingMobile() {
  return (
    <div
      id="pricing"
      className="bg-[#f4efea] px-5 py-8 flex flex-col gap-6 items-center"
    >
      <div className="flex flex-col gap-6 items-center w-full text-center">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ Simple pricing
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <h2 className="section-heading">
            Choose what <span className="heading-accent">works for you</span>
          </h2>
          <p className="text-[16px] leading-[24px] text-[rgba(13,13,13,0.7)]">
            No lock-in contracts. Not happy after your first session? We'll
            match you with a different coach or give you a full refund. No
            questions asked.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 w-full">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="bg-white rounded-[24px] px-4 py-5 flex flex-col gap-[22px] overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <p className="text-[14px] leading-[1.25] text-[rgba(13,13,13,0.7)] font-normal">
                {plan.type}
              </p>
              <span
                className={`${plan.badgeColor} text-white text-[14px] font-semibold px-[14px] py-[8px] rounded-[26px] capitalize`}
              >
                {plan.badge}
              </span>
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex gap-1 items-center">
                <span className="text-[14px] leading-[1.25] text-[rgba(13,13,13,0.7)] font-normal">
                  CAD $
                </span>
                <span className="font-miniature text-[32px] leading-[40px] text-black capitalize">
                  {plan.price}
                </span>
              </div>
              <p className="text-[14px] font-medium italic leading-[1.25] text-[rgba(13,13,13,0.7)]">
                {plan.note}
              </p>

              <ul className="space-y-2">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex gap-2 items-center">
                    <span className="w-[18px] h-[18px] flex-shrink-0 border border-[#5200ff] rounded-[9px] flex items-center justify-center bg-white/30">
                      <span className="text-[#5200ff] text-[10px] leading-none">
                        ✓
                      </span>
                    </span>
                    <span className="text-[14px] leading-[22px] font-medium text-[#0d0d0d]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/signup-anxiety" className="w-full">
              <Button className="w-full bg-[#5200ff] rounded-full font-semibold px-5 py-3.5 text-[14px] leading-6 h-auto">
                {plan.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingMobile;
