const commitments = [
  {
    icon: "/about-us/commitments/icon-person.webp",
    title: "Human first, always",
    body:
      "Every coach brings warmth, not just\nexpertise. You'll feel heard before you\nfeel challenged. We believe real support\nstarts with real connection and that\ndoesn't happen from a script.",
  },
  {
    icon: "/about-us/commitments/icon-insights.webp",
    title: "Practical over theoretical",
    body:
      "We don't trade in vague insights. Every\nsession ends with something concrete\nyou can use a reframe, a plan, a\ndecision, an action. If you leave without\nsomething tangible, we haven't done our\njob.",
  },
  {
    icon: "/about-us/commitments/icon-brain.webp",
    title: "No labels needed",
    body:
      "You don't need a diagnosis or a crisis to\ndeserve support. If you want to grow,\nthat's enough. Coaching is for anyone\nready to move not just people who've hit\nrock bottom.",
  },
  {
    icon: "/about-us/commitments/icon-badge.webp",
    title: "Progress you can feel",
    body:
      "We measure our success by yours. If\nyou're not moving forward, we're not\ndoing our job. That's why we track\nsatisfaction, match carefully, and offer a\nmoney-back guarantee on your first\nsession.",
  },
];

function FourCommitmentsMobile() {
  return (
    <section className="flex flex-col gap-8 px-5 py-12 bg-white lg:hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 text-center w-full">
        <span className="bg-[#e5ff7d] text-[#0d0d0d] text-[14px] font-semibold px-5 py-4 rounded-[39px] tracking-[0.72px] uppercase">
          ✦ What we stand for
        </span>
        <h2 className="font-miniature font-bold text-[42px] leading-[50px] tracking-[-0.02em] text-[#0d0d0d]">
          Our practice is 
          <br />
          built on <span className="italic text-[#ff6f61]">four 
          <br />
            commitments.</span>
        </h2>
        <p className="text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px]">
          These aren&apos;t marketing words. They&apos;re the principles every coach at Feelattune is held
          <br />
          to, in every session.
        </p>
      </div>

      {/* Stacked cards */}
      <div className="flex flex-col gap-[14px] w-full">
        {commitments.map((c) => (
          <div
            key={c.title}
            className="rounded-[24px] bg-[#f4efea] p-5 flex flex-col gap-4 items-start overflow-hidden"
          >
            <div className="bg-[#f097dd] size-14 rounded-[40px] flex items-center justify-center flex-shrink-0">
              <img src={c.icon} alt="" className="size-[30px] object-contain" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="font-miniature text-[24px] leading-[32px] font-bold text-[#0d0d0d] capitalize">
                {c.title}
              </h3>
              <p className="text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px] whitespace-pre-line">{c.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FourCommitmentsMobile;
