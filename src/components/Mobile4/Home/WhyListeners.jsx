import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div className="h-[850px] relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter grayscale"
        style={{
          backgroundImage:
            "url(/desktop4/why-listeners-matter/whylistenBg.webp)",
        }}
      ></div>
      <div className="py-[30px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
        <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
          <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
            <h3 className="flex flex-col justify-center self-stretch text-center text-black text-[28px] leading-[2.86px] font-medium tracking-[-1.68px] h-[29.474px]">
              70%
            </h3>

            <p className="text-[12px] text-black text-center w-[144px]">
              of middle-aged <br /> individuals <br /> experience significant
              stress or burnout.
            </p>
          </div>
          <div className="bg-[#FFA8ED] w-[162px] h-[162px] mt-[74px] rounded-full flex gap-4 flex-col justify-center items-center">
            <h3 className="text-[34.676px] tracking-[-2px] text-black leading-[8px] font-[500] text-center   ">
              1 in 2
            </h3>
            <p className="text-[12px] text-black text-center leading-[13px] w-[144px] ">
              middle-aged individuals feel overwhelmed balancing work, personal
              responsibilities, and well-being.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-[38px] text-center font-miniature">
            Balancing <br />
            Care and Self
          </h1>
          <div className="flex justify-center">
            <a href="https://innovacare.tech/listenerhub/signup">
              <Button className="bg-[#ff6f61] rounded-full font-[500] text-[15px]">
                Connect Now
              </Button>
            </a>
          </div>
        </div>
        <div className="mb-8 ">
          <div className="bg-[#6FE0D1] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center ">
            <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
              40%
            </h3>
            <p className="text-[12px] text-black text-center w-[144px]">
              of people prefer non-clinical emotional support to supplement
              therapy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyListeners;
