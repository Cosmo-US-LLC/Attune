import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div
      className="h-[850px] relative"
    >
        <div className="bg-cover bg-center filter grayscale absolute w-full h-full left-0 top-0"
        style={{ backgroundImage: "url(/mobile/whyListen/whylistenBg.webp)" }}></div>
        <div className="py-[30px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
            <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
                <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
                2.5 million
                </h3>
                <p className="text-[12px] text-black text-center w-[124px]">
                Canadians report not getting adequate mental health care
                </p>
                </div>
                <div className="bg-[#6FE0D1]  w-[162px] h-[162px] mt-[74px] rounded-full flex flex-col justify-center items-center">
                
                <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
                75%
                </h3>
                <p className="text-[12px] text-black text-center w-[124px]">
                of mental health issues begin by age 24
                </p>
                </div>
            </div>

            <div className="space-y-2">
                <h1 className="text-[38px] text-center font-miniature">
                Mental Health <br /> Challenges are <br /> More Common <br /> Than You Think
                </h1>
                <div className="flex justify-center">
                <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px]">
                    Connect Now
                </Button>
                </div>
            </div>
            <div className="mr-36 mb-8">
            <div className="bg-[#FFA8ED] w-[216px] h-[216px] rounded-full flex flex-col justify-center items-center ">
            <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
            1 in 5
                </h3>
                <p className="text-[12px] text-black text-center w-[124px]">
                young adults lives with a mental health condition.
                </p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default WhyListeners;
