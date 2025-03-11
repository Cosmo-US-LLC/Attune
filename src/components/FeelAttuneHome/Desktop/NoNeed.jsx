import React from "react";

function NoNeed() {
  return (
    // <section className="relative no-need-section bg-[#f4efea]">
    //   <div className="max-w-7xl h-[100%] mx-auto flex flex-col md:flex-row items-center justify-between  ">
    //     {/* Text Section */}
    //     <div className="flex-1 text-left space-y-6 absolute top-[150px] left-[100px]">
    //       <h1 className="text-[76px] font-miniature font-[400] leading-[69px] text-black">
    //         No need <br /> to endure
    //       </h1>
    //     </div>
    //     <div className="absolute bottom-[26px] right-[110px]">
    //       <p className="text-[76px] font-miniature font-[400] leading-[69px]">
    //         <span className="italic">
    //           life's trials
    //         </span>
    //         <br />
    //         alone.
    //       </p>
    //     </div>
    //     <button className="bg-[#5200FF] text-white py-3 px-6 rounded-full font-medium hover:bg-purple-700 absolute bottom-[40px] right-[100px]">
    //       Get Started
    //     </button>
    //   </div>
    // </section>
    <div className="bg-white">
      <div className="">
        <div className="max-w-[1440px] mx-auto px-[105px] pt-[65px] grid grid-cols-11">
          <div className="grid grid-rows-2 col-span-3 max-h-[500px]">
            <div className="">
              <img
                src="/desktop1/no-need/sun.svg"
                alt="Sun"
                className="w-[74px] h-[79px]"
              />
              <h1 className="font-miniature text-[76px] leading-[69px] mt-4">
                No need
                <br />
                to endure
              </h1>
            </div>

            <div className="flex justify-end items-end">
              <img
                src="/desktop1/no-need/bird.svg"
                alt="Bird"
                className="w-[80px] h-auto mr-[80px]"
              />
            </div>
          </div>

          <div className="relative z-10 h-[300px] overflow-visible col-span-5">
            <img
              src="/desktop1/no-need/girl.webp"
              alt="Moods"
              className="w-[529px] mx-auto h-auto object-contain"
            />
          </div>

          <div className="grid grid-rows-2 col-span-3">
            <div className="flex justify-center items-center">
              <img
                src="/desktop1/no-need/mood.svg"
                alt="Moods"
                className="w-[64px] h-[96px]"
              />
            </div>
            <div className="flex items-center justify-end">
              <img
                src="/desktop1/no-need/clouds.svg"
                alt="Clouds"
                className="w-[99px] h-[54px]"
              />
            </div>
          </div>
        </div>

        <div className="z-0 bg-[#FFD23F] h-[79px]">
          <div className="max-w-[1440px] px-[95px] py-[12px] mx-auto flex justify-end items-center relative">
            <h2 className="absolute right-0 pr-[95px] -bottom-2 font-miniature text-[76px] leading-[76px]">
              <span className="italic">life's trials</span>
              <br />
              alone.
            </h2>
            <a href="https://innovacare.tech/listenerhub/signup" className="relative z-10">
              <button className="rounded-full text-white bg-[#5200FF] hover:bg-purple-800 text-[16px] font-[500] p-[10px] w-[115px] text-center">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoNeed;
