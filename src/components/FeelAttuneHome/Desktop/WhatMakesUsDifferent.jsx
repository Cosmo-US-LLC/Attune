const features = [
  {
    id: 1,
    title: (<>
    Real Conversations,<br/> Real Impact
    </>),
    description:
      "FeelAttune  connects you to compassionate listeners who provide a supportive environment for sharing your thoughts and feelings. It's a space to gain clarity, set goals, and explore strategies for emotional well-being.",
    icon: "/desktop1/what-makes/card-1.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 2,
    title: "Accessible and Affordable Support",
    description:
      "No more barriers like high costs or long wait times. FeelAttune  offers connection to immediate, non-clinical emotional support that fits your schedule and budget.",
    icon: "/desktop1/what-makes/card-2.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 3,
    title: "Focused on Everyday Challenges",
    description:
      "While therapy addresses severe mental health conditions, this service is ideal for managing everyday stress, coping with life transitions, or building self-confidence.",
    icon: "/desktop1/what-makes/card-3.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 4,
    title: <>No Stigma,<br />Just Support</>,
    description:
      "Seeking support has never been easier. FeelAttune  normalizes conversations about mental wellness, creating a space that prioritizes connection and growth over clinical formality.",
    icon: "/desktop1/what-makes/card-4.svg", // Replace with an actual image or SVG if needed
  },
  {
    id: 5,
    title: "Privacy and Confidentiality",
    description:
      "Your well-being and privacy are our top priority. All conversations are confidential, ensuring that you can speak freely and openly without concerns.",
    icon: "/desktop1/what-makes/card-5.svg", // Replace with an actual image or SVG if needed
  },
];

function WhatMakesUsDifferent() {
  return (
    <div className="bg-[#f4efea]" id="what-make-us-different">
      <div className="max-w-[1440px] p-[114px] mx-auto space-y-[39px]">
        {/* Title Section */}
        <h1 className="text-[76px] leading-[76px] font-miniature text-left">
          What Makes Us Different?
        </h1>
        <p className="text-lg text-left max-w-[677px]">
          At FeelAttune , we understand that mental wellness is personal, and
          everyone’s journey is unique. Here’s why our platform is the right
          place for you.
        </p>

        {/* Feature Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px] max-w-[1080px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-black rounded-[30px] p-[18px] pt-[40px] space-y-[22]"
            >
              <img src={feature.icon} alt="Card Icon" className="w-[55px] h-[55px] mb-5" />
              <h3 className="font-miniature text-[30px] leading-[39px] pb-2">
                {feature.title}
              </h3>
              <p className="text-[16px] leading-[22px] capitalize">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="relative z-10 text-[18px] leading-[26px] max-w-[630px]">
          Choose FeelAttune  for an approachable, supportive, and stigma-free experience in managing your emotional health and well-being.
        </p>

        {/* Footer Section */}
        <div className="relative z-0">
          <a href="https://signup.feelattune.com/t/jcLDEqP45Aus?Terms_of_Use=https%3A%2F%2Ffeelattune.com%[…]use&TermsofUse=https%3A%2F%2Ffeelattune.com%2Fterms-of-use">
            <button className="bg-[#5200FF] hover:bg-purple-800 relative z-10 text-white py-3 px-6 rounded-full">
              Connect Now
            </button>
          </a>
          <img src="/desktop1/what-makes/sitting-girl.svg" alt="Sitting girl" className="absolute max-xl:-right-[10%] right-0 z-0 max-xl:bottom-[300%] -bottom-1" />
        </div>
      </div>
    </div>
  );
}

export default WhatMakesUsDifferent;
