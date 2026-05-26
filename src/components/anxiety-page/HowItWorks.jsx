import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description:
      "Tell us a bit about yourself so we can find the right coach for you.",
    activeBg: "bg-[#E5FF7D]",
    screen: "/images/anxiety-page/v2/how-it-phone-1.webp",
  },
  {
    number: "02",
    title: "Find Your Life Coach",
    description:
      "We'll send you a link to book directly with your matched coach.",
    activeBg: "bg-[#FFC70F]",
    screen: "/images/anxiety-page/v2/how-it-phone-2.webp",
  },
  {
    number: "03",
    title: "Start Your Journey",
    description: "Join your session and start making real progress.",
    activeBg: "bg-[#96ADF0]",
    screen: "/images/anxiety-page/v2/how-it-phone-3.webp",
  },
];

function StepCard({ step, isActive, onActivate }) {
  return (
    <button
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`flex w-full items-center gap-6 rounded-2xl p-6 text-left transition-colors duration-200 ${
        isActive
          ? step.activeBg
          : "border border-[rgba(0,0,0,0.1)] bg-white"
      }`}
    >
      <span className="w-[80px] shrink-0 text-center font-miniature text-[48px] leading-[72px] text-black lg:text-[64px] lg:leading-[110px]">
        {step.number}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <h3 className="font-miniature text-[24px] leading-8 text-black lg:text-[32px] lg:leading-10">
          {step.title}
        </h3>
        <p className="text-[16px] leading-[22px] text-black lg:text-[16px] lg:leading-[22px]">
          {step.description}
        </p>
      </div>
    </button>
  );
}

function MobileHowItWorksSteps() {
  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
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
    <div className="flex w-full max-w-[350px] flex-col items-center gap-8 lg:hidden">
      <Carousel
        opts={{ align: "start", loop: false, containScroll: "trimSnaps" }}
        setApi={setApi}
        showDots={false}
        className="w-full touch-pan-y"
      >
        <CarouselContent className="ml-0">
          {steps.map((step) => (
            <CarouselItem key={step.number} className="basis-full pl-0">
              <div className="flex w-full flex-col items-center gap-8 rounded-2xl border border-[rgba(0,0,0,0.1)] bg-white px-5 py-6">
                <div className="flex w-full items-start gap-6">
                  <span className="w-20 shrink-0 text-center font-miniature text-[48px] leading-[56px] text-black">
                    {step.number}
                  </span>
                  <div className="flex min-w-0 flex-col gap-3">
                    <h3 className="font-miniature text-[24px] leading-8 text-black">
                      {step.title}
                    </h3>
                    <p className="text-[16px] leading-6 text-black">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="h-[400px] w-full max-w-[350px] shrink-0">
                  <img
                    src={step.screen}
                    alt=""
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex items-center gap-1">
        {steps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`size-3 rounded-full transition-colors ${
              selectedIndex === index
                ? "bg-[#FF6F61]"
                : "border border-black bg-transparent"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center gap-6 bg-white px-5 py-8 lg:gap-16 lg:px-[114px] lg:py-20"
    >
      <h2 className="text-center font-miniature text-[42px] font-bold leading-[50px] text-black lg:text-[54px] lg:leading-[62px]">
        How it works
      </h2>

      <MobileHowItWorksSteps />

      {/* Desktop — unchanged */}
      <div className="hidden w-full max-w-[1212px] flex-col items-center gap-12 lg:flex lg:flex-row lg:items-center lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-6">
          {steps.map((s, index) => (
            <StepCard
              key={s.number}
              step={s}
              isActive={activeStep === index}
              onActivate={() => setActiveStep(index)}
            />
          ))}
        </div>

        <div className="relative mx-auto h-[681px] w-full max-w-[500px] shrink-0 overflow-hidden">
          {steps.map((s, index) => (
            <img
              key={s.number}
              src={s.screen}
              alt=""
              className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-300 ${
                activeStep === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={activeStep !== index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
