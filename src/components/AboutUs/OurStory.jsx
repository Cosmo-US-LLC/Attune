const bulletItems = [
  "No diagnosis or referral needed to get started",
  "Affordable sessions starting at CAD $45",
  "Coaches matched to your specific goals",
  "Fully online support wherever you are",
  "Cancel or change plans at any time",
];

function CheckIcon() {
  return (
    <div className="size-[18px] rounded-[9px] border border-[#5200ff] bg-[rgba(255,255,255,0.3)] flex items-center justify-center flex-shrink-0">
      <span className="text-[#5200ff] text-[10px] font-bold">✓</span>
    </div>
  );
}

function OurStory() {
  return (
    <section className="max-lg:hidden bg-white px-[114px] py-[60px] flex items-center gap-[80px]">
      {/* Left side */}
      <div className="flex-1 flex flex-col gap-[24px]">
        {/* Badge */}
        <span className="bg-[#e5ff7d] px-[21px] py-[14px] rounded-[39px] self-start font-semibold text-[16px] tracking-[0.72px] uppercase text-[#0d0d0d]">
          ✦ Our story
        </span>

        {/* Heading */}
        <h2 className="font-miniature font-bold text-[55px] leading-[1.1]">
          <span className="block text-[#0d0d0d]">Built from a</span>
          <span className="block italic text-[#ff6f61]">simple frustration</span>
        </h2>

        {/* Paragraphs */}
        <div className="flex flex-col gap-[16px]">
          <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
            Feelattune is built by EaseCare, a mental health service trusted by thousands of
            Albertans. Through years of working in the mental health space, we saw a clear gap: the
            kind of high-quality, personalised support that truly helps people move forward was often
            too expensive, too slow to access, or felt overly clinical.
          </p>
          <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
            We knew it didn&apos;t have to be that way. The people who could benefit most from life
            coaching were the least likely to access it. So we built something different, a coaching
            experience that&apos;s affordable, accessible, and genuinely human.
          </p>
          <p className="text-[18px] font-normal text-[rgba(13,13,13,0.7)] leading-[1.25]">
            A place where you don&apos;t need a diagnosis, a crisis, or a corporate wellness budget
            to get real support just a desire to move forward and build a better version of your
            life.
          </p>
        </div>
      </div>

      {/* Right side card */}
      <div className="w-[440px] bg-[#f4efea] rounded-[24px] px-[24px] py-[32px] flex flex-col gap-[24px] flex-shrink-0">
        {/* Card badge */}
        <span className="bg-[#e5ff7d] px-[14px] py-[8px] rounded-[39px] self-start font-semibold text-[14px] tracking-[0.6px] uppercase text-[#0d0d0d]">
          ✦ Why we exist
        </span>

        {/* Card heading */}
        <h3 className="font-miniature text-[32px] font-semibold leading-[1.2]">
          <span className="text-[#0d0d0d]">A coaching experience that&apos;s </span>
          <span className="text-[#ff6f61]">affordable, </span>
          <span className="text-[#f097dd]">accessible, </span>
          <span className="text-[#0d0d0d]">&amp; </span>
          <span className="text-[#96adf0]">genuinely human.</span>
        </h3>

        {/* Bullet list */}
        <ul className="flex flex-col gap-[14px]">
          {bulletItems.map((item) => (
            <li key={item} className="flex items-center gap-[12px]">
              <CheckIcon />
              <span className="font-medium text-[14px] text-[#0d0d0d]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default OurStory;
