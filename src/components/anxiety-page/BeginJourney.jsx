import { Link } from "react-router-dom";
export default function BeginJourney() {
  return (
    <section className="bg-[#F4EFEA]">
      <div className="relative flex h-[393px] max-md:flex-col max-md:h-auto">
        {/* Left - Blue box with woman centered */}
        <div className="w-[32%] shrink-0 bg-[#95ADF0] border border-black border-r-0 relative overflow-hidden max-md:w-full max-md:h-[350px]">
          {/* Desktop image */}
          <img
            src="/images/anxiety-page/begin-journey-woman.png"
            alt="Smiling woman talking on phone"
            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[105%] w-auto max-w-none max-md:hidden"
          />
          {/* Mobile image - cropped close-up */}
          <img
            src="/images/anxiety-page/begin-journey-woman-mobile.png"
            alt="Smiling woman talking on phone"
            className="hidden object-cover object-center w-full h-full max-md:block"
          />
        </div>

        {/* Right - White box with content and illustrations */}
        <div className="relative flex-1 overflow-hidden bg-white border border-l-0 border-r-0 border-black max-md:border-l max-md:border-t-0">
          {/* Text + Button */}
          <div className="absolute left-[80px] top-[96px] z-10 max-md:relative max-md:left-0 max-md:top-0 max-md:p-6">
            <h2 className="font-miniature text-[50px] max-md:text-[32px] max-md:leading-[42px] leading-[69px] text-black">
              Begin Your Journey
            </h2>
            <p className="font-miniature text-[101px] leading-[1] text-black max-md:text-[52px]">
              Today!
            </p>
            <Link
            to="/signup-anxiety"
              className="mt-6 inline-block bg-[#5200FF] text-white rounded-full px-10 py-3 text-[16px] font-medium hover:opacity-90 transition-opacity"
            >
              Schedule a Free 15-Minute Call
            </Link>
          </div>

          {/* Communication circle illustration */}
          <img
            src="/images/anxiety-page/begin-journey-comm-circle.png"
            alt=""
            className="absolute right-[120px] bottom-[-60px] w-[260px] h-[260px] z-10 max-md:hidden"
          />

          {/* Brain/nature circle - top right */}
          <img
            src="/images/anxiety-page/begin-journey-brain-circle.png"
            alt=""
            className="absolute right-[30px] top-[-30px] w-[170px] h-[170px] z-10 max-md:hidden"
          />
        </div>
      </div>
    </section>
  );
}
