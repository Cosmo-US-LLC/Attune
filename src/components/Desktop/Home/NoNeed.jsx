import React from "react";

function NoNeed() {
  return (
    <section className="relative no-need-section">
      <div className="max-w-7xl h-[100%] mx-auto flex flex-col md:flex-row items-center justify-between  ">
        {/* Text Section */}
        <div className="flex-1 text-left space-y-6 absolute top-[150px] left-[100px]">
          <h1 className="text-[76px] font-miniature font-[400] leading-tight text-black">
            No need <br /> to endure
          </h1>
        </div>
        <div className="absolute bottom-[20px] right-[200px]">
          <p className="text-[46px] font-miniature font-[400]">life's trials</p>  
          <p className="text-[46px] font-miniature font-[400]">alone.</p>
        </div>
        <button className="bg-[#5200FF] text-white py-3 px-6 rounded-full font-medium hover:bg-purple-700 absolute bottom-[40px] right-[130px]">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default NoNeed;
