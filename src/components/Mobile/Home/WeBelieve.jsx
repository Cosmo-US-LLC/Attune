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
      img: "/mobile/weBelieve/b1.png",
    },
    {
      img: "/mobile/weBelieve/b2.png",
    },
    {
      img: "/mobile/weBelieve/b3.png",
    },
    {
      img: "/mobile/weBelieve/b4.png",
    },
    {
      img: "/mobile/weBelieve/b5.png",
    },
    {
      img: "/mobile/weBelieve/b6.png",
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
