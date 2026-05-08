/**
 * Combined section — node 4141:858 (h-538px)
 * Contains:
 *   - 4 overlapping stat circles at top:-138px (visually overlap the photos section above)
 *   - EaseCare text + 1000+ lime-green card centred in the 538px area
 */
const StarBadge = () => (
  <div className="bg-[#e5ff7d] rounded-[14.5px] flex items-center justify-center flex-shrink-0"
    style={{ width: 19.743, height: 19.743 }}>
    <img src="/about-us/stats/star.webp" alt="" style={{ width: 11.105, height: 11.105 }} />
  </div>
);

function EaseCare() {
  return (
    <section className="w-full overflow-visible bg-white">
      <div
        className="relative max-w-[1440px] mx-auto"
        style={{ height: 538 }}
      >

        {/* ── Stat circles ── overlapping 138px up into the photos section */}
        <div
          className="absolute z-10 flex items-start justify-center -translate-x-1/2 left-1/2"
          style={{ top: -138 }}
        >
          {/* 94% — lime */}
          <div
            className="bg-[#e5ff7d] rounded-[116px] flex flex-col items-center justify-center text-center text-black flex-shrink-0"
            style={{ width: 232, height: 232, marginRight: -14 }}
          >
            <p className="font-miniature text-[72px] leading-[83px]">94%</p>
            <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] capitalize mt-1 px-4">
              client satisfaction rate
            </p>
          </div>

          {/* 4.9 — cyan */}
          <div
            className="bg-[#00e4c6] rounded-[116px] flex flex-col items-center justify-center text-center text-black flex-shrink-0"
            style={{ width: 232, height: 232, marginRight: -14 }}
          >
            <p className="font-miniature text-[72px] leading-[83px]">4.9</p>
            <div className="flex items-center gap-[3px] my-1">
              <StarBadge /><StarBadge /><StarBadge /><StarBadge /><StarBadge />
            </div>
            <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.07] capitalize px-4">
              average rating<br />across all sessions
            </p>
          </div>

          {/* 3 yrs — pink */}
          <div
            className="bg-[#f097dd] rounded-[116px] flex flex-col items-center justify-center text-center text-black flex-shrink-0"
            style={{ width: 232, height: 232, marginRight: -14 }}
          >
            <p className="font-miniature text-[72px] leading-[83px]">3 yrs</p>
            <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.25] capitalize mt-1 px-4">
              of coaching experience
            </p>
          </div>

          {/* 500+ — blue */}
          <div
            className="bg-[#96adf0] rounded-[116px] flex flex-col items-center justify-center text-center text-black flex-shrink-0"
            style={{ width: 232, height: 232 }}
          >
            <p className="font-miniature text-[72px] leading-[83px]">500+</p>
            <p className="text-[18px] font-normal tracking-[-0.36px] leading-[1.07] capitalize mt-1 px-4">
              people coached<br />to date
            </p>
          </div>
        </div>

        {/* ── EaseCare text — vertically centred at 50%+32px ── */}
        <div
          className="absolute flex flex-col gap-[22px] w-[614px]"
          style={{ left: 114, top: "calc(50% + 32px)", transform: "translateY(-50%)" }}
        >
          <h2 className="font-miniature text-[55px] leading-[1.11] text-[#0d0d0d]">
            <span className="font-bold">Backed by EaseCare</span>
            <br />
            <span className="font-normal">trusted in mental health across Alberta.</span>
          </h2>
          <p className="text-[18px] font-normal leading-[1.25] text-[rgba(13,13,13,0.7)]">
            Feelattune isn&apos;t a startup built in a vacuum. It&apos;s an extension of EaseCare,
            a mental health service with years of experience helping Albertans navigate wellbeing
            challenges. That means every coaching practice, coach vetting process, and session
            framework is grounded in real mental health expertise not just business logic.
          </p>
        </div>

        {/* ── 1000+ lime-green card ── */}
        <div
          className="absolute bg-[#e5ff7d] rounded-[40px] overflow-hidden flex flex-col items-center justify-center gap-[18px]"
          style={{
            left: 916,
            top: "calc(50% + 32px)",
            transform: "translateY(-50%)",
            width: 337,
            height: 236,
          }}
        >
          <p className="font-miniature font-bold text-[72px] leading-[1.11] text-[#0d0d0d] text-center">
            1000+
          </p>
          <p className="text-[18px] font-normal text-black text-center leading-[1.07] capitalize px-4">
            Albertans served<br />through EaseCare
          </p>
        </div>

      </div>
      
    </section>
  );
}

export default EaseCare;
