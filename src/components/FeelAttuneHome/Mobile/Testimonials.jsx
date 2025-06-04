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
import vectorIcon1 from "../../../../public/desktop1/testimonials/vector1.webp";
import vectorIcon2 from "../../../../public/desktop1/testimonials/vector2.webp";
import vectorIcon3 from "../../../../public/desktop1/testimonials/vector3.webp";
import vectorIcon4 from "../../../../public/desktop1/testimonials/vector4.webp";
import vectorIcon5 from "../../../../public/desktop1/testimonials/vector5.webp";
import vectorIcon6 from "../../../../public/desktop1/testimonials/vector6.webp";

function Testimonials() {
  const testimonials = [
    {
      name: "Aisha K.",
      age: 24,
      city: "Toronto",
      quote:
        "I didn’t think talking to a stranger could feel this safe. But it did. They just... got it.",
      rating: 5,
      quoteIcon: vectorIcon1,
      bgColor: "bg-[#33B7AC]",
      pillColor: "bg-[#FF5A1F]",
      quoteColor: "text-[#FFF]",
    },
    {
      name: "Mark L.",
      age: 41,
      city: "Calgary",
      quote:
        "It wasn’t therapy, but somehow it helped more than I expected. I finally felt heard.",
      rating: 5,
      quoteIcon: vectorIcon2,
      bgColor: "bg-[#E776C2]",
      pillColor: "bg-[#00BFE3]",
      quoteColor: "text-[#FFF]",
    },
    {
      name: "Deepa N.",
      age: 35,
      city: "Mississauga",
      quote:
        "I wasn’t in crisis. I just needed someone to talk to. FeelAttune was exactly that.",
      rating: 5,
      quoteIcon: vectorIcon3,
      bgColor: "bg-[#FF6F61]",
      pillColor: "bg-[#C6D644]",
      quoteColor: "text-[#FFF]",
    },
    {
      name: "Robert S.",
      age: 72,
      city: "Halifax",
      quote:
        "It was the first time in a long time that I said how I really felt. And someone was there.",
      rating: 5,
      quoteIcon: vectorIcon4,
      bgColor: "bg-[#FFCD56]",
      pillColor: "bg-[#828282]",
      quoteColor: "",
    },
    {
      name: "Jamie D.",
      age: 29,
      city: "Montreal",
      quote:
        "I’ve been holding stuff in for weeks. After just one session, I felt lighter.",
      rating: 5,
      quoteIcon: vectorIcon5,
      bgColor: "bg-[#DAFF6C]",
      pillColor: "bg-[#FF6F61]",
      quoteColor: "",
    },
    {
      name: "Helen M.",
      age: 67,
      city: "Vancouver",
      quote:
        "No pressure, no judgment — just a real person who actually listened. That’s rare.",
      rating: 4,
      quoteIcon: vectorIcon6,
      bgColor: "bg-[#33C3FF]",
      pillColor: "bg-[#74D66A]",
      quoteColor: "text-[#FFF]",
    },
  ];

  return (
    <div className="bg-[#F4EFEA] pt-4 pb-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-center text-[38px]">Testimonials</h1>
      

      <Carousel>
        <CarouselContent>
          {testimonials?.map((t, id) => (
            <CarouselItem key={id} className="w-full basis-1/1">
              <div className="pt-6 ">
                
              <div
               className={`relative rounded-[29.557px] border-[0.985px] border-black p-6 ${t.bgColor} min-h-[300px] flex flex-col justify-between`}
              >
                <img
                  src={t.quoteIcon}
                  alt="Quote icon"
                  className="w-[40px] h-[40px] absolute -top-5 left-8 z-[99]"
                />

                <h3
                  className={`mt-8 text-[36px] font-miniature font-[400] leading-[42px] ${
                    t.quoteColor || "text-black"
                  }`}
                >
                  {t.name}
                </h3>

                <div className="flex items-center mt-2 space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className="w-[20px] h-[20px] text-[20px] leading-[20px] flex items-center justify-center"
                    >
                      {j < t.rating ? "⭐" : "☆"}
                    </span>
                  ))}
                </div>

                <p
                  className={`mt-3 text-[16px] leading-[22px] font-[400] ${
                    t.quoteColor || "text-black"
                  }`}
                >
                  “{t.quote}”
                </p>

                <div
                  className={`${t.pillColor} flex justify-center items-center w-full max-w-[180px] mt-4 text-white text-[16px] font-[400] leading-[120%] capitalize px-4 py-2 rounded-full`}
                >
                  {t.age}, {t.city}
                </div>
              </div>
              {/* <div className={"border border-black rounded-[12px] p-5 " + test?.bg}>
                    <img src={test?.img} alt="person" className="w-[60px] h-[60px] object-contain rounded-full mb-[28px]" />

                    <div className={`space-y-[10px] pb-5 ${test?.textColor || 'text-black'}`}>
                      <h3 className={`font-miniature text-[32px] ${test?.textColor || ''}`}>{test?.title}</h3>
                      <p className={`text-[15px] leading-[20px] ${test?.textColor || ''}`}>{test?.body}</p>
                    </div>
                </div> */}
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:hidden bg-white -left-[15px]" />
        <CarouselNext className="border border-black disabled:hidden bg-white -right-[15px]" />
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
          {testimonials?.map((test, id) => (
            <SwiperSlide key={id} className="w-full basis-1/1">
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

export default Testimonials;
