import { useCallback, useEffect, useMemo, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ICON_BASE = "/images/anxiety-page/v2/barriers";

const cards = [
  {
    key: "social",
    icon: `${ICON_BASE}/social.svg`,
    titleLines: ["Social", "Anxiety"],
    caption: "Connection feels scary",
    detailTitle: "Social Anxiety: When connection Feels Scary",
    detailDescription:
      "Social anxiety is more than shyness. It's the fear of being judged, misread, or rejected in meetings, social settings, or even a simple conversation.",
    points: [
      "Constant worry about what others think",
      "Avoiding social situations or group settings",
      "Physical symptoms: racing heart, blushing, sweating",
      "Replaying conversations long after they've ended",
      "Withdrawing from friendships and opportunities",
    ],
    tall: false,
  },
  {
    key: "financial",
    icon: `${ICON_BASE}/financial.svg`,
    titleLines: ["Financial", "Anxiety"],
    caption: "Money keeps you up",
    detailTitle: "Financial Anxiety: Your Bank Account Lives Rent-Free in Your Head",
    detailDescription: "The numbers might be fine. Your mind isn't.",
    points: [
      "You lie awake running worst-case financial scenarios",
      "Money conversations with loved ones turn into arguments",
      "You can't enjoy the present because you're terrified of the future",
    ],
    tall: false,
  },
  {
    key: "academic",
    icon: `${ICON_BASE}/academic.svg`,
    titleLines: ["Academic", "Anxiety"],
    caption: "Pressure becomes paralysis",
    detailTitle: "Academic Anxiety: You Know You Can, So Why Can't You Start?",
    detailDescription: "Capable doesn't always feel like enough..",
    points: [
      "Deadlines make you freeze instead of focus",
      "You feel like everyone else has it figured out except you",
      "You push through but the burnout is real",
    ],
    tall: false,
  },
  {
    key: "technology",
    icon: `${ICON_BASE}/technology.svg`,
    titleLines: ["Technology Anxiety"],
    caption: "Always on, never at ease",
    detailTitle: "Technology Anxiety",
    detailDescription: "Always on, never at ease.",
    points: [
      "Always checking notifications, never switching off",
      "Scrolling replaces rest and recovery",
      "Feeling behind even when you're doing enough",
    ],
    tall: false,
  },
  {
    key: "body",
    icon: `${ICON_BASE}/body.svg`,
    titleLines: ["Body", "Anxiety"],
    caption: "At war with yourself",
    detailTitle: "Body Anxiety: Getting Dressed Feels Like a Battle",
    detailDescription: "Your inner critic follows you everywhere.",
    points: [
      "You avoid mirrors, photos, anything that draws attention",
      "You compare yourself without even meaning to",
      "Your worth shouldn't depend on how you look but it feels like it does",
    ],
    tall: true,
  },
  {
    key: "general",
    icon: `${ICON_BASE}/general.svg`,
    titleLines: ["General", "Anxiety"],
    caption: "Worry with no off switch",
    detailTitle: "General Anxiety: Your Brain Won't Let You Just Relax",
    detailDescription: "No specific reason. Just can't switch off.",
    points: [
      "Your mind races even when life is fine",
      "Small decisions feel overwhelming",
      "You worry about worrying and it makes it worse",
    ],
    tall: true,
  },
  {
    key: "performance",
    icon: `${ICON_BASE}/performance.svg`,
    titleLines: ["Performance Anxiety"],
    caption: "Showing up feels like too much",
    detailTitle: "Performance Anxiety",
    detailDescription: "Showing up feels like too much",
    points: [
      "You dread a 10-minute meeting for days",
      "You rehearse until the words stop making sense",
      "Staying quiet feels safer than getting it wrong",
    ],
    tall: true,
  },
  {
    key: "life",
    icon: `${ICON_BASE}/life.svg`,
    titleLines: ["Life", "Transitions"],
    caption: "Change feels like threat at ease",
    detailTitle: "Life Transitions",
    detailDescription: "Always on, Change feels like threat at ease",
    points: [
      "Change feels like a threat, not an opportunity",
      "You miss the old even when you chose to leave it",
      "You put pressure on yourself to feel excited when you don't",
    ],
    tall: true,
  },
];

function CardTitle({ lines }) {
  return (
    <div className="font-miniature text-[32px] leading-10 text-black">
      {lines.map((line, i) => (
        <p key={line} className={i < lines.length - 1 ? "mb-0" : ""}>
          {line}
        </p>
      ))}
    </div>
  );
}

function TypeCard({ card, isActive, onClick }) {
  const heightClass = card.tall ? "h-[316px]" : "h-[290px]";
  const [isHovered, setIsHovered] = useState(false);

  const backgroundClass = isActive
    ? "border border-black bg-[#E5FF7D]"
    : isHovered
      ? "bg-[#E6DED5]"
      : "bg-[#F4EFEA]";

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className={[
        "flex w-full cursor-pointer flex-col items-start gap-12 rounded-[8px] px-4 py-8 outline-none transition-colors",
        heightClass,
        backgroundClass,
      ].join(" ")}
    >
      <img
        src={card.icon}
        alt=""
        className="size-16 shrink-0 object-contain"
        aria-hidden="true"
        draggable={false}
      />
      <div className="flex w-full flex-col gap-2">
        <CardTitle lines={card.titleLines} />
        <p className="font-inter text-[18px] font-normal leading-[26px] text-black">
          {card.caption}
        </p>
      </div>
    </div>
  );
}

