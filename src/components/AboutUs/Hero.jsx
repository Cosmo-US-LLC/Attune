import { Link } from "react-router-dom";
import phoneImage from "../../assets/images/about_us_video_call.webp";
/**
 * About Us Hero — node 4139:36
 * Phone mockup: node 4139:1273
 * Strategy: phone-frame.png has a transparent screen window.
 * Layer coach photo BEHIND the frame. Frame PNG sits on top and naturally
 * clips the photo via its transparent cutout — no CSS mask-image needed.
 *
 * Layout: composition stays inside max-w-[1440px] with horizontal padding so
 * fixed absolute offsets are not measured against the full viewport (which
 * broke alignment / caused overlap below ~1160px).
 */
function Hero() {
  return (
    <section className="max-lg:hidden bg-[#f4efea] relative min-h-[680px] h-[680px] overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto w-full h-full min-h-[680px] px-6 md:px-10 xl:px-[113px] flex items-center justify-between gap-6 lg:gap-10 xl:gap-12 min-w-0">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-[27px] flex-1 min-w-0 max-w-[607px] shrink z-10">
          <p className="font-semibold text-[25px] text-[#0d0d0d] leading-[1.2]">
            We started because
          </p>
          <h1 className="font-miniature text-[72px] leading-[83px] font-semibold  text-[#0d0d0d]">
            <span className="italic text-[#ff6f61]">Great coaching</span>
            {" shouldn't be"}
            <br />
            out of reach
          </h1>
          <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.5]">
            Built by people who saw a gap and decided to close it. Feelattune
            exists to make high-quality, human life coaching accessible to
            anyone who&apos;s ready to move forward.
          </p>
          <Link
            to="/contact-us"
            className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize px-[21px] py-[18px] rounded-[39px] max-w-[409px] w-full inline-flex items-center justify-center hover:bg-[#4000cc] transition-colors"
          >
            Book Your Free Consultation →
          </Link>
        </div>

        {/* Phone — scales down slightly when row is tight */}
        <div className="relative shrink-0 w-[min(438px,40%)] min-w-[220px] aspect-[438/638] max-h-[638px] self-center translate-y-[10px] pointer-events-none select-none">
          <img
            src={phoneImage}
            alt="Video call on phone"
            className="absolute inset-0 object-cover object-center w-full h-full"
          />
        </div>

        {/* <div
        className="absolute bottom-0"
        style={{
          left: "calc(50% + 331px)",
          transform: "translateX(-50%)",
          width: 438,
          height: 638,
        }}
      >
         
        <div
          className="absolute overflow-hidden rounded-[34px]"
          style={{ left: 51, top: 108, width: 339, height: 530, zIndex: 1 }}
        >
          <img
            src="/about-us/hero/coach-man.webp"
            alt="Life coaching video session"
            className="absolute pointer-events-none max-w-none"
            style={{
              width: "203.62%",
              height: "103.24%",
              top: "-3.31%",
              left: "-51.77%",
            }}
          />
        </div>

       
        <div
          className="absolute rounded-[15.7px] border-[1.9px] border-white overflow-hidden"
          style={{
            left: 209.71,
            top: 407.46,
            width: 163.1,
            height: 111.44,
            zIndex: 2,
          }}
        >
          <div className="absolute inset-0 bg-[#e5fe7f]" />
          <img
            src="/about-us/hero/woman-pip.webp"
            alt="Session participant"
            className="absolute object-cover pointer-events-none max-w-none"
            style={{ left: -29.11, top: -14.37, width: 205.45, height: 136.88 }}
          />
        </div>

        
        <div
          className="absolute flex items-center justify-between px-[20px] rounded-[38.9px]"
          style={{
            left: 64.02,
            top: 533.55,
            width: 311.5,
            height: 40.06,
            background: "rgba(244,239,234,0.92)",
            border: "0.389px solid white",
            zIndex: 2,
          }}
        >
          <div className="flex items-center gap-[18px]">
            <img
              src="/about-us/hero/icons/mic.webp"
              alt=""
              className="h-[14px] w-[14px]"
            />
            <img
              src="/about-us/hero/icons/video.webp"
              alt=""
              className="h-[14px] w-[14px]"
            />
            <img
              src="/about-us/hero/icons/send.webp"
              alt=""
              className="h-[14px] w-[14px]"
            />
           
            <div className="relative">
              <img
                src="/about-us/hero/icons/record.webp"
                alt=""
                className="h-[14px] w-[14px]"
              />
            </div>
            <img
              src="/about-us/hero/icons/message.webp"
              alt=""
              className="h-[14px] w-[14px]"
            />
            <img
              src="/about-us/hero/icons/dots.webp"
              alt=""
              className="h-[5px] w-[12px]"
            />
          </div>
          <div className="bg-[#ff6f61] rounded-[28px] flex items-center justify-center px-[10px] py-[6px]">
            <span className="text-white font-semibold text-[7px] whitespace-nowrap">
              End Call
            </span>
          </div>
        </div>

        
        <div
          className="absolute flex items-center justify-between"
          style={{
            left: "calc(50% - 168.25px)",
            top: 46,
            width: 336.5,
            zIndex: 3,
          }}
        >
          <div className="relative" style={{ width: 95, height: 32 }}>
            <p
              className="absolute font-miniature text-[21px] text-black"
              style={{ left: 4.46, top: 0 }}
            >
              <span className="italic">feel</span>Attune
            </p>
            <p
              className="absolute text-[6.8px] text-black text-right"
              style={{ right: -4, top: 27 }}
            >
              By EaseCare
            </p>
          </div>
          <div className="flex items-center gap-[8.7px]">
            <div
              className="border border-[#5c2852] rounded-[58px] flex items-center justify-center"
              style={{ width: 30.76, height: 29.02 }}
            >
              <img
                src="/about-us/hero/icons/bell.webp"
                alt=""
                style={{ width: 10.4, height: 12.7 }}
              />
            </div>
            <span className="text-[10.4px] text-black font-normal whitespace-nowrap">
              Hi, Norma
            </span>
            <img
              src="/about-us/hero/icons/chevron.webp"
              alt=""
              style={{ width: 7.4, height: 4.5 }}
            />
          </div>
        </div>
 
        <div
          className="absolute left-1/2 -translate-x-1/2 bg-black rounded-[19px]"
          style={{
            top: 28.44,
            width: 83,
            height: 23.22,
            opacity: 0.88,
            zIndex: 4,
          }}
        />
 
        <div
          className="absolute"
          style={{
            inset: "0 -0.08% -38.56% 0.06%",
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          <img
            src="/about-us/hero/phone-frame.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 block w-full h-full max-w-none"
          />
        </div>
      </div> */}
      </div>
    </section>
  );
}

export default Hero;
