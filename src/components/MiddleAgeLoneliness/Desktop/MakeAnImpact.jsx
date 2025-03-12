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
      img: "assets/desktop4/testimonials/test-1.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "assets/desktop4/testimonials/test-3.webp",
      title: "Michael, 52",
      body: '"Balancing work and personal life became too much. My Listener helped me regain confidence and manage my emotions effectively."',
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "assets/desktop4/testimonials/test-2.webp",
      title: "Sophia, 38",
      textColor: "text-white",
      body: '"I didn’t realize how much I needed someone to just listen. After a few sessions, I felt a renewed sense of purpose and calm."',
    }
    
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
              src="assets/desktop4/testimonials/red-bar-1.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">95%</span> of professionals report feeling more supported after a Listener session.
            </h3>
          </div>
          <div className="flex flex-col">
            <img
              src="assets/desktop4/testimonials/red-bar-2.svg"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">80%</span> 
              feel more equipped to handle <br /> work-related stress after two sessions.
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

                  <div className={"space-y-[22px] " + (test?.title === "Michael, 52" && " text-white")}>
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
