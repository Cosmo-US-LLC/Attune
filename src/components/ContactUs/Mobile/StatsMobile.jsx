const StarBadge = () => (
  <span className="bg-[#e5ff7d] rounded-full size-[20px] flex items-center justify-center">
    <img src="/contact-us/stats/star.webp" className="size-[12px] object-contain" alt="" />
  </span>
);

function StatsMobile() {
  return (
    <div className="bg-white w-full px-5 py-10">
      <div className="grid grid-cols-2 gap-4 max-w-[420px] mx-auto">

        {/* Card 1 — 300+ Clients */}
        <div className="bg-[#e5ff7d] rounded-[20px] flex flex-col items-center justify-center gap-2 text-center text-black py-6 px-4">
          <p className="font-miniature text-[48px] font-bold leading-[1]">300+</p>
          <p className="text-[14px] font-normal capitalize">Clients Helped Worldwide</p>
        </div>

        {/* Card 2 — 4.9 Rating */}
        <div className="bg-[#00e4c6] rounded-[20px] flex flex-col items-center justify-center gap-2 text-center text-black py-6 px-4">
          <div className="flex items-center gap-[3px]">
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
          </div>
          <p className="font-miniature text-[48px] font-bold leading-[1]">4.9</p>
          <p className="text-[14px] font-normal capitalize">Average Rating Across All Sessions</p>
        </div>

        {/* Card 3 — 24 hrs */}
        <div className="bg-[#f097dd] rounded-[20px] flex flex-col items-center justify-center gap-2 text-center text-black py-6 px-4">
          <p className="font-miniature text-[48px] font-bold leading-[1]">24 hrs</p>
          <p className="text-[14px] font-normal capitalize">To First Response</p>
        </div>

        {/* Card 4 — 2 Min */}
        <div className="bg-[#96adf0] rounded-[20px] flex flex-col items-center justify-center gap-2 text-center text-black py-6 px-4">
          <p className="font-miniature text-[48px] font-bold leading-[1]">2 Min</p>
          <p className="text-[14px] font-normal capitalize">To Send Your Message</p>
        </div>

      </div>
    </div>
  );
}

export default StatsMobile;
