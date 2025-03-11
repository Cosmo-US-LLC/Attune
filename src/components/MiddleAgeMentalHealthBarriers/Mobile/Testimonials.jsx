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
      img: "/desktop4/testimonials/test-1.webp",
      title: "Jessica, 45",
      body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
    },
    {
      bg: "bg-[#FF6F61]",
      img: "/desktop4/testimonials/test-3.webp",
      title: "Michael, 52",
      body: '"Balancing work and personal life became too much. My Listener helped me regain confidence and manage my emotions effectively."',
    },
    {
      bg: "bg-[#6FE0D1]",
      img: "/desktop4/testimonials/test-2.webp",
      textColor: "text-white",
      title: "Sophia, 38",
      body: '"I didn’t realize how much I needed someone to just listen. After a few sessions, I felt a renewed sense of purpose and calm."',
    },
  ];

  return (
    <div className="bg-white py-[30px] px-5 space-y-6">
      <h1 className="font-miniature text-[38px]">
      Connection That <br/> Makes an Impact
      </h1>
      <div className="space-y-2">
        <img
          src="/desktop4/testimonials/red-bar-1.svg"
          alt="pg95"
          className="w-full"
        />
        <p className="text-[15px] pl-1">
          <span className="font-semibold">95%</span>of professionals report feeling more supported after a Listener session.
        </p>
      </div>

      <div className="space-y-2">
        <img
          src="/desktop4/testimonials/red-bar-2.svg"
          alt="pg75"
          className="w-full"
        />
        <p className="text-[15px] pl-1">
          <span className="font-semibold">80%</span> feel more equipped to handle work-related stress after two sessions.
        </p>
      </div>
      <Carousel className="">
        <CarouselContent>
          {testimonials?.map((test, id) => (
            <CarouselItem key={id} className="w-full basis-1/1">
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
                    test.title === "Michael, 52" ? "text-white" : "text-black"
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
