const cards = [
  {
    bg: "bg-[#f097dd]",
    icon: "/contact-us/icons/location.webp",
    label: "LOCATION",
    value: "Remote & worldwide sessions",
  },
  {
    bg: "bg-[#96adf0]",
    icon: "/contact-us/icons/energy.webp",
    label: "RESPONSE TIME",
    value: "Within 24 hours",
  },
  {
    bg: "bg-[#00e4c6]",
    icon: "/contact-us/icons/security.webp",
    label: "PRIVACY",
    value: "100% confidential & secure",
  },
];

const trustBadges = ["Confidential", "No credit card", "Cancel anytime"];

function Hero() {
  return (
    <section className="bg-[#f4efea] px-[113px] py-[80px] flex items-center justify-between gap-16">
      {/* Left column */}
      <div className="flex flex-col gap-[27px] max-w-[576px]">
        {/* Badge */}
        <span className="bg-[#e5ff7d] px-[21px] py-[14px] rounded-[39px] self-start font-semibold text-[16px] tracking-[0.72px] uppercase text-[#0d0d0d]">
          ✦ Get in touch
        </span>

        {/* Heading */}
        <h1 className="font-miniature text-[72px] leading-[83px]">
          <span className="block text-black font-bold">Let&apos;s start</span>
          <span className="block text-black font-bold">something</span>
          <span className="block text-[#ff6f61] font-bold italic">meaningful.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
          You don&apos;t need to have all the answers, you just need to take the
          first step. Send us a message and we&apos;ll be with you within 24 hours.
        </p>

        {/* Info cards */}
        <div className="flex flex-col gap-[14px]">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-[18px] px-[20px] py-[16px] flex items-center gap-[14px] w-[399px]"
            >
              <div
                className={`${card.bg} rounded-full size-[62px] flex items-center justify-center flex-shrink-0`}
              >
                <img src={card.icon} alt={card.label} width={35} height={35} />
              </div>
              <div>
                <p className="text-[14px] font-semibold tracking-[0.77px] uppercase text-[rgba(13,13,13,0.45)]">
                  {card.label}
                </p>
                <p className="text-[18px] font-semibold text-[#0d0d0d]">{card.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — contact form card */}
      <div className="bg-white rounded-[30px] px-[48px] py-[60px] w-[568px] flex-shrink-0 flex flex-col gap-[30px]">
        {/* Card header */}
        <div className="flex flex-col gap-[10px]">
          <h2 className="font-miniature text-[35px] font-bold">
            <span className="text-[#0d0d0d]">Send us a </span>
            <span className="italic text-[#96adf0]">message</span>
          </h2>
          <p className="text-[18px] text-[rgba(13,13,13,0.7)]">
            No pressure. No commitment. Just a conversation.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-0">
          {/* Name row */}
          <div className="grid grid-cols-2 gap-[14px] mb-[14px]">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[rgba(0,0,0,0.45)] mb-[8px]">
                First Name
              </label>
              <input
                type="text"
                placeholder="e.g. Sarah"
                className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[21px] py-[17px] text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[rgba(0,0,0,0.45)] mb-[8px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="e.g. Ahmed"
                className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[21px] py-[17px] text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-[24px]">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[rgba(0,0,0,0.45)] mb-[8px]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[21px] py-[17px] text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(0,0,0,0.08)] mb-[24px]" />

          {/* Topic select */}
          <div className="mb-[18px]">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[rgba(0,0,0,0.45)] mb-[8px]">
              What brings you here?
            </label>
            <select
              defaultValue=""
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[21px] py-[17px] text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
            >
              <option value="" disabled>
                Choose a topic…
              </option>
              <option value="anxiety">Anxiety</option>
              <option value="life-coaching">Life Coaching</option>
              <option value="wellbeing">Wellbeing</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message textarea */}
          <div className="mb-[18px]">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.88px] text-[rgba(0,0,0,0.45)] mb-[8px]">
              Anything else you&apos;d like to share? (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Feel free to share as much or as little as you'd like…"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[16px] px-[21px] py-[17px] text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30 resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#5200ff] text-white font-bold text-[18px] w-full py-[18px] rounded-full flex items-center justify-center gap-[10px] hover:bg-[#4000cc] transition-colors mb-[16px]"
          >
            Submit your message
            <span className="bg-white text-[#5200ff] font-bold text-[12px] rounded-[13px] size-[26px] flex items-center justify-center">
              →
            </span>
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-[20px]">
            {trustBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-[6px]">
                {i > 0 && (
                  <span className="text-[rgba(0,0,0,0.15)] mr-[14px]">·</span>
                )}
                <span className="text-[#ff6f61] text-[11px] font-semibold">✓</span>
                <span className="text-[14px] font-medium text-[rgba(0,0,0,0.35)]">
                  {badge}
                </span>
              </span>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Hero;
