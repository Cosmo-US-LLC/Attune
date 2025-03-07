import React from "react";

const MeaningfulMovement = () => {
  const cards = [
    {
      icon: "/listener-recruitment/desktop/meaningfull-movement/icon1.svg",
      text: "Our mission is to bridge the gap between traditional mental health services and everyday emotional support.",
      color: "bg-[#E5FF7D]",
    },
    {
      icon: "/listener-recruitment/desktop/meaningfull-movement/icon2.svg",
      text: "We believe everyone deserves a welcoming, stigma-free space to share life’s ups and downs—even if they’re not ready for, or don’t need, clinical intervention.",
      color: "bg-[#FFA8ED]",
    },
    {
      icon: "/listener-recruitment/desktop/meaningfull-movement/icon3.svg",
      text: "By becoming a Listener, you join a community committed to broadening access to empathetic, judgment-free connection.",
      color: "bg-[#6FE0D1]",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-8 py-16 bg-[#F9F9F9]">
     
      <h1 className="mb-8 text-[76px] font-[400] leading-[69px] font-miniature text-center">
        Join a Meaningful Movement
      </h1>

      
      <div className="flex justify-center items-center gap-6 max-w-[1200px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col gap-8 items-start text-left ${card.color} rounded-[20px] p-6 w-[350px] h-[297px] border border-black shadow-md`}
          >
            
              <img src={card.icon} alt="Icon" className="w-[100px] h-[100px]" />
           
            <p className="text-[16px] font-[400] leading-[20px] text-black">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeaningfulMovement;
