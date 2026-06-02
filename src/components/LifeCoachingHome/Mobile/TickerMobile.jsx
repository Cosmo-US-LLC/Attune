import React from "react";

const items = [
  "1-on-1 Personalised Support",
  "No Waitlists",
  "Built by EaseCare",
  "Certified Life Coaches",
  "Flexible Online Sessions",
  "Cancel Anytime",
];

function TickerMobile() {
  return (
    <div className="bg-[#96adf0] py-[24px] overflow-hidden">
      <div className="flex items-center gap-2 animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-4 text-[16px] font-medium text-black tracking-[0.52px]"
          >
            <span className="text-[#ff6f61]">✓ </span>
            <span className="leading-[24px]">{item}</span>
            <span className="text-[#e5ff7d] text-[19.5px] tracking-[0.78px]">
              ✦
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default TickerMobile;
