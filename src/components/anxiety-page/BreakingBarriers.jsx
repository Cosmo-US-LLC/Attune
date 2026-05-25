import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const cards = [
  {
    title: "Social Anxiety: When connection Feels Scary",
    subtitle: "You want to connect but showing up just feels like too much.",
    bg: "bg-[#38AB9B]",
    text: "text-white",
    points: [
      "You cancel plans to avoid the anxiety of showing up",
      "You overthink everything you said long after it's over",
      "Crowded rooms, small talk, even texting back feels draining",
    ],
  },
  {
    title: "Financial Anxiety: Your Bank Account Lives Rent-Free in Your Head",
    subtitle: "The numbers might be fine. Your mind isn't.",
    bg: "bg-[#FF6F61]",
    text: "text-white",
    points: [
      "You lie awake running worst-case financial scenarios",
      "Money conversations with loved ones turn into arguments",
      "You can't enjoy the present because you're terrified of the future",
    ],
  },
  {
    title: "Academic Anxiety: You Know You Can, So Why Can't You Start?",
    subtitle: "Capable doesn't always feel like enough..",
    bg: "bg-[#6FE0D1]",
    text: "text-black",
    points: [
      "Deadlines make you freeze instead of focus",
      "You feel like everyone else has it figured out except you",
      "You push through but the burnout is real",
    ],
  },
  {
    title: "Body Anxiety: Getting Dressed Feels Like a Battle",
    subtitle: "Your inner critic follows you everywhere.",
    bg: "bg-[#FFA8ED]",
    text: "text-black",
    points: [
      "You avoid mirrors, photos, anything that draws attention",
      "You compare yourself without even meaning to",
      "Your worth shouldn't depend on how you look but it feels like it does",
    ],
  },
  {
    title: "General Anxiety: Your Brain Won't Let You Just Relax",
    subtitle: "No specific reason. Just can't switch off.",
    bg: "bg-[#F1854F]",
    text: "text-black",
    points: [
      "Your mind races even when life is fine",
      "Small decisions feel overwhelming",
      "You worry about worrying and it makes it worse",
    ],
  },
  {
    title: "Performance Anxiety: You Know Your Stuff But Go Blank",
    subtitle: "All eyes on you. Everything you prepared disappears.",
    bg: "bg-[#D43525]",
    text: "text-white",
    points: [
      "You dread a 10-minute meeting for days",
      "You rehearse until the words stop making sense",
      "Staying quiet feels safer than getting it wrong",
    ],
  },
  {
    title: "Life Transitions Anxiety: Everyone's Excited. You're Just Scared.",
    subtitle: "New chapters should feel good. So why don't they?",
    bg: "bg-[#A089E4]",
    text: "text-white",
    points: [
      "Change feels like a threat, not an opportunity",
      "You miss the old even when you chose to leave it",
      "You put pressure on yourself to feel excited when you don't",
    ],
  },
];

