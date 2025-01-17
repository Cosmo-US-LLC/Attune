"use client";

import Image from "next/image";
import heal from "@/public/desktop/growth/heal.svg";
import happyTree from "@/public/desktop/growth/happy-tree.svg";
import cupOfCoffe from "@/public/desktop/growth/cup-of-coffe.svg";

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
    image: heal,  
  },
  {
    id: 3,
    text: "Take a mental break",
    bgColor: "bg-[#E5FF7D]",
    image: null,
  },
  {
    id: 4,
    text: "",
    bgColor: "bg-white",
    image: happyTree,  
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
    image: cupOfCoffe,  
  },
];

function YouGrowth() {
  return (
    <div className="bg-gray-50 py-10 px-4">
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
  {gridData.map((item) => (
    <div
      key={item.id}
      className={`flex flex-col items-center justify-center text-center w-[300px] h-[300px] px-[68px] py-[134px] rounded-[30px] border border-black flex-shrink-0 ${item.bgColor}`}
    >
      {item.image ? (
        <Image
          src={item.image}
          alt="Visual"
          width={180}  
          height={180}  
          className="mb-4"
        />
      ) : (
        <p className="text-[35px] font-miniature font-[400] text-black">{item.text}</p>
      )}
    </div>
  ))}
</div>


    </div>
  );
}

export default YouGrowth;
