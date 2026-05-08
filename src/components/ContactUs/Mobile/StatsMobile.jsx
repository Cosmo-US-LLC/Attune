const StarBadge = () => (
  <span className="bg-[#e5ff7d] rounded-full size-[28px] flex items-center justify-center">
    <img
      src="/contact-us/stats/star.webp"
      className="size-[16px] object-contain"
      alt=""
    />
  </span>
);

const cardClass =
  "h-[240px] rounded-[29px] flex flex-col items-center justify-center gap-3 text-center text-black px-6 w-full";

function StatsMobile() {
  return (
    <div className="bg-white w-full px-5 py-[48px]">
      <div className="flex flex-col gap-[14px] w-full">
        {/* Card 1 — 300+ Clients */}
        <div className={`bg-[#e5ff7d] ${cardClass}`}>
          <p className="font-miniature text-[64px] font-bold leading-[72px]">300+</p>
          <p className="text-[16px] leading-6 font-normal capitalize">
            Clients Helped
            <br />
            Worldwide
          </p>
        </div>

        {/* Card 2 — 4.9 Rating */}
        <div className={`bg-[#00e4c6] ${cardClass}`}>
          <div className="flex items-center gap-[4px]">
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
          </div>
          <p className="font-miniature text-[64px] font-bold leading-[72px]">4.9</p>
          <p className="text-[16px] leading-6 font-normal capitalize">
            Average Rating
            <br />
            Across All Sessions
          </p>
        </div>

        {/* Card 3 — 24 hrs */}
        <div className={`bg-[#f097dd] ${cardClass}`}>
          <p className="font-miniature text-[64px] font-bold leading-[72px]">24 hrs</p>
          <p className="text-[16px] leading-6 font-normal capitalize">To First Response</p>
        </div>

        {/* Card 4 — 2 Min */}
        <div className={`bg-[#96adf0] ${cardClass}`}>
          <p className="font-miniature text-[64px] font-bold leading-[72px]">2 Min</p>
          <p className="text-[16px] leading-6 font-normal capitalize">
            To Send Your
            <br />
            Message
          </p>
        </div>
      </div>
    </div>
  );
}

export default StatsMobile;
