const StarBadge = () => (
  <span className="bg-[#e5ff7d] rounded-full size-[28px] flex items-center justify-center">
    <img src="/contact-us/stats/star.webp" className="size-[16px] object-contain" alt="" />
  </span>
);

function Stats() {
  return (
    <div className="bg-white w-full py-[68px] px-[80px]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-center gap-[20px]">

        {/* Card 1 — 300+ Clients */}
        <div className="bg-[#e5ff7d] rounded-[29px] w-[306px] h-[179px] flex flex-col items-center justify-center gap-[12px] text-center text-black">
          <p className="font-miniature text-[72px] leading-[83px] font-bold">300+</p>
          <p className="text-[18px] font-normal capitalize tracking-[-0.36px] leading-[1.25]">
            Clients Helped
            <br />
            Worldwide
          </p>
        </div>

        {/* Card 2 — 4.9 Rating */}
        <div className="bg-[#00e4c6] rounded-[29px] w-[306px] h-[179px] flex flex-col items-center justify-center gap-[12px] text-center text-black">
          <div className="flex items-center gap-[4px]">
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
          </div>
          <p className="font-miniature text-[72px] leading-[83px] font-bold">4.9</p>
          <p className="text-[18px] font-normal capitalize tracking-[-0.36px] leading-[1.07]">
            Average Rating
            <br />
            Across All Sessions
          </p>
        </div>

        {/* Card 3 — 24 hrs */}
        <div className="bg-[#f097dd] rounded-[29px] w-[306px] h-[179px] flex flex-col items-center justify-center gap-[12px] text-center text-black">
          <p className="font-miniature text-[72px] leading-[83px] font-bold">24 hrs</p>
          <p className="text-[18px] font-normal capitalize tracking-[-0.36px] leading-[1.25]">
            To First Response
          </p>
        </div>

        {/* Card 4 — 2 Min */}
        <div className="bg-[#96adf0] rounded-[29px] w-[306px] h-[179px] flex flex-col items-center justify-center gap-[12px] text-center text-black">
          <p className="font-miniature text-[72px] leading-[83px] font-bold">2 Min</p>
          <p className="text-[18px] font-normal capitalize tracking-[-0.36px] leading-[1.07]">
            To Send Your
            <br />
            Message
          </p>
        </div>

      </div>
    </div>
  );
}

export default Stats;
