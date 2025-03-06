import React from "react";
import { Button } from "@/components/ui/button";

function HeroMobile() {
  return (
    <>
      <div className="bg-[#A78BFA] py-4 px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col text-white">
            <p className="font-miniature text-[52px] font-[400] leading-normal">
              <span className=""> Join </span>
              <span className="text-[#E5FF7D] italic"> FeelAttune </span>
            </p>
            <p className="text-[18px] font-[600] leading-normal">
              Make a Difference, One Conversation at a Time{" "}
            </p>
            <p className="text-[15px] font-[400] leading-[21px] mt-2">
              FeelAttune connects compassionate individuals with people seeking
              judgment-free support. If you’re empathetic and great at
              listening, join our community to make a meaningful impact.
            </p>
          </div>

          <div>
            <a href="https://innovacare.tech/listenerhub/signup">
              <Button className="bg-[#5200FF] rounded-full text-[15px]">
                Get Started
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

        <div className="w-full max-w-xs mx-auto overflow-hidden border-4 border-[#b49ef6] rounded-xl">
          <img
            src="/listener-recruitment/desktop/hero/Hero.webp"
            alt="Happy person waving"
            className="object-cover w-full "
          />
        </div>
      </div>
    </>
  );
}

export default HeroMobile;
