const features = [
  {
    id: 1,
    title: "Compassionate Listeners",
    description:
      "Our trained, non-judgmental Listeners provide a safe space for you to share your thoughts, feelings, and experiences without fear of judgment. You’ll always feel heard and supported.",
    icon: "/desktop/what-makes/card-1.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 2,
    title: "Accessible Anytime, Anywhere",
    description:
      "Whether you're at home or on the go, you can connect with a Listener from anywhere, at any time. Our platform is available to support you whenever you need it.",
    icon: "/desktop/what-makes/card-2.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 3,
    title: "Evidence-Based Approach",
    description:
      "Our services are grounded in real, measurable outcomes. We focus on providing practical, effective support for a range of emotional and mental health needs, backed by data-driven results.",
    icon: "/desktop/what-makes/card-3.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 4,
    title: "No Stigma, Just Support",
    description:
      "We are committed to breaking down the barriers of traditional mental health care. There’s no need for clinical intervention—just real, meaningful conversations when you need them most.",
    icon: "/desktop/what-makes/card-4.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 5,
    title: "Privacy and Confidentiality",
    description:
      "Your well-being and privacy are our top priority. All conversations are confidential, ensuring that you can speak freely and openly without concerns.",
    icon: "/desktop/what-makes/card-5.svg", // Replace with an actual image or SVG if needed
  },
];

function WhatMakesUsDifferent() {
  return (
    <div className="bg-[#f4efea] p-[114px]">
      <div className="space-y-[39px]">
        {/* Title Section */}
        <h1 className="text-[76px] leading-10 font-miniature text-left">
          What Makes Us Different?
        </h1>
        <p className="text-lg text-left max-w-[677px]">
          At Attune, we understand that mental wellness is personal, and
          everyone’s journey is unique. Here’s why our platform is the right
          place for you.
        </p>

        {/* Feature Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1080px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-black rounded-[30px] p-[23px] pt-[40px] space-y-[22]"
            >
              <img src={feature.icon} alt="Card Icon" className="w-[55px] h-[55px] mb-5" />
              <h3 className="font-miniature text-[30px] leading-[39px] pb-2">
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[22px]">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-[18px] leading-[26px] max-w-[630px]">
          Choose Attune for an approachable, supportive, and stigma-free experience in managing your emotional health and well-being.
        </p>

        {/* Footer Section */}
        <div className="relative z-0">
          <button className="bg-[#5200FF] text-white py-3 px-6 rounded-full">
            Connect Now
          </button>
          <img src="/desktop/what-makes/sitting-girl.svg" alt="Sitting girl" className="absolute right-0 -bottom-1" />
        </div>
      </div>
    </div>
  );
}

export default WhatMakesUsDifferent;
