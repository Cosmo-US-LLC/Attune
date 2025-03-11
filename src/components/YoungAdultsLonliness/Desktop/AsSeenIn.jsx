// import Image from 'next/image';
// import timeImage from "@/public/desktop2/as-seen-in/time.svg";
// import newsImage from "@/public/desktop2/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop2/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop2/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop2/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] max-2xl:px-[50px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-row justify-center items-center max-xl:gap-[26px] gap-[78px]">
        <p className="font-miniature max-xl:text-[26px] text-[30px] text-left">
          Proudly
          <br />
          Supporting
        </p>

        <div className="flex items-center justify-center max-xl:space-x-[30px] space-x-[24px] rounded-[30px] bg-white py-[33px] px-[51px] w-fit">
          <img
            src={"/desktop2/as-seen-in/seen-in (6).webp"}
            alt="Time Logo"
            className=" h-[37px] "
          />
          <img
            src={"/desktop2/as-seen-in/seen-in (5).webp"}
            alt="NewsNation Logo"
            className="h-[40px] "
          />
          <img
            src={"/desktop2/as-seen-in/seen-in (4).webp"}
            alt="Axios Logo"
            className=" h-[56px]"
          />
          <img
            src={"/desktop2/as-seen-in/seen-in (3).webp"}
            alt="BBC Logo"
            className="h-[57px] "
          />
          <img
            src={"/desktop2/as-seen-in/seen-in (2).webp"}
            alt="INC Logo"
            className=" h-[50px] "
          />
          <img
            src={"/desktop2/as-seen-in/seen-in (1).webp"}
            alt="INC Logo"
            className=" h-[59px] "
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
