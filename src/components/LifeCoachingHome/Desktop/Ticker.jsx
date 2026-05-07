import React from "react";

const items = [
  "1-on-1 Personalised Support",
  "No Waitlists",
  "Built by EaseCare",
  "Certified Life Coaches",
  "Flexible Online Sessions",
  "Cancel Anytime",
];

function TickerRow() {
  return (
    <>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span className="font-medium text-[20px] text-black tracking-[0.52px] px-[40px] whitespace-nowrap">
            <span className="text-[#ff6f61]">✓ </span>
            {item}
          </span>
          <span className="text-[#e5ff7d] text-[19px] font-medium tracking-[0.78px] flex-shrink-0">
            ✦
          </span>
        </React.Fragment>
      ))}
    </>
  );
}

function Ticker() {
  return (
    <div className="bg-[#96adf0] py-[24px] overflow-hidden">
      <div
        className="flex items-center animate-marquee"
        style={{ "--duration": "30s", "--gap": "0px" }}
      >
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}

export default Ticker;
