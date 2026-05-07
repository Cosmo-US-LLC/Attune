const items = [
  "1-on-1 Personalised Support",
  "No Waitlists",
  "Built by EaseCare",
  "Certified Life Coaches",
  "Flexible Online Sessions",
  "Cancel Anytime",
];

function Ticker() {
  return (
    <section className="bg-[#96adf0] w-full py-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 px-5 lg:flex-nowrap lg:gap-x-0">
        {items.map((item, i) => (
          <span key={item} className="flex items-center">
            {i > 0 && (
              <span className="text-[#e5ff7d] mx-3 lg:mx-5 text-[20px] max-lg:text-[14px]">✦</span>
            )}
            <span className="font-medium text-[20px] max-lg:text-[14px] text-[#0d0d0d]">
              <span className="text-[#ff6f61]">✓</span> {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  );
}

export default Ticker;
