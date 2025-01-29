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
            src={"/desktop/as-seen-in/seen1.svg"}
            alt="Time Logo"
            className="max-xl:h-[25px] h-[54px] w-[131px]"
          />
          <img
            src={"/desktop/as-seen-in/seen2.svg"}
            alt="NewsNation Logo"
            className="max-xl:h-[25px] h-[52px] w-[111px]"
          />
          <img
            src={"/desktop/as-seen-in/seen3.svg"}
            alt="Axios Logo"
            className="max-xl:h-[20px] h-[58px] w-[140px]"
          />
          <img
            src={"/desktop/as-seen-in/seen4.png"}
            alt="BBC Logo"
            className="max-xl:h-[25px] h-[50px] w-[140px]"
          />
          <img
            src={"/desktop/as-seen-in/seen5.svg"}
            alt="INC Logo"
            className="max-xl:h-[25px] h-[50px] w-[127px]"
          />
          <img
            src={"/desktop/as-seen-in/seen6.svg"}
            alt="INC Logo"
            className="max-xl:h-[25px] h-[58px] w-[113px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
