import React from "react";

const WhoCanBecomeListenerDesktop = () => {
  const cards = [
    { text: "Empathetic and Patient", color: "bg-[#A78BFA] ", image: "" },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener1.webp",
    },
    {
      text: "Passionate About Supporting Others",
      color: "bg-[#FFA8ED]  ",
      image: "",
    },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener2.webp",
    },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener3.webp",
    },
    {
      text: "Excellent Communicators",
      color: "bg-[#E5FF7D]  ",
      image: "",
    },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener4.webp",
    },

    {
      text: "Non-Judgmental and Compassionate Listeners",
      color: "bg-[#6FE0D1] border border-black",
      image: "",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-8 py-12 bg-white">
      <h1 className="mb-8 text-[76px] font-[400] leading-[84px] font-miniature text-center">
        Who Can Become a Listener?
      </h1>

      <div className=" flex flex-row flex-wrap gap-4 max-w-[1200px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center items-center text-center ${card.color} rounded-[16px]   w-[285px] h-[285px] border border-black shadow-md`}
          >
            {card.image ? (
              <img
                src={card.image}
                alt="Listener"
                className="object-contain w-[190px]"
              />
            ) : (
              <p className="text-[35px]  font-[400] text-left mx-auto flex justify-center items-center w-[190px] font-miniature leading-tight text-black">
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-[23px] text-center text-[#000] max-w-[780px]">
        Whether you're a student, a life coach, a retired professional, or
        simply someone who loves helping others—this opportunity is for you!
      </p>
    </div>
  );
};

export default WhoCanBecomeListenerDesktop;
