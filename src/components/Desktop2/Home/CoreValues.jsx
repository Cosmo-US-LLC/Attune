import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function CoreValues() {
  const testimonials = [
    {
      bg: "bg-[#E5FF7D]",
      img: "/desktop2/coreValues/c-1.png",
      title: "You Deserve Connection",
      body: 'Navigating university life or starting a career? We’re here for you. Our platform creates a safe, open space for you to talk about what matters to you, no matter how big or small.',
    },
    {
      bg: "bg-[#FFA8ED]",
      img: "/desktop2/coreValues/c-3.png",
      title: "No Labels, Just Support",
      body: "Whether you're feeling stressed, overwhelmed, or just want to share your thoughts, we’re ready to listen.",
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "/desktop2/coreValues/c-2.png",
      title: "Affordable & Accessible",
      body: 'Support that fits your budget and schedule. Designed for caregivers and busy professionals, we ensure connection is easy and affordable anytime, anywhere.',
    },

   
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1440px] mx-auto  p-[105px] pt-[85px] space-y-6">
      <h1 className="text-[76px] text-center font-miniature">Our Core Values</h1>
     
      <Carousel className="">
        <CarouselContent>
          {testimonials?.map((test, id) => (
            <CarouselItem key={id} className="max-xl:basis-1/2 basis-1/3 w-full">
              <div
                className={
                  "border border-black rounded-[30px] h-full py-[35px] px-[28px] min-h-[440px] " +
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
    </div>
  );
}

export default CoreValues;
