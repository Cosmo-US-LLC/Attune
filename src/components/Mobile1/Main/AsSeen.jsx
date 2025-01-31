// import Image from 'next/image'
import React from "react";
import { Marquee } from "../../ui/marquee";

function AsSeen() {
  return (
    <div className="bg-[#F4EFEA] py-6 overflow-hidden space-y-[9px]">
      <p className="font-miniature text-[38px] font-[400] text-center">
        Proudly Supporting
      </p>

      <div className="max-w-[100vw] py-3 px-0 bg-white overflow-hidden">
        {/* <Marquee pauseOnHover className="[--duration:4s] border border-red-500 animate-marquee flex justify-start repeat-infinite px-0"> */}
        {/* <div className="flex justify-start px-0"> */}
        <div className="max-w-[200vw] [--duration:4s] border border-red-500 overflow-visible animate-marquee flex justify-start repeat-infinite px-0">
          
          <img
            src="/desktop1/proudly/logo1.webp"
            alt="Time"
            className="object-contain w-[68px] h-[28px]"
          />
          <img
            src="/desktop1/proudly/logo2.webp"
            alt="Time"
            className="object-contain w-[66px] h-[26px]"
          />
          <img
            src="/desktop1/proudly/logo3.webp"
            alt="Time"
            className="object-contain w-[59px] h-[30px]"
          />
          <img
            src="/desktop1/proudly/logo4.webp"
            alt="Time"
            className="object-contain w-[78px] h-[30px]"
          />
          <img
            src="/desktop1/proudly/logo5.webp"
            alt="Time"
            className="object-contain w-[73px] h-[30px]"
          />
           <img
            src="/desktop1/proudly/logo6.webp"
            alt="Time"
            className="object-contain w-[73px] h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeen;
