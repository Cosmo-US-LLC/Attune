import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function OurCore() {
  const values = [
    {
      bg: "bg-[#E5FF7D]",
      img: "/mobile1/ourCore/core1.svg",
      title: "You Deserve Connection",
      body: "Navigating university life or starting a career? We’re here for you. Our platform creates a safe, open space for you to talk about what matters to you, no matter how big or small.",
    },
    {
      bg: "bg-[#FFA8ED]",
      img: "/mobile1/ourCore/core2.svg",
      title: "No Labels, Just Support",
      body: "Whether you're feeling stressed, overwhelmed, or just want to share your thoughts, we’re ready to listen.",
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "/mobile1/ourCore/core3.svg",
      title: "Affordable & Accessible",
      body: "Support that fits your budget and schedule. Designed for students and young professionals, we ensure connection is easy and affordable anytime, anywhere.",
    },
  ];

  return (
    <div className="bg-[#F4EFEA] py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">Our Core Values</h1>

      <Carousel className="">
        <CarouselContent>
          {values?.map((test, id) => (
            <CarouselItem key={id} className="basis-1/1 w-full">
              <div
                className={"max-w-[263px] mx-auto border border-black rounded-[12px] p-5 " + test?.bg}
              >
                <img
                  src={test?.img}
                  alt="person"
                  className="w-[66.5px] h-[66.5px] object-contain rounded-full mb-[15px]"
                />

                <div className="space-y-[10px] pb-5">
                  <h3 className="font-miniature text-[24px] leading-[28px]">
                    {test?.title}
                  </h3>
                  <p className="text-[15px] leading-[20px]">{test?.body}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:border-neutral-500 bg-white left-0" />
        <CarouselNext className="border border-black disabled:border-neutral-500 bg-white right-0" />
      </Carousel>
      {/* <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".swiper-button-prev-tes",
            nextEl: ".swiper-button-next-tes",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="swiper-container !min-h-[320px]"
        >
          {values?.map((test, id) => (
            <SwiperSlide key={id} className="basis-1/1 w-full">
              <div
                className={"border border-black rounded-[12px] p-5 " + test?.bg}
              >
                <img
                  src={test?.img}
                  alt="person"
                  className="w-[60px] h-[60px] object-contain rounded-full mb-[28px]"
                />

                <div className="space-y-[10px] pb-5">
                  <h3 className="font-miniature text-[32px]">{test?.title}</h3>
                  <p className="text-[15px] leading-[20px]">{test?.body}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="swiper-button-prev-tes z-[80] rotate-[180deg] !w-[30px] !h-[30px] text-white rounded-full absolute -left-3 top-1/2 transform bg-[#fff] -translate-y-1/2">
          <img
            src="/mobile1/whatMakes/arrow.png"
            className="h-[30px] w-[30px]"
            alt=""
          />
        </button>
        <button className="swiper-button-next-tes z-[80] !w-[30px] !h-[30px]  text-white rounded-full absolute -right-3 top-1/2 transform bg-[#fff] -translate-y-1/2">
          <img
            src="/mobile1/whatMakes/arrow.png"
            className="h-[30px] w-[30px]"
            alt=""
          />
        </button>
      </div> */}
    </div>
  );
}

export default OurCore;
