const values = [
  {
    bg: "bg-[#E5FF7D]",
    img: "/desktop1/our-core/core1.svg",
    title: "You Deserve Real Support",
    body: "Our coaches create a safe, judgment-free space where you can be honest and start making real progress.",
  },
  {
    bg: "bg-[#FFA8ED]",
    img: "/desktop1/our-core/core2.svg",
    title: "Coaching, Not Diagnosing",
    body: "No label needed. We meet you where you are and work on practical strategies that move the needle.",
  },
  {
    bg: "bg-[#6FE0D1]",
    img: "/desktop1/our-core/core3.svg",
    title: "Affordable & Built for Your Life",
    body: "Flexible, budget-friendly sessions designed around your schedule, support you can actually stick with.",
  },
];

const CoreValues = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-12 px-5 py-12 md:gap-16 md:px-[114px] md:py-[80px]">
        <h2 className="section-heading text-black">
          Our <span className="heading-accent">Core Values</span>
        </h2>

        <div className="grid w-full grid-cols-1 gap-6 px-0 md:grid-cols-3 md:gap-6 md:px-12">
          {values.map((value) => (
            <div
              key={value.title}
              className={`flex flex-col gap-10 rounded-[30px] border border-black px-6 py-12 md:gap-[39px] md:px-6 md:py-12 ${value.bg}`}
            >
              <img
                src={value.img}
                alt=""
                className="h-[98px] w-[98px] object-contain"
              />

              <div className="flex flex-col gap-5">
                <h3 className="font-miniature text-[28px] leading-[34px] md:text-[32px] md:leading-[40px]">
                  {value.title}
                </h3>
                <p className="text-[16px] leading-[20px]">{value.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
