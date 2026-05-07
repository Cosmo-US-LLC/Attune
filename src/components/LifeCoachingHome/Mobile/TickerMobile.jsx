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
    <div className="bg-[#96adf0] py-4 overflow-hidden">
      <div className="flex items-center animate-marquee whitespace-nowrap gap-0">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-3 text-[14px] font-medium text-black">
            <span className="text-[#ff6f61] font-bold">✓</span>
            <span>{item}</span>
            <span className="text-[#e5ff7d] text-[18px] mx-4">✦</span>
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
      `}</style>
    </div>
  );
}

export default TickerMobile;
