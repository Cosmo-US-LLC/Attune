import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Testimonials() {
  const testimonials = [
    {
      bg: 'bg-[#E5FF7D]',
      img: "/mobile/testimonials/test1.webp",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: 'bg-[#F097DD]',
      img: "/mobile/testimonials/test2.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: 'bg-[#FF6F61]',
      img: "/mobile/testimonials/test3.webp",
      title: "John, 72",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },
  ];

  return (
    <div className="bg-[#F4EFEA] py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">Testimonials</h1>

      <Carousel className="">
        <CarouselContent>
          {testimonials?.map((test, id) => (
            <CarouselItem key={id} className="basis-1/1 w-full">
                <div className={"border border-black rounded-[12px] p-5 " + test?.bg}>
                    <img src={test?.img} alt="person" className="w-[60px] h-[60px] object-contain rounded-full mb-[28px]" />

                    <div className="space-y-[10px] pb-5">
                      <h3 className="font-miniature text-[32px]">{test?.title}</h3>
                      <p className="text-[15px] leading-[20px]">{test?.body}</p>
                    </div>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:hidden bg-white -left-[15px]" />
        <CarouselNext className="border border-black disabled:hidden bg-white -right-[15px]" />
      </Carousel>
    </div>
  );
}

export default Testimonials;
