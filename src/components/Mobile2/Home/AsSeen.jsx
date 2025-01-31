// import Image from 'next/image'
import React from "react";

function AsSeen() {
  return (
    <div className="bg-[#F4EFEA] py-6   space-y-[9px]">
      <p className="font-miniature text-[38px] font-[400] text-center">
        Proudly Supporting
      </p>

      <div className="w-[100%] py-3 overflow-hidden bg-white">
        <div className="flex gap-[27px] animate-marquee whitespace-nowrap">
          <img
            src="/mobile2/asSeen/logo1.webp"
            alt="Time"
            className="object-contain w-[68px] h-[28px]"
          />
          <img
            src="/mobile2/asSeen/logo2.webp"
            alt="Time"
            className="object-contain w-[66px] h-[26px]"
          />
          <img
            src="/mobile2/asSeen/logo3.webp"
            alt="Time"
            className="object-contain w-[59px] h-[30px]"
          />

          <img
            src="/mobile2/asSeen/logo4.webp"
            alt="Time"
            className="object-contain w-[78px] h-[30px]"
          />
          <img
            src="/mobile2/asSeen/logo5.webp"
            alt="Time"
            className="object-contain w-[73px] h-[30px]"
          />
          <img
            src="/mobile2/asSeen/logo6.webp"
            alt="Time"
            className="object-contain w-[73px] h-[30px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeen;
