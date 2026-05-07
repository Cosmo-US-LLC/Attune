const tags = [
  "More self-awareness",
  "Clearer decisions",
  "Deeper confidence",
  "Better relationships",
  "Real momentum",
  "A version of you you're proud of",
  "Less going in circles",
  "More of what actually matters",
];

function WhyChooseCoaching() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="px-[114px] pt-[60px] flex flex-col items-center gap-[32px]">
        <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px]">
          <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
            ✦ Why choose coaching
          </span>
        </div>
        <div className="max-w-[800px] text-center">
          <p className="font-miniature text-[55px] leading-[67px] text-[#0d0d0d]">
            Coaching meets you where you are and helps you go{" "}
            <span className="text-[#ff6f61]">further</span>
          </p>
          <p className="mt-[24px] text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
            Life coaching isn&apos;t crisis care. It&apos;s a partnership for
            people ready to grow.
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="px-[114px] pt-[60px]">
        <div className="max-w-[1440px] mx-auto flex gap-[24px] items-start">
          {/* Card 01 */}
          <div className="bg-[#f4efea] rounded-[24px] px-[24px] py-[32px] w-[300px] flex-shrink-0 relative flex flex-col gap-[40px] mt-6">
            <div className="absolute bg-[#38ab9b] rounded-[24px] size-[48px] flex items-center justify-center left-[24px] top-[-24px]">
              <span className="font-miniature text-white text-[20px]">01</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/life-coaching/desktop/why-coaching/character-card-1.webp"
                alt="Direction over drift illustration"
                className="w-[180px] h-[162px] object-contain"
              />
            </div>
            <div className="flex flex-col gap-[8px] text-black">
              <h3 className="font-miniature text-[30px] leading-[38px]">
                Direction over drift
              </h3>
              <p className="font-normal text-[18px] leading-[1.25]">
                Most of us drift through decisions shaped by habit, fear, or
                other people&apos;s expectations. Coaching replaces drift with
                intentional direction — choices that reflect who you genuinely
                are and where you want to go.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#f4efea] rounded-[24px] px-[24px] py-[32px] flex-1 relative flex items-center gap-[40px] mt-6 h-[262px]">
            <div className="absolute bg-[#38ab9b] rounded-[24px] size-[48px] flex items-center justify-center left-[24px] top-[-24px]">
              <span className="font-miniature text-white text-[20px]">02</span>
            </div>
            <div className="flex flex-col gap-[8px] text-black flex-1">
              <h3 className="font-miniature text-[30px] leading-[38px]">
                Tools, not just talk
              </h3>
              <p className="font-normal text-[18px] leading-[1.25]">
                A good coaching session leaves you with something concrete: a
                reframe, a plan, a decision, an action. Not just a feeling.
                Every session is designed to move you forward, not just help you
                feel understood.
              </p>
            </div>
            <img
              src="/life-coaching/desktop/why-coaching/character-card-2.webp"
              alt="Tools illustration"
              className="w-[154px] h-[154px] object-contain flex-shrink-0"
            />
          </div>

          {/* Card 03 */}
          <div className="bg-[#f4efea] rounded-[24px] px-[24px] py-[32px] w-[300px] flex-shrink-0 relative flex flex-col gap-[20px] mt-6">
            <div className="absolute bg-[#38ab9b] rounded-[24px] size-[48px] flex items-center justify-center left-[24px] top-[-24px]">
              <span className="font-miniature text-white text-[20px]">03</span>
            </div>
            <div className="flex flex-col gap-[8px] text-black">
              <h3 className="font-miniature text-[30px] leading-[38px]">
                Growth that compounds
              </h3>
              <p className="font-normal text-[18px] leading-[1.25]">
                The person you become through coaching doesn&apos;t revert when
                the sessions end. The clarity, the habits, the self-trust — they
                compound. Each version of yourself becomes the foundation for
                the next.
              </p>
            </div>
            <img
              src="/life-coaching/desktop/why-coaching/character-card-3.webp"
              alt="Growth illustration"
              className="w-full h-[229px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Green Union background section — CTA + Tags */}
      <div className="relative">
        {/* Green Union shape from Figma (node 4087:194) */}
        <img
          src="/life-coaching/desktop/why-coaching/union-bg.webp"
          alt=""
          aria-hidden="true"
          className="object-fill absolute inset-0 w-full h-full pointer-events-none select-none"
        />

        {/* CTA */}
        <div className="relative z-10 px-[114px] pt-[60px] pb-[40px] flex flex-col items-center gap-[24px] max-w-[500px] mx-auto text-center">
          <h2 className="font-miniature text-[42px] leading-[48px] text-black">
            A little support can go{" "}
            <span className="italic font-miniature">a long way.</span>
          </h2>
          <p className="text-[17px] font-normal text-[rgba(0,0,0,0.65)] leading-[28px]">
            You don&apos;t need to be in crisis to benefit from coaching. Most
            people come to us simply because they want to feel a bit clearer, a
            bit more confident, and a bit more like themselves again.
          </p>
          <a href="https://signup.feelattune.com/sign-up">
            <button className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize px-[32px] py-[16px] rounded-[39px] hover:bg-[#4000cc] transition-colors">
              Start your journey →
            </button>
          </a>
        </div>

        {/* Tags */}
        <div className="relative z-10 px-[114px] pb-[60px] flex flex-wrap gap-y-[18px] gap-x-[9px] items-center justify-center max-w-[1052px] mx-auto">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="bg-black/[0.08] px-[18px] py-[8px] rounded-full h-[34px] flex items-center"
            >
              <span className="font-medium text-[13px] text-[rgba(0,0,0,0.8)] whitespace-nowrap">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseCoaching;
