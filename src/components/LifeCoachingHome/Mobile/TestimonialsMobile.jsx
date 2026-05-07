import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    <div className="bg-white px-5 py-10 space-y-6">
      <div className="space-y-3 text-center">
        <span className="inline-flex items-center bg-[#e5ff7d] px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase">
          ✦ Real stories
        </span>
        <h2 className="font-miniature text-[32px] leading-[38px] text-[#0d0d0d]">
          What people say after they start.
        </h2>
      </div>

      <Carousel>
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className="basis-full">
              <div className="bg-[#f4efea] rounded-[24px] px-5 py-6 space-y-5 flex flex-col justify-between min-h-[260px]">
                <div className="space-y-3">
                  <StarRow count={t.stars} color={t.starColor} />
                  <p className="text-[14px] leading-[22px] text-[rgba(13,13,13,0.7)] italic">
                    {t.quote}
                  </p>
                </div>
                <div>
                  <p className="font-miniature text-[22px] text-[#0d0d0d]">
                    {t.name}
                  </p>
                  <p className="text-[12px] text-[rgba(13,13,13,0.7)]">
                    {t.role}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:hidden bg-white -left-3" />
        <CarouselNext className="border border-black disabled:hidden bg-white -right-3" />
      </Carousel>
    </div>
  );
}

export default TestimonialsMobile;
