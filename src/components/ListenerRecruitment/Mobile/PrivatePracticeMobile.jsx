import React, { useState } from "react";

const PrivatePracticeMobile = () => {
  const [hours, setHours] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(30);
  const hourlyRateByYear = 52;
  const estimatedEarnings = hours * hourlyRate * hourlyRateByYear;

  const benefits = [
    "Competitive OH 15% based on the hours provided",
    "Guaranteed bookings for the hours that they are available for",
    "Virtual and Flexible hours",
    "Work from the comfort of home",
  ];

  return (
    <div className="w-full py-10 px-4 bg-[#FAFAFA] flex flex-col gap-6 items-center">
      <h1 className="w-full text-[38px] font-[400] leading-normal font-miniature text-center">
        Your potential Earning with FeelAttune
      </h1>

      <div className="w-full max-w-lg p-5 mx-auto text-center bg-white border shadow-md border-lime-300 rounded-xl">
        <h2 className="text-[16px] font-[500] leading-[18px] text-black">
        Estimated earnings with FeelAttune
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 px-2 mt-6">
          <div className="flex items-center justify-center w-full gap-6">
          <div className="flex flex-col text-left w-[50%]">
            <label className="text-[14px] font-[600] leading-[15px] text-[#4A4D4A]">
              Weekly Hours
            </label>
            <select
              className="p-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-400"
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

          <div className="flex flex-col text-left w-[50%]">
            <label className="text-[14px] font-[600] leading-[15px] text-[#4A4D4A]">
              Hourly Rate Range
            </label>
            <select
              className="p-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-blue-400"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
            >
              {[12, 15, 20, 25, 30, 35, 40].map((rate) => (
                <option key={rate} value={rate}>
                  {rate}
                </option>
              ))}
            </select>
          </div>
          </div>

          <div className="flex flex-col mt-4 text-center">
            <label className="text-[14px] font-[600] leading-[15px] text-[#4A4D4A]">
              Estimated Annual Earnings <br /> Based on ${hourlyRate}/hr
            </label>
            <p className="text-[31px] font-[400] leading-[50px] text-[#7F8AE0] font-miniature">
              ${estimatedEarnings.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-3">
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
      </div>
    </div>
  );
};

export default PrivatePracticeMobile;