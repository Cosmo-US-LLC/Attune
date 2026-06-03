const testimonials = [
  {
    starColor: "bg-[#F097DD]",
    quote:
      "Social situations used to drain me completely. I'd cancel plans just to avoid the anxiety of showing up. My life coach helped me understand what was actually driving it and gave me real ways to move through it, not just cope with it.",
    name: "Jake, 24",
    role: "Career change client",
  },
  {
    starColor: "bg-[#00E4C5]",
    quote:
      "I was lying awake every night running through worst-case financial scenarios, it was affecting everything. Life coaching gave me the clarity to stop spiraling and make decisions from a calmer place.",
    name: "Priya, 34",
    role: "Entrepreneur",
  },
  {
    starColor: "bg-[#96ADF0]",
    quote:
      "Exam season felt like it was going to break me. The pressure I put on myself was relentless. Working with my life coach didn't just help me get through it, it changed how I talk to myself when things get hard.",
    name: "Marcus, 19",
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
          <img
            src="/images/anxiety-page/v2/testimonial-star.svg"
            alt=""
            className="size-4"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-1 flex-col justify-between gap-8 overflow-hidden rounded-[30px] bg-[#F4EFEA] px-5 py-6 lg:gap-12 lg:px-6 lg:py-8">
      <div className="flex flex-col gap-[13px]">
        <StarRow color={testimonial.starColor} />
        <p className="text-[16px] font-medium leading-[24px] text-[rgba(13,13,13,0.7)] lg:text-[18px] lg:leading-[26px]">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>
      <div className="flex flex-col">
        <p className="font-miniature text-[20px] font-bold capitalize leading-[28px] text-[#0D0D0D] md:text-[24px] md:leading-8">
          {testimonial.name}
        </p>
        {/* <p className="text-[14px] leading-[20px] text-[rgba(13,13,13,0.7)]">
          {testimonial.role}
        </p> */}
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-12 lg:px-[144px] lg:py-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-8 lg:gap-16">
        <h2 className="max-w-[1006px] text-center font-bold font-miniature text-[42px] leading-[50px] text-[#0D0D0D] lg:text-[54px] lg:leading-[62px]">
          <span>What people say </span>
          <span className="font-miniature italic text-[#FF6F61]">after they start.</span>
        </h2>

        <div className="flex w-full flex-col items-stretch gap-3.5 lg:flex-row lg:gap-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
