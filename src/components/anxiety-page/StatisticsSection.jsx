import { Link } from "react-router-dom";
function StatisticsSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden max-md:h-auto h-[1000px]">
      {/* Background image - faint grayscale boy with anxiety */}
      <img
        src="/images/anxiety-page/anxiety-boy-bg.png"
        alt=""
        className="absolute inset-0 object-cover w-full h-full opacity-25 mix-blend-luminosity max-md:hidden"
      />

      {/* ===== DESKTOP: absolute-positioned circles ===== */}

      {/* TOP-LEFT: Lime circle */}
      <div className="max-md:hidden absolute left-[147px] top-[130px] w-[275px] h-[276px] z-10">
        <img
          src="/images/anxiety-page/char-teal.svg"
          alt=""
          className="absolute -top-[50px] -right-[10px] w-[140px] h-[110px] rotate-[18deg] z-20"
        />
        <img
          src="/images/anxiety-page/circle-lime.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-[16px] leading-[22px] text-black">
            <span className="font-bold text-[25px] leading-[30px] block mb-1">
              Over 50%
            </span>
            of people struggle with stress and anxiety but avoid clinical care.
          </p>
        </div>
      </div>

      {/* TOP-RIGHT: Teal/Cyan circle */}
      <div className="max-md:hidden absolute right-[111px] top-[100px] w-[253px] h-[254px] z-10">
        <img
          src="/images/anxiety-page/char-pink.svg"
          alt=""
          className="absolute -top-[50px] -left-[10px] w-[143px] h-[114px] -rotate-[17deg] z-20"
        />
        <img
          src="/images/anxiety-page/circle-pink-right.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-[16px] leading-[22px] text-black">
            <span className="font-bold text-[25px] leading-[30px] block mb-1">
              20% of older adults
            </span>
            Experience mental health challenges, including depression and
            anxiety.
          </p>
        </div>
      </div>

      {/* BOTTOM-LEFT: Teal circle */}
      <div className="max-md:hidden absolute left-[71px] bottom-[80px] w-[299px] h-[300px] z-10">
        <img
          src="/images/anxiety-page/char-yellow.svg"
          alt=""
          className="absolute -top-[50px] right-[10px] w-[124px] h-[110px] z-20"
        />
        <img
          src="/images/anxiety-page/circle-teal-left.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-[16px] leading-[22px] text-black">
            <span className="font-bold text-[25px] leading-[30px] block mb-1">
              1 in 5 young adults
            </span>
            struggles with social anxiety in their daily life.
          </p>
        </div>
      </div>

      {/* BOTTOM-RIGHT: Magenta/Pink circle */}
      <div className="max-md:hidden absolute right-[139px] bottom-[60px] w-[306px] h-[307px] z-10">
        <img
          src="/images/anxiety-page/char-green.svg"
          alt=""
          className="absolute -top-[40px] left-[10px] w-[128px] h-[102px] -rotate-[11deg] z-20"
        />
        <img
          src="/images/anxiety-page/circle-magenta.svg"
          alt=""
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <p className="text-[16px] leading-[22px] text-black">
            <span className="font-bold text-[25px] leading-[30px] block mb-1">
              70% of caregivers
            </span>
            experience significant levels of anxiety or emotional exhaustion.
          </p>
        </div>
      </div>

      {/* ===== Center content (desktop: absolute overlay; mobile: normal flow) ===== */}
      <div className="md:absolute md:inset-0 md:z-20 md:pointer-events-none flex flex-col items-center justify-center text-center max-md:py-[60px] max-md:px-6">
        <h2 className="font-miniature text-[64px] leading-[72px] font-normal text-black max-w-[900px] max-md:text-[36px] max-md:leading-[44px]">
          Anxiety is more common than you think and more treatable.
        </h2>
        <p className="mt-6 text-[16px] leading-[28px] text-gray-700 max-w-[805px]">
          Most people struggling with anxiety never get help, not because they
          don&apos;t want it, but because traditional options feel out of reach.
          FeelAttune makes support accessible, affordable, and judgment-free.
        </p>
        <Link
            to="/signup-anxiety"
          className="mt-7 bg-[#FF6F61] hover:bg-[#e85d50] text-white py-3 px-8 rounded-full inline-block text-center font-medium transition-colors md:pointer-events-auto"
        >
          Schedule a Free 15-Minute Call
        </Link>
      </div>

      {/* ===== MOBILE: 2x2 grid of stat cards ===== */}
      <div className="md:hidden grid grid-cols-2 gap-4 px-4 pb-[60px]">
        {/* Lime card */}
        <div className="relative w-full aspect-square">
          <img src="/images/anxiety-page/circle-lime.svg" alt="" className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <p className="text-[13px] leading-[18px] text-black">
              <span className="font-bold text-[18px] leading-[24px] block mb-1">Over 50%</span>
              of people struggle with stress and anxiety but avoid clinical care.
            </p>
          </div>
        </div>
        {/* Pink card */}
        <div className="relative w-full aspect-square">
          <img src="/images/anxiety-page/circle-pink-right.svg" alt="" className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <p className="text-[13px] leading-[18px] text-black">
              <span className="font-bold text-[18px] leading-[24px] block mb-1">20% of older adults</span>
              Experience mental health challenges, including depression and anxiety.
            </p>
          </div>
        </div>
        {/* Teal card */}
        <div className="relative w-full aspect-square">
          <img src="/images/anxiety-page/circle-teal-left.svg" alt="" className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <p className="text-[13px] leading-[18px] text-black">
              <span className="font-bold text-[18px] leading-[24px] block mb-1">1 in 5 young adults</span>
              struggles with social anxiety in their daily life.
            </p>
          </div>
        </div>
        {/* Magenta card */}
        <div className="relative w-full aspect-square">
          <img src="/images/anxiety-page/circle-magenta.svg" alt="" className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
            <p className="text-[13px] leading-[18px] text-black">
              <span className="font-bold text-[18px] leading-[24px] block mb-1">70% of caregivers</span>
              experience significant levels of anxiety or emotional exhaustion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
