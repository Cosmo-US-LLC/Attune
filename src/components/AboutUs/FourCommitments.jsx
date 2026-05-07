const commitments = [
  {
    icon: "/about-us/commitments/icon-person.webp",
    title: "Human first, always",
    body: "Every coach brings warmth, not just expertise. You'll feel heard before you feel challenged. We believe real support starts with real connection and that doesn't happen from a script.",
  },
  {
    icon: "/about-us/commitments/icon-insights.webp",
    title: "Practical over theoretical",
    body: "We don't trade in vague insights. Every session ends with something concrete you can use a reframe, a plan, a decision, an action. If you leave without something tangible, we haven't done our job.",
  },
  {
    icon: "/about-us/commitments/icon-brain.webp",
    title: "No labels needed",
    body: "You don't need a diagnosis or a crisis to deserve support. If you want to grow, that's enough. Coaching is for anyone ready to move not just people who've hit rock bottom.",
  },
  {
    icon: "/about-us/commitments/icon-badge.webp",
    title: "Progress you can feel",
    body: "We measure our success by yours. If you're not moving forward, we're not doing our job. That's why we track satisfaction, match carefully, and offer a money-back guarantee on your first session.",
  },
];

function FourCommitments() {
  return (
    <section className="bg-white py-[60px] overflow-hidden max-lg:hidden">
      {/* Header block */}
      <div className="max-w-[951px] mx-auto flex flex-col items-center gap-[27px] mb-[60px] text-center px-4">
        {/* Badge */}
        <span className="bg-[#e5ff7d] text-black text-[14px] font-normal px-4 py-2 rounded-full">
          ✦ What we stand for
        </span>

        {/* Heading */}
        <h2 className="font-miniature text-[55px] leading-[1.1]">
          <span className="text-black font-normal">Our practice is built on</span>
          <br />
          <span className="italic text-[#ff6f61] font-normal">four commitments.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[18px] font-normal text-[#0d0d0d]/70 leading-[1.25]">
          These aren't marketing words. They're the principles every coach at Feelattune is held
          to, in every session.
        </p>
      </div>

      {/* 2×2 card grid */}
      <div className="max-w-[1094px] mx-auto grid grid-cols-2 gap-[20px] px-4">
        {commitments.map((c) => (
          <div
            key={c.title}
            className="bg-[#f4efea] rounded-[30px] h-[169px] relative overflow-hidden flex items-center px-[18px] gap-[12px]"
          >
            {/* Icon circle */}
            <div className="bg-[#f097dd] size-[62px] rounded-[46px] flex items-center justify-center flex-shrink-0">
              <img src={c.icon} alt="" className="size-[35px] object-contain" />
            </div>

            {/* Card content */}
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-miniature text-[30px] leading-none text-[#0d0d0d] capitalize">
                {c.title}
              </h3>
              <p className="text-[14px] font-normal text-[#0d0d0d]/70 leading-[1.25]">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FourCommitments;
