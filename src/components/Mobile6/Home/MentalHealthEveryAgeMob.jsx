import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const tabs = [
  {
    id: "young-adults",
    label: "Young Adults",
    number: "01",
    color: "bg-[#95ADF0] text-black",
  },
  {
    id: "middle-aged",
    label: "Middle Aged",
    number: "02",
    color: "bg-[#D43525] text-white",
  },
  {
    id: "seniors",
    label: "Seniors",
    number: "03",
    color: "bg-[#00DDBE] text-black",
  },
];

const content = {
  "young-adults": [
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-1.webp",
      title: "Anxiety and Overthinking",
      description:
        " Fear of being labeled or misunderstood stops many from seeking help.Constant academic, social, and career pressures can trigger anxiety and endless overthinking.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-2.webp",
      title: "Loneliness and Social Isolation",
      description:
        "Navigating life transitions often leaves young adults feeling alone and disconnected.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-3.webp",
      title: "Low Self-Esteem",
      description:
        "Social media comparisons and societal expectations can lead to feelings of inadequacy.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-4.webp",
      title: "Stress and Burnout",
      description:
        "Balancing studies, work, and personal life can quickly lead to emotional exhaustion.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-5.webp",
      title: "Fear of Uncertainty",
      description:
        "Unclear future paths create overwhelming stress and mental fatigue.",
    },
  ],
  "middle-aged": [
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-1.webp",
      title: "Workplace Stress and Burnout",
      description:
        "Managing careers, deadlines, and expectations while balancing family life can be mentally exhausting.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-2.webp",
      title: "Emotional Isolation",
      description:
        "Juggling responsibilities often leads to neglecting personal relationships, increasing isolation.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-3.webp",
      title: "Financial Anxiety",
      description:
        "Providing for family while planning for the future causes constant financial stress.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-4.webp",
      title: "Relationship Strain",
      description:
        "Marriage, parenting, and friendships often face tension due to time and emotional pressures.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-5.webp",
      title: "Self-Doubt and Midlife Crisis",
      description:
        "Questioning life choices and personal accomplishments can fuel self-doubt and depression.",
    },
  ],
  seniors: [
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-1.webp",
      title: "Loneliness and Social Isolation",
      description:
        "Changes in social circles and reduced mobility often result in deep loneliness.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-2.webp",
      title: "Loss and Grief",
      description:
        "Coping with the loss of loved ones can trigger prolonged sadness and emotional distress.",
    },
    {
      img: "/mobile6/mentalHealthEveryAge/young-adult-3.webp",
      title: "Cognitive Decline Anxiety",
      description: "Fear of aging and cognitive decline creates constant worry and emotional strain.",
    },
    {
        img: "/mobile6/mentalHealthEveryAge/young-adult-4.webp",
        title: "Physical Health Challenges",
        description: "Chronic health issues often impact mental well-being and independence.",
      },
      {
        img: "/mobile6/mentalHealthEveryAge/young-adult-5.webp",
        title: "Lack of Emotional Support",
        description: "Limited access to emotional outlets can make seniors feel unheard and undervalued.",
      },
  ],
};

const MentalHealthEveryAgeMob = () => {
  const [activeTab, setActiveTab] = useState("young-adults");
  const [currentSlide, setCurrentSlide] = useState(0);  

  
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentSlide(0);  
  };

  
  const activeTabData = tabs.find((tab) => tab.id === activeTab);
  const activeTabColor = activeTabData?.color.split(" ")[0];  
  const activeTextColor = activeTabData?.color.split(" ")[1];  

  return (
    <div className="px-4 py-10 bg-[#FFF]">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
      
        <h1 className="mb-6 text-[38px] leading-normal font-[400] text-center font-miniature">
          Mental Health Challenges Across Every Stage of Life
        </h1>

    
        <div className="flex flex-row items-center gap-3 mb-8 ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex flex-row gap-1 items-center justify-center rounded-lg border-[1px] border-black   transition duration-300 w-[100px] h-[49px]  ${
                activeTab === tab.id ? tab.color : "bg-white text-black"
              }`}
              onClick={() => handleTabChange(tab.id)}
            >
              <div className="flex items-center justify-center text-[14px] w-[26px] h-[26px] font-[400] text-white bg-indigo-400 rounded-full font-miniature">
                {tab.number}
              </div>

              <span className="text-[9px] font-[400]  ">
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <div className="w-full">
          <Carousel key={activeTab} startIndex={currentSlide}>
            {" "}
            <CarouselContent className="mb-4">
              {content[activeTab].map((item, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center w-full basis-1/1"
                >
                  <div
                    className={`border border-black p-4 rounded-2xl space-y-4 w-[320px] h-[370px] flex flex-col  ${activeTabColor} ${activeTextColor}`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="rounded-xl border border-black bg-black w-[280px] h-[180px] mx-auto object-cover"
                    />

                    <h2
                      className={`text-[22px] font-[600] font-miniature px-1 text-left ${activeTextColor}`}
                    >
                      {item.title}
                    </h2>
                    <p className={`text-[14px] font-[400] text-left px-1 ${activeTextColor}`}>
                      {item.description}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border border-black -left-2 disabled:border-neutral-500" />
            <CarouselNext className="bg-white border border-black -right-2 disabled:border-neutral-500" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthEveryAgeMob;
