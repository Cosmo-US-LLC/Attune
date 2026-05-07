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

function HeroMobile() {
  return (
    <section className="bg-[#f4efea] px-5 py-10 flex flex-col gap-6">
      {/* Badge */}
      <span className="bg-[#e5ff7d] px-4 py-3 rounded-full self-start text-[14px] font-semibold tracking-[0.72px] uppercase text-[#0d0d0d]">
        ✦ Get in touch
      </span>

      {/* Heading */}
      <h1 className="font-miniature text-[42px] leading-[50px]">
        <span className="block text-black font-bold">Let&apos;s start</span>
        <span className="block text-black font-bold">something</span>
        <span className="block text-[#ff6f61] font-bold italic">meaningful.</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.4]">
        You don&apos;t need to have all the answers, you just need to take the
        first step. Send us a message and we&apos;ll be with you within 24 hours.
      </p>

      {/* Info cards */}
      <div className="flex flex-col gap-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-[16px] px-4 py-3 flex items-center gap-3 w-full"
          >
            <div
              className={`${card.bg} rounded-full size-[50px] flex items-center justify-center flex-shrink-0`}
            >
              <img
                src={card.icon}
                alt={card.label}
                className="size-[28px] object-contain"
              />
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-[0.6px] uppercase text-[rgba(13,13,13,0.45)]">
                {card.label}
              </p>
              <p className="text-[15px] font-semibold text-[#0d0d0d]">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact form card */}
      <div className="bg-white rounded-[24px] px-5 py-8 flex flex-col gap-6 w-full">
        {/* Card header */}
        <div className="flex flex-col gap-2">
          <h2 className="font-miniature text-[28px] font-bold">
            <span className="text-[#0d0d0d]">Send us a </span>
            <span className="italic text-[#96adf0]">message</span>
          </h2>
          <p className="text-[15px] text-[rgba(13,13,13,0.7)]">
            No pressure. No commitment. Just a conversation.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-0">
          {/* First Name */}
          <div className="mb-3">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.7px] text-[rgba(0,0,0,0.45)] mb-[6px]">
              First Name
            </label>
            <input
              type="text"
              placeholder="e.g. Sarah"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[14px] px-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.7px] text-[rgba(0,0,0,0.45)] mb-[6px]">
              Last Name
            </label>
            <input
              type="text"
              placeholder="e.g. Ahmed"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[14px] px-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.7px] text-[rgba(0,0,0,0.45)] mb-[6px]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[14px] px-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
            />
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(0,0,0,0.08)] mb-4" />

          {/* Topic select */}
          <div className="mb-4">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.7px] text-[rgba(0,0,0,0.45)] mb-[6px]">
              What brings you here?
            </label>
            <select
              defaultValue=""
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[14px] px-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30"
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
          <div className="mb-4">
            <label className="block text-[11px] font-semibold uppercase tracking-[0.7px] text-[rgba(0,0,0,0.45)] mb-[6px]">
              Anything else you&apos;d like to share? (optional)
            </label>
            <textarea
              rows={4}
              placeholder="Feel free to share as much or as little as you'd like…"
              className="bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[14px] px-4 py-3 text-[15px] w-full focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30 resize-none"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-[#5200ff] text-white font-bold text-[16px] w-full py-4 rounded-full flex items-center justify-center gap-2 hover:bg-[#4000cc] transition-colors mb-3"
          >
            Submit your message
            <span className="bg-white text-[#5200ff] font-bold text-[11px] rounded-[10px] size-[22px] flex items-center justify-center">
              →
            </span>
          </button>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {trustBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-1">
                {i > 0 && (
                  <span className="text-[rgba(0,0,0,0.15)] text-[8px]">·</span>
                )}
                <span className="text-[#ff6f61] text-[10px] font-semibold">✓</span>
                <span className="text-[13px] font-medium text-[rgba(0,0,0,0.35)]">
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

export default HeroMobile;
