import { Link } from "react-router-dom";
const trustPoints = [
  "Certified life coaches",
  "Flexible scheduling",
  "Judgment-free sessions",
  "Cancel anytime",
];

const CheckIcon = () => (
  <img
    src="/images/anxiety-page/check-square.svg"
    alt=""
    className="flex-shrink-0 w-6 h-6"
  />
);

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh]">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2 h-[420px] lg:h-auto bg-[#E5FF7D] relative overflow-hidden">
        <img
          src="/desktop6/hero/Hero.webp"
          alt="Person with puzzle pieces, finding peace of mind"
          className="absolute inset-0 object-cover object-top w-full h-full"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-1/2 bg-[#95ADF0] px-5 py-10 lg:px-[80px] lg:py-[100px] flex flex-col justify-center text-left">
        <h1 className="font-miniature text-[56px] leading-[60px] lg:text-[80px] lg:leading-[84px] text-white">
          Anxiety holding you back?{" "}
          <span className="italic">Let's change that.</span>
        </h1>

        <p className="text-white text-[16px] leading-[24px] opacity-90 mt-6">
          No stigma. No diagnosis needed. Just real, one-on-one coaching with
          someone who gets what anxiety feels like and knows how to help you move
          through it. On your terms, at your pace.
        </p>

        <div className="flex flex-col items-start gap-6 mt-8 lg:flex-row lg:items-center">
          <Link
            to="/signup-anxiety"
            className="bg-[#5200FF] text-white rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity whitespace-nowrap flex items-center gap-2"
          >
            Book a Free 15-Min Discovery Call
            <img src="/images/anxiety-page/cta-arrow.svg" alt="" className="w-5 h-5" />
          </Link>
          <span className="font-miniature text-[24px] text-black whitespace-nowrap">
            Starting from $39
          </span>
        </div>

        <div className="grid grid-cols-1 gap-3 mt-8 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center justify-start gap-2"
            >
              <CheckIcon />
              <span className="text-black text-[16px]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
