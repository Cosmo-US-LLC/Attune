const features = [
  {
    title: "Accessibility",
    attune: "Easy booking, on your schedule.",
    traditional: "Long wait times for appointments.",
    cross: true,
  },
  {
    title: "Cost",
    attune: "Affordable for all income levels",
    traditional: "Expensive, often requiring insurance.",
    cross: false,
  },
  {
    title: "Focus",
    attune: "Everyday challenges, resilience.",
    traditional: "Severe mental health issues.",
    cross: true,
  },
  {
    title: "Purpose",
    attune: "Judgment-free emotional support.",
    traditional: "Clinical interventions",
    cross: true,
  },
  {
    title: "Stigma",
    attune: "Low stigma, human connection.",
    traditional: "May carry stigma.",
    cross: true,
  },
  {
    title: "Ideal For",
    attune: "Everyday clarity and motivation.",
    traditional: "Severe emotional distress.",
    cross: false,
  },
];

const WhyChooseCoach = () => {
  return (
    <div id="why-choose-coach" className="bg-[#F4EFEA] px-[108px] max-md:px-4 py-[100px] max-md:py-[60px] space-y-[64px] max-md:space-y-[32px]">
      <h1 className="text-[76px] max-md:text-[40px] max-md:leading-[52px] font-miniature text-center">
        Why Choose a Life Coach?
      </h1>

      <div className="mx-auto overflow-x-auto max-w-7xl">
        <table className="w-full border-collapse min-w-[480px]">
          <thead>
            <tr className="grid grid-cols-10 border-b border-black">
              <th className="p-[20px] max-md:p-3 text-left text-[20px] max-md:text-[14px] font-[500] flex items-center col-span-4">
                Feature
              </th>
              <th className="col-span-3 p-[20px] max-md:p-3 border-l border-black text-left flex justify-center items-center leading-[22px] text-[43.85px] max-md:text-[28px] font-[400] font-miniature bg-[#e5ff7d]">
                Att<span className="italic">une</span>
              </th>
              <th className="col-span-3 p-[20px] max-md:p-3 border-l border-black text-left text-[20px] max-md:text-[14px] font-[500] flex justify-center items-center">
                Traditional Therapy
              </th>
            </tr>
          </thead>

          <tbody className="font-[500]">
            {features.map((feature, id) => (
              <tr
                key={feature.title}
                className={`grid grid-cols-10 ${id < features.length - 1 ? "border-b border-black" : ""}`}
              >
                <td className="p-[20px] max-md:p-3 text-[25px] max-md:text-[15px] flex items-center col-span-4">
                  {feature.title}
                </td>
                <td className="col-span-3 p-[20px] max-md:p-3 pl-[60px] max-md:pl-3 border-l border-black text-[20px] max-md:text-[13px] flex items-center gap-[10px] max-md:gap-2 bg-[#e5ff7d]">
                  <div className="min-w-[40px] max-md:min-w-[20px]">
                    <img
                      src="/desktop1/why-choose/tick.svg"
                      alt="Tick"
                      className="w-[40px] h-[40px] max-md:w-[20px] max-md:h-[20px]"
                    />
                  </div>
                  {feature.attune}
                </td>
                <td className="col-span-3 p-[20px] max-md:p-3 pl-[60px] max-md:pl-3 border-l border-black text-[20px] max-md:text-[13px] flex items-center gap-[15px] max-md:gap-2">
                  <div className="min-w-[40px] max-md:min-w-[20px]">
                    <img
                      src={
                        feature.cross
                          ? "/desktop1/why-choose/cross.svg"
                          : "/desktop1/why-choose/exclaim.svg"
                      }
                      alt={feature.cross ? "Cross" : "Exclaim"}
                      className="w-[40px] h-[40px] max-md:w-[20px] max-md:h-[20px]"
                    />
                  </div>
                  {feature.traditional}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Call-to-Action Button */}
        <a
          href="https://signup.feelattune.com/sign-up"
          className="w-fit mx-auto flex justify-center mt-[47px] bg-[#5200FF] hover:bg-purple-800 text-white py-3 px-8 rounded-full text-lg"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default WhyChooseCoach;
