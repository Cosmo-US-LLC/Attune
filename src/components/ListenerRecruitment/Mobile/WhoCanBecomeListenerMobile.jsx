import React from "react";

const WhoCanBecomeListenerMobile = () => {
  const cards = [
    { text: "Empathetic and Patient", color: "bg-[#A78BFA] ", image: "" },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener3.webp",
    },
    { text: "Excellent communicators", color: "bg-[#E5FF7D]  ", image: "" },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener1.webp",
    },
    {
      text: "Passionate about supporting others",
      color: "bg-[#FFA8ED]  ",
      image: "",
    },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener4.webp",
    },
    {
      text: "Non-judgmental and compassionate listeners",
      color: "bg-[#6FE0D1]  ",
      image: "",
    },
    {
      text: "",
      color: "bg-white  ",
      image: "/listener-recruitment/desktop/become-listener/listener2.webp",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full px-4 py-8 bg-white" id="mobile-Become-a-listener">
      <h1 className="mb-4 text-[38px] font-[400] leading-normal font-miniature text-center">
        Who Can Become a Listener?
      </h1>

      <div className="flex flex-col w-full max-w-sm gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex justify-center items-center text-center ${card.color} border border-black rounded-[20px]`}
            style={{ minHeight: "285px", width: "100%" }}
          >
            {card.image ? (
              <img
                src={card.image}
                alt="Listener"
                className="object-contain w-[238px] h-[269px]"
              />
            ) : (
              <p className="text-[35px] font-[400] capitalize w-[190px] mx-auto text-left font-miniature leading-[38px] text-[black]">
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="mt-8 text-[20px] text-center text-[#000] font-[400]">
        If you're a Certified Coach this opportunity is for you!
      </p>
    </div>
  );
};

export default WhoCanBecomeListenerMobile;
