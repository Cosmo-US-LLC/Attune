import React from "react";

const testimonials = [
  {
    starColor: "bg-[#f097dd]",
    quote:
      "\"I came in not even knowing what I wanted. Six sessions later I'd handed in my notice, started my business, and felt more like myself than I had in years. My coach didn't tell me what to do, she helped me see what I already knew.\"",
    name: "Sarah L.",
    role: "Career change client",
  },
  {
    starColor: "bg-[#00e4c5]",
    quote:
      "\"I was the kind of person who had big ideas but never followed through. Coaching gave me a structure that actually worked for how my brain operates. The goals I hit in three months had been on my list for three years.\"",
    name: "Marcus O.",
    role: "Entrepreneur",
  },
  {
    starColor: "bg-[#96adf0]",
    quote:
      "\"I kept waiting to feel ready before making changes. My coach helped me realise that the readiness comes after you start, not before. That one shift changed everything for me.\"",
    name: "Jana P.",
    role: "Life transition client",
  },
];

function StarRow({ color }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`${color} flex size-[24px] items-center justify-center rounded-full`}
        >
          <svg viewBox="0 0 16 16" fill="white" className="h-4 w-4" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1l1.854 3.757L14 5.515l-3 2.924.708 4.128L8 10.25l-3.708 2.317L5 8.439 2 5.515l4.146-.758L8 1z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white px-4 py-[60px] sm:px-6 lg:px-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="rounded-[39px] bg-[#e5ff7d] px-5 py-4">
            <span className="text-[16px] font-semibold uppercase tracking-[0.72px] text-[#0d0d0d]">
              ✦ Real stories
            </span>
          </div>
          <p className="max-w-[1006px] text-center font-miniature text-[54px] font-bold leading-[62px] text-[#0d0d0d]">
            <span>{`What people say `}</span>
            <span className="text-[#ff6f61]">after they start.</span>
          </p>
        </div>

        <div className="flex w-full items-stretch gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col justify-between gap-12 overflow-hidden rounded-[30px] bg-[#f4efea] px-6 py-8"
            >
              <div className="flex flex-col gap-[13px]">
                <StarRow color={t.starColor} />
                <p className="text-[18px] font-medium leading-[26px] text-[rgba(13,13,13,0.7)]">
                  {t.quote}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-miniature text-[24px] font-bold capitalize leading-8 text-[#0d0d0d]">
                  {t.name}
                </p>
                <p className="text-[14px] font-normal leading-[1.25] text-[rgba(13,13,13,0.7)]">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
