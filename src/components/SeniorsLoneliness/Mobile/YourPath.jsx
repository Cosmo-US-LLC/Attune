import React from "react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import clsx from 'clsx'
// import Image from 'next/image'

function YourPath() {
  const cards = [
    {
      img: "assets/mobile7/your-path/path-to-support-1.webp",
      title: "Life Transitions:",
      body: "Retirement, loss of loved ones, and reduced social opportunities can leave seniors feeling disconnected.",
    },
    {
      img: "assets/mobile7/your-path/path-to-support-2.webp",
      title: "Physical Barriers:",
      body: "Health conditions or mobility challenges often limit social interactions.",
    },
    {
      img: "assets/mobile7/your-path/path-to-support-3.webp",
      title: "Technology Gaps:",
      body: "A lack of familiarity with digital tools can make staying connected difficult.",
    },
    {
      img: "assets/mobile7/your-path/path-to-support-4.webp",
      title: "Emotional Impact:",
      body: "Loneliness often leads to feelings of sadness, anxiety, and low self-worth.",
    },
  ];
  return (
    <div
      className="bg-white py-[30px] px-5 space-y-4"
      id="mobile-path-to-support"
    >
      <p className="font-miniature text-center text-[38px] font-[400]">
        Understanding the Roots of Loneliness in Seniors
      </p>
      <p className="w-[350px] text-center text-black font-inter text-[15px] font-[400] leading-[26px]">
        Exploring the emotional, social, and physical factors contributing to
        isolation.
      </p>

      <p className="font-miniature font-[700] text-center text-[30px] w-[354px]">
      Common Barriers to Mental Well-being:
      </p>

      <div className="space-y-5">
        <Carousel className="">
          <CarouselContent>
            {cards?.map((card, id) => (
              <CarouselItem key={id} className="w-full basis-1/1">
                <div className="  mx-auto border border-black bg-[#6FE0D1] py-4 px-2 rounded-[30px] space-y-[20px] w-[284px] h-[390px]">
                  <div className="px-2">
                    <img
                      src={card?.img}
                      alt="Icon"
                      className="rounded-[30px] border border-black bg-black mx-auto w-[252px] h-[215px]"
                    />
                  </div>

                  <div className="space-y-[8px]">
                    <h3 className="   flex   leading-normal font-[700]   text-left text-black text-[28px] font-miniature  px-2">
                      {card?.title}
                    </h3>

                    <p className="text-[15px] leading-[20px] font-[400] text-black text-left px-2">
                      {card?.body}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white border border-black -left-2 disabled:border-neutral-500" />
          <CarouselNext className="bg-white border border-black -right-2 disabled:border-neutral-500" />
        </Carousel>
      </div>

      <div className="flex items-center justify-center">
        <a href="https://innovacare.tech/listenerhub/signup">
          <Button className="bg-[#5200FF] rounded-full text-[15px] ml-3">
            {" "}
            Start Your Journey To Connection Today
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
        </a>
      </div>
    </div>
  );
}
export default YourPath;
