// import Image from 'next/image';
// import timeImage from "@/public/desktop1/as-seen-in/time.svg";
// import newsImage from "@/public/desktop1/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop1/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop1/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop1/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] max-2xl:px-[100px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-row justify-center items-center max-xl:gap-[26px] gap-[41px]">
        <p className="font-miniature max-xl:text-[26px] text-[30px] text-center  ">
          As Seen In:
        </p>

        <div className="flex items-center justify-evenly rounded-[30px] bg-white py-[33px] w-fit">
          {/* <img src={"/desktop1/as-seen-in/logo1.webp"} alt="Time Logo" className="max-xl:h-[25px] h-[32px] w-[102px]" /> */}
          <img src= {"/desktop1/as-seen-in/news-nation.svg"} alt="NewsNation Logo" className="max-xl:h-[25px] h-[41px] w-[135px]" />
          <img src={"/desktop1/as-seen-in/axios.svg"} alt="Axios Logo" className="max-xl:h-[20px] h-[27px] w-[106px]" />
          <img src={"/desktop1/as-seen-in/bbc.svg"} alt="BBC Logo" className="max-xl:h-[25px] h-[33px] w-[116px]" />
          <img src={"/desktop1/as-seen-in/inc.svg"} alt="INC Logo" className="max-xl:h-[25px] h-[31px] w-[90px]" />
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
