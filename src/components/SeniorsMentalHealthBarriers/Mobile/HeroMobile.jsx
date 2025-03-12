// import Image from 'next/image'
import React from "react";
import { Button } from "@/components/ui/button";

function HeroMobile() {
  return (
    <>
      <div className="w-full bg-[#E5FF7D] flex justify-center">
        <img
          src={"assets/desktop8/hero/Hero.webp"}
          alt=""
          className=" h-[300px]   object-cover"
        />
      </div>
      <div className="bg-[#00DDBE] py-[30px] px-[20px] space-y-[28px]">
        <div className="space-y-6 text-white">
          <p className="font-miniature text-[52px]  leading-[52.627px]">
            <span className="font-[700]"> Support Without</span>{" "}
            <span className="text-[#E5FF7D] italic"> Stigma? </span>
          </p>
          <p className="text-[14px] font-[400] leading-[21px]">
            A safe space to share your thoughts, your way. No judgment. No
            stigma.
          </p>
        </div>

        <div>
          <a href="https://innovacare.tech/listenerhub/signup">
            <Button className="bg-[#5200FF] rounded-full text-[15px]">
              Connect with a Listener
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
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}

export default HeroMobile;
