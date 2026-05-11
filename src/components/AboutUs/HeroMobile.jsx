import { Link } from "react-router-dom";
import phoneImage from "../../assets/images/about_us_video_call.webp";

function HeroMobile() {
  return (
    <section className="lg:hidden bg-[#f4efea] px-4 pt-12 flex flex-col gap-8 overflow-hidden">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-[14px] w-full">
          <p className="font-semibold text-[14px] uppercase text-[#0d0d0d]">We started because</p>

          <h1 className="font-miniature font-bold text-[56px] leading-[64px] tracking-[-0.02em] text-[#0d0d0d]">
            <span className="block italic text-[#ff6f61]">Great</span>
            <span className="block italic text-[#ff6f61]">coaching</span>
            <span className="block">shouldn&apos;t be</span>
            <span className="block">out of reach</span>
          </h1>

          <p className="max-w-[360px] text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px]">
            Built by people who saw a gap and decided to close it. Feelattune exists to make
            high-quality, human life coaching accessible to anyone who&apos;s ready to move forward.
          </p>
        </div>

        <Link
          to="/signup-anxiety"
          className="self-start bg-[#5200ff] text-white rounded-[100px] px-6 min-[360px]:px-8 h-[56px] font-semibold text-[16px] leading-[24px] inline-flex items-center gap-2 hover:bg-[#4000cc] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5200ff] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efea]"
          aria-label="Book your free consultation"
        >
          <span>Book Your Free Consultation</span>
          <span aria-hidden="true" className="text-[18px] leading-none">
            →
          </span>
        </Link>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={phoneImage}
          alt="Video call on phone"
          className="w-full max-w-[360px] object-contain"
        />
      </div>
    </section>
  );
}

export default HeroMobile;
