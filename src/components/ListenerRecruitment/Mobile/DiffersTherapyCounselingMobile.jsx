"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "focus-on-everyday-challenges",
    label: "Focus on Everyday Challenges",
    number: "01",
    color: "bg-[#A78BFA] text-white",
  },
  {
    id: "non-clinical-support",
    label: "Non-Clinical Support",
    number: "02",
    color: "bg-[#A78BFA] text-white",
  },
];

const content = [
  {
    img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy4.webp",
    title: "Support for Everyday Challenges",
    description:
      "Listeners help individuals reframe experiences, set goals, and improve emotional well-being. They provide support for stress, confidence, and motivation but do not diagnose or treat clinical conditions.",
  },
  {
    img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy1.webp",
    title: "A Complement to Professional Care",
    description:
      "While Listeners provide meaningful emotional support, those experiencing severe distress or clinical conditions are encouraged to seek professional mental health care.",
  },
];

const DiffersTherapyCounselingMobile = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div id="mobile-our-approach" className="px-4 py-10 bg-[#FFF]">
      <div className="flex flex-col items-center max-w-md mx-auto">
        <h1 className="mb-4 text-[38px] font-[500] font-miniature leading-normal text-center text-black">
          How This Differs from Therapy or Counseling
        </h1>

        {/* Tabs Section */}
        <div className="flex flex-col w-full gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center gap-3 px-4 py-3 justify-between overflow-hidden w-full transition-all duration-300 rounded-[12px] border border-black  ${
                activeTab === tab.id ? "bg-[#FFF] text-black" : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="text-[17px] font-[400] leading-normal font-miniature flex items-center justify-center w-[46px] h-[46px] text-white bg-[#A78BFA] rounded-full">
                {tab.number}
              </div>
              <span className="text-[20px] font-[400] leading-normal font-miniature text-left flex-1">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Cards Section */}
        <div className="flex flex-col w-full gap-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-left border border-black rounded-[12px] p-4 space-y-4 w-full bg-[#A78BFA] mb-4"
            >
              <div className="w-full h-[190px] bg-[#D1C4E9] rounded-[16px] flex justify-center items-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-full h-full rounded-[16px]"
                />
              </div>

              <h2 className="text-[22px] font-[400] font-miniature leading-normal text-black">
                {item.title}
              </h2>

              {typeof item.description === "string" ? (
                <p className="text-[15px] font-[400] text-black leading-[20px]">
                  {item.description}
                </p>
              ) : (
                <>
                  <p className="text-[15px] font-[400] text-black leading-[20px]">
                    {item.description[0]}
                  </p>
                  <ul className="list-disc pl-4 text-black text-[15px] font-[400] leading-[20px] space-y-1">
                    {item.description.slice(1).map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiffersTherapyCounselingMobile;


// import React, { useState } from "react";

// const tabs = [
//   {
//     id: "focus-on-everyday-challenges",
//     label: "Focus on Everyday Challenges",
//     number: "01",
//     color: "bg-[#A78BFA] text-white",
//   },
//   {
//     id: "non-clinical-support",
//     label: "Non-Clinical Support",
//     number: "02",
//     color: "bg-[#A78BFA] text-white",
//   },
// ];

// const content = {
//   "focus-on-everyday-challenges": [
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy4.webp",
//       title: "Support for Everyday Challenges",
//       description:
//         "Listeners help individuals reframe experiences, set goals, and improve emotional well-being. They provide support for stress, confidence, and motivation but do not diagnose or treat clinical conditions.",
//     },
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy1.webp",
//       title: "A Complement to Professional Care",
//       description:
//         "While Listeners provide meaningful emotional support, those experiencing severe distress or clinical conditions are encouraged to seek professional mental health care.",
//     },
//   ],
//   "non-clinical-support": [
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy2.webp",
//       title: "What it Means:",
//       description:
//         "Listeners do not diagnose, treat, or provide clinical interventions but instead offer a supportive space for people to share their thoughts and feelings.",
//     },
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy3.webp",
//       title: "What They Do Instead:",
//       description: [
//         "While therapy addresses severe mental health conditions (e.g., trauma, severe anxiety, depression, or addiction), the Listener Program focuses on:",
//         "Reframing experiences",
//         "Building resilience",
//         "Setting personal goals",
//         "Enhancing motivation and emotional well-being",
//       ],
//     },
//   ],
// };

// const DiffersTherapyCounselingMobile = () => {
//   const [activeTab, setActiveTab] = useState("focus-on-everyday-challenges");

//   const toggleAccordion = (tabId) => {
//     setActiveTab(activeTab === tabId ? null : tabId);
//   };

//   return (
//     <div id="mobile-why-choose-a-listener" className="px-4 py-10 bg-[#FFF]">
//       <div className="flex flex-col items-center max-w-md mx-auto">
//         <h1 className="mb-4 text-[38px] font-[500] font-miniature leading-normal text-center text-black">
//           How This Differs from Therapy or Counseling
//         </h1>

//         <div className="flex flex-col w-full gap-2 mb-6">
//           {tabs.map((tab) => (
//             <div key={tab.id} className="overflow-hidden">
//               <button
//                 className={`flex items-center gap-3 px-4 py-3 justify-between overflow-hidden w-full transition-all duration-300 rounded-[12px] border border-black   ${
//                   activeTab === tab.id
//                     ? "bg-[#F4F4F4] text-black"
//                     : "bg-white text-black"
//                 }`}
//                 onClick={() => toggleAccordion(tab.id)}
//               >
//                 <div className="text-[17px] font-[400] leading-normal font-miniature flex items-center justify-center w-[46px] h-[46px] text-white bg-[#A78BFA] rounded-full  ">
//                   {tab.number}
//                 </div>
//                 <span className="text-[20px] font-[400] leading-normal font-miniature text-left flex-1">
//                   {tab.label}
//                 </span>
//               </button>
//               {activeTab === tab.id && (
//                 <div className="py-4 transition-all duration-300 ">
//                   {content[tab.id].map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex flex-col text-left border border-black rounded-[12px] p-4 space-y-4 w-full bg-[#A78BFA] mb-4"
//                     >
//                       <div className="w-full h-[190px] bg-[#D1C4E9] rounded-[16px] flex justify-center items-center overflow-hidden">
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="object-cover w-full h-full rounded-[16px]"
//                         />
//                       </div>

//                       <h2 className="text-[22px] font-[400] font-miniature leading-normal text-black">
//                         {item.title}
//                       </h2>

//                       {typeof item.description === "string" ? (
//                         <p className="text-[15px] font-[400] text-black leading-[20px]">
//                           {item.description}
//                         </p>
//                       ) : (
//                         <>
//                           <p className="text-[15px] font-[400] text-black leading-[20px]">
//                             {item.description[0]}
//                           </p>

//                           <ul className="list-disc pl-4 text-black text-[15px] font-[400] leading-[20px] space-y-1">
//                             {item.description.slice(1).map((point, i) => (
//                               <li key={i}>{point}</li>
//                             ))}
//                           </ul>
//                         </>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiffersTherapyCounselingMobile;

// import React, { useState } from "react";

// const tabs = [
//   {
//     id: "focus-on-everyday-challenges",
//     label: "Focus on Everyday Challenges",
//     number: "01",
//     color: "bg-[#F4F4F4] text-black",
//   },
//   {
//     id: "non-clinical-support",
//     label: "Non-Clinical Support",
//     number: "02",
//     color: "bg-[#F4F4F4] text-black",
//   },
// ];

// const content = {
//   "focus-on-everyday-challenges": [
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy4.webp",
//       title: "What it Means:",
//       description:
//         "Listeners don't diagnose mental health conditions, give medical advice, or provide clinical treatments.",
//     },
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy1.webp",
//       title: "What They Do Instead:",
//       description:
//         "Listeners create a safe and supportive environment where people can freely express their thoughts and feelings without fear of judgment.",
//     },
//   ],
//   "non-clinical-support": [
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy2.webp",
//       title: "What it Means:",
//       description:
//         "Listeners do not diagnose, treat, or provide clinical interventions but instead offer a supportive space for people to share their thoughts and feelings.",
//     },
//     {
//       img: "/listener-recruitment/mobile/differsTherapyCounseling/therapy3.webp",
//       title: "What They Do Instead:",
//       description: [
//         "While therapy addresses severe mental health conditions (e.g., trauma, severe anxiety, depression, or addiction), the Listener Program focuses on:",
//         "Reframing experiences",
//         "Building resilience",
//         "Setting personal goals",
//         "Enhancing motivation and emotional well-being",
//       ],
//     },
//   ],
// };

// const DiffersTherapyCounselingMobile = () => {
//   const [activeTab, setActiveTab] = useState("focus-on-everyday-challenges");

//   return (
//     <div className="px-4 py-10 bg-[#FFF]">
//       <div className="flex flex-col items-center max-w-md mx-auto">
//         <h1 className="mb-4 text-[38px] font-[400] font-miniature leading-normal text-center text-black">
//           How This Differs from Therapy or <br /> Counseling
//         </h1>

//         <div className="flex flex-col w-full gap-4 mb-6">
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`flex items-center gap-3 px-4 py-3 justify-between rounded-xl border-2 border-black transition duration-300 w-full ${
//                 activeTab === tab.id ? tab.color : "bg-white text-black"
//               }`}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               <div className="text-[18px] font-[400] leading-normal font-miniature flex items-center justify-center w-[41px] h-[41px] text-white bg-[#A78BFA] rounded-full">
//                 {tab.number}
//               </div>
//               <span className="text-[20px] font-[400] leading-normal font-miniature text-left flex-1">
//                 {tab.label}
//               </span>
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col w-full gap-4">
//           {content[activeTab].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col text-left border border-black rounded-[20px] p-4 space-y-2 w-full bg-[#A78BFA]"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="object-cover w-[322px] h-[181px] border border-black rounded-[20px]"
//               />

//               <h2 className="text-[24px] font-[400] leading-normal font-miniature text-black">
//                 {item.title}
//               </h2>

//               {typeof item.description === "string" ? (
//                 <p className="text-[15px] font-[400] text-black leading-[20px]">
//                   {item.description}
//                 </p>
//               ) : (
//                 <>
//                   <p className="text-[15px] font-[400] text-black leading-[20px]">
//                     {item.description[0]}
//                   </p>

//                   <ul className="list-disc pl-5 text-black text-[15px] font-[400] leading-[20px] space-y-2">
//                     {item.description.slice(1).map((point, i) => (
//                       <li key={i}>{point}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiffersTherapyCounselingMobile;
