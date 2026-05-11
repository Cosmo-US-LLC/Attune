const bulletItems = [
  "No diagnosis or referral needed to get started",
  "Affordable sessions starting at CAD $45",
  "Coaches matched to your specific goals",
  "Fully online support wherever you are",
  "Cancel or change plans at any time",
];

function CheckIcon() {
  return (
    <div
      className="size-4 rounded-[9px] border border-[#5200ff] bg-[rgba(255,255,255,0.3)] flex items-center justify-center flex-shrink-0"
      aria-hidden="true"
    >
      <span className="text-[#5200ff] text-[10px] font-bold">✓</span>
    </div>
  );
}

function OurStoryMobile() {
  return (
    <section className="flex flex-col gap-8 px-5 py-12 bg-white lg:hidden">
      {/* Badge */}
      <span className="bg-[#e5ff7d] px-5 py-4 rounded-[39px] self-start font-semibold text-[16px] tracking-[0.72px] uppercase text-[#0d0d0d]">
        ✦ Our story
      </span>

      {/* Heading */}
      <h2 className="font-miniature font-bold text-[42px] leading-[50px] tracking-[-0.02em] text-[#0d0d0d]">
        <span className="block">Built from a</span>
        <span className="block italic text-[#ff6f61]">simple</span>
        <span className="block italic text-[#ff6f61]">frustration</span>
      </h2>

      {/* Paragraphs — explicit breaks match Figma (node ref) */}
      <div className="flex flex-col gap-5">
        <p className="text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px]">
          Feelattune is built by EaseCare, a mental health
          <br />
          service trusted by thousands of
          <br />
          Albertans. Through years of working in the
          <br />
          mental health space, we saw a clear gap: the
          <br />
          kind of high-quality, personalised support that
          <br />
          truly helps people move forward was often
          <br />
          too expensive, too slow to access, or felt
          <br />
          overly clinical.
        </p>
        <p className="text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px]">
          We knew it didn&apos;t have to be that way. The
          <br />
          people who could benefit most from life
          <br />
          coaching were the least likely to access it. So
          <br />
          we built something different, a coaching
          <br />
          experience that&apos;s affordable, accessible, and
          <br />
          genuinely human.
        </p>
        <p className="text-[16px] font-normal text-[#0d0d0d]/70 leading-[24px]">
          A place where you don&apos;t need a diagnosis, a
          <br />
          crisis, or a corporate wellness budget to get
          <br />
          real support just a desire to move forward and
          <br />
          build a better version of your life.
        </p>
      </div>

      {/* Why we exist card */}
      <div className="bg-[#f4efea] rounded-[24px] px-4 py-6 flex flex-col gap-5">
        {/* Card badge */}
        <span className="bg-[#e5ff7d] px-5 py-[14px] rounded-[39px] self-start font-semibold text-[14px] tracking-[0.72px] uppercase text-[#0d0d0d]">
          ✦ Why we exist
        </span>

        {/* Card heading */}
        <h3 className="font-miniature text-[24px] font-bold leading-[32px] tracking-[-0.01em] text-[#0d0d0d]">
          A Coaching Experience
          <br />
          <span className="text-[#ff6f61]">that&apos;s{" "}Affordable, </span>
          <br />
          <span className="text-[#f097dd]">Accessible, </span>&amp;{" "}
          <span className="text-[#96adf0]"> Genuinely</span>
          <br />
          <span className="text-[#96adf0]"> Human.</span>
        </h3>

        {/* Bullet list */}
        <ul className="flex flex-col gap-2">
          {bulletItems.map((item) => (
            <li key={item} className="flex items-center gap-[10px]">
              <CheckIcon />
              <span className="font-medium text-[13px] text-[#0d0d0d] leading-[22px]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurStoryMobile;
