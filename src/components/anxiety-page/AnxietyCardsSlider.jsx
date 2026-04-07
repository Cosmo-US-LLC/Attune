import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import iconSocial from "@/assets/images/icon-social.svg";
import iconFinancial from "@/assets/images/icon-financial.svg";
import checkmarkWhite from "@/assets/images/checkmark-white.svg";
import checkmarkDark from "@/assets/images/checkmark-dark.svg";
import arrowRightWhite from "@/assets/images/arrow-right-white.svg";
import sliderArrowBtn from "@/assets/images/slider-arrow-btn.svg";

const cards = [
  {
    title: "Social Anxiety:\nWhen Connection Feels Scary",
    desc: "Social anxiety is more than shyness. It's the fear of being judged, misread, or rejected - in meetings, social settings, or even a simple conversation.",
    bg: "bg-[#38ab9b]",
    text: "white",
    icon: iconSocial,
    points: [
      "Constant worry about what others think",
      "Avoiding social situations or group settings",
      "Physical symptoms: racing heart, blushing, sweating",
      "Replaying conversations long after they've ended",
      "Withdrawing from friendships and opportunities",
    ],
  },
  {
    title: "Financial Anxiety: When Money Keeps You Up at Night",
    desc: "Financial anxiety isn't just about numbers. It's the persistent dread that things could fall apart, affecting your sleep, relationships, and sense of security.",
    bg: "bg-[#ff6f61]",
    text: "white",
    icon: iconFinancial,
    points: [
      "Avoiding bills, statements, or financial decisions",
      "Constant worry about job security or income",
      "Tension in relationships over money",
      "Feeling shame or embarrassment about finances",
      "Fear of the future despite present stability",
    ],
  },
  {
    title: "Academic Anxiety: When Pressure Becomes Paralysis",
    desc: "Academic anxiety turns studying into dread. It's the fear of falling short of expectations, peers, or your own standards that makes it hard to even start.",
    bg: "bg-[#6fe0d1]",
    text: "black",
    icon: iconFinancial,
    points: [
      "Overwhelming stress around exams and deadlines",
      "Procrastinating out of fear of not being good enough",
      "Constantly comparing yourself to others",
      "Feeling like an imposter despite your efforts",
      "Burnout from carrying too much for too long",
    ],
  },
  {
    title: "Technology Anxiety: When the Online World Feels Overwhelming",
    desc: "Always connected but never at ease. Technology anxiety is the low-level stress of comparisons that never switches off.",
    bg: "bg-[#95adf0]",
    text: "black",
    icon: iconFinancial,
    points: [
      "Unable to relax without checking your phone",
      "Anxiety from news cycles and doom",
      "Feeling inadequate against others' curated lives",
      "Overwhelmed by rapid changes in technology",
      "FOMO driving constant digital engagement",
    ],
  },
  {
    title: "Body Anxiety: When You Feel at War With Yourself",
    desc: "Body anxiety is the inner critic that follows you everywhere, picking apart how you look, how you feel, and whether you measure up.",
    bg: "bg-[#ffa8ed]",
    text: "black",
    icon: iconFinancial,
    points: [
      "Preoccupation with appearance or perceived flaws",
      "Avoiding cameras, or social situations",
      "Constant comparison to unrealistic body standards",
      "Anxiety around food, exercise, or physical symptoms",
      "Low self-worth tied to how your body looks or feels",
    ],
  },
  {
    title: "General Anxiety: When Worry Has No Off Switch",
    desc: "General anxiety doesn't need a trigger. It's a persistent hum of worry that colors everything making it hard to relax, focus, or feel present.",
    bg: "bg-[#f1854f]",
    text: "black",
    icon: iconFinancial,
    points: [
      "Excessive worry about everyday situations",
      "Feeling restless, tense, or on edge",
      "Difficulty concentrating or making decisions",
      "Physical tension, fatigue, and sleep disruption",
      "Dreading things before they've even happened",
    ],
  },
  {
    title: "Performance Anxiety: When Showing Up Feels Like Too Much",
    desc: "Performance anxiety isn't just stage fright. It's the fear of being evaluated, falling short, or exposing yourself as not good enough in work, sport, or any high-stakes moment.",
    bg: "bg-[#d43525]",
    text: "white",
    icon: iconFinancial,
    points: [
      "Dreading presentations, meetings, or being put on the spot",
      "Overthinking every word before said",
      "Shaking, nausea, mind going blank",
      "Avoiding opportunities to stay out of the spotlight",
      "Feeling like everyone notices when you struggle",
    ],
  },
  {
    title: "Life Transitions Anxiety: When Change Feels Like a Threat",
    desc: "Life transitions anxiety turns exciting milestones into sources of dread. It's the uncertainty of what comes next and the fear that you won't be able to handle it.",
    bg: "bg-[#a089e4]",
    text: "black",
    icon: iconFinancial,
    points: [
      "Overwhelming worry around new jobs, moves, or relationships",
      "Feeling paralysed by decisions that should feel straightforward",
      "Grieving the old while dreading the new",
      "Constant need for reassurance that things will work out",
      "Struggling to feel settled no matter how much you plan",
    ],
  },
];

