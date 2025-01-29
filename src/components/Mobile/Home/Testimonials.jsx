import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonials() {
  const testimonials = [
    {
      bg: 'bg-[#E5FF7D]',
      img: "/desktop/testimonials/test-1.png",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: 'bg-[#FF6F61]',
      img: "/mobile/testimonials/emily.png",
      title: "Emily Green, 21",
      body: '"I was feeling so lost after moving to a new city for college. My Listener helped me feel less alone and gave me the confidence to meet new people."',
    },
    {
      bg: 'bg-[#6FE0D1]',
      img: "/mobile/testimonials/david.png",
      title: "David Lee, 31",
      body: 'I’ve always felt like I didn’t have anyone to talk to, but since joining, I’ve felt so much more connected. The Listener I spoke with helped me open up about my stress and gave me the comfort I didn’t know I needed.',
    },
  ];

  return (
    <div className="bg-white py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">Connection That Makes an Impact</h1>
      <div className="space-y-2">
      <img src="/desktop/testimonials/progress95.png" alt="pg95" className="w-full"/>
      <p className="text-[15px] pl-1">
      <span className="font-semibold">95%</span> of young adults report feeling emotionally supported after a session.
        </p>
        </div>

        <div className="space-y-2">
      <img src="/desktop/testimonials/progress75.png" alt="pg75" className="w-full"/>
      <p className="text-[15px] pl-1">
      <span className="font-semibold">75%</span> of young adults report feeling emotionally supported after a session.
        </p>
        </div>
      <Carousel className="">
      <CarouselContent>
  {testimonials?.map((test, id) => (
    <CarouselItem key={id} className="basis-1/1 w-full">
      <div
        className={`border border-black rounded-[12px] min-h-[290px] pt-5 px-5 ${test?.bg}`}
      >
        <img
          src={test?.img}
          alt="person"
          className="w-[60px] h-[60px] object-contain rounded-full mb-[28px]"
        />

        <div
          className={`space-y-[10px] pb-5 ${
            test.title === "Emily Green, 21" ? "text-white" : "text-black"
          }`}
        >
          <h3 className="font-miniature text-[32px]">{test?.title}</h3>
          <p className="text-[15px] leading-[20px]">{test?.body}</p>
        </div>
      </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
    </div>
  );
}

export default Testimonials;
