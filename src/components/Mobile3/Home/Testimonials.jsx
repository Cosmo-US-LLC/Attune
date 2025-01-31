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
      bg: "bg-[#E5FF7D]",
      img: "/mobile1/testimonials/test1.webp",
      title: "Jake, 24",
      body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
    },
    {
      bg: "bg-[#F097DD]",
      img: "/mobile1/testimonials/test2.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/mobile1/testimonials/test3.webp",
      textColor: "text-white",
      title: "John, 72",
      body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
    },
  ];

  return (
    <div className="bg-white py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">Connection That Makes an Impact</h1>
      <div className="space-y-2">
      <img src="/desktop3/testimonials/progress95.png" alt="pg95" className="w-full"/>
      <p className="text-[15px] pl-1">
      <span className="font-semibold">95%</span> of young adults report feeling emotionally supported after a session.
        </p>
        </div>

        <div className="space-y-2">
      <img src="/desktop3/testimonials/progress75.png" alt="pg75" className="w-full"/>
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
        {/* Apply conditional margin-bottom for the image */}
        <img
          src={test?.img}
          alt="person"
          className={`w-[60px] h-[60px] object-contain rounded-full ${
            test.title === "John, 72" ? "mb-[6px]" : "mb-[28px]"
          }`}
        />

        {/* Apply conditions for spacing */}
        <div
          className={`pb-5 ${
            test.title === "John, 72"
              ? "space-y-[4px]" /* Reduced space */
              : "space-y-[10px]"
          } ${
            test.title === "Jessica, 45" ? "text-white" : "text-black"
          }`}
        >
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
