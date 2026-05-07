function Hero() {
  return (
    <section className="max-lg:hidden bg-[#f4efea] relative h-[680px] overflow-hidden">
      {/* Left column */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[113px] flex flex-col gap-[27px] w-[607px]">
        <p className="font-semibold text-[25px] text-[#0d0d0d] leading-[83px]">We started because</p>

        <h1 className="font-miniature text-[72px] leading-[83px] text-[#0d0d0d]">
          <span className="italic text-[#ff6f61]">Great coaching</span>
          {" shouldn't be"}
          <br />
          out of reach
        </h1>

        <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
          Built by people who saw a gap and decided to close it. Feelattune exists to make
          high-quality, human life coaching accessible to anyone who&apos;s ready to move forward.
        </p>

        <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize px-[21px] py-[18px] rounded-[39px] w-[409px] hover:bg-[#4000cc] transition-colors">
          Book Your Free Consultation →
        </button>
      </div>

      {/* Right column — phone mockup (438 × 638 px container) */}
      <div
        className="absolute bottom-0"
        style={{ left: "calc(50% + 331px)", transform: "translateX(-50%)", width: 438, height: 638 }}
      >
        {/* Coach man photo — masked to the phone screen shape */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: 51,
            top: 108,
            width: 339,
            height: 530,
            WebkitMaskImage: "url('/about-us/hero/phone-screen-mask.png')",
            WebkitMaskSize: "339.422px 505.769px",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "-1.234px -1.256px",
            maskImage: "url('/about-us/hero/phone-screen-mask.png')",
            maskSize: "339.422px 505.769px",
            maskRepeat: "no-repeat",
            maskPosition: "-1.234px -1.256px",
          }}
        >
          <img
            src="/about-us/hero/coach-man.webp"
            alt="Life coaching video session"
            className="absolute max-w-none pointer-events-none"
            style={{
              height: "103.24%",
              left: "-51.77%",
              top: "-3.31%",
              width: "203.62%",
            }}
          />
        </div>

        {/* Woman PIP (picture-in-picture) frame */}
        <div
          className="absolute border-2 border-white rounded-[16px] overflow-hidden"
          style={{ left: 209.71, top: 407.46, width: 163.1, height: 111.4 }}
        >
          <div className="absolute inset-0 bg-[#e5fe7f]" />
          <img
            src="/about-us/hero/woman-pip.webp"
            alt="Session participant"
            className="absolute max-w-none object-cover pointer-events-none"
            style={{ left: -29.11, top: -14.37, width: 205.45, height: 136.88 }}
          />
        </div>

        {/* Bottom call bar */}
        <div
          className="absolute bg-[#f4efea] border border-white rounded-[39px] shadow-sm"
          style={{ left: 64.02, top: 533.55, width: 311.5, height: 40.06 }}
        />

        {/* End Call button */}
        <div
          className="absolute bg-[#ff6f61] rounded-[28px]"
          style={{ left: 310.97, top: 541.72, width: 56.39, height: 23.33 }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-[7px]">
            End Call
          </span>
        </div>

        {/* App bar — feelAttune logo + "Hi, Norma" */}
        <div
          className="absolute flex items-center justify-between"
          style={{ left: "50%", transform: "translateX(-50%)", top: 56, width: 336.5 }}
        >
          <span className="font-miniature text-[21px] text-black">
            <span className="italic">feel</span>Attune
          </span>
          <span className="text-[10px] text-black font-normal">Hi, Norma ▾</span>
        </div>

        {/* Dynamic island / notch */}
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-black rounded-[19px] opacity-90"
          style={{ top: 28.44, width: 83, height: 23.2 }}
        />

        {/* Phone frame on top (PNG preserves the pink border + screen cutout) */}
        <img
          src="/about-us/hero/phone-frame.png"
          alt=""
          aria-hidden="true"
          className="absolute left-0 max-w-none pointer-events-none"
          style={{ top: 0, width: "100.08%", height: "138.56%", objectFit: "fill" }}
        />
      </div>
    </section>
  );
}

export default Hero;
