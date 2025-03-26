import React, { useState } from "react";
import * as Slider from "@radix-ui/react-slider";

const PrivatePracticeMobile = () => {
  const [hours, setHours] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(31);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const hourlyRateByYear = 52;
  const estimatedEarnings = hours * hourlyRate * hourlyRateByYear;
  const hourOptions = Array.from({ length: 31 }, (_, i) => i + 10);

  return (
    <div className="w-full py-6 px-4 bg-[#FAFAFA] flex flex-col gap-6 items-center">
      <h1 className="w-full text-[32px] font-[400] leading-normal font-miniature text-center">
        Private practice with <br /> no doors & no <br /> overhead
      </h1>

      <div className="w-full max-w-md p-5 mx-auto text-center bg-white border shadow-md border-lime-300 rounded-xl">
        <h2 className="text-[16px] font-[500] leading-[18px] text-black mb-4">
          Estimated earnings with FeelAttune
        </h2>

        <div className="w-full mt-4">
          <label className="block text-left text-[14px] font-semibold text-[#4A4D4A] mb-2">
            Hourly Rate
          </label>
          <Slider.Root
            className="relative flex items-center w-full h-6 select-none touch-none"
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

        <div className="relative w-full mt-6 text-left">
          <label className="text-[14px] font-[600] leading-[15px] text-[#4A4D4A]">
            Weekly Hours
          </label>
          <div
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-md cursor-pointer"
          >
            {hours}  
          </div>
          {dropdownOpen && (
            <div className="absolute w-full z-10 bg-white border border-gray-300 rounded-md shadow-md mt-1 max-h-[150px] overflow-y-auto">
              {hourOptions.map((h) => (
                <div
                  key={h}
                  onClick={() => {
                    setHours(h);
                    setDropdownOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-[#7F8AE0] hover:text-white cursor-pointer"
                >
                  {h}  
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col mt-4 text-center">
          <label className="text-[14px] font-[600] leading-[15px] text-[#4A4D4A]">
            Estimated Annual Earnings <br /> Based on ${hourlyRate}/hr
          </label>
          <p className="text-[31px] font-[400] leading-[50px] text-[#7F8AE0] font-miniature">
            ${estimatedEarnings.toLocaleString()}
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <a href="https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df">
            <div className="flex flex-row justify-center items-center px-5 py-[10px] gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
              <button className="text-white font-[500] text-[14px] leading-[17px]">
                Get Started
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 21 20"
                fill="none"
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
      </div>
    </div>
  );
};

export default PrivatePracticeMobile;
