// import Image from "next/image";
// import heal from "@/public/desktop/growth/heal.svg";
// import happyTree from "@/public/desktop/growth/happy-tree.svg";
// import cupOfCoffe from "@/public/desktop/growth/cup-of-coffe.svg";

const gridData = [
  {
    id: 1,
    text: "We believe in personal growth.",
    bgColor: "bg-[#FFD23F]",
    image: null,
  },
  {
    id: 2,
    text: "",
    bgColor: "bg-white",
    image: "/desktop/growth/heal.svg",
  },
  {
    id: 3,
    text: <>Take a<br/>mental break</>,
    bgColor: "bg-[#E5FF7D]",
    image: null,
  },
  {
    id: 4,
    text: "",
    bgColor: "bg-white",
    image: "/desktop/growth/happy-tree.svg",
  },
  {
    id: 5,
    text: "Take time to nurture your mind.",
    bgColor: "bg-[#FFA8ED]",
    image: null,
  },
  {
    id: 6,
    text: "",
    bgColor: "bg-white",
    image: "/desktop/growth/cup-of-coffe.svg",
  },
];

function YouGrowth() {
  return (
    <div className="bg-[#f4efea] p-[35px]">
      <div className="grid grid-cols-3 grid-rows-2 gap-[26px]">
        {gridData.map((item, id) => (
          <div
            key={item.id}
            className={`flex flex-col items-center justify-center text-center w-[100%] h-[100%] px-[56px] py-[99px] rounded-[30px] border border-black flex-shrink-0 ${item.bgColor}`}
          >
            {item.image ? (
              <img
                src={item.image}
                alt="Visual"
                className="mb-4 w-[180px] h-[180px]"
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
