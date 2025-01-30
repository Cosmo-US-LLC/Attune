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

        <div className="flex w-full gap-8 items-start justify-between rounded-[30px] bg-white py-[25px] px-[32px] mr-[22px] ">
          <img
            src={"/desktop/proudly/logo1.webp"}
            alt="Alberta"
            className="h-[37px] w-[102px]"
          />
          <img
            src={"/desktop/proudly/logo2.webp"}
            alt="Alberta"
            className="h-[37px] w-[129px]"
          />
          <img
            src={"/desktop/proudly/logo3.webp"}
            alt="Rural"
            className="h-[56px] w-[137px]"
          />
           <img
            src={"/desktop/proudly/logo4.webp"}
            alt="211 Alberta"
            className="h-[50px] w-[158px]"
          />
          <img
            src={"/desktop/proudly/logo5.webp"}
            alt="NPO's"
            className="h-[47px] w-[131px]"
          />
          <img
            src={"/desktop/proudly/logo6.webp"}
            alt="NPO's"
            className="h-[57px] w-[112px]"
          />
        </div>
      </div>
    </div>
  );
}

export default ProudlySupporting;
