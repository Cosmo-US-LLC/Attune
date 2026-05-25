import { Link } from "react-router-dom";

const items = [
  {
    lead: "Identify your triggers:",
    desc: "understand what's driving your stress",
  },
  {
    lead: "Build coping strategies:",
    desc: "practical tools that fit your real life",
  },
  {
    lead: "Rebuild confidence:",
    desc: "take real steps toward the life you want",
  },
  {
    lead: "Create lasting resilience:",
    desc: "grow stronger with every session",
  },
];

function Checklist({ className = "" }) {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {items.map((item) => (
        <div key={item.lead} className="flex items-start gap-3">
          <img
            src="/images/anxiety-page/v2/check-one.svg"
            alt=""
            className="size-5 shrink-0"
          />
          <p className="text-[14px] leading-[22px] text-black lg:text-[16px] lg:leading-6">
            <span className="font-bold">{item.lead} </span>
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function HowLifeCoachHelps() {
  return (
    <section id="our-approach" className="relative overflow-hidden">
      {/* Mobile — Figma 4780:17434 */}
      <div className="relative flex items-center justify-center p-8 lg:hidden">
        <img
          src="/images/anxiety-page/v2/coach-help-bg.webp"
          alt=""
          className="pointer-events-none absolute inset-0 size-full object-cover"
          aria-hidden="true"
        />

        <div className="relative flex w-full flex-col gap-8 rounded-3xl border border-black bg-white px-4 py-6 backdrop-blur-[50px]">
          <div className="flex w-full flex-col gap-6">
            <h2 className="font-miniature text-[42px] font-bold leading-[50px] text-black">
              How a Life Coach Can Help
            </h2>
            <Checklist />
          </div>

          <Link
            to="/signup-anxiety"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5200FF] px-5 py-2.5 text-[14px] font-medium leading-6 text-white transition-opacity hover:opacity-90"
          >
            Find Your Life Coach
            <img
              src="/images/anxiety-page/v2/cta-arrow-circle.svg"
              alt=""
              className="size-[18px]"
            />
          </Link>
        </div>
      </div>

      {/* Desktop — unchanged */}
      <div className="relative hidden min-h-[744px] items-center justify-end overflow-hidden px-[114px] py-[100px] lg:flex">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="/images/anxiety-page/v2/coach-help-bg.webp"
              alt=""
              className="absolute h-[104%] left-[-25%] top-[-2%] w-[87%] max-w-none object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#E5FF7D] from-[35%] to-[54%] to-transparent" />
        </div>

        <div className="relative w-full max-w-[610px] rounded-[48px] border border-black bg-white px-8 py-12">
          <h2 className="font-miniature mb-12 text-center text-[54px] font-bold leading-[62px] text-black">
            How a Life Coach Can Help
          </h2>

          <Checklist />

          <Link
            to="/signup-anxiety"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-[#5200FF] px-8 py-2.5 text-[16px] font-semibold capitalize leading-6 text-white transition-opacity hover:opacity-90"
          >
            Find Your Life Coach
            <img
              src="/images/anxiety-page/v2/cta-arrow-circle.svg"
              alt=""
              className="size-5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
