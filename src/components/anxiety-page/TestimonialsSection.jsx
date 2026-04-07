import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Jake, 24",
    bg: "bg-[#e5ff7d]",
    photo: "/images/anxiety-page/testimonial-jake.png",
    quote:
      "Social situations used to drain me completely. I'd cancel plans just to avoid the anxiety of showing up. My life coach helped me understand what was actually driving it and gave me real ways to move through it, not just cope with it.",
  },
  {
    name: "Priya, 34",
    bg: "bg-[#f097dd]",
    photo: "/images/anxiety-page/testimonial-priya.png",
    quote:
      "I was lying awake every night running through worst-case financial scenarios. It was affecting my work, my relationship, everything. Life coaching gave me the clarity to stop spiraling and start making decisions from a calmer place.",
  },
  {
    name: "Marcus, 70",
    bg: "bg-[#ff6f61]",
    photo: "/images/anxiety-page/testimonial-marcus.png",
    quote:
      "Exam season felt like it was going to break me. The pressure I put on myself was relentless. Working with my life coach didn't just help me get through it, it changed how I talk to myself when things get hard.",
  },
];

function TestimonialCard({ t }) {
  return (
    <div
      className={`${t.bg} border border-black rounded-[30px] px-[24px] py-[32px] flex flex-col items-start gap-[48px] h-full`}
    >
      {/* Photo */}
      <img
        src={t.photo}
        alt={t.name}
        className="w-[114px] h-[114px] rounded-full object-cover"
      />

      {/* Name + Quote */}
      <div className="flex flex-col gap-[24px]">
        <h3 className="font-miniature text-[40px] leading-[48px] text-black">
          {t.name}
        </h3>
        <p className="text-[16px] leading-[22px] text-black">
          &ldquo;{t.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="bg-white px-[60px] py-[100px] max-md:px-[20px] max-md:py-[60px]">
      <div className="max-w-[1440px] mx-auto px-[48px] max-md:px-0">
        {/* Header row */}
        <div className="flex items-center justify-between mb-[64px]">
          <h2 className="font-miniature text-[64px] leading-[1] text-black max-md:text-[40px]">
            Testimonials
          </h2>

          {/* Arrow buttons - desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
              aria-label="Previous testimonial"
            >
              <img
                src="/images/anxiety-page/arrow-prev.svg"
                alt=""
                className="w-full h-full"
              />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
              aria-label="Next testimonial"
            >
              <img
                src="/images/anxiety-page/arrow-next.svg"
                alt=""
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {/* Desktop: 3 cards in a row */}
        <div className="hidden md:flex gap-[24px]">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-1">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>

        {/* Mobile: Swiper with 1 card */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
