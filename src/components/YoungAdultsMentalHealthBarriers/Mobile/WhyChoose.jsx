import React from "react";

import { Button } from "@/components/ui/button";

function WhyChoose() {
  const cards = [
    {
      img: "/mobile3/meetFew/expert1.webp",
      name: "Jessica Williams",
      title: "Certified Mental Health Advisor",
      body: "Jessica is a compassionate listener with over 5 years of experience helping people through life’s ups and downs.",
    },
  ];

  return (
    <div
      id="mobile-our-approach"
      className="bg-[#F4EFEA] px-5 py-[30px] space-y-[24px]"
    >
      <h1 className="font-miniature text-center text-[38px]">
        Why Choose a Listener
      </h1>

      <div className="space-y-[18px]" id="Mourapproach2">
        <table className="w-full">
          <thead>
            <tr className="grid grid-cols-2 ">
              <th className="p-[10px]  border-b border-black text-left  flex items-center leading-[22px] text-[24.238px] font-[400] font-miniature bg-[#e5ff7d]">
                Att<span className="italic">une</span>
              </th>
              <th className="p-[10px] border-b border-black text-left text-[16px] font-[500] flex items-center">
                Traditional Therapy
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="  grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Immediate, anytime support
              </td>
              <td className="p-[10px] text-[14px] border-b border-black flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#FF6A01" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.88562 6.58581L9.41421 6.11441L8 7.52862L6.58579 6.11441L6.11438 6.58581L7.5286 8.00003L6.11438 9.41424L6.58579 9.88565L8 8.47143L9.41421 9.88565L9.88562 9.41424L8.4714 8.00003L9.88562 6.58581Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Long wait times for appointments.
              </td>
            </tr>
            <tr className="  grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black border-black text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Affordable for all income levels
              </td>
              <td className="p-[10px] border-b border-black text-[14px] flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="16"
                      height="16"
                      rx="8"
                      fill="#01C4FF"
                    />
                    <path
                      d="M7.99683 5.7002V8.80758M7.99683 11.2935H8.00346V11.3001H7.99683V11.2935Z"
                      stroke="white"
                      strokeWidth="1.24295"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Expensive, often requiring insurance.
              </td>
            </tr>
            <tr className=" grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black  text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Everyday challenges, resilience.
              </td>
              <td className="p-[10px] text-[14px] border-b border-black flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#FF6A01" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.88562 6.58581L9.41421 6.11441L8 7.52862L6.58579 6.11441L6.11438 6.58581L7.5286 8.00003L6.11438 9.41424L6.58579 9.88565L8 8.47143L9.41421 9.88565L9.88562 9.41424L8.4714 8.00003L9.88562 6.58581Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Severe mental health issues.
              </td>
            </tr>
            <tr className="  grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black  text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Judgement-free emotional support.
              </td>
              <td className="p-[10px] text-[14px] border-b border-black flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#FF6A01" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.88562 6.58581L9.41421 6.11441L8 7.52862L6.58579 6.11441L6.11438 6.58581L7.5286 8.00003L6.11438 9.41424L6.58579 9.88565L8 8.47143L9.41421 9.88565L9.88562 9.41424L8.4714 8.00003L9.88562 6.58581Z"
                      fill="white"
                    />
                  </svg>
                </div>
                Clinical Interventions.
              </td>
            </tr>
            <tr className="   grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Low stigma, human connection.
              </td>
              <td className="p-[10px] border-b border-black text-[14px] flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="16" height="16" rx="8" fill="#FF6A01" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.88562 6.58581L9.41421 6.11441L8 7.52862L6.58579 6.11441L6.11438 6.58581L7.5286 8.00003L6.11438 9.41424L6.58579 9.88565L8 8.47143L9.41421 9.88565L9.88562 9.41424L8.4714 8.00003L9.88562 6.58581Z"
                      fill="white"
                    />
                  </svg>
                </div>
                May carry stigma.
              </td>
            </tr>
            <tr className=" grid grid-cols-2 font-[500]">
              <td className="p-[10px] border-b border-black  text-[14px] flex leading-[98%] items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8.19531C0 6.07358 0.842855 4.03875 2.34315 2.53846C3.84344 1.03817 5.87827 0.195313 8 0.195312C10.1217 0.195313 12.1566 1.03817 13.6569 2.53846C15.1571 4.03875 16 6.07358 16 8.19531C16 10.317 15.1571 12.3519 13.6569 13.8522C12.1566 15.3525 10.1217 16.1953 8 16.1953C5.87827 16.1953 3.84344 15.3525 2.34315 13.8522C0.842855 12.3519 0 10.317 0 8.19531ZM7.54347 11.6193L12.1493 5.86145L11.3173 5.19585L7.38987 10.1036L4.608 7.78571L3.92533 8.60491L7.54347 11.6193Z"
                      fill="#5200FF"
                    />
                  </svg>
                </div>
                Everyday clarity and motivation.
              </td>
              <td className="p-[10px] text-[14px]  border-b border-black flex leading-[98%] items-center gap-[10px]">
                <div>
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="16"
                      height="16"
                      rx="8"
                      fill="#01C4FF"
                    />
                    <path
                      d="M7.99683 5.7002V8.80758M7.99683 11.2935H8.00346V11.3001H7.99683V11.2935Z"
                      stroke="white"
                      strokeWidth="1.24295"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                Severe emotional distress.
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-center">
          <a href="https://innovacare.tech/listenerhub/signup">
            <Button className="bg-[#5200FF] rounded-full font-[500] text-[15px]">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose;
