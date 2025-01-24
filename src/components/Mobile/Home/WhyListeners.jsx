import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div
      className="h-[650px] relative"
    >
        <div className="bg-cover bg-center filter grayscale absolute w-full h-full left-0 top-0"
        style={{ backgroundImage: "url(/mobile/whyListen/whylistenBg.webp)" }}></div>
        <div className="py-[30px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
            <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
                <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
                    54%
                </h3>
                <p className="text-[12px] text-black text-center w-[124px]">
                    of individuals report feeling socially isolated.
                </p>
                </div>
                <div className="bg-[#FF6F61]  w-[162px] h-[162px] mt-[74px] rounded-full flex flex-col justify-center items-center">
                
                <p className="text-[12px] text-white text-center w-[137px] mt-3">
                A study from Harvard University found that <span className="text-[16px] font-semibold">61% </span> of young adults
                feel “serious loneliness.”
                </p>
                </div>
            </div>

            <div className="space-y-2">
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
            <div className="mr-36 mb-8">
            <div className="bg-[#F097DD] w-[216px] h-[216px] rounded-full flex flex-col justify-center items-center ">
            <p className="text-[12px]  text-center w-[168px]">
            According to the Centers for Disease Control and Prevention (CDC), about
                </p>
                <h3 className="text-[34.676px]  leading-[34px] font-[500] text-center ">
                1 in 3 Adults
                </h3>
                <p className="text-[12px]  text-center w-[168px]">
                feel lonely, a feeling often tied to social isolation.
                </p>
            </div>
            </div>
        </div>
    </div>
  );
}

export default WhyListeners;
