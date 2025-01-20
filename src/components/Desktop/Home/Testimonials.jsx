import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function TestimonialsCarousel() {
  const testimonials = [
    {
      bg: "bg-[#E5FF7D]",
      img: "/desktop/testimonials/test-1.png",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: "bg-[#F097DD]",
      img: "/desktop/testimonials/test-2.png",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop/testimonials/test-3.png",
      title: "John, 72",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },

    {
      bg: "bg-[#E5FF7D]",
      img: "/desktop/testimonials/test-1.png",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: "bg-[#F097DD]",
      img: "/desktop/testimonials/test-2.png",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop/testimonials/test-3.png",
      title: "John, 72",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },
  ];

  return (
    <div className="bg-[#F4EFEA] p-[105px] pt-[85px] space-y-6">
      <h1 className="text-[76px] font-miniature">Testimonials</h1>

      <Carousel className="">
        <CarouselContent>
          {testimonials?.map((test, id) => (
            <CarouselItem key={id} className="basis-1/3 w-full">
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

                <div className="space-y-[22px]">
                  <h3 className="font-miniature text-[40px]">{test?.title}</h3>
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
  );
}

export default TestimonialsCarousel;
