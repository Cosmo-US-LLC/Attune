function WhyChooseListener() {
  return (
    <div id="WhyChooseD" className="bg-[#F4EFEA] p-[105px] space-y-[87px]">
      <h1 className="text-[76px] font-miniature text-center">
        Why Choose a Listener?
      </h1>

      <div className="overflow-x-auto max-w-7xl mx-auto">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="border-b border-black grid grid-cols-10">
              <th className="p-[20px] text-left text-[20px] font-[500] flex items-center col-span-4">
                Feature
              </th>
              <th className="col-span-3 p-[20px] border-l border-black text-left flex justify-center items-center leading-[22px] text-[43.85px] font-[400] font-miniature bg-[#e5ff7d]">
                Att<span className="italic">une</span>
              </th>
              <th className="col-span-3 p-[20px] border-l border-black text-left text-[20px] font-[500] flex justify-center items-center">
                Traditional Therapy
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="font-[500]">
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Accessibility
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[10px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Immediate, <br/> anytime support
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Long wait times for appointments.
              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Cost
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Affordable for all income levels
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/exclaim.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Expensive, often requiring insurance.

              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Focus
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Everyday challenges, resilience.
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Severe mental health issues.

              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Purpose
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Judgment-free emotional support.
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Clinical interventions
              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Stigma
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Low stigma, human connection.
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                May carry stigma.
              </td>
            </tr>
            <tr className=" grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Ideal For
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Everyday clarity and motivation.
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div className="min-w-[40px]">
                  <img
                    src="/desktop/why-choose/exclaim.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Severe emotional distress.
              </td>
            </tr>
          </tbody>
        </table>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-[47px]">
          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-lg">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseListener;
