import React, { useState } from "react";

const tabs = [
  {
    id: "focus-on-everyday-challenges",
    label: "Focus on Everyday Challenges",
    number: "01",
    color: "bg-[#FFF] text-black",
  },
  // {
  //   id: "non-clinical-support",
  //   label: "Non-Clinical Support",
  //   number: "02",
  //   color: "bg-[#F4F4F4] text-black",
  // },
  {
    id: "focus-on-everyday-challenges",
    label: "Non-Clinical Support",
    number: "02",
    color: "bg-[#FFF] text-black",
  },
];

const content = {
  "focus-on-everyday-challenges": [
    {
      img: "/listener-recruitment/desktop/differsTherapyCounseling/therapy1.webp",
      title: "Support for Everyday Challenges",
      description:
        "Listeners help individuals reframe experiences, set goals, and improve emotional well-being. They provide support for stress, confidence, and motivation but do not diagnose or treat clinical conditions.",
    },
    {
      img: "/listener-recruitment/desktop/differsTherapyCounseling/therapy2.webp",
      title: "A Complement to Professional Care",
      description:
        "While Listeners provide meaningful emotional support, those experiencing severe distress or clinical conditions are encouraged to seek professional mental health care.",
    },
  ],
  "non-clinical-support": [
    {
      img: "/listener-recruitment/desktop/differsTherapyCounseling/therapy3.webp",
      title: "What it Means:",
      description:
        "Listeners do not diagnose, treat, or provide clinical interventions but instead offer a supportive space for people to share their thoughts and feelings.",
    },
    {
      img: "/listener-recruitment/desktop/differsTherapyCounseling/therapy4.webp",
      title: "What They Do Instead:",
      description: [
        "While therapy addresses severe mental health conditions (e.g., trauma, severe anxiety, depression, or addiction), the Listener Program focuses on:",
        "Reframing experiences",
        "Building resilience",
        "Setting personal goals",
        "Enhancing motivation and emotional well-being",
      ],
    },
  ],
};

const DiffersTherapyCounseling = () => {
  const [activeTab, setActiveTab] = useState("focus-on-everyday-challenges");
  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div id="why-choose-a-listener" className="px-6 py-16 bg-[#FFF]">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h1 className="mb-6 text-[76px] w-[1000px] font-[400] font-miniature leading-[90px] text-center text-black">
          How This Differs from Therapy <br /> or Counseling
        </h1>

        <div className="flex justify-center gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col gap-4 px-4 justify-center rounded-xl border-2 border-black transition duration-300 w-[382px] h-[171px] ${
                activeTab === tab.id ? tab.color : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="text-[30px] font-[400] leading-[110px] font-miniature flex items-center justify-center w-[71px] h-[71px] text-white bg-[#A78BFA] rounded-full">
                {tab.number}
              </div>
              <span className="text-[28px] font-[400] leading-normal font-miniature text-left">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {content[activeTab].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col text-left border border-black rounded-[30px] p-6 space-y-4 w-[560px] min-h-[450px] shadow-lg bg-[#A78BFA]`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-[220px] border border-black rounded-[30px]"
              />

              <h2 className="text-[35px] font-[400] font-miniature text-black">
                {item.title}
              </h2>

              {typeof item.description === "string" ? (
                <p className="text-[18px] font-[400] text-black leading-[24px]">
                  {item.description}
                </p>
              ) : (
                <>
                  <p className="text-[18px] font-[400] text-black leading-[22px]">
                    {item.description[0]}
                  </p>

                  <ul className="list-disc pl-5 text-black text-[18px] font-[400] leading-[28px] space-y-2">
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

export default DiffersTherapyCounseling;