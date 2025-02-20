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
      img: "/desktop6/testimonials/test-21.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop6/testimonials/test-1.webp",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "/desktop6/testimonials/test-31.webp",
      title: "John, 72",
      textColor: "text-white",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },
  ];

  return (
    <div className="bg-[#FFF]">
      <div className="max-w-[1440px] mx-auto  p-[105px] pt-[55px] space-y-2">
        <h1 className="text-[55px] font-[400] leading-[110px] font-miniature">
          Testimonials
        </h1>
        {/* <div className=" flex flex-row pb-[30px]">
          <div className="flex flex-col">
            <img
              src="/desktop4/testimonials/red-bar-1.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">95%</span> of professionals report
              feeling more supported after a Listener session.
            </h3>
          </div>
          <div className="flex flex-col">
            <img
              src="/desktop4/testimonials/red-bar-2.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">80%</span>
              feel more equipped to handle <br /> work-related stress after two
              sessions.
            </h3>
          </div>
        </div> */}
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
                      (test?.title === "Jake, 24" && " text-white")
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