function MobileBarrierCard({ card }) {
  return (
    <div
      className={`${card.bg} flex w-[340px] flex-col rounded-[30px] border border-black px-4 py-6`}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3
            className={`font-miniature text-[24px] leading-8 ${card.text}`}
          >
            {card.title}
          </h3>
          <p
            className={`text-[16px] font-medium leading-6 ${card.text}`}
          >
            {card.subtitle}
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {card.points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <img
                src="/images/anxiety-page/v2/bullet-circle.svg"
                alt=""
                className="h-[29px] w-4 shrink-0"
              />
              <span className={`text-[16px] leading-6 ${card.text}`}>
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DesktopBarrierCard({ card }) {
  return (
    <div
      className={`${card.bg} flex h-full w-full flex-col rounded-[30px] border border-black px-5 py-8`}
    >
      <div className="mb-8 flex flex-col gap-2">
        <h3
          className={`font-miniature text-[32px] leading-10 ${card.text}`}
        >
          {card.title}
        </h3>
        <p
          className={`text-[18px] font-medium leading-[26px] ${card.text}`}
        >
          {card.subtitle}
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {card.points.map((point) => (
          <li key={point} className="flex items-start gap-4">
            <img
              src="/images/anxiety-page/v2/bullet-circle.svg"
              alt=""
              className="mt-1 h-[29px] w-[19px] shrink-0"
            />
            <span className={`text-[18px] leading-[26px] ${card.text}`}>
              {point}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DesktopSlider() {
  const [api, setApi] = useState(null);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollNext(api.canScrollNext());
    setCanScrollPrev(api.canScrollPrev());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="mx-auto flex w-full max-w-[1408px] items-center">
      <button
        type="button"
        onClick={() => api?.scrollPrev()}
        disabled={!canScrollPrev}
        className="flex h-16 w-16 shrink-0 items-center justify-center disabled:pointer-events-none disabled:opacity-0"
        aria-label="Previous slide"
      >
        <img
          src="/images/anxiety-page/v2/slider-arrow.svg"
          alt=""
          className="size-14 rotate-180 object-contain"
        />
      </button>

      <div className="w-[1280px] max-w-full shrink-0 overflow-hidden">
        <Carousel
          opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
          setApi={setApi}
          showDots={false}
          className="w-full"
        >
          <CarouselContent className="ml-0 gap-6">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="basis-[calc((100%-1.5rem)/2)] pl-0 lg:basis-[calc((100%-3rem)/3)]"
              >
                <DesktopBarrierCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <button
        type="button"
        onClick={() => api?.scrollNext()}
        disabled={!canScrollNext}
        className="flex h-16 w-16 shrink-0 items-center justify-center disabled:pointer-events-none disabled:opacity-0"
        aria-label="Next slide"
      >
        <img
          src="/images/anxiety-page/v2/slider-arrow.svg"
          alt=""
          className="size-14 object-contain"
        />
      </button>
    </div>
  );
}

function MobileSlider() {
  const [api, setApi] = useState(null);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCanScrollNext(api.canScrollNext());
    setCanScrollPrev(api.canScrollPrev());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-[350px] max-w-full overflow-hidden">
        <Carousel
          opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
          setApi={setApi}
          showDots={false}
          className="w-full"
        >
          <CarouselContent className="ml-0 gap-6">
            {cards.map((card, index) => (
              <CarouselItem key={index} className="basis-[340px] pl-0">
                <MobileBarrierCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          disabled={!canScrollPrev}
          className="flex size-8 items-center justify-center disabled:opacity-40"
          aria-label="Previous slide"
        >
          <img
            src="/images/anxiety-page/v2/slider-arrow.svg"
            alt=""
            className="size-8 rotate-180 object-contain"
          />
        </button>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          disabled={!canScrollNext}
          className="flex size-8 items-center justify-center disabled:opacity-40"
          aria-label="Next slide"
        >
          <img
            src="/images/anxiety-page/v2/slider-arrow.svg"
            alt=""
            className="size-8 object-contain"
          />
        </button>
      </div>
    </div>
  );
}

export default function BreakingBarriers() {
  return (
    <section className="bg-[#F4EFEA]">
      {/* Mobile — Figma 4777:16257 */}
      <div className="flex flex-col items-center gap-6 px-5 py-8 md:hidden">
        <div className="relative w-full text-center">
          <h2 className="font-miniature text-[42px] font-bold leading-[50px] text-black">
            <span className="text-[#FF6F61]">Breaking Barriers:</span>{" "}
            <br />
            Life Coaching Built Around Anxiety and the Challenges It Brings
          </h2>
        </div>

        <MobileSlider />
      </div>

      {/* Desktop — unchanged */}
      <div className="hidden py-[100px] md:block">
        <div className="relative mx-auto mb-16 max-w-[1080px] px-[114px] text-center">
          <h2 className="font-miniature text-[54px] font-bold leading-[62px] text-black">
            <span className="text-[#FF6F61]">Breaking Barriers:</span>
            <br />
            Life Coaching Built Around Anxiety and the Challenges It Brings
          </h2>
          <img
            src="/images/anxiety-page/v2/highlight-scribble-v2.svg"
            alt=""
            className="pointer-events-none absolute top-0 right-[20%] h-[60px] w-[100px] rotate-[12deg]"
            aria-hidden="true"
          />
        </div>

        <div className="mx-auto w-full max-w-[1408px] overflow-hidden">
          <DesktopSlider />
        </div>
      </div>
    </section>
  );
}
