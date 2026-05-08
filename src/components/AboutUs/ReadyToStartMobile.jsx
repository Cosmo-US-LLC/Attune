import { Link } from "react-router-dom";

function ReadyToStartMobile() {
  return (
    <section className="flex flex-col items-center gap-6 px-5 py-10 text-center bg-white lg:hidden">
      {/* Image */}
      <img
        src="/about-us/cta/begin-image.webp"
        alt="Coach"
        className="rounded-[24px] object-cover max-h-[280px] w-full"
      />

      {/* Heading */}
      <div>
        <p className="font-miniature font-normal text-[36px] leading-none text-black">
          Ready to start?
        </p>
        <p className="font-miniature font-semibold italic text-[44px] leading-none text-black">
          We're ready too.
        </p>
      </div>

      {/* Body */}
      <p className="text-[14px] font-normal text-[#0d0d0d]/70 leading-[1.25]">
        Book your session today. No credit card, no commitment just a conversation about where
        you want to go and whether we're the right fit to help you get there.
      </p>

      {/* Button */}
      <Link to="/signup-anxiety">
        <button className="w-full bg-[#5200ff] text-white rounded-full px-[32px] py-[16px] font-semibold text-[18px] leading-none">
          Get started →
        </button>
      </Link>
      
    </section>
  );
}

export default ReadyToStartMobile;
