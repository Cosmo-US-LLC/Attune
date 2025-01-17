import { Button } from "@/components/ui/button";
import React from "react";

function WhyListeners() {
  return (
    <div
      className="h-[650px] relative"
    >
        <div className="bg-cover bg-center filter grayscale absolute w-full h-full left-0 top-0"
        style={{ backgroundImage: "url(/mobile/whyListen/whylistenBg.png)" }}></div>
        <div className="py-[30px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
            <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
                <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ">
                    30%
                </h3>
                <p className="text-xs text-black text-center w-[137px]">
                    of people experience high levels of stress.
                </p>
                </div>
                <div className="bg-[#F097DD] w-[162px] h-[162px] mt-[64px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ">
                    2 in 3
                </h3>
                <p className="text-xs text-black text-center w-[137px]">
                    of people experience high levels of stress.
                </p>
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-[38px] text-center font-miniature">
                Why Listeners
                <br /> Matter
                </h1>
                <div className="flex justify-center">
                <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px]">
                    Connect Now
                </Button>
                </div>
            </div>

            <div className="bg-[#FF6F61] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[34.676px] text-[#F5F5F5] leading-[34px] font-[500] text-center ">
                47%
                </h3>
                <p className="text-xs text-white text-center w-[137px]">
                of people experience high levels of stress.
                </p>
            </div>
        </div>
    </div>
  );
}

export default WhyListeners;
