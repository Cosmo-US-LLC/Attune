import React from "react";
import { Button } from "@/components/ui/button";

function WhyListeners() {
  return (
    <div className="h-[750px] relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter grayscale"
        style={{
          backgroundImage: "url(/mobile7/whyListen/whylistenBg.webp)",
        }}
      ></div>
      <div className="py-[50px] flex flex-col justify-between items-center absolute w-full h-full left-0 top-0 z-10">
        <div className="">
          <div className="bg-[#FFA8ED] w-[162px] h-[162px] rounded-full flex flex-col  gap-1 justify-center items-center ">
            <h3 className="text-[21.676px] text-black leading-[24px] font-[500] text-center flex flex-col gap-1 ">
              <p>2 in 3</p>
              <p>Seniors</p>
            </h3>
            <p className="text-[10px] text-black text-center w-[144px]">
              never seek mental health care due to stigma, cost, or
              accessibility.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[38px] font-[400] leading-normal text-center font-miniature">
            Statistics That <br /> Matter
          </h1>
          <a href="https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true">
            <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] mt-4">
              <button className="text-white font-[500] text-[15px]">
                Connect Now
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                className=""
              >
                <path
                  d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z"
                  fill="white"
                />
                <path
                  d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z"
                  fill="white"
                />
                <path
                  d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z"
                  fill="white"
                />
              </svg>
            </div>
          </a>
        </div>
        <div className="flex justify-between w-full min-h-[230px] pl-[17px] pr-2">
          <div className="bg-[#E5FF7D] w-[162px] h-[162px] rounded-full flex flex-col justify-center gap-1 items-center">
            <h3 className="flex flex-col justify-center self-stretch text-center text-black text-[28px] leading-[2.86px] font-medium tracking-[-1.68px] h-[29.474px]">
              20%
            </h3>

            <p className="text-[10px] text-black text-center w-[144px]">
              of older adults Experience mental health challenges, including
              depression and anxiety.
            </p>
          </div>
          <div className="bg-[#6FE0D1] w-[162px] h-[162px] mt-[74px] rounded-full flex gap-4 flex-col justify-center items-center">
            <h3 className="text-[34.676px] tracking-[-2px] text-black leading-[8px] font-[500] text-center   ">
              30%
            </h3>
            <p className="text-[10px] text-black text-center leading-[13px] w-[144px] ">
              of seniors <br /> report feelings of chronic loneliness and
              isolation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyListeners;
