import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div className="h-[800px] relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter grayscale"
        style={{ backgroundImage: "url(/mobile1/whyListen/whylistenfull.webp)" }}
      ></div>
      <div className="py-[30px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
        <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
          <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center items-center">
            <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ">
              30%
            </h3>
            <p className="text-xs text-black text-center w-[137px]">
              of adults report feelings of chronic loneliness
            </p>
          </div>
          <div className="bg-[#F097DD] w-[162px] h-[162px] mt-[64px] rounded-full flex flex-col justify-center items-center">
            <h3 className="text-[34.676px] text-black leading-[34px] font-[500] text-center ">
              2 in 3
            </h3>
            <p className="text-xs text-black text-center w-[137px]">
              individuals never seek mental health care due to stigma, cost, or
              accessibility
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <h1 className="text-[38px] text-center font-miniature">
            Mental Health <br /> Challenges are <br /> More Common <br /> Than You Think
          </h1>
          <a href="https://signup.feelattune.com/t/jcLDEqP45Aus?Terms_of_Use=https%3A%2F%2Ffeelattune.com%[…]use&TermsofUse=https%3A%2F%2Ffeelattune.com%2Fterms-of-use" className="flex justify-center mx-auto w-fit">
            <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px] hover:bg-purple-800">
              Connect Now
            </Button>
          </a>
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
