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
      img: "/mobile5/your-path/path-to-support-1.webp",
      title: "Emotional Strain",
      body: "Balancing responsibilities, work, and personal challenges can feel relentless, leaving little time for self-care.",
    },
    {
      img: "/mobile5/your-path/path-to-support-2.webp",
      title: "Burnout Risk",
      body: "Without support, daily stress can build into exhaustion, anxiety, and emotional fatigue.",
    },
    {
      img: "/mobile5/your-path/path-to-support-3.webp",
      title: "Stigma and Barriers",
      body: "Seeking help can feel overwhelming, and traditional mental health care may seem inaccessible or costly.",
    },
    {
      img: "/mobile5/your-path/path-to-support-4.webp",
      title: "You’re Not Alone",
      body: "Many middle-aged individuals face similar challenges but struggle to find a supportive space to share their experiences.",
    },
  ];
  return (
    <div
      className="bg-white py-[30px] px-5 space-y-4"
      id="mobile-path-to-support"
    >
      <p className="font-miniature text-center text-[38px]">
        Supporting Everyone Except Yourself?
      </p>
      <p className="w-[350px] text-center text-black font-inter text-[15px] font-normal leading-[26px]">
        You spend so much time supporting others, but who is supporting you?
      </p>

      {/* <p className="font-miniature font-bold text-center text-[30px] w-[354px]">
      Some Reasons for Mental Health Challenges:
      </p> */}

      <div className="space-y-5">
        <Carousel className="">
          <CarouselContent>
            {cards?.map((card, id) => (
              <CarouselItem key={id} className="w-full basis-1/1">
                <div className="  mx-auto border border-black bg-[#D43525] py-4 px-2 rounded-[12px] space-y-[20px] w-[278px] h-[359px]">
                  <div className="px-2">
                    <img
                      src={card?.img}
                      alt="Icon"
                      className="rounded-[8px]  border border-black bg-black mx-auto w-[246px] h-[148px]"
                    />
                  </div>

                  <div className="space-y-[14px] ">
                    <h3 className="   flex items-center leading-normal font-[400] justify-center text-center text-white text-[28px] font-miniature    ">
                      {card?.title}
                    </h3>

                    <p className="text-[15px] leading-[20px] font-[400] text-white text-center px-0">
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
        <a href="https://signup.feelattune.com/sign-up?_gl=1*46lrc9*_gcl_au*NDQyODE2NjgyLjE3NDY0NTQ3Njc.*_ga*MjEyMDE1OTQyMi4xNzM4NTIxNjMz*_ga_2MGYLNPB9W*czE3NDkwMDA4MzYkbzEwNiRnMCR0MTc0OTAwMDgzNiRqNjAkbDAkaDA">
          <Button className="bg-[#5200FF] rounded-full text-[15px] ml-3">
            {" "}
            Start Your Journey Today
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
//                             listStyleImage: "url(/mobile3/yourPath/list-disc.svg)"
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
