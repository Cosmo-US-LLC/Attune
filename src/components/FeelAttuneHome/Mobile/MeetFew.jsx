import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


function MeetFew() {
  const cards = [
    {
      img: "assets/mobile1/meetFew/expert1.webp",
      name: "Jessica Williams",
      title: "Certified Mental Health Advisor",
      body: "Jessica is a compassionate listener with over 5 years of experience helping people through life’s ups and downs.",
    },
    {
      img: "assets/mobile1/meetFew/expert2.webp",
      name: "Michael Brown",
      title: "Life Coach and Stress Management Specialist",
      body: "With a background in coaching and mental wellness, Michael specializes in helping individuals cope with stress, anxiety, and personal transitions.",
    },
    {
      img: "assets/mobile1/meetFew/expert3.webp",
      name: "Olivia Davis",
      title: "Certified Wellness Advisor",
      body: "Olivia is passionate about supporting emotional well-being. She combines mindfulness techniques with empathetic listening to help people.",
    },
    {
      img: "assets/mobile1/meetFew/expert4.webp",
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

      <div className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".swiper-button-prev-meet",
          nextEl: ".swiper-button-next-meet",
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
          <div
            className={
              "max-w-[274px] mx-auto border border-black p-3 pt-[10px] space-y-[14px] " +
              (id % 2 !== 0 ? "bg-[#FFE87E]" : "bg-white")
            }
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

            <h3 className="text-center text-[16px] font-[600] leading-[21px]">
              {card?.title}
            </h3>

            <p className="text-[15px] leading-[20px] text-center">{card?.body}</p>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>

      <button className="swiper-button-prev-meet z-[80] rotate-[180deg] !w-[30px] !h-[30px] text-white rounded-full absolute left-2 top-1/2 transform bg-[#fff] -translate-y-1/2">
       <img src="assets/mobile1/whatMakes/arrow.png" className="h-[30px] w-[30px]" alt="" />
      </button>
      <button className="swiper-button-next-meet z-[80] !w-[30px] !h-[30px]  text-white rounded-full absolute right-2 top-1/2 transform bg-[#fff] -translate-y-1/2">
      <img src="assets/mobile1/whatMakes/arrow.png" className="h-[30px] w-[30px]" alt="" />
      </button>
    </div>
    </div>
  );
}

export default MeetFew;
