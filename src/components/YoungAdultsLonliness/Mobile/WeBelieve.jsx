import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function WeBelieve() {
  const cards = [
    {
      img: "assets/mobile2/weBelieve/b1.webp",
    },
    {
      img: "assets/mobile2/weBelieve/b2.webp",
    },
    {
      img: "assets/mobile2/weBelieve/b3.webp",
    },
    {
      img: "assets/mobile2/weBelieve/b4.webp",
    },
    {
      img: "assets/mobile2/weBelieve/b5.webp",
    },
    {
      img: "assets/mobile2/weBelieve/b6.webp",
    },
  ];

  return (
    <div className="py-[30px] bg-[#F4EFEA]">
      <Carousel className="">
        <CarouselContent>
          {cards?.map((card, id) => (
            <CarouselItem key={id} className="w-full">
              {/* <div className={"max-w-[274px] mx-auto border border-black p-3 pt-[10px] space-y-[14px] " + (id % 2 !== 0 ? "bg-[#FFE87E]" : "bg-white")}
                style={{ borderRadius: "130px 130px 12px 12px" }}
              > */}
              <div className="flex items-center justify-center">
                <img
                  src={card?.img || ""}
                  alt="Icon"
                  className="w-[90%]"
                />
              </div>
              {/* </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border border-black disabled:opacity-0 bg-white left-1" />
        <CarouselNext className="border border-black disabled:opacity-0 bg-white right-1" />
      </Carousel>
    </div>
  );
}

export default WeBelieve;
