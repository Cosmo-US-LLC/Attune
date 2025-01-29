import React from "react";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ListenerMobile() {
  const cards = [
    {
      img: "/desktop/listener/tick-circle.webp",
      title: "How a Listener Can Helpe",
      body: "<strong>Reframing Experiences:</strong> Gain a fresh perspective and clarity on your challenges.  ",
    },
    {
      img: "/desktop/your-path/socialPressures.png",
      title: "How a Listener Can Help",
      body: "<strong>Setting and Achieving Goals:</strong> Boost your confidence, manage transitions, and achieve personal milestones.  ",
    },
    {
      img: "/desktop/your-path/digitalOverload.png",
      title: "How a Listener Can Help",
      body: "<strong>Emotional well-being:</strong> Explore strategies to enhance your motivation and overall well-being. ",
    },
    {
      img: "/desktop/your-path/relationshipChallenges.png",
      title: "How a Listener Can Help",
      body: "<strong>Building Resilience:</strong> Strengthen your ability to navigate life’s hurdles and move toward your desired outcomes.. ",
    }
  ];
  return (
    <>
      <div className="listenerMobile pt-[60px] pb-[40px] px-1 space-y-4">
        <div className="space-y-5 ">
          <div className="w-full max-w-2xl mx-auto relative">
            <button className="custom-prev-how absolute left-[4%] rotate-[180deg] top-[48%] -translate-y-1/2 z-10  rounded-full">
              <img
                className="w-[28px] h-[28px] bg-[#fff] rounded-[100px]"
                src={"/mobile/yourPath/arrow-right (1).png"}
                alt=""
              />
            </button>
            <button className="custom-next-how absolute right-[4%] top-[48%] -translate-y-1/2 z-10  rounded-full">
              <img
                className="w-[28px] h-[28px] bg-[#fff] rounded-[100px]"
                src={"/mobile/yourPath/arrow-right (1).png"}
                alt=""
              />
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={{
                prevEl: ".custom-prev-how",
                nextEl: ".custom-next-how",
              }}
              className="mySwiper how !min-h-[330px]"
            >
              {cards?.map((card, id) => (
                <SwiperSlide key={id} className="basis-1/1 w-full">
                  <div className="max-w-[350px] mx-auto  bg-white/50 backdrop-blur-sm py-5 px-[16px] rounded-xl space-y-[20px]">
                    <div className="space-y-[14px]">
                      <h3 className="pr-6 leading-normal flex items-center text-black text-[38px] font-miniature">
                      How a Listener Can Help
                      </h3>
                      <div className="flex items-center space-x-1">
                      <img
                          src="/desktop/listener/tick-circle.webp"
                          alt="Icon"
                          className=" mr-1 mt-0.5 w-[20px] h-[21px]"
                        />
                      <p className=" text-[15px] !block flex flex-row font-[400] leading-[22px]"  dangerouslySetInnerHTML={{ __html: card?.body}}>
                      </p>
                      </div>
                    </div>
                    <Button className="bg-[#5200FF] rounded-full text-[15px]">
                      Find Your Listener
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        className=""
                      >
                        <path
                          d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z"
                          fill="white"
                        />
                        <path
                          d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z"
                          fill="white"
                        />
                        <path
                          d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
