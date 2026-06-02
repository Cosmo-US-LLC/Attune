import React from "react";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Career change client",
    quote:
      "\"I came in not even knowing what I wanted. Six sessions later I'd handed in my notice, started my business, and felt more like myself than I had in years. My coach didn't tell me what to do, she helped me see what I already knew.\"",
    stars: 5,
    starColor: "bg-[#f097dd]",
  },
  {
    name: "Marcus O.",
    role: "Entrepreneur",
    quote:
      "\"I was the kind of person who had big ideas but never followed through. Coaching gave me a structure that actually worked for how my brain operates. The goals I hit in three months had been on my list for three years.\"",
    stars: 5,
    starColor: "bg-[#00e4c5]",
  },
  {
    name: "Jana P.",
    role: "Life transition client",
    quote:
      "\"I kept waiting to feel ready before making changes. My coach helped me realise that the readiness comes after you start, not before. That one shift changed everything for me.\"",
    stars: 5,
    starColor: "bg-[#96adf0]",
  },
];

function StarRow({ count, color }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <span
          key={i}
          className={`${color} w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px]`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialsMobile() {
  return (
    <div className="bg-white px-5 py-8 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="bg-[#e5ff7d] rounded-[39px] px-5 py-3.5 w-fit">
          <p className="text-[14px] leading-[22px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
            ✦ Real stories
          </p>
        </div>
        <h2 className="font-miniature font-bold text-[42px] leading-[50px] text-[#0d0d0d]">
          <span className="normal-case lowercase">what people say </span>
          <span className="lowercase text-[#ff6f61]">after they start.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#f4efea] rounded-[24px] px-5 py-6 flex flex-col gap-5"
          >
            <StarRow count={t.stars} color={t.starColor} />
            <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)]">
              {t.quote}
            </p>
            <div className="pt-1">
              <p className="font-miniature text-[22px] leading-[28px] text-[#0d0d0d]">
                {t.name}
              </p>
              <p className="text-[12px] leading-[18px] text-[rgba(13,13,13,0.7)]">
                {t.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsMobile;
