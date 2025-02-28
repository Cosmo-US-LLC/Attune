import React from "react";

function YourPath() {
  const cards = [
    {
      img: "/mobile8/your-path/path-to-support-2.webp",
      title: "Facing Challenges Together",
      body: "As we age, emotional challenges like isolation and stress often arise. Nearly 1 in 8 seniors face mental health struggles annually, yet less than half seek support. You’re not alone.",
      bgColor: "#6FE0D1",
    },
    {
      img: "/mobile8/your-path/path-to-support-1.webp",
      title: "Support Without Barriers",
      body: "Traditional solutions can feel intimidating, costly, or too formal. Sometimes, all you need is someone to listen—without labels or pressure.",
      bgColor: "#E5FF7D",
    },
  ];
  return (
    <div
      className="bg-white py-[30px] px-5 space-y-4"
      id="mobile-path-to-support"
    >
      <p className="font-miniature text-center text-[38px]">
        A Safe Space for You
      </p>

      <div className="space-y-5">
        {cards?.map((card, id) => (
          <div
            style={{ backgroundColor: card.bgColor }}
            className="  mx-auto border border-black   py-4 px-2 rounded-[30px] space-y-[40px] w-[337px] h-[507px]"
          >
            <div className="px-2">
              <img
                src={card?.img}
                alt="Icon"
                className="rounded-[30px]  border border-black bg-black mx-auto w-[292px] h-[250px]"
              />
            </div>

            <div className="space-y-[14px]">
              <h3 className=" h-[61px] flex items-center leading-normal font-[700] justify-center text-left text-black text-[30px] font-miniature  px-3">
                {card?.title}
              </h3>

              <p className="text-[15px] leading-[20px] font-[400] text-black text-left px-3">
                {card?.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourPath;
