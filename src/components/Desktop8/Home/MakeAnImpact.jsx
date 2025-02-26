import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MakeAnImpactCarousel() {
  const testimonials = [
    {
      bg: "bg-[#E5FF7D]",
      img: "/desktop7/testimonials/test1.webp",
      title: "Margaret, 68",
      body: '"Living alone after retiring left me feeling invisible. My Listener gave me a space to share my feelings without judgment, helping me rediscover purpose and joy."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop7/testimonials/test2.webp",
      title: "John, 72",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "/desktop7/testimonials/test3.webp",
      title: "Catherine, 65",
      textColor: "text-white",
      body: '"I’ve always felt uneasy opening up, but this platform made it so easy and comforting. I now feel understood and less overwhelmed."',
    },
  ];

  return (
    <div className="bg-[#F4EFEA]">
      <div className="max-w-[1440px] mx-auto  p-[105px] pt-[55px] space-y-2">
        <h1 className="text-[76px] font-miniature">
          Connection That Makes an Impact
        </h1>
        <div className=" flex flex-row pb-[30px]">
          <div className="flex flex-col">
            <img
              src="/desktop7/testimonials/progress75.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">85%</span> of seniors report
              feeling emotionally supported after just one session.
            </h3>
          </div>
          <div className="flex flex-col">
            <img
              src="/desktop7/testimonials/progress95.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              Users report a <span className="font-semibold">70%</span>{" "}
              improvement in their ability to cope with feelings of isolation
              after two sessions.
            </h3>
          </div>
        </div>
        <Carousel className="">
          <CarouselContent>
            {testimonials?.map((test, id) => (
              <CarouselItem
                key={id}
                className="w-full max-xl:basis-1/2 basis-1/3"
              >
                <div
                  className={
                    "border border-black rounded-[30px] py-[35px] px-[28px] min-h-[440px] " +
                    test?.bg
                  }
                >
                  <img
                    src={test?.img}
                    alt="person"
                    className="w-[117px] h-[117px] object-contain rounded-full mb-[47px]"
                  />

                  <div
                    className={
                      "space-y-[22px] " +
                      (test?.title === "John, 72" && " text-white")
                    }
                  >
                    <h3 className="font-miniature text-[40px]">
                      {test?.title}
                    </h3>
                    <p className="text-[16px] leading-[20px]">{test?.body}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -left-16" />
          <CarouselNext className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -right-16" />
        </Carousel>
      </div>
    </div>
  );
}

export default MakeAnImpactCarousel;
