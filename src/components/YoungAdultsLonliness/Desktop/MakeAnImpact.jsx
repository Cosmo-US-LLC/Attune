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
      img: "/desktop1/testimonials/test-1.webp",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: "bg-[#F097DD]",
      img: "/desktop1/testimonials/test-2.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop1/testimonials/test-3.webp",
      title: "John, 72",
      textColor: "text-white",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    }
  ];

  return (
    <div className="bg-[#F4EFEA]">
      <div className="max-w-[1440px] mx-auto  p-[105px] pt-[85px] space-y-6">
        <h1 className="text-[76px] font-miniature">
          Connection That Makes an Impact
        </h1>
        <div className=" flex flex-row ">
          <div className="flex flex-col">
            <img
              src="/desktop2/testimonials/progress95.png"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              <span className="font-semibold">95%</span> of young adults report
              feeling <br /> emotionally supported after a session.
            </h3>
          </div>
          <div className="flex flex-col">
            <img
              src="/desktop2/testimonials/progress75.png"
              alt="pg95"
              className="w-[80%] h-[117px] object-contain rounded-full"
            />
            <h3 className="text-[25px] pl-2">
              Users report a <span className="font-semibold">75%</span>{" "}
              improvement in
              <br /> emotional clarity after two sessions.
            </h3>
          </div>
        </div>
        <div className="flex justify-between gap-x-[20px]">
          {testimonials?.map((test, id) => (
            <div key={id} className="max-xl:basis-1/2 basis-1/3 w-full">
              <div
                className={`border border-black rounded-[30px] py-[35px] px-[28px] min-h-[440px] ${test?.bg}`}
              >
                <img
                  src={test?.img}
                  alt="person"
                  className="w-[117px] h-[117px] object-contain rounded-full mb-[47px]"
                />

                <div className="space-y-[22px]">
                  <h3
                    className={`font-miniature text-[40px] ${
                      id === 2 ? "text-[#fff]" : ""
                    }`}
                  >
                    {test?.title}
                  </h3>
                  <p
                    className={`text-[16px] leading-[20px] ${
                      id === 2 ? "text-[#fff]" : ""
                    }`}
                  >
                    {test?.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MakeAnImpactCarousel;
