import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonials() {
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
      textColor: "text-white",
      title: "Catherine, 65",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
  ];

  return (
    <div className="bg-white py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">
      Connection That <br/> Makes an Impact
      </h1>
      <div className="space-y-2">
        <img
          src="/desktop7/testimonials/progress75.svg"
          alt="pg95"
          className="w-full"
        />
        <p className="text-[15px] pl-1">
          <span className="font-semibold">85%</span>of seniors report feeling emotionally supported after just one session.
        </p>
      </div>

      <div className="space-y-2">
        <img
          src="/desktop7/testimonials/progress95.svg"
          alt="pg75"
          className="w-full"
        />
        <p className="text-[15px] pl-1">
        Users report a <span className="font-semibold">70%</span> improvement in their ability to cope with feelings of isolation after two sessions.
        </p>
      </div>
      <Carousel className="">
        <CarouselContent>
          {testimonials?.map((test, id) => (
            <CarouselItem key={id} className="w-full basis-1/1">
              <div
                className={`border border-black rounded-[12px] min-h-[290px] pt-5 px-5 ${test?.bg}`}
              >
      
                <img
                  src={test?.img}
                  alt="person"
                  className={`w-[60px] h-[60px] object-contain rounded-full ${
                    test.title === "John, 72" ? "mb-[6px]" : "mb-[28px]"
                  }`}
                />

              
                <div
                  className={`pb-5 ${
                    test.title === "John, 72"
                      ? "space-y-[4px]"  
                      : "space-y-[10px]"
                  } ${
                    test.title === "John, 72" ? "text-white" : "text-black"
                  }`}
                >
                  <h3 className="font-miniature text-[32px]">{test?.title}</h3>
                  <p className="text-[15px] leading-[20px]">{test?.body}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="border border-black disabled:hidden bg-white -left-[15px]" />
        <CarouselNext className="border border-black disabled:hidden bg-white -right-[15px]" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