function AnxietyCard({ card }) {
  const isWhite = card.text === "white";
  const checkmark = isWhite ? checkmarkWhite : checkmarkDark;
  const textColor = isWhite ? "text-white" : "text-black";

  return (
    <div
      className={`${card.bg} rounded-[30px] border border-black px-5 py-8 flex flex-col gap-10 w-full md:w-[424px]`}
    >
      {/* Icon top-right */}
      <div className="flex justify-end">
        <img src={card.icon} alt="" className="w-16 h-16 object-contain" />
      </div>

      {/* Title */}
      <h3
        className={`font-miniature text-[30px] leading-[38px] whitespace-pre-line ${textColor}`}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p className={`text-[18px] font-normal leading-[26px] ${textColor}`}>
        {card.desc}
      </p>

      {/* Bullet points */}
      <ul className="flex flex-col gap-3">
        {card.points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <img
              src={checkmark}
              alt=""
              className="w-5 h-5 object-contain shrink-0 mt-0.5"
            />
            <span
              className={`text-[18px] font-medium leading-[26px] ${textColor}`}
            >
              {point}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
            to="/signup-anxiety"
        className="bg-[#5200ff] rounded-full px-8 py-2.5 text-white text-center font-medium inline-flex items-center justify-center gap-2 self-start"
      >
        Start One-on-One Life Coaching
        <img src={arrowRightWhite} alt="" className="w-5 h-5 object-contain" />
      </Link>
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

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  const scrollPrev = useCallback(() => {
    if (api) api.scrollPrev();
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        opts={{ align: "start", loop: false }}
        setApi={setApi}
        className="w-full [&+div]:hidden"
      >
        <CarouselContent className="-ml-6">
          {cards.map((card, index) => (
            <CarouselItem key={index} className="basis-1/3 pl-6 flex">
              <AnxietyCard card={card} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {canScrollPrev && (
        <button
          onClick={scrollPrev}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10"
          aria-label="Previous slide"
        >
          <img
            src={sliderArrowBtn}
            alt="Previous"
            className="w-[60px] h-[60px] object-contain rotate-180"
          />
        </button>
      )}

      {canScrollNext && (
        <button
          onClick={scrollNext}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10"
          aria-label="Next slide"
        >
          <img
            src={sliderArrowBtn}
            alt="Next"
            className="w-[60px] h-[60px] object-contain"
          />
        </button>
      )}
    </div>
  );
}

function MobileSlider() {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={16}
      className="anxiety-cards-swiper"
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <AnxietyCard card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function AnxietyCardsSlider() {
  return (
    <section className="bg-[#E5FF7D] px-4 pb-20 md:px-[60px] md:pb-[100px]">
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopSlider />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileSlider />
      </div>
    </section>
  );
}
