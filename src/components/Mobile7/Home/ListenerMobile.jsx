import React from "react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ListenerMobile() {
  const cards = [
    {
      img: "/desktop3/listener/tick-circle.webp",
      title: "Life Change, But So Do the Challenges We Face",
      description:
        "As we grow older, feelings of isolation and stress can creep in. Nearly 2 in 3 seniors facing mental health challenges do not receive the care they need. Why?",
      body: "Stigma and Labels: You want support, not a diagnosis.",
      description2:
        "But support doesn’t have to feel this way. We offer on-demand, judgment-free conversations with compassionate Listeners who are here to help—anytime, anywhere.",
    },
    {
      img: "/desktop3/your-path/socialPressures.png",
      title: "Life Change, But So Do the Challenges We Face",
      description:
        "As we grow older, feelings of isolation and stress can creep in. Nearly 2 in 3 seniors facing mental health challenges do not receive the care they need. Why?",
      body: "Cost Concerns: Therapy can feel out of reach. ",
      description2:
        "But support doesn’t have to feel this way. We offer on-demand, judgment-free conversations with compassionate Listeners who are here to help—anytime, anywhere.",
    },
    {
      img: "/desktop3/your-path/digitalOverload.png",
      title: "Life Change, But So Do the Challenges We Face",
      description:
        "As we grow older, feelings of isolation and stress can creep in. Nearly 2 in 3 seniors facing mental health challenges do not receive the care they need. Why?",
      body: "Intimidation: Clinical environments can feel cold and unwelcoming.",
      description2:
        "But support doesn’t have to feel this way. We offer on-demand, judgment-free conversations with compassionate Listeners who are here to help—anytime, anywhere.",
    },
    {
      img: "/desktop3/your-path/relationshipChallenges.png",
      title: "Life Change, But So Do the Challenges We Face",
      description:
        "As we grow older, feelings of isolation and stress can creep in. Nearly 2 in 3 seniors facing mental health challenges do not receive the care they need. Why?",
      body: "Rigidity: Appointments and formal processes don’t always fit your needs or schedule.",
      description2:
        "But support doesn’t have to feel this way. We offer on-demand, judgment-free conversations with compassionate Listeners who are here to help—anytime, anywhere.",
    },
  ];

  return (
    <div className="listenerMobile8 min-h-[400px] py-[50px] px-1 space-y-4">
      <div className="space-y-5">
        <Carousel className="Listener">
          <CarouselContent>
            {cards?.map((card, id) => {
              const [boldText, normalText] = card.body.split(":");

              return (
                <CarouselItem key={id} className="w-full basis-1/1">
                  <div className="max-w-[350px] mx-auto bg-white/50 backdrop-blur-lg py-5 px-[16px] rounded-xl space-y-[30px]">
                    <div className="space-y-[18px] ">
                      <h3 className="pr-6 leading-normal flex items-center text-black text-[38px] w-[330px] font-[400] font-miniature">
                        {card.title}
                      </h3>
                      <p className="w-[318px] text-[15px] leading-[26px] font-[400] relative z-20">
                        {card.description}
                      </p>
                      <div className="flex space-x-2">
                        <img
                          src="/desktop3/listener/tick-circle.webp"
                          alt="Icon"
                          className="mr-1 mt-1  w-[20px] h-[21px] relative z-20"
                        />
                        <p className="text-[15px] flex  flex-col leading-[22px]">
                          <span className="relative z-20 font-bold">
                            {boldText}:
                          </span>
                          <span className="relative z-20">{normalText}</span>
                        </p>
                      </div>
                      <p className="w-[318px] text-[15px] leading-[26px] font-[400] relative z-20">
                        {card.description2}
                      </p>
                    </div>
                    <div>
                      <a href="https://innovacare.tech/listenerhub/signup">
                        <Button className="bg-[#5200FF]   rounded-full text-[15px] text-left font-[500] leading-[20px] py-5 ">
                          Find Your Listener
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="20"
                            viewBox="0 0 21 20"
                            fill="none"
                            className="inline-block ml-2"
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
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white border border-black disabled:hidden top-80" />
          <CarouselNext className="right-0 bg-white border border-black disabled:hidden top-80" />
        </Carousel>
      </div>
    </div>
  );
}
