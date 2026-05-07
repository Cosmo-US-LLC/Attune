const StarBadge = () => (
  <div className="bg-[#e5ff7d] rounded-[14px] size-[20px] flex items-center justify-center">
    <img src="/about-us/stats/star.webp" className="size-[11px]" alt="" />
  </div>
);

function Stats() {
  return (
    <section className="bg-white relative max-lg:hidden">
      {/* Bottom layer — coach photos */}
      <div className="flex w-full">
        <img
          src="/about-us/stats/coach-phone.webp"
          alt="Coach on phone"
          className="w-[480px] h-[477px] object-cover"
        />
        <img
          src="/about-us/stats/coach-laptop.webp"
          alt="Coach on laptop"
          className="w-[480px] h-[477px] object-cover"
        />
        <img
          src="/about-us/stats/coach-headset.webp"
          alt="Coach with headset"
          className="w-[480px] h-[477px] object-cover"
        />
      </div>

      {/* Top layer — overlapping circular stat pills */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center pt-6">
        {/* Circle 1 — 94% */}
        <div className="bg-[#e5ff7d] size-[232px] rounded-[116px] flex flex-col items-center justify-center text-center text-black -mr-[14px] z-10">
          <p className="font-miniature text-[72px] leading-none font-normal">94%</p>
          <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] px-6 mt-1">
            client satisfaction rate
          </p>
        </div>

        {/* Circle 2 — 4.9 rating */}
        <div className="bg-[#00e4c6] size-[232px] rounded-[116px] flex flex-col items-center justify-center text-center text-black -mr-[14px] z-10">
          <p className="font-miniature text-[72px] leading-none font-normal">4.9</p>
          <div className="flex items-center gap-[3px] my-1">
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
            <StarBadge />
          </div>
          <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] px-4">
            average rating across all sessions
          </p>
        </div>

        {/* Circle 3 — 3 yrs */}
        <div className="bg-[#f097dd] size-[232px] rounded-[116px] flex flex-col items-center justify-center text-center text-black -mr-[14px] z-10">
          <p className="font-miniature text-[72px] leading-none font-normal">3 yrs</p>
          <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] px-6 mt-1">
            of coaching experience
          </p>
        </div>

        {/* Circle 4 — 500+ */}
        <div className="bg-[#96adf0] size-[232px] rounded-[116px] flex flex-col items-center justify-center text-center text-black z-10">
          <p className="font-miniature text-[72px] leading-none font-normal">500+</p>
          <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] px-6 mt-1">
            people coached to date
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
