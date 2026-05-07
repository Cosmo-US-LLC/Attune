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
    <div className="flex items-center gap-[4px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`${color} rounded-full size-[24px] flex items-center justify-center`}
        >
          <svg
            viewBox="0 0 16 16"
            fill="white"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 1l1.854 3.757L14 5.515l-3 2.924.708 4.128L8 10.25l-3.708 2.317L5 8.439 2 5.515l4.146-.758L8 1z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <div className="bg-white px-[114px] py-[60px]">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-[48px] items-center">
        {/* Header */}
        <div className="flex flex-col gap-[24px] items-center w-full">
          <div className="bg-[#e5ff7d] px-[20px] py-[16px] rounded-[39px]">
            <span className="font-semibold text-[#0d0d0d] text-[16px] tracking-[0.72px] uppercase">
              ✦ Real stories
            </span>
          </div>
          <p className="font-miniature text-[55px] leading-[67px] text-[#0d0d0d] text-center max-w-[1006px]">
            What people say after they start.
          </p>
        </div>

        {/* Cards */}
        <div className="flex gap-[16px] items-stretch w-full">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f4efea] flex-1 flex flex-col justify-between px-[24px] py-[32px] rounded-[30px] gap-[48px] overflow-hidden"
            >
              <div className="flex flex-col gap-[13px]">
                <StarRow color={t.starColor} />
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
                  {t.quote}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-miniature text-[25px] leading-[31px] text-[#0d0d0d] capitalize">
                  {t.name}
                </p>
                <p className="text-[14px] font-normal text-[rgba(13,13,13,0.7)]">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
