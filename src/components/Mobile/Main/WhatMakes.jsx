import React from "react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  {
    img: "/mobile/whatMakes/card1.svg",
    title: "Real Conversations, Real Impact",
    body: "Attune connects you to compassionate listeners who provide a supportive environment for sharing your thoughts and feelings. It's a space to gain clarity, set goals, and explore strategies for emotional well-being.",
  },
  {
    img: "/mobile/whatMakes/card2.svg",
    title: "Accessible and Affordable Support",
    body: "No more barriers like high costs or long wait times. Attune offers connection to immediate, non-clinical emotional support that fits your schedule and budget.",
  },
  {
    img: "/mobile/whatMakes/card3.svg",
    title: "Focused on Everyday Challenges",
    body: "While therapy addresses severe mental health conditions, this service is ideal for managing everyday stress, coping with life transitions, or building self-confidence.",
  },
  {
    img: "/mobile/whatMakes/card4.svg",
    title: <>No Stigma Just<br /> Support</>,
    body: "Seeking support has never been easier. Attune normalizes conversations about mental wellness, creating a space that prioritizes connection and growth over clinical formality.",
  },
  {
    img: "/mobile/whatMakes/card5.svg",
    title: "Privacy and Confidentiality",
    body: "Your well-being and privacy are our top priority. All conversations are confidential, ensuring that you can speak freely and openly without concerns.",
  },
];
function WhatMakes() {
  return (
    <div className="bg-[#F4EFEA] py-[30px] px-5 space-y-6">
      <div className="space-y-5">
        <h1 className="text-[38px] font-miniature">
          What Makes Us
          <br /> Different?
        </h1>
        <p className="text-[15px] leading-[20px]">
          At Attune, we understand that mental wellness is personal, and
          everyone’s journey is unique. Here’s why our platform is the right
          choice for you:
        </p>
      </div>

      {/* <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true, 
        }}
        spaceBetween={20} 
        slidesPerView={1}
        className="swiper-container !min-h-[360px]"
      >
        {cards?.map((card, id) => (
          <SwiperSlide key={id}>
            <div className="max-w-[274px] mx-auto border border-black bg-white py-5 px-4 rounded-[20px] space-y-[20px]">
              <img
                src={card?.img}
                alt="Icon"
                className="object-contain w-[44px] h-[44px]"
              />
              <div className="space-y-[14px]">
                <h3 className="h-[72px] w-[90%] flex items-center text-[24px] font-miniature">
                  {card?.title}
                </h3>
                <p className="text-[15px] leading-[20px]">{card?.body}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev rotate-[180deg] !w-[30px] !h-[30px] text-white rounded-full absolute left-2 top-1/2 transform bg-[#fff] -translate-y-1/2">
       <img src="/mobile/whatMakes/arrow.png" className="h-[30px] w-[30px]" alt="" />
      </button>
      <button className="swiper-button-next !w-[30px] !h-[30px]  text-white rounded-full absolute right-2 top-1/2 transform bg-[#fff] -translate-y-1/2">
      <img src="/mobile/whatMakes/arrow.png" className="h-[30px] w-[30px]" alt="" />
      </button>
    </div> */}

      <Carousel className="">
        <CarouselContent>
          {cards?.map((card, id) => (
            <CarouselItem key={id} className="w-full basis-1/1">
              <div className="max-w-[274px] mx-auto border border-black bg-white py-5 px-4 rounded-[20px] space-y-[20px]">
                <img
                  src={card?.img}
                  alt="Icon"
                  className="object-contain w-[44px] h-[44px]"
                />

                <div className="space-y-[14px]">
                  <h3 className="h-[72px] w-[90%] flex items-center text-[24px] font-miniature">
                    {card?.title}
                  </h3>

                  <p className="text-[15px] leading-[20px]">{card?.body}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white border border-black -left-2 disabled:border-neutral-500" />
        <CarouselNext className="bg-white border border-black -right-2 disabled:border-neutral-500" />
      </Carousel>

      <p className="text-[15px] leading-[20px] w-[350px]">
        Choose Attune for an approachable, supportive, and stigma-free
        experience in managing your emotional health and well-being.
      </p>

      <div className="flex justify-center">
        <a href="https://innovacare.tech/listenerhub/signup">
          <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px]">
            Connect Now
          </Button>
        </a>
      </div>
    </div>
  );
}

export default WhatMakes;
