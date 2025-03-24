import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

function PrivatePractice() {
  const [hours, setHours] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(30);
  const hourlyRateByYear = 52;
  const estimatedEarnings = hours * hourlyRate * hourlyRateByYear;

  return (
    <div className="w-full py-8 bg-[#FAFAFA]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-8 px-4">
        <h1 className="text-[36px] md:text-[56px] lg:text-[76px] font-[400] leading-tight font-miniature text-center max-w-[899px] mx-auto">
          Private practice with no <br/> doors & no overhead
        </h1>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[700px] p-4 text-center bg-white border shadow-md border-lime-300 rounded-xl">
            <h2 className="text-[28px] font-[500] leading-tight text-black mt-1">
              Estimated earnings <br /> with FeelAttune
            </h2>

            <div className="w-full max-w-[580px] mx-auto mt-5">
              <label className="block text-left text-[16px] font-semibold text-[#4A4D4A] mb-3">
                Hourly Rate Range
              </label>

              <Slider.Root
                className="relative flex items-center w-full h-6 select-none touch-none"
                defaultValue={[hourlyRate]}
                min={22}
                max={40}
                step={1}
                value={[hourlyRate]}
                onValueChange={(value) => setHourlyRate(value[0])}
              >
                <Slider.Track className="relative h-2 bg-gray-300 rounded-full grow">
                  <Slider.Range className="absolute h-full bg-[#7F8AE0] rounded-full" />
                </Slider.Track>
                <Slider.Thumb
                  className="block w-5 h-5 transition bg-white border-2 border-[#7F8AE0] rounded-full shadow-md hover:scale-110"
                  aria-label="Hourly rate"
                >
                  <div className="absolute px-2 py-1 text-xs text-white transform -translate-x-1/2 bg-[#7F8AE0] rounded-md shadow -top-8 left-1/2">
                    ${hourlyRate}
                  </div>
                </Slider.Thumb>
              </Slider.Root>

              <div className="flex justify-between mt-1 text-sm text-gray-700">
                <span>$22</span>
                <span>$40</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-6">
              <div className="flex justify-center w-full gap-14">
                <div className="flex flex-col gap-1 text-left w-[30%]">
                  <label className="text-[16px] font-[600] text-[#4A4D4A]">
                    Weekly Hours
                  </label>
                  <select
                    className="p-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-[#7F8AE0]"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                  >
                    {[10, 12, 15, 20, 25, 30, 35, 40].map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 text-left w-[40%]">
                  <label className="text-[16px] font-[600] text-[#4A4D4A]">
                    Estimated Annual Earnings <br /> Based on $32/hr
                  </label>
                  <p className="text-[50px] font-[400] text-[#7F8AE0] font-miniature">
                    ${estimatedEarnings.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <a href="https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df">
                  <div className="flex flex-row justify-center items-center px-5 py-3 gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
                    <button className="text-white font-[500] text-[16px]">
                      Get Started
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivatePractice;
