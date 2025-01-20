const experts = [
  {
    id: 1,
    name: "Jessica Williams",
    title: "Certified Mental Health Advisor",
    body:
      "Jessica is a compassionate listener with over 5 years of experience helping people through life's ups and downs.",
    image: "/desktop/meet-expert/expert-1.png", // Replace with actual image path
  },
  {
    id: 2,
    name: "Michael Brown",
    title: "Life Coach and Stress Management Specialist",
    body:
      "With a background in coaching and mental wellness, Michael specializes in helping individuals cope with stress, anxiety, and personal transitions.",
    image: "/desktop/meet-expert/expert-2.png", // Replace with actual image path
  },
  {
    id: 3,
    name: "Olivia Davis",
    title: "Certified Wellness Advisor",
    body:
      "Olivia is passionate about supporting emotional well-being. She combines mindfulness techniques with empathetic listening to help people.",
    image: "/desktop/meet-expert/expert-3.png", // Replace with actual image path
  },
  {
    id: 4,
    name: "Daniel Thompson",
    title: "Trauma-Informed Listener",
    body:
      "Daniel focuses on providing safe, empathetic support to individuals navigating through trauma or personal struggles.",
    image: "/desktop/meet-expert/expert-4.png", // Replace with actual image path
  },
];

function MeetTheExperts() {
  return (
    <div className="bg-[#f4efea] p-[75px]">
      <div className="max-w-7xl mx-auto space-y-[35px]">
        {/* Title Section */}
        <h1 className="font-miniature text-[76px] text-center">Meet a Few Experts</h1>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((card, id) => (
            <div key={id} className={"max-w-[274px] mx-auto border border-black p-3 pt-[10px] space-y-[14px] " + (id%2 !== 0 ? "bg-[#FFE87E]": "bg-white")}
            style={{ borderRadius: "130px 130px 30px 30px" }}
          >
            <div className="relative">
              <img
                src={card?.image || ""}
                alt="Icon"
                className="w-[254px] h-[162px] object-contain"
              />
              <h3 className="absolute bottom-3 w-full text-white text-center text-[30px] font-miniature leading-3">
                {card?.name}
              </h3>
            </div>

            <h3 className="text-[16px] font-[600] leading-[21px] px-6 text-center">
              {card?.title}
            </h3>

            <p className="text-[16px] leading-[20px] text-center capitalize">{card?.body}</p>
            <br />
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheExperts;