const SOCIAL_POINTS_MOBILE = [
  ["Constant worry about what others", "think"],
  ["Avoiding social situations or group", "settings"],
  ["Physical symptoms: racing heart,", "blushing, sweating"],
  ["Replaying conversations long after", "they've ended"],
  ["Withdrawing from friendships and", "opportunities"],
];

function SocialDetailDescription() {
  const textClass =
    "font-inter text-[16px] leading-6 text-black lg:text-[18px] lg:leading-[26px]";

  return (
    <>
      <p className={`${textClass} lg:hidden`}>
        <span className="block">
          Social anxiety is more than shyness. It&apos;s
        </span>
        <span className="block">the fear of being judged, misread, or</span>
        <span className="block">
          rejected in meetings, social settings, or
        </span>
        <span className="block">even a simple conversation.</span>
      </p>
      <p className={`${textClass} hidden lg:block`}>
        <span className="lg:whitespace-nowrap">
          Social anxiety is more than shyness. It&apos;s the fear of being judged,
        </span>
        <br />
        misread, or rejected in meetings, social settings, or even{" "}
        <span className="lg:whitespace-nowrap">a</span>
        <br />
        simple conversation.
      </p>
    </>
  );
}

function SocialDetailTitle() {
  return (
    <>
      <span className="block min-w-0 max-w-full text-[clamp(1.125rem,5.65vw,1.5rem)] leading-8 lg:hidden">
        <span className="block">
          Social Anxiety:{" "}
          <span className="whitespace-nowrap">When&nbsp;connection</span>
        </span>
        <span className="block">Feels Scary</span>
      </span>
      <span className="hidden lg:inline">
        Social Anxiety: When connection Feels Scary
      </span>
    </>
  );
}

