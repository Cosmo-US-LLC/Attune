const trustPoints = [
  "Certified life coaches",
  "Flexible scheduling",
  "Judgment-free sessions",
  "Cancel anytime",
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="10" fill="#4ADE80" />
    <path
      d="M6 10.5L8.5 13L14 7.5"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[85vh]">
      {/* Left - Image */}
      <div className="w-full lg:w-[55%] h-[350px] lg:h-auto bg-[#E5FF7D] relative">
        <img
          src="/desktop6/hero/Hero.webp"
          alt="Person with puzzle pieces, finding peace of mind"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full lg:w-[45%] bg-[#8B80F0] px-5 py-10 lg:px-12 lg:py-16 flex flex-col justify-center text-left">
        <h1 className="font-miniature text-[42px] leading-[46px] lg:text-[80px] lg:leading-[84px] text-white">
          Anxiety holding you back?{" "}
          <span className="italic">Let's change that.</span>
        </h1>

        <p className="text-white text-[18px] leading-[28px] opacity-90 mt-6">
          No stigma. No diagnosis needed. Just real, one-on-one coaching with
          someone who gets what anxiety feels like and knows how to help you move
          through it. On your terms, at your pace.
        </p>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mt-8">
          <a
            href="https://signup.feelattune.com/sign-up"
            className="bg-[#FF6F61] text-white rounded-full px-8 py-3 font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            15min Free Consultation ➔
          </a>
          <span className="font-miniature text-[22px] text-white whitespace-nowrap">
            Starting from $39
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
          {trustPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-2 justify-start"
            >
              <CheckIcon />
              <span className="text-white text-[16px]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
