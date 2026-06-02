import { Link } from "react-router-dom";

const cards = [
  {
    image: "/images/anxiety-page/v2/who-card-1.webp",
    bg: "bg-[#F097DD]",
    title: "Feeling anxious",
    description: "in social situations or relationships",
    showArrow: false,
  },
  {
    image: "/images/anxiety-page/v2/who-card-2.webp",
    bg: "bg-[#96ADF0]",
    title: "Struggling",
    description: "with self-worth, body image, or confidence",
    showArrow: false,
  },
  {
    image: "/images/anxiety-page/v2/who-card-3.webp",
    bg: "bg-[#E5FF7D]",
    title: "Overwhelmed",
    description: "by work, finances, or life changes",
    showArrow: false,
  },
  {
    image: "/images/anxiety-page/v2/who-card-4.webp",
    bg: "bg-[#FFC70F]",
    title: "Tired of feeling",
    description: "stuck and ready for real support",
    showArrow: false,
    mobileImageClass:
      "absolute h-full left-[-6.17%] top-0 w-[142.22%] max-w-none object-cover",
    desktopImageClass:
      "absolute h-full left-[-19.37%] top-0 w-[185.19%] max-w-none object-cover",
  },
];

function MobileWhoCard({ card }) {
  return (
    <div className="flex w-full flex-col">
      <div className="relative h-[340px] w-full overflow-hidden rounded-t-2xl">
        <img
          src={card.image}
          alt=""
          className={
            card.mobileImageClass ||
            "pointer-events-none size-full object-cover"
          }
        />
      </div>

      <div
        className={`${card.bg} flex flex-col gap-2 rounded-b-2xl px-5 py-6`}
      >
        <div
          className={`flex w-full items-center gap-4 ${
            card.showArrow ? "justify-between" : "justify-start"
          }`}
        >
          <h3 className="font-miniature text-[24px] leading-8 text-black">
            {card.title}
          </h3>
          {card.showArrow && (
            <img
              src="/images/anxiety-page/v2/who-arrow.svg"
              alt=""
              className="size-6 shrink-0 rotate-90"
              aria-hidden="true"
            />
          )}
        </div>
        <p className="text-[14px] leading-[22px] text-black">
          {card.description}
        </p>
      </div>
    </div>
  );
}

function DesktopWhoCard({ card }) {
  return (
    <div className="group flex h-full flex-col">
      <div className="relative h-[280px] shrink-0 overflow-hidden rounded-t-2xl transition-[border-radius] duration-300 ease-out group-hover:rounded-[80px]">
        <img
          src={card.image}
          alt=""
          className={
            card.desktopImageClass ||
            "pointer-events-none h-full w-full object-cover"
          }
        />
      </div>

      <div
        className={`${card.bg} flex flex-1 flex-col gap-4 rounded-b-2xl px-6 py-10 transition-[border-radius,padding] duration-300 ease-out group-hover:rounded-[80px] group-hover:px-8`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-miniature text-[32px] leading-10 text-black">
            {card.title}
          </h3>
          <img
            src="/images/anxiety-page/v2/who-arrow.svg"
            alt=""
            className="size-6 shrink-0 rotate-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>
        <p className="text-[16px] leading-6 text-black">{card.description}</p>
      </div>
    </div>
  );
}

export default function WhoIsThisFor() {
  return (
    <section id="who-is-this-for" className="bg-white">
      {/* Mobile — Figma 4777:16219 */}
      <div className="flex flex-col items-center gap-8 px-5 py-12 lg:hidden">
        <h2 className="w-full text-center font-miniature text-[42px] font-bold leading-[50px] text-black">
          <span className="text-[#FF6F61]">Who </span>
          is this for?
        </h2>

        <div className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-4">
            {cards.map((card) => (
              <MobileWhoCard key={card.title} card={card} />
            ))}
          </div>

          <Link
            to="/signup-anxiety"
            className="inline-flex w-full items-center justify-center rounded-full bg-[#5200FF] px-5 py-3.5 text-[14px] font-semibold leading-6 text-white transition-opacity hover:opacity-90"
          >
            Book a Free 15-Min Discovery Call →
          </Link>
        </div>
      </div>

      {/* Desktop — unchanged */}
      <div className="hidden px-[114px] py-[100px] lg:block">
        <h2 className="font-miniature mb-16 text-center text-[54px] font-bold leading-[62px] text-black">
          <span className="text-[#FF6F61]">Who </span>
          is this for?
        </h2>

        <div className="mx-auto flex max-w-[1212px] flex-col gap-8">
          <div className="grid grid-cols-4 gap-5">
            {cards.map((card) => (
              <DesktopWhoCard key={card.title} card={card} />
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/signup-anxiety"
              className="inline-flex items-center justify-center rounded-full bg-[#5200FF] px-5 py-5 text-[16px] font-semibold capitalize leading-6 text-white transition-opacity hover:opacity-90"
            >
              Book a Free 15-Min Discovery Call →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
