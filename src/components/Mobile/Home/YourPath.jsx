import React from "react";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import clsx from 'clsx'
// import Image from 'next/image'

function YourPath() {
  const cards = [
    {
      img: "/mobile/yourPath/path (1).png",
      title: "Stigma and <br/> Judgment: ",
      subtitle: "Fear of being labeled or misunderstood.",
    },
    {
      img: "/mobile/yourPath/path (2).png",
      title: "Limited <br/> Resources:",
      subtitle: "Lack of affordable or accessible mental health support.",
    },
    {
      img: "/mobile/yourPath/path (3).png",
      title: "Pressure to <br/> Succeed:",
      subtitle: "Balancing academic, career, and personal expectations.",
    },
    {
      img: "/desktop/your-path/path (4).png",
      title: "Cultural and Family Expectations",
      subtitle: "Pressure to conform to societal norms.",
    },
  ];
  return (
    <div className="bg-white py-[30px] px-5 space-y-4">
      <p className="font-miniature text-center text-[38px]">
        Why Does Mental Health Matter for Young Adults?
      </p>
      <p className="font-semibold text-center leading-[173.333%] text-[15px]">
        Mental health challenges among young adults are more common than you
        think. As you navigate through major life transitions—like starting
        college, entering the workforce, or building new relationships—it’s easy
        to feel overwhelmed and isolated. The pressure to balance expectations,
        independence, and social belonging can sometimes feel insurmountable.
        Here are some common reasons why young adults often face mental health
        challenges:
      </p>
      <p className="font-miniature font-bold text-center text-[32px]">
        Some Reasons for Mental Health Challenges:
      </p>

      <div className="space-y-5">
        <div className="w-full max-w-2xl mx-auto relative">
          <button className="custom-prev absolute left-1 rotate-[180deg] top-[50%] -translate-y-1/2 z-10  rounded-full">
            <img className="w-[28px] h-[28px]" src={"/mobile/yourPath/arrow-right (1).png"} alt="" />
          </button>
          <button className="custom-next absolute right-1 top-[50%] -translate-y-1/2 z-10  rounded-full">
          <img className="w-[28px] h-[28px]" src={"/mobile/yourPath/arrow-right (1).png"} alt="" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            className="mySwiper !min-h-[460.242px]"
          >
            {cards?.map((card, id) => (
              <SwiperSlide key={id} className="basis-1/1 w-full">
                <div className="max-w-[294px] min-h-[426.242px] mx-auto border border-black bg-[#95ADF0] pt-5 px-4 rounded-[20px] space-y-[20px]">
                  <img
                    src={card?.img}
                    alt="Icon"
                    className="rounded-[30px]  border border-black  w-[249px] h-[200.734px]"
                  />

                  <div className="space-y-[14px]">
                    <h3
                      className="flex items-center justify-center text-center text-white text-[30px] font-miniature leading-[130%]"
                      dangerouslySetInnerHTML={{ __html: card?.title }}
                    ></h3>
                    <p className="text-[18px] text-center text-white font-[500] leading-[144.444%]">
                      {card?.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

     <div className="flex justify-center">
     <Button className="bg-[#5200FF] rounded-full text-[15px]">
        {" "}
        Break the Barriers. Find Support Now
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
    </div>
  );
}

// function SupportCards({bg, img, title, points}) {
//     return (
//     <div className={"p-[14px] rounded-3xl space-y-6" + ` ${bg}`}>
//         <img src={img} alt="Seeking connection 1" className='w-[322px] h-[151px] object-contain' />

//         <div className='space-y-[14px]'>
//             <h2 className='text-white font-miniature text-[26px]'>
//                 {title}
//             </h2>

//             <ul className='list-disc text-[15px] leading-[22px] pl-[19px] space-y-[22px] text-white'>
//                 {points?.map((point, id) => (
//                     <li key={id} className='capitalize'
//                         style={{
//                             listStyleImage: "url(/mobile/yourPath/list-disc.svg)"
//                         }}
//                     >
//                         <strong>{point?.title}:</strong> {point?.body}
//                     </li>
//                 ))}
//             </ul>
//         </div>

//         <div className='flex justify-center'>
//             <Button className="bg-[#5200FF] rounded-full text-[15px]">Get Started</Button>
//         </div>
//     </div>
//     )
// }

export default YourPath;
