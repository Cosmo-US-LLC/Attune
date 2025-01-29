// import Image from 'next/image';
// import timeImage from "@/public/desktop/as-seen-in/time.svg";
// import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop/as-seen-in/inc.svg";

function ProudlySupporting() {
  return (
    <div className="bg-[#F4EFEA]  max-2xl:px-[100px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px]  mx-auto w-full h-full flex flex-row items-center max-xl:gap-[26px] gap-[73px]">
        <p className="font-miniature   font-[500] text-[30px] text-left">
          Proudly
          <br />
          Supporting
        </p>

        <div className="flex w-full items-start justify-between rounded-[30px] bg-white py-[25px] px-[52px] mr-[32px] ">
          <img
            src={"/desktop/proudly/alberta.svg"}
            alt="Alberta"
            className="max-xl:h-[25px] h-[54.3px] w-[131px]"
          />
          <img
            src={"/desktop/proudly/alberta-2.svg"}
            alt="Alberta"
            className="max-xl:h-[25px] h-[52.2px] w-[110.8px]"
          />
          <img
            src={"/desktop/proudly/rural.svg"}
            alt="Rural"
            className="max-xl:h-[20px] h-[57.6px] w-[140px]"
          />
          {/* <img src={"/desktop/proudly/health.svg"} alt="Addiction &" className="max-xl:h-[25px] h-[49.4px] w-[140px]" /> */}
          <img
            src={"/desktop/proudly/211.svg"}
            alt="211 Alberta"
            className="max-xl:h-[25px] h-[50.2px] w-[126.8px]"
          />
          <img
            src={"/desktop/proudly/npos.svg"}
            alt="NPO's"
            className="max-xl:h-[25px] h-[57.6px] w-[112.8px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProudlySupporting;
