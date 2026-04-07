export default function BeginJourney() {
  return (
    <section className="bg-[#F4EFEA]">
      <div className="relative flex h-[393px] max-md:flex-col max-md:h-auto">
        {/* Left - Blue box with woman centered */}
        <div className="w-[32%] shrink-0 bg-[#95ADF0] border border-black relative overflow-hidden max-md:w-full max-md:h-[350px]">
          {/* Desktop image */}
          <img
            src="/images/anxiety-page/begin-journey-woman.png"
            alt="Smiling woman talking on phone"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto max-w-none max-md:hidden"
          />
          {/* Mobile image - cropped close-up */}
          <img
            src="/images/anxiety-page/begin-journey-woman-mobile.png"
            alt="Smiling woman talking on phone"
            className="hidden max-md:block w-full h-full object-cover object-center"
          />
        </div>

        {/* Right - White box with content and illustrations */}
        <div className="flex-1 bg-white border border-black border-l-0 relative overflow-hidden max-md:border-l max-md:border-t-0">
          {/* Text + Button */}
          <div className="absolute left-[80px] top-[96px] z-10 max-md:relative max-md:left-0 max-md:top-0 max-md:p-6">
            <h2 className="font-miniature text-[50px] max-md:text-[32px] max-md:leading-[42px] leading-[69px] text-black">
              Begin Your Journey
            </h2>
            <p className="font-miniature text-[101px] leading-[1] text-black italic max-md:text-[52px]">
              Today!
            </p>
            <a
              href="https://signup.feelattune.com/sign-up"
              className="mt-6 inline-block bg-[#5200FF] text-white rounded-full px-10 py-3 text-[16px] font-medium hover:opacity-90 transition-opacity"
            >
              Connect Now
            </a>
          </div>

          {/* Communication circle illustration */}
          <img
            src="/images/anxiety-page/begin-journey-comm-circle.png"
            alt=""
            className="absolute right-[80px] bottom-[-40px] w-[260px] h-[260px] z-10 max-md:hidden"
          />

          {/* Brain/nature circle - top right */}
          <img
            src="/images/anxiety-page/begin-journey-brain-circle.png"
            alt=""
            className="absolute right-[20px] top-[-20px] w-[170px] h-[170px] z-10 max-md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
