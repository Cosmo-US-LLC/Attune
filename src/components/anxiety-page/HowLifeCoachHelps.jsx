import { Link } from "react-router-dom";

const ICON_BASE = "/images/anxiety-page/v2/coach-help";

const items = [
  {
    icon: `${ICON_BASE}/goal.svg`,
    iconClass: "size-8",
    bg: "#E5FF7D",
    title: "Identify your triggers",
   description: (
  <>
    Understand what's actually driving your anxiety so you can respond
    <br />
    with intention, not just react.
  </>
),
  },
  {
    icon: `${ICON_BASE}/chess.svg`,
    iconClass: "size-8",
    bg: "#96ADF0",
    title: "Build practical strategies",
   description: (
  <>
    Get personalised tools that fit
    <br />
    your real life - not generic advice
    <br />
    you've already tried and 
    <br />
    abandoned.
  </>
),
  },
  {
    icon: `${ICON_BASE}/momentum.svg`,
    iconClass: "size-8",
    bg: "#FFC70F",
    title: "Rebuild confidence & momentum",
    mobileTitleLines: ["Rebuild confidence &", "momentum"],
    description: (
  <>
    Move past the thoughts that keep
    <br />
    you stuck and take real steps
    <br />
    toward the life you want.
  </>
),
  },
  {
    icon: `${ICON_BASE}/resilience.svg`,
    iconClass: "size-10",
    bg: "#00E4C6",
    title: "Create lasting resilience",
    description: (
  <>
    Anxiety doesn't disappear 
    <br />
    overnight.
    
    Your coach helps you
    <br />
     grow stronger with every
    
    session
    <br />
     not just feel better in the moment.
  </>
),
  },
];

function BenefitItem({ item }) {
  return (
    <div className="flex w-full items-start gap-8">
      <div
        className="flex size-16 shrink-0 items-center justify-center rounded border border-black"
        style={{ backgroundColor: item.bg }}
      >
        <img
          src={item.icon}
          alt=""
          className={`${item.iconClass} object-contain`}
          aria-hidden="true"
          draggable={false}
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h3 className="font-miniature text-[28px] leading-9 text-black lg:text-[32px] lg:leading-10">
          {item.mobileTitleLines ? (
            <>
              <span className="block lg:hidden">{item.mobileTitleLines[0]}</span>
              <span className="block lg:hidden">{item.mobileTitleLines[1]}</span>
              <span className="hidden lg:inline">{item.title}</span>
            </>
          ) : (
            item.title
          )}
        </h3>
        <p className="font-inter text-[16px] leading-6 text-black lg:text-[18px] lg:leading-[26px]">
          {item.description}
        </p>
      </div>
    </div>
  );
}

function BenefitsList() {
  return (
    <div className="flex w-full flex-col gap-6">
      {items.map((item, index) => (
        <div key={item.title} className="flex flex-col gap-6">
          <BenefitItem item={item} />
          {index < items.length - 1 ? (
            <div className="h-px w-full bg-black/10" aria-hidden="true" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function HowLifeCoachHelps() {
  return (
    <section id="our-approach" className="bg-[#F4EFEA]">
      {/* Mobile */}
      <div className="flex flex-col gap-10 px-5 py-12 lg:hidden">
        <div className="flex flex-col gap-6">
          <h2 className="font-miniature text-[36px] font-bold leading-[44px] text-black">
            <span className="block">How life coach</span>
            <span className="block">
              helps with{" "}
              <span className="font-miniature italic text-[#FF6F61]">
                anxiety
              </span>
            </span>
          </h2>
          <p className="font-inter text-[16px] leading-6 text-[rgba(13,13,13,0.7)]">
            Anxiety coaching isn&apos;t about eliminating the feeling. It&apos;s
            about changing your relationship <br /> with it so it no longer runs the
            show.
          </p>
          <Link
            to="/signup-anxiety"
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#5200FF] px-5 py-3.5 text-[14px] font-semibold leading-6 text-white transition-opacity hover:opacity-90"
          >
            Book a Free 15-Min Match Call →
          </Link>
        </div>
        <BenefitsList />
      </div>

      {/* Desktop — Figma 4925:5964 */}
      <div className="mx-auto hidden max-w-[1440px] items-center gap-20 px-[114px] py-[100px] lg:flex">
        <div className="flex w-full max-w-[566px] flex-1 flex-col gap-6">
          <h2 className="font-miniature text-[54px] font-bold leading-[62px] text-black">
            How life coach helps with{" "}
            <span className="font-miniature italic text-[#FF6F61]">anxiety</span>
          </h2>
          <p className="font-inter text-[18px] leading-[26px] text-[rgba(13,13,13,0.7)]">
            Anxiety coaching isn&apos;t about eliminating the feeling. It&apos;s
            about changing your relationship with it so it no longer runs the
            show.
          </p>
          <Link
            to="/signup-anxiety"
            className="inline-flex w-fit items-center justify-center rounded-[39px] bg-[#5200FF] px-6 py-6 text-[20px] font-semibold capitalize tracking-[0.72px] text-white transition-opacity hover:opacity-90"
          >
            Book a Free 15-Min Match Call →
          </Link>
        </div>

        <div className="flex w-full max-w-[566px] flex-1 flex-col">
          <BenefitsList />
        </div>
      </div>
    </section>
  );
}