function DetailPanel({ card }) {
  return (
    <div className="rounded-[16px] bg-[#6FE0D1] px-6 py-12 lg:px-[24px] lg:py-[48px]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-[58px]">
        <div className="flex min-w-0 flex-col gap-6">
          <h3
            className={`min-w-0 max-w-full font-miniature text-black ${
              card.key === "social"
                ? "lg:text-[32px] lg:leading-10"
                : "text-[28px] leading-9 lg:text-[32px] lg:leading-10"
            }`}
          >
            {card.key === "social" ? <SocialDetailTitle /> : card.detailTitle}
          </h3>
          {card.key === "social" ? (
            <SocialDetailDescription />
          ) : (
            <p className="font-inter text-[16px] leading-6 text-black lg:text-[18px] lg:leading-[26px]">
              {card.detailDescription}
            </p>
          )}
        </div>

        <ul className="flex flex-col gap-3">
          {card.points.map((point, index) => (
            <li key={point} className="flex items-start gap-4">
              <img
                src="/images/anxiety-page/v2/check-one.svg"
                alt=""
                className="mt-0.5 size-6 shrink-0"
                aria-hidden="true"
                draggable={false}
              />
              {card.key === "social" ? (
                <>
                  <span className="font-inter text-[16px] leading-6 text-black lg:hidden">
                    <span className="block">
                      {SOCIAL_POINTS_MOBILE[index][0]}
                    </span>
                    <span className="block">
                      {SOCIAL_POINTS_MOBILE[index][1]}
                    </span>
                  </span>
                  <span className="hidden font-inter text-[18px] leading-[26px] text-black lg:inline">
                    {point}
                  </span>
                </>
              ) : (
                <span className="font-inter text-[16px] leading-6 text-black lg:text-[18px] lg:leading-[26px]">
                  {point}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CarouselNavButton({ direction, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex size-9 shrink-0 items-center justify-center rounded-full border border-black bg-white sm:size-10 ${className}`}
      aria-label={
        direction === "next" ? "Next anxiety type" : "Previous anxiety type"
      }
    >
      <svg
        viewBox="0 0 24 24"
        className={`size-4 text-black sm:size-[18px] ${
          direction === "prev" ? "rotate-180" : ""
        }`}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

function MobileView({ activeKey, setActiveKey }) {
  const [api, setApi] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const active = cards.find((c) => c.key === activeKey) ?? cards[0];

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    const index = api.selectedScrollSnap();
    const card = cards[index];
    if (card) setActiveKey(card.key);
  }, [api, setActiveKey]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <div className="relative w-full">
        <div className="relative mx-auto w-full max-w-[350px] overflow-hidden">
          <Carousel
            opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
            setApi={setApi}
            showDots={false}
            className="w-full"
          >
            <CarouselContent className="ml-0 gap-4">
              {cards.map((card) => (
                <CarouselItem key={card.key} className="basis-[288px] pl-0">
                  <TypeCard
                    card={card}
                    isActive={card.key === activeKey}
                    onClick={() => {
                      setActiveKey(card.key);
                      const index = cards.findIndex((c) => c.key === card.key);
                      if (index >= 0) api?.scrollTo(index);
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {canScrollPrev ? (
          <CarouselNavButton
            direction="prev"
            onClick={scrollPrev}
            className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 sm:-left-3"
          />
        ) : null}

        {canScrollNext ? (
          <CarouselNavButton
            direction="next"
            onClick={scrollNext}
            className="absolute -right-2 top-1/2 z-10 -translate-y-1/2 sm:-right-3"
          />
        ) : null}
      </div>

      <div className="w-full px-1">
        <DetailPanel card={active} />
      </div>
    </div>
  );
}

export default function BreakingBarriers() {
  const desktopTop = useMemo(() => cards.slice(0, 4), []);
  const desktopBottom = useMemo(() => cards.slice(4, 8), []);
  const [activeKey, setActiveKey] = useState("social");
  const active = useMemo(
    () => cards.find((c) => c.key === activeKey) ?? cards[0],
    [activeKey],
  );

  return (
    <section className="bg-white">
      {/* Mobile */}
      <div className="flex flex-col items-center gap-8 px-5 py-12 lg:hidden">
        <h2 className="max-w-[520px] text-center font-miniature text-[36px] font-bold leading-[44px] text-black">
          <span className="block">Which type of</span>
          <span className="block">anxiety feels most</span>
          <span className="block font-miniature italic text-[#FF6F61]">
            familiar?
          </span>
        </h2>
        <MobileView activeKey={activeKey} setActiveKey={setActiveKey} />
      </div>

      {/* Desktop — Figma 4920:569 */}
      <div className="hidden flex-col items-center gap-16 px-[114px] py-[100px] lg:flex">
        <h2 className="w-full max-w-[800px] text-center font-miniature text-[54px] font-bold leading-[62px] text-black">
          Which type of anxiety feels most{" "}
          <span className="font-miniature italic text-[#FF6F61]">familiar?</span>
        </h2>

        <div className="flex w-full max-w-[1212px] flex-col gap-5">
          <div className="grid grid-cols-4 gap-5">
            {desktopTop.map((card) => (
              <TypeCard
                key={card.key}
                card={card}
                isActive={card.key === activeKey}
                onClick={() => setActiveKey(card.key)}
              />
            ))}
          </div>

          <DetailPanel card={active} />

          <div className="grid grid-cols-4 gap-5">
            {desktopBottom.map((card) => (
              <TypeCard
                key={card.key}
                card={card}
                isActive={card.key === activeKey}
                onClick={() => setActiveKey(card.key)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
