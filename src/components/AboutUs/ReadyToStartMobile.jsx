function ReadyToStartMobile() {
  return (
    <section className="bg-white px-5 py-10 flex flex-col gap-6 items-center text-center lg:hidden">
      {/* Image */}
      <img
        src="/about-us/cta/woman.webp"
        alt="Coach"
        className="rounded-[24px] object-cover max-h-[280px] w-full"
      />

      {/* Heading */}
      <div>
        <p className="font-miniature font-normal text-[36px] leading-none text-black">
          Ready to start?
        </p>
        <p className="font-miniature font-normal italic text-[44px] leading-none text-black">
          We're ready too.
        </p>
      </div>

      {/* Body */}
      <p className="text-[14px] font-normal text-[#0d0d0d]/70 leading-[1.25]">
        Book your session today. No credit card, no commitment just a conversation about where
        you want to go and whether we're the right fit to help you get there.
      </p>

      {/* Button */}
      <button className="w-full bg-[#5200ff] text-white rounded-full px-[32px] py-[16px] font-semibold text-[18px] leading-none">
        Get started →
      </button>
    </section>
  );
}

export default ReadyToStartMobile;
