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
    <div className="flex size-[18px] shrink-0 items-center justify-center rounded-[9px] border border-[#5200ff] bg-white/30 p-px">
      <img
        src="/images/anxiety-page/v2/pricing-check.svg"
        alt=""
        className="h-2 w-2.5"
      />
    </div>
  );
}

function SessionsPricing() {
  return (
    <div
      id="pricing"
      className="bg-[#F4EFEA] px-5 py-12 lg:px-[114px] lg:py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1212px] flex-col items-center gap-12">
        <div className="flex max-w-[800px] flex-col items-center gap-6 text-center lg:gap-8">
          <h2 className="font-miniature text-[42px] leading-[50px] font-bold text-[#0d0d0d] lg:text-[54px] lg:leading-[62px]">
            Choose what{" "}
            <span className="font-miniature italic text-[#FF6F61]">works for you</span>
          </h2>
          <p className="text-[16px] leading-[26px] text-[rgba(13,13,13,0.7)] lg:text-[18px] lg:leading-[26px]">
            No lock-in contracts. Not happy after your first session? We&apos;ll
            match you with a different coach or give you a full refund. No
            questions asked.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.type}
              className="relative flex min-h-[408px] flex-col overflow-hidden rounded-[24px] bg-white px-4 py-6"
            >
              <div className="flex items-start justify-between gap-2">
                <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
                  {plan.type}
                </p>
                {plan.badge && (
                  <div
                    className={`shrink-0 rounded-[26px] px-3.5 py-1.5 ${plan.badgeColor}`}
                  >
                    <span className="text-[14px] font-semibold capitalize leading-[22px] text-white">
                      {plan.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
                    CAD $
                  </span>
                  <span className="font-miniature text-[40px] font-bold capitalize leading-[50px] text-black">
                    {plan.price}
                  </span>
                </div>
                {(plan.note || plan.perSession) && (
                  <p className="text-[14px] font-medium italic leading-[22px] text-[rgba(13,13,13,0.7)]">
                    {plan.note || plan.perSession}
                  </p>
                )}
              </div>

              <ul className="mt-3 flex flex-1 flex-col gap-2">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <CheckIcon />
                    <span className="text-[14px] font-medium leading-[22px] text-[#0d0d0d]">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4">
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

export default SessionsPricing;
