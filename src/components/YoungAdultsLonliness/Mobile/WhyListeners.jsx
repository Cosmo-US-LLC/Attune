import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div className="relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter grayscale -z-10"
        style={{ backgroundImage: "url(assets/mobile2/whyListen/whylistenBg.webp)" }}
      ></div>
      <div className="py-[30px] flex flex-col justify-between items-center  w-full h-full left-0 top-0 z-10">
        <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
          <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
            <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ml-3 ">
              54%
            </h3>
            <p className="text-[12px] text-black text-center w-[124px]">
              of individuals report feeling socially isolated.
            </p>
          </div>
          <div className="bg-[#6FE0D1]  w-[162px] h-[162px] mt-[74px] rounded-full flex flex-col justify-center items-center">
            <p className="text-[8.669px] text-[#000] text-center w-[137px] mt-3">
              A study from Harvard University found that{" "}
              <span className="text-[13px] font-semibold">61% </span> of young
              adults feel “serious loneliness.”
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-[38px] text-center font-miniature">
            loneliness is <br /> more common <br /> than you think
          </h1>
          <div className="flex justify-center">
            <a href="https://innovacare.tech/listenerhub/signup">
              <Button className="bg-[#FF6F61] rounded-full font-[500] text-[15px]">
                Connect Now
              </Button>
            </a>
          </div>
        </div>
        {/* <div className=""> */}
        <div className="bg-[#FFA8ED] w-[162px] h-[162px] rounded-full flex gap-4 flex-col justify-center items-center mb-8 mt-12">
          <p className="text-[7.855px] leading-[9.818px] font-normal text-center text-black w-[124px]">
            According to the Centers for Disease Control and Prevention (CDC),
            about
          </p>

          <h3 className="w-[153px] text-[27px] leading-[7.855px] font-medium text-center text-black tracking-[-1.62px]">
            1 in 3 Adults
          </h3>

          <p className="text-[7.855px] leading-[9.818px] font-normal text-center text-black w-[124px]">
            feel lonely, a feeling often tied to social isolation.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default WhyListeners;
