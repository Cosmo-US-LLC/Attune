import { Link } from "react-router-dom";

export default function BeginJourney() {
  return (
    <section className="bg-[#F4EFEA]">
      {/* Mobile — Figma 4791:19462 */}
      <div className="relative flex flex-col bg-white lg:hidden">
        <div className="relative h-[316px] shrink-0 overflow-hidden bg-[#95ADF0]">
          <div className="absolute left-1/2 top-1/2 h-[404px] w-[481px] -translate-x-1/2 -translate-y-1/2">
            <img
              src="/images/anxiety-page/begin-journey-woman-mobile.webp"
              alt="Smiling woman talking on phone"
              className="absolute left-[-95%] top-0 h-[164%] w-[206%] max-w-none object-cover"
            />
          </div>
        </div>

        <div className="relative border-y border-black px-5 py-8">
          <div className="flex w-[242px] flex-col gap-5">
            <div className="font-miniature text-black">
              <h2 className="text-[38px] leading-normal">Begin Your Journey</h2>
              <p className="text-[54px] leading-[70px]">Today!</p>
            </div>
            <Link
              to="/signup-anxiety"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#5200FF] px-5 py-2.5 text-[14px] font-medium capitalize leading-6 text-white transition-opacity hover:opacity-90"
            >
              Connect Now
            </Link>
          </div>

          <img
            src="/images/anxiety-page/begin-journey-brain-circle-mobile.webp"
            alt=""
            className="pointer-events-none absolute right-[10px] top-[73px] h-[77px] w-[76px]"
            aria-hidden="true"
          />
        </div>

        <img
          src="/images/anxiety-page/begin-journey-comm-circle-mobile.svg"
          alt=""
          className="pointer-events-none absolute bottom-[-10px] right-[95px] h-[94px] w-[94px]"
          aria-hidden="true"
        />
      </div>

      {/* Desktop — unchanged */}
      <div className="relative hidden h-[393px] lg:flex">
        <div className="relative w-[32%] shrink-0 overflow-hidden border border-r-0 border-black bg-[#95ADF0]">
          <img
            src="/images/anxiety-page/begin-journey-woman.png"
            alt="Smiling woman talking on phone"
            className="absolute bottom-0 left-1/2 h-[105%] w-auto max-w-none -translate-x-1/2"
          />
        </div>

        <div className="relative flex-1 overflow-hidden border border-l-0 border-r-0 border-black bg-white">
          <div className="absolute left-[80px] top-[96px] z-10">
            <h2 className="font-miniature text-[50px] leading-[69px] text-black">
              Begin Your Journey
            </h2>
            <p className="font-miniature text-[101px] leading-none text-black">
              Today!
            </p>
            <Link
              to="/signup-anxiety"
              className="mt-6 inline-block rounded-full bg-[#5200FF] px-10 py-3 text-[16px] font-medium leading-[26px] text-white transition-opacity hover:opacity-90"
            >
              Connect Now
            </Link>
          </div>

          <img
            src="/images/anxiety-page/begin-journey-comm-circle.png"
            alt=""
            className="absolute bottom-[-60px] right-[120px] z-10 h-[260px] w-[260px]"
            aria-hidden="true"
          />

          <img
            src="/images/anxiety-page/begin-journey-brain-circle.png"
            alt=""
            className="absolute right-[30px] top-[-30px] z-10 h-[170px] w-[170px]"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
