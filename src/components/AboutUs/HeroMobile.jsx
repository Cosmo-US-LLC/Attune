import { Link } from "react-router-dom";

function HeroMobile() {
  return (
    <section className="lg:hidden bg-[#f4efea] px-5 py-10 flex flex-col gap-6">
      {/* Label */}
      <p className="font-semibold text-[18px] text-[#0d0d0d]">We started because</p>

      {/* Headline */}
      <h1 className="font-miniature font-bold text-[42px] leading-[1.1]">
        <span className="block">
          <span className="italic text-[#ff6f61]">Great coaching</span>
          <span className="text-[#0d0d0d]"> shouldn&apos;t be</span>
        </span>
        <span className="block text-[#0d0d0d]">out of reach</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
        Built by people who saw a gap and decided to close it. Feelattune exists to make
        high-quality, human life coaching accessible to anyone who&apos;s ready to move forward.
      </p>

      {/* CTA */}
      <Link
        to="/contact-us"
        className="bg-[#5200ff] text-white font-semibold text-[17px] py-[16px] rounded-full w-full inline-flex items-center justify-center text-center hover:bg-[#4000cc] transition-colors"
      >
        Book Your Free Consultation →
      </Link>

      {/* Coach image */}
      <img
        src="/about-us/hero/coach-woman.webp"
        alt="Coach"
        className="w-full rounded-[24px] object-cover max-h-[320px]"
      />
    </section>
  );
}

export default HeroMobile;
