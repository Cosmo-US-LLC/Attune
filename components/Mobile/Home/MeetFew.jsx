import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function MeetFew() {
  const cards = [
    {
      img: "/mobile/whatMakes/card1.svg",
      title: "Compassionate Listeners",
      body: "Our trained, non-judgmental Listeners provide a safe space for you to share your thoughts, feelings, and experiences without fear of judgment. You’ll always feel heard and supported.",
    },
    {
      img: "/mobile/whatMakes/card2.svg",
      title: "Accessible Anytime, Anywhere",
      body: "Whether you're at home or on the go, you can connect with a Listener from anywhere, at any time. Our platform is available to support you whenever you need it.",
    },
  ];

  return (
    <div>
      <h1 className="text-[38px] font-miniature text-center space-y-[24px]">
        Meet a few experts
      </h1>

      <Carousel className="">
        <CarouselContent>
          {cards?.map((card, id) => (
            <CarouselItem key={id} className="basis-1/1 w-full">
              <div className="max-w-[274px] mx-auto bg-white border border-black p-3 pt-[10px] rounded-b-[12px] rounded-t-full space-y-[20px]">
                <Image
                  src={card?.img}
                  alt="Icon"
                  height={44}
                  width={44}
                  className="object-contain"
                />

                <div className="space-y-[14px]">
                  <h3 className="h-[72px] flex items-center text-[24px] font-miniature">
                    {card?.title}
                  </h3>

                  <p className="text-[15px] leading-[20px]">{card?.body}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:border-neutral-500 bg-white left-0" />
        <CarouselNext className="border border-black disabled:border-neutral-500 bg-white right-0" />
      </Carousel>
    </div>
  );
}

export default MeetFew;
