import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const plans = [
  {
    badge: "Most popular",
    badgeColor: "bg-[#96adf0]",
    type: "4-Session Pack",
    price: "269",
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
    badge: "Best value",
    badgeColor: "bg-[#f097dd]",
    type: "Monthly Membership",
    price: "239",
    note: "$60 per session · ongoing · cancel anytime",
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

function PricingMobile() {
  return (
    <div id="pricing" className="bg-[#f4efea] px-5 py-10 space-y-8">
      <div className="space-y-4 text-center">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Simple pricing
        </span>
        <h2 className="font-miniature text-[32px] font-semibold leading-[38px] text-[#0d0d0d]">
          Choose what{" "}
          <span className="italic text-[#ff6f61]">works for you</span>
        </h2>
        <p className="text-[14px] leading-[20px] text-[rgba(13,13,13,0.7)]">
          No lock-in contracts. Every plan begins with a free conversation — no
          payment until you&apos;re ready to start.
        </p>
      </div>

      <div className="space-y-5">
        {plans.map((plan, i) => (
          <div key={i} className="bg-white rounded-[24px] h-[400px] px-5 py-6 space-y-5 relative">
            <div className="flex items-start justify-between">
              <p className="text-[13px] text-[rgba(13,13,13,0.7)]">{plan.type}</p>
              <span
                className={`${plan.badgeColor} text-white text-[11px] font-semibold px-3 py-1 rounded-full`}
              >
                {plan.badge}
              </span>
            </div>

            <div>
              <p className="text-[11px] text-[rgba(13,13,13,0.7)]">CAD $</p>
              <p className="font-miniature text-[40px] leading-[44px] text-black">
                {plan.price}
                <span className="text-[20px]"> /mo</span>
              </p>
              <p className="italic text-[12px] text-[rgba(13,13,13,0.7)] mt-1">
                {plan.note}
              </p>
            </div>

            <ul className="space-y-2">
              {plan.features.map((feat, j) => (
                <li key={j} className="flex items-center gap-2 text-[13px] text-[#0d0d0d] font-medium">
                  <span className="w-[16px] h-[16px] flex-shrink-0 border border-[#5200ff] rounded-[5px] flex items-center justify-center">
                    <span className="text-[#5200ff] text-[9px]">✓</span>
                  </span>
                  {feat}
                </li>
              ))}
            </ul>
            <div className="pt-2">
              <Link to="/signup-anxiety">
                <Button className="w-full bg-[#5200ff] rounded-full font-semibold">
                  {plan.cta}
                </Button>
              </Link>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingMobile;
