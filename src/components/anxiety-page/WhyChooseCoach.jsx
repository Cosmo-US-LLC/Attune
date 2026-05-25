import { Fragment } from "react";
import { Link } from "react-router-dom";

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
    <div id="why-choose-coach" className="bg-[#F4EFEA]">
      {/* Mobile — Figma 4791:19681 */}
      <div className="flex flex-col items-center gap-6 px-5 py-8 md:hidden">
        <h2 className="w-full text-center font-miniature text-[42px] font-bold leading-[50px] text-black">
          Why Choose a{" "}
          <span className="text-[#FF6F61]">Life Coach?</span>
        </h2>

        <div className="flex w-full flex-col items-center gap-8">
          <div className="grid w-full grid-cols-2">
            <div className="flex items-center justify-center bg-[#E5FF7D] px-2 py-5">
              <p className="font-miniature text-[32px] leading-10 text-black">
                Att<span className="italic">une</span>
              </p>
            </div>
            <div className="flex items-center justify-center px-2 py-5">
              <p className="text-center text-[16px] font-medium leading-10 text-black">
                Traditional Therapy
              </p>
            </div>

            {features.map((feature) => (
              <Fragment key={feature.title}>
                <div className="flex items-start gap-3 border-t border-black bg-[#E5FF7D] px-2 py-4">
                  <img
                    src="/desktop1/why-choose/tick.svg"
                    alt=""
                    className="size-6 shrink-0"
                  />
                  <p className="text-[16px] font-medium leading-[22px] text-black">
                    {feature.attune}
                  </p>
                </div>
                <div className="flex items-start gap-3 border-t border-black px-2 py-4">
                  <img
                    src={
                      feature.cross
                        ? "/desktop1/why-choose/cross.svg"
                        : "/desktop1/why-choose/exclaim.svg"
                    }
                    alt=""
                    className="size-6 shrink-0"
                  />
                  <p className="text-[16px] font-medium leading-[22px] text-black">
                    {feature.traditional}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>

          <Link
            to="/signup-anxiety"
            className="inline-flex w-[135px] items-center justify-center rounded-full bg-[#5200FF] p-2.5 text-[16px] font-medium leading-[26px] text-white transition-colors hover:bg-purple-800"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Desktop — unchanged */}
      <div className="hidden space-y-16 px-5 py-[60px] md:block md:space-y-16 md:px-[144px] md:py-[80px]">
        <h2 className="text-center font-miniature text-[42px] font-bold leading-[50px] text-black md:text-[54px] md:leading-[62px]">
          Why Choose a{" "}
          <span className="text-[#FF6F61]">Life Coach?</span>
        </h2>

        <div className="mx-auto max-w-7xl overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse">
            <thead>
              <tr className="grid grid-cols-10 border-b border-black">
                <th className="col-span-4 flex items-center p-3 text-left text-[14px] font-medium leading-[1.2] md:p-5 md:text-[20px]">
                  Feature
                </th>
                <th className="col-span-3 flex items-center justify-center border-l border-black bg-[#e5ff7d] p-3 text-left font-miniature text-[28px] font-normal leading-[normal] md:p-5 md:text-[43.85px]">
                  FeelAtt<span className="italic">une</span>
                </th>
                <th className="col-span-3 flex items-center justify-center border-l border-black p-3 text-left text-[14px] font-medium leading-[1.2] md:p-5 md:text-[20px]">
                  Traditional Therapy
                </th>
              </tr>
            </thead>

            <tbody className="font-medium">
              {features.map((feature, id) => (
                <tr
                  key={feature.title}
                  className={`grid grid-cols-10 ${id < features.length - 1 ? "border-b border-black" : ""}`}
                >
                  <td className="col-span-4 flex items-center p-3 text-[15px] leading-[1.2] md:p-5 md:text-[25px]">
                    {feature.title}
                  </td>
                  <td className="col-span-3 flex items-center gap-2 border-l border-black bg-[#e5ff7d] p-3 pl-3 text-[13px] leading-[1.2] md:gap-[10px] md:p-5 md:pl-[60px] md:text-[20px]">
                    <div className="min-w-[20px] md:min-w-[40px]">
                      <img
                        src="/desktop1/why-choose/tick.svg"
                        alt=""
                        className="h-5 w-5 md:h-10 md:w-10"
                      />
                    </div>
                    {feature.attune}
                  </td>
                  <td className="col-span-3 flex items-center gap-2 border-l border-black p-3 pl-3 text-[13px] leading-[1.2] md:gap-[15px] md:p-5 md:pl-[60px] md:text-[20px]">
                    <div className="min-w-[20px] md:min-w-[40px]">
                      <img
                        src={
                          feature.cross
                            ? "/desktop1/why-choose/cross.svg"
                            : "/desktop1/why-choose/exclaim.svg"
                        }
                        alt=""
                        className="h-5 w-5 md:h-10 md:w-10"
                      />
                    </div>
                    {feature.traditional}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link
            to="/signup-anxiety"
            className="mx-auto mt-12 flex w-fit items-center justify-center rounded-full bg-[#5200FF] px-5 py-2.5 text-[16px] font-medium leading-[26px] text-white transition-colors hover:bg-purple-800 md:mt-12"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseCoach;
