import React from "react";
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
      img: "assets/mobile2/meetFew/expert1.webp",
      name: "Jessica Williams",
      title: "Certified Mental Health Advisor",
      body: "Jessica is a compassionate listener with over 5 years of experience helping people through life’s ups and downs.",
    },
    {
      img: "assets/mobile2/meetFew/expert2.webp",
      name: "Michael Brown",
      title: "Life Coach and Stress Management Specialist",
      body: "With a background in coaching and mental wellness, Michael specializes in helping individuals cope with stress, anxiety, and personal transitions.",
    },
    {
      img: "assets/mobile2/meetFew/expert3.webp",
      name: "Olivia Davis",
      title: "Certified Wellness Advisor",
      body: "Olivia is passionate about supporting emotional well-being. She combines mindfulness techniques with empathetic listening to help people.",
    },
    {
      img: "assets/mobile2/meetFew/expert4.webp",
      name: "Daniel Thompson",
      title: "Trauma-Informed Listener",
      body: "Daniel focuses on providing safe, empathetic support to individuals navigating through trauma or personal struggles.",
    },
  ];

  return (
    <div className="py-[30px] px-5 bg-[#F4EFEA] space-y-[24px]">
      <h1 className="text-[38px] font-miniature text-center">
        Meet a few experts
      </h1>

      <Carousel className="">
        <CarouselContent>
          {cards?.map((card, id) => (
            <CarouselItem key={id} className="basis-1/1 w-full">
              <div className={"max-w-[274px] mx-auto border border-black p-3 pt-[10px] space-y-[14px] " + (id%2 !== 0 ? "bg-[#FFE87E]": "bg-white")}
                style={{ borderRadius: "130px 130px 12px 12px" }}
              >
                <div className="relative">
                  <img
                    src={card?.img || ""}
                    alt="Icon"
                    className="w-[254px] h-[162px] object-contain"
                  />
                  <h3 className="absolute bottom-3 w-full text-white text-center text-[24px] font-miniature">
                    {card?.name}
                  </h3>
                </div>

                <h3 className="flex items-center text-[16px] font-[600] leading-[21px]">
                  {card?.title}
                </h3>

                <p className="text-[15px] leading-[20px] text-center">{card?.body}</p>
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
