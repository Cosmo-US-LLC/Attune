import React, { useState } from "react";

const tabs = [
  { id: "young-adults", label: "Young Adults", number: "01", color: "bg-[#95ADF0] text-black" },
  { id: "middle-aged", label: "Middle Aged", number: "02", color: "bg-[#D43525] text-white" },
  { id: "seniors", label: "Seniors", number: "03", color: "bg-[#00DDBE] text-black" },
];

const content = {
  "young-adults": [
    { img: "/desktop6/mentalHealthEveryAge/young-adult-1.webp", title: "Anxiety and Overthinking", description: " Fear of being labeled or misunderstood stops many from seeking help. Constant academic, social, and career pressures can trigger anxiety and endless overthinking." },
    { img: "/desktop6/mentalHealthEveryAge/young-adult-2.webp", title: "Loneliness and Social Isolation", description: "Navigating life transitions often leaves young adults feeling alone and disconnected." },
    { img: "/desktop6/mentalHealthEveryAge/young-adult-3.webp", title: "Low Self-Esteem", description: "Social media comparisons and societal expectations can lead to feelings of inadequacy." },
    { img: "/desktop6/mentalHealthEveryAge/young-adult-4.webp", title: "Stress and Burnout", description: "Balancing studies, work, and personal life can quickly lead to emotional exhaustion." },
    { img: "/desktop6/mentalHealthEveryAge/young-adult-5.webp", title: "Fear of Uncertainty", description: "Unclear future paths create overwhelming stress and mental fatigue." },
    { img: "/desktop6/mentalHealthEveryAge/young-adult-6.webp", title: "Boost Your Confidence & Growth", description: "Overcome academic, social, and career pressures with personal growth coaching and life coaching support to build clarity, confidence, and success." },
  ],
  "middle-aged": [
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-1.webp", title: "Workplace Stress and Burnout", description: "Managing careers, deadlines, and expectations while handling family can be exhausting." },
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-2.webp", title: "Emotional Isolation", description: "Juggling responsibilities often leads to neglecting personal relationships, increasing isolation." },
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-3.webp", title: "Financial Anxiety", description: "Providing for family while planning for the future causes constant financial stress." },
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-4.webp", title: "Relationship Strain", description: "Marriage, parenting, and friendships often face tension due to time and emotional pressures." },
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-5.webp", title: "Self Doubt and Midlife Crisis", description: "Questioning life choices and personal accomplishments can fuel self-doubt and depression." },
    { img: "/desktop6/mentalHealthEveryAge/middle -aged-6.webp", title: "Redefine Your Purpose", description: "Navigate life transitions with life and wellness coaching, goal-setting strategies, and expert guidance to create a fulfilling future." },
  ],
  "seniors": [
    { img: "/desktop6/mentalHealthEveryAge/seniors-1.webp", title: "Loneliness and Social Isolation", description: "Changes in social circles and reduced mobility often result in deep loneliness." },
    { img: "/desktop6/mentalHealthEveryAge/seniors-2.webp", title: "Loss and Grief", description: "Coping with the loss of loved ones can trigger prolonged sadness and emotional distress." },
    { img: "/desktop6/mentalHealthEveryAge/seniors-3.webp", title: "Cognitive Decline Anxiety", description: "Fear of aging and cognitive decline creates constant worry and emotional strain." },
    { img: "/desktop6/mentalHealthEveryAge/seniors-4.webp", title: "Physical Health Challenges", description: "Chronic health issues often impact mental well-being and independence." },
    { img: "/desktop6/mentalHealthEveryAge/seniors-5.webp", title: "Lack of Emotional Support", description: "Limited access to emotional outlets can make seniors feel unheard and undervalued." },
  ],
};

const MentalHealthEveryAge = () => {
  const [activeTab, setActiveTab] = useState("young-adults");

  return (
    <div className="px-6 py-12 bg-[#FFF]">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <h1 className="mb-6 text-[50px] w-[656px] font-[500] font-miniature text-center">
          Mental Health Challenges Across Every Stage of Life
        </h1>

 
        <div className="flex justify-center gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-col gap-4 px-4 justify-center rounded-xl border-2 border-black   transition duration-300 w-[362px] h-[171px]  ${
                activeTab === tab.id ? tab.color : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
     
              <div className="text-[30px] font-[400] leading-[110px] font-miniature flex items-center justify-center w-[71px] h-[71px] text-white bg-[#7886FF] rounded-full ">
                {tab.number}
              </div>
          
              <span className="text-[30px] font-[400] leading-normal font-miniature text-left">{tab.label}</span>
            </button>
          ))}
        </div>

 
        <div className="flex flex-wrap justify-center gap-6">
          {content[activeTab].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col text-center border border-black rounded-2xl p-5 space-y-6 w-[362px] min-h-[400px] shadow-lg ${
                tabs.find((tab) => tab.id === activeTab)?.color
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="object-cover w-full border-[1.5px] border-l-0 border-r-0 border-black rounded-[20px] h-[185px]"
              />
              <h2 className="text-[27px] font-[700] leading-[35px] font-miniature text-left">{item.title}</h2>
              <p className="text-[16px] font-[400] leading-[28px] text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealthEveryAge;
