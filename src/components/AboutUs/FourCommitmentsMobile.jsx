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

function FourCommitmentsMobile() {
  return (
    <section className="flex flex-col gap-4 px-5 py-10 bg-white lg:hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-5 mb-2 text-center">
        <span className="bg-[#e5ff7d] text-black text-[13px] font-normal px-4 py-2 rounded-full">
          ✦ What we stand for
        </span>
        <h2 className="font-miniature text-[38px] leading-[1.1]">
          <span className="font-semibold text-black ">Our practice is built on {" "}</span>
          <span className="italic text-[#ff6f61] font-semibold ">four commitments.</span>
        </h2>
        <p className="text-[15px] font-normal text-[#0d0d0d]/70 leading-[1.25]">
          These aren't marketing words. They're the principles every coach at Feelattune is held
          to, in every session.
        </p>
      </div>

      {/* Stacked cards */}
      {commitments.map((c) => (
        <div
          key={c.title}
          className="rounded-[24px] bg-[#f4efea] p-4 flex gap-3 items-start"
        >
          <div className="bg-[#f097dd] size-[48px] rounded-[36px] flex items-center justify-center flex-shrink-0">
            <img src={c.icon} alt="" className="size-[28px] object-contain" />
          </div>
          <div className="flex flex-col gap-[6px]">
            <h3 className="font-miniature text-[24px] leading-none font-semibold  text-[#0d0d0d] capitalize">
              {c.title}
            </h3>
            <p className="text-[14px] font-normal text-[#0d0d0d]/70 leading-[1.25]">{c.body}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FourCommitmentsMobile;
