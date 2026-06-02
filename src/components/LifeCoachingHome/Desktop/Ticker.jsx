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
          <span className="whitespace-nowrap px-10 text-[20px] font-medium leading-[28px] tracking-[0.52px] text-black">
            <span className="text-[#ff6f61]">✓ </span>
            {item}
          </span>
          <span className="flex-shrink-0 font-syne text-[19px] font-medium leading-normal tracking-[0.78px] text-[#e5ff7d]">
            ✦
          </span>
        </React.Fragment>
      ))}
    </>
  );
}

function Ticker() {
  return (
    <div className="overflow-hidden bg-[#96adf0] py-6">
      <div
        className="flex animate-marquee items-center"
        style={{ "--duration": "30s", "--gap": "0px" }}
      >
        <TickerRow />
        <TickerRow />
      </div>
    </div>
  );
}

export default Ticker;
