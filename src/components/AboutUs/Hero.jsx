function Hero() {
  return (
    <section className="max-lg:hidden bg-[#f4efea] relative h-[680px] flex items-center overflow-hidden">
      {/* Left column */}
      <div className="flex flex-col gap-[28px] pl-[114px] max-w-[607px] z-10">
        {/* Label */}
        <p className="font-semibold text-[25px] text-[#0d0d0d]">We started because</p>

        {/* Headline */}
        <h1 className="font-miniature font-bold text-[72px] leading-[1.1]">
          <span className="block">
            <span className="italic text-[#ff6f61]">Great coaching</span>
            <span className="text-[#0d0d0d]"> shouldn&apos;t be</span>
          </span>
          <span className="block text-[#0d0d0d]">out of reach</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25] max-w-[540px]">
          Built by people who saw a gap and decided to close it. Feelattune exists to make
          high-quality, human life coaching accessible to anyone who&apos;s ready to move forward.
        </p>

        {/* CTA */}
        <button className="bg-[#5200ff] text-white font-semibold text-[20px] px-[21px] py-[18px] rounded-[39px] self-start hover:bg-[#4000cc] transition-colors">
          Book Your Free Consultation →
        </button>
      </div>

      {/* Right column — images */}
      <img
        src="/about-us/hero/coach-woman.webp"
        alt="Coach"
        className="absolute bottom-[108px] right-[51px] h-[530px] w-[339px] object-cover object-top rounded-[20px]"
      />
      <img
        src="/about-us/hero/phone-frame.webp"
        alt="Coaching session"
        className="absolute bottom-0 right-0 h-[638px] object-contain object-bottom"
      />
    </section>
  );
}

export default Hero;
