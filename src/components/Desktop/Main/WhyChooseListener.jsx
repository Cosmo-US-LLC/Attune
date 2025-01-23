function WhyChooseListener() {
  return (
    <div className="bg-white p-[105px] space-y-[87px]">
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
                Affordability
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[10px]  bg-[#e5ff7d]">
                <div>
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                More Affordable
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div>
                  <img
                    src="/desktop/why-choose/exclaim.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Expensive
              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Accessibility
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div>
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Anytime, Anywhere
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div>
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Requires appointments
              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Support for Everyday Issues
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div>
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Stress, loneliness
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div>
                  <img
                    src="/desktop/why-choose/exclaim.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Diagnosis-focused
              </td>
            </tr>
            <tr className="border-b border-black grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Approachability
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div>
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                No clinical intimidation
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div>
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Intimidating
              </td>
            </tr>
            <tr className="grid grid-cols-10">
              <td className="p-[20px] text-[25px] flex items-center col-span-4">
                Judgment-Free
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]  bg-[#e5ff7d]">
                <div>
                  <img
                    src="/desktop/why-choose/tick.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Safe spaces
              </td>
              <td className="col-span-3 p-[20px] pl-[60px] border-l border-black text-[20px] flex items-center gap-[15px]">
                <div>
                  <img
                    src="/desktop/why-choose/cross.svg"
                    alt="Tick"
                    className="w-[40px] h-[40px]"
                  />
                </div>
                Less personal setting
              </td>
            </tr>
          </tbody>
        </table>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-[47px]">
          <button className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseListener;
