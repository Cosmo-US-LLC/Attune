// import Image from "next/image";
// import heal from "@/public/desktop1/growth/heal.svg";
// import happyTree from "@/public/desktop1/growth/happy-tree.svg";
// import cupOfCoffe from "@/public/desktop1/growth/cup-of-coffe.svg";

const gridData = [
  {
    id: 1,
    text: "Empathetic and Patient", 
    bgColor: "bg-[#A78BFA]",
    image: "",
  },
  {
    id: 2,
    text: "",
    bgColor: "bg-white",
    image: "/listener-recruitment/desktop/become-listener/listener1.webp",
  },
  {
    id: 3,
    text: "Passionate About Supporting Others",  
    bgColor: "bg-[#FFA8ED]",
    image: "",
  },
  {
    id: 4,
    text: "",
    bgColor: "bg-white",
    image: "/listener-recruitment/desktop/become-listener/listener2.webp",
  },
  {
    id: 5,
    text: "", 
    bgColor: "bg-white",
    image: "/listener-recruitment/desktop/become-listener/listener3.webp",
  },
  {
    id: 6,
    text: "Excellent Communicators",
    bgColor: "bg-[#E5FF7D]",
    image: "",
  },
  {
    id: 7,
    text: "",
    bgColor: "bg-white",
    image: "/listener-recruitment/desktop/become-listener/listener4.webp",
  },
  {
    id: 8,
    text: "Non-Judgmental and Compassionate Listeners",
    bgColor: "bg-[#6FE0D1]",
    image: "",
  },
];

function YouGrowth() {
  return (
    <div className="bg-[#FFFFFF] py-12">
      <div className="max-w-[1400px] min-w-[1000px] mx-auto flex flex-col justify-center items-center gap-12">
        <h1 className="text-[76px] font-[400] leading-[84px] font-miniature">Who Can Become a Listener?</h1>
        <div className=" w-fit mx-auto grid grid-cols-4 grid-rows-2 gap-x-[31px] gap-y-[31px]">
          {gridData.map((item, id) => (
            <div
              key={item.id}
              className={`flex flex-col items-center justify-center text-center w-[285px] h-[285px] rounded-[20px] ${
                item.bgColor == false
                  ? " border-0 px-0 py-0 "
                  : ` border border-black justify-center items-center flex-shrink-0 ${item.bgColor}`
              }`}
            >
              {item.image ? (
                <img
                  src={item.image}
                  alt="Visual"
                  className={`mb-0 w-[187px] `
                  //   ${
                  //   item.bgColor == false
                  //     ? "w-[384px] h-[344px]"
                  //     : "w-[180px] h-[180px]"
                  // }
                   }
                />
              ) : (
                <p
                  className={
                    "text-[35px] leading-[38px] font-miniature font-[400] w-[187px] text-left   text-black " 
                    // +
                    // (id == 2 && " text-right ") +
                    // (id == 4 && " text-center ")
                  }
                >
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
        <p className="w-[700px] text-[16px] leading-[22px] text-center font-[400] font-inter">
          Whether you're a student, a life coach, a retired professional, or
          simply <br/> someone who loves helping others—this opportunity is for you!
        </p>
      </div>
    </div>
  );
}

export default YouGrowth;
