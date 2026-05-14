import { Link } from "react-router-dom";

function ReadyToStart() {
  return (
    <section className="w-full bg-white max-lg:hidden">
      <div className="relative max-w-[1440px] mx-auto h-[484px] flex items-center justify-between px-[113px]">
        {/* Left image */}
        <div className="w-[480px] h-[400px] flex-shrink-0">
          <img
            src="/about-us/cta/begin-image.webp"
            alt="Coach"
            className="w-full h-full object-cover rounded-[24px]"
          />
        </div>

        {/* Right text block */}
        <div className="flex flex-col gap-[27px] max-w-[514px]">
          <div>
            <p className="font-miniature font-normal text-[50px] leading-none text-black">
              Ready to start?
            </p>

            <p className="font-miniature font-normal italic text-[70px] leading-none text-black">
              We're ready too.
            </p>
          </div>

          <p className="text-[14px] font-normal text-[#0d0d0d]/70 leading-[1.25]">
            Book your session today. No commitment, just a conversation about
            where you want to go and whether we're the right fit to help you get
            there.
          </p>

          <Link to="/signup-anxiety">
            <button className="self-start bg-[#5200ff] text-white rounded-[39px] px-[32px] py-[16px] font-semibold text-[20px] leading-none">
              Get started →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReadyToStart;
