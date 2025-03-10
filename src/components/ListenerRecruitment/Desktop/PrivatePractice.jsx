import React, { useState } from "react";

function PrivatePractice() {
  const [hours, setHours] = useState(12);
  const hourlyRate = 10;
  const estimatedEarnings = hours * hourlyRate;

  // const [hours, setHours] = useState(40);
  // const estimatedEarnings = (hours / 40) * 100100;
  // const minHours = 30;
  // const maxHours = 50;

  const benefits = [
    "Competitive OH 15% based on the hours provided",
    "Guaranteed bookings for the hours that they are available for",
    "Virtual and Flexible hours",
    "Work from the comfort of home",
  ];

  return (
    <div className="w-full py-12 bg-[#FAFAFA]">
      <div className="max-w-[1280px] min-w-[1000px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="w-[899px] text-[76px] font-[400] leading-[95px] font-miniature text-center">
            Private practice with no doors & no overhead
          </h1>
        </div>
        <div className="flex flex-row w-[100%]">
          <div className="w-[50%]">
            <div className="max-w-md mx-auto text-gray-900">
              <p className="text-[20px] font-[400] leading-normal">
                The key benefits that we need to focus on for Google ads are:
              </p>
              <ul className="mt-3 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex space-x-4 text-left">
                    <img
                      src="/listener-recruitment/desktop/private-practice/tick.webp"
                      alt="Check"
                      className="w-5 h-5 mt-2"
                    />

                    <span className="text-[#000] text-[18px] font-[400] mt-1 ">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[50%]">
            <div className="w-full max-w-lg p-5 mx-auto text-center bg-white border shadow-md border-lime-300 rounded-xl">
              <h2 className="text-[28px] font-[500] leading-tight text-black">
                Estimated earnings <br /> with FeelAttune
              </h2>

              <div className="flex justify-between px-6 mt-6">
                <div className="flex flex-col text-left">
                  <label className="text-[16px] font-[600] text-[#4A4D4A]">
                    Weekly Hours
                  </label>
                  <select
                    className="w-24 p-2 mt-2 text-black bg-white border border-gray-300 rounded-md shadow-md focus:ring-2 focus:ring-[#A78BFA]"
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

                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[16px] font-[600] text-[#4A4D4A]">
                    Estimated Annual Earnings <br /> Based on $30/hr
                  </label>
                  <p className="text-[50px] font-[400] text-[#7F8AE0] font-miniature">
                    ${estimatedEarnings.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-2">
                <a href="https://innovacare.tech/listenerhub/signup">
                  <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
                    <button className="text-white font-[500] text-[16px]">
                      Get Started
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
            </div>
            {/* <div className="max-w-[491px] p-6 mx-auto bg-white border shadow-md rounded-2xl border-lime-300">
              <h2 className="text-[25px] font-[500] text-center text-[#000] leading-[31px]">
                Estimated earnings with BetterHelp
              </h2>

              <div className="mt-10">
                <div className="relative w-full">
                  <input
                    type="range"
                    min={minHours}
                    max={maxHours}
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full h-4 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #A78BFA ${
                        ((hours - minHours) / (maxHours - minHours)) * 100
                      }%, #F3F4F6 ${
                        ((hours - minHours) / (maxHours - minHours)) * 100
                      }%)`,
                    }}
                  />

                  <div
                    className="absolute top-[-33px] bg-[#A78BFA] text-white text-xs font-semibold px-3 py-1 rounded-md flex justify-center items-center"
                    style={{
                      left: `${
                        ((hours - minHours) / (maxHours - minHours)) * 100
                      }%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    {hours}

                    <div className="absolute left-1/2 -bottom-[4px] w-2 h-2 rotate-45 bg-[#A78BFA] transform -translate-x-1/2"></div>
                  </div>

                  <div
                    className="absolute -top-[2px] w-6 h-6 bg-white border border-gray-400 rounded-full shadow-md cursor-pointer"
                    style={{
                      left: `${
                        ((hours - minHours) / (maxHours - minHours)) * 100
                      }%`,
                      transform: "translateX(-50%)",
                    }}
                  ></div>
                </div>

                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>{minHours}</span>
                  <span>Hours per week</span>
                  <span>{maxHours}</span>
                </div>
              </div>

              <p className="mt-4 font-semibold text-center text-gray-700">
                Estimated annual earnings:{" "}
                <span className="text-purple-500">
                  ${estimatedEarnings.toLocaleString()}
                </span>
              </p>

              <div className="flex justify-center mt-6">
                <a href="https://innovacare.tech/listenerhub/signup">
                  <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
                    <button className="text-white font-[500] text-[16px]">
                      Sign Up Now
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivatePractice;
