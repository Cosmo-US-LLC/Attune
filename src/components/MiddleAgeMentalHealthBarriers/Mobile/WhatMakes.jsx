import React from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"  
// import Image from "next/image";

function WhatMakes() {
    const cards = [
        {
            img: "assets/mobile3/whatMakes/card1.svg",
            title: "Compassionate Listeners",
            body: "Our trained, non-judgmental Listeners provide a safe space for you to share your thoughts, feelings, and experiences without fear of judgment. You’ll always feel heard and supported."
        },
        {
            img: "assets/mobile3/whatMakes/card2.svg",
            title: "Accessible Anytime, Anywhere",
            body: "Whether you're at home or on the go, you can connect with a Listener from anywhere, at any time. Our platform is available to support you whenever you need it."
        },
        {
            img: "assets/mobile3/whatMakes/card3.svg",
            title: "Evidence-Based Approach",
            body: "Our services are grounded in real, measurable outcomes. We focus on providing practical, effective support for a range of emotional and mental health needs, backed by data-driven results."
        },
        {
            img: "assets/mobile3/whatMakes/card4.svg",
            title: "No Stigma, Just Support",
            body: "We are committed to breaking down the barriers of traditional mental health care. There’s no need for clinical intervention—just real, meaningful conversations when you need them most."
        },
        {
            img: "assets/mobile3/whatMakes/card5.svg",
            title: "Privacy and Confidentiality",
            body: "Your well-being and privacy are our top priority. All conversations are confidential, ensuring that you can speak freely and openly without concerns."
        },
    ]
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

      <Carousel className="">
        <CarouselContent>
            {cards?.map((card, id) => (
                <CarouselItem key={id} className="basis-1/1 w-full">
                    <div className="max-w-[274px] mx-auto border border-black bg-white py-5 px-4 rounded-[20px] space-y-[20px]">
                        <img src={card?.img} alt="Icon" className="object-contain w-[44px] h-[44px]" />

                        <div className="space-y-[14px]">
                            <h3 className="h-[72px] flex items-center text-[24px] font-miniature">
                            {card?.title}
                            </h3>

                            <p className="text-[15px] leading-[20px]">
                            {card?.body}
                            </p>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:border-neutral-500 bg-white left-0" />
        <CarouselNext className="border border-black disabled:border-neutral-500 bg-white right-0" />
      </Carousel>

      <p className="text-[15px] leading-[20px]">
      Choose Attune for an approachable, supportive, and stigma-free experience in managing your emotional health and well-being.
      </p>
            
        <div className="flex justify-center">
        <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px]">Connect Now</Button>
        </div>
    </div>
  );
}

export default WhatMakes;
