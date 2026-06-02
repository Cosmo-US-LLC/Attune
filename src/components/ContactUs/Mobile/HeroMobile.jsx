// import { ArrowRight } from "lucide-react";
import ContactMessageForm from "../ContactMessageForm";

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

// const trustBadges = ["Confidential", "No credit card", "Cancel anytime"];
// const inputClass =
//   "bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.15)] rounded-[8px] px-[17px] py-[17px] text-[14px] w-full placeholder:text-[rgba(0,0,0,0.3)] focus:outline-none focus:ring-2 focus:ring-[#5200ff]/30";
// const labelClass =
//   "block text-[12px] font-semibold uppercase text-[rgba(0,0,0,0.45)]";

function HeroMobile() {
  return (
    <section className="bg-[#f4efea] px-5 py-[48px] flex flex-col gap-8">
      {/* Hero block + info cards: 48px between copy and cards (gap-12) */}
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-col gap-3">
          <span className="bg-[#e5ff7d] px-5 py-4 rounded-[39px] self-start text-[14px] font-semibold tracking-[0.72px] uppercase text-[#0d0d0d] text-center leading-normal">
            ✦ Get in touch
          </span>
          <div className="flex flex-col gap-[14px]">
            <h1 className="font-miniature font-bold text-[#0d0d0d] text-[56px] leading-[64px]">
              <span className="block">Let&apos;s start</span>
              <span className="block">
                something{" "}
                <span className="italic text-[#ff6f61]">meaningful.</span>
              </span>
            </h1>
            <p className="text-[16px] font-normal text-[rgba(13,13,13,0.7)] leading-6">
              You don&apos;t need to have all the answers, you just need to take
              the first step. Send us a message and we&apos;ll be with you
              within 24 hours.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-white rounded-[18px] p-4 flex items-center gap-[14px] w-full"
            >
              <div
                className={`${card.bg} rounded-full size-[56px] flex items-center justify-center shrink-0`}
              >
                <img
                  src={card.icon}
                  alt=""
                  className="size-[31px] object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-[14px] font-semibold leading-[22px] uppercase text-[rgba(13,13,13,0.45)]">
                  {card.label}
                </p>
                <p className="text-[16px] font-semibold leading-6 text-[#0d0d0d]">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Form card — Fillout embed */}
      <div className="bg-white rounded-[24px] px-4 py-8 flex flex-col gap-[30px] w-full">
        <div className="flex flex-col gap-1">
          <h2 className="font-miniature font-bold text-[24px] leading-8 text-[#0d0d0d] capitalize">
            <span>{`Send us a `}</span>
            <span className="italic text-[#96adf0]">message</span>
          </h2>
          <p className="text-[16px] leading-6 text-[rgba(13,13,13,0.7)]">
            No pressure. No commitment. Just a conversation.
          </p>
        </div>

        <ContactMessageForm />

        {/*
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className={labelClass}>First name</label>
              <input
                type="text"
                placeholder="e.g. Sarah"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Last name</label>
              <input
                type="text"
                placeholder="e.g. Ahmed"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClass}>What brings you here?</label>
              <select defaultValue="" className={`py-0 ${inputClass} h-[56px]`}>
                <option value="" disabled>
                  Choose a topic…
                </option>
                <option value="anxiety">Anxiety</option>
                <option value="life-coaching">Life Coaching</option>
                <option value="wellbeing">Wellbeing</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className={`normal-case ${labelClass}`}>
                <span className="uppercase">
                  Anything else you&apos;d like to share?{" "}
                </span>
                <span className="font-normal normal-case">(optional)</span>
              </label>
              <textarea
                rows={4}
                placeholder="Feel free to share as much or as little as you'd like…"
                className={`resize-none ${inputClass} min-h-[110px]`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[14px]">
            <button
              type="submit"
              className="bg-[#5200ff] text-white font-semibold text-[20px] tracking-[0.72px] capitalize w-full py-[18px] px-[21px] rounded-[39px] inline-flex items-center justify-center gap-2 hover:bg-[#4000cc] transition-colors"
            >
              Submit your message
              <ArrowRight className="size-5 shrink-0" aria-hidden strokeWidth={2.25} />
            </button>

            <div className="flex flex-wrap gap-3 justify-center items-center">
              {trustBadges.map((badge, i) => (
                <span key={badge} className="flex gap-1 items-center">
                  {i > 0 && (
                    <span
                      className="text-[10px] text-[rgba(0,0,0,0.15)] mr-1"
                      aria-hidden
                    >
                      ·
                    </span>
                  )}
                  <span className="text-[#ff6f61] text-[11px] font-medium leading-none">
                    ✓
                  </span>
                  <span className="text-[14px] font-medium text-[rgba(0,0,0,0.35)]">
                    {badge}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </form>
        */}
      </div>
    </section>
  );
}

export default HeroMobile;
