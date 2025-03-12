// import Image from "next/image";
// import heal from "@/publicassets/desktop1/growth/heal.svg";
// import happyTree from "@/publicassets/desktop1/growth/happy-tree.svg";
// import cupOfCoffe from "@/publicassets/desktop1/growth/cup-of-coffe.svg";

const gridData = [
  {
    id: 1,
    text: "", // We believe in personal growth.
    bgColor: false,
    image: "assets/desktop1/growth/weBelieve.svg",
  },
  {
    id: 2,
    text: "",
    bgColor: "bg-white",
    image: "assets/desktop1/growth/heal.svg",
  },
  {
    id: 3,
    text: "", // <>Take a<br/>mental break</>
    bgColor: false,
    image: "assets/desktop1/growth/takeMental.svg",
  },
  {
    id: 4,
    text: "",
    bgColor: "bg-white",
    image: "assets/desktop1/growth/happy-tree.svg",
  },
  {
    id: 5,
    text: "", // Take time to nurture your mind.
    bgColor: false,
    image: "assets/desktop1/growth/takeTime.svg",
  },
  {
    id: 6,
    text: "",
    bgColor: "bg-white",
    image: "assets/desktop1/growth/cup-of-coffe.svg",
  },
];

function YouGrowth() {
  return (
    <div className="bg-[#f4efea] p-[35px]">
      <div className="max-w-[1400px] w-fit mx-auto grid grid-cols-3 grid-rows-2 gap-x-[31px] gap-y-[31px]">
        {gridData.map((item, id) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center text-center w-[384px] h-[344px] rounded-[30px] ${item.bgColor == false ? " border-0 px-0 py-0 " : ` border border-black justify-center items-center flex-shrink-0 ${item.bgColor}`}`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt="Visual"
                className={`mb-0 ${item.bgColor == false ? "w-[384px] h-[344px]" : "w-[180px] h-[180px]"}`}
              />
            ) : (
              <p className={"text-[55px] leading-[69px] font-miniature font-[400] px-2 text-black " + (id == 2 && " text-right ") + (id == 4 && " text-center ")}>
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default YouGrowth;
