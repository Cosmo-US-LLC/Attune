// import Image from 'next/image';
// import timeImage from "@/public/desktop/as-seen-in/time.svg";
// import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] max-2xl:px-[100px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-row justify-center items-center max-xl:gap-[26px] gap-[78px]">
        <p className="font-miniature max-xl:text-[26px] text-[30px] text-left">
          Proudly
          <br />
          Supporting
        </p>

        <div className="flex items-center justify-center max-xl:space-x-[33px] space-x-[24px] rounded-[30px] bg-white py-[33px] px-[51px] w-fit">
          <img
            src={"/desktop/as-seen-in/logo1.webp"}
            alt="Time Logo"
            className="h-[37px] w-[102px]"
          />
          <img
            src={"/desktop/as-seen-in/logo2.webp"}
            alt="NewsNation Logo"
            className="h-[37px] w-[120px]"
          />
          <img
            src={"/desktop/as-seen-in/logo3.webp"}
            alt="Axios Logo"
            className="h-[56px] w-[137px]"
          />
          <img
            src={"/desktop/as-seen-in/logo4.webp"}
            alt="BBC Logo"
            className="h-[58px] w-[158px]"
          />
          <img
            src={"/desktop/as-seen-in/logo5.webp"}
            alt="INC Logo"
            className="h-[47px] w-[131px]"
          />
          <img
            src={"/desktop/as-seen-in/logo6.webp"}
            alt="INC Logo"
            className="h-[57px] w-[112px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
