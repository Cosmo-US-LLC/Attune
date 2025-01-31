// import Image from 'next/image';
// import timeImage from "@/public/desktop1/as-seen-in/time.svg";
// import newsImage from "@/public/desktop1/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop1/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop1/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop1/as-seen-in/inc.svg";

function ProudlySupporting1() {
  return (
    <div className="bg-[#F4EFEA]  max-2xl:px-[100px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-row items-center max-xl:gap-[26px] gap-[73px]">
        <p className="font-miniature   font-[500] text-[30px] text-left">
          Proudly
          <br />
          Supporting
        </p>

        <div className="flex flex-row w-full min-w-fit gap-4 flex-wrap items-center justify-between rounded-[30px] bg-white py-[25px] px-[32px]">
          <img
            src={"/desktop1/proudly/logo1.webp"}
            alt="Alberta"
            className="h-[37px] w-[102px]"
          />
          <img
            src={"/desktop1/proudly/logo2.webp"}
            alt="Alberta"
            className="h-[37px] w-[129px]"
          />
          <img
            src={"/desktop1/proudly/logo3.webp"}
            alt="Rural"
            className="h-[56px] w-[137px]"
          />
           <img
            src={"/desktop1/proudly/logo4.webp"}
            alt="211 Alberta"
            className="h-[50px] w-[158px]"
          />
          <img
            src={"/desktop1/proudly/logo5.webp"}
            alt="NPO's"
            className="h-[47px] w-[131px]"
          />
          <img
            src={"/desktop1/proudly/logo6.webp"}
            alt="NPO's"
            className="h-[57px] w-[112px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProudlySupporting1;
