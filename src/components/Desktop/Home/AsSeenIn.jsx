// import Image from 'next/image';
// import timeImage from "@/public/desktop/as-seen-in/time.svg";
// import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] max-2xl:px-[100px] px-[150px] py-[50px] w-full">
      <div className="max-w-[1440px] mx-auto w-full h-full flex flex-row justify-center items-center max-xl:gap-[26px] gap-[41px]">
        <p className="font-miniature max-xl:text-[26px] text-[30px] text-start  ">
        Proudly <br /> Supporting
        </p>

        <div className="flex items-center justify-center max-xl:space-x-[24px] space-x-[24px] rounded-[30px] bg-white py-[33px] max-w-[948px] w-[100%]">
          
          <img src={"/desktop/as-seen-in/as-seen (6).svg"} alt="Time Logo" className="h-[80px]" />
          <img src= {"/desktop/as-seen-in/as-seen (5).svg"} className="h-[70px]" alt="NewsNation Logo"  />
          <img src={"/desktop/as-seen-in/as-seen (4).svg"} alt="Axios Logo" className="h-[50px]" />
          <img src={"/desktop/as-seen-in/as-seen (3).svg"} alt="BBC Logo" className="h-[50px]" />
          <img src={"/desktop/as-seen-in/as-seen (2).svg"} alt="INC Logo" className="h-[40px]" />
          <img src={"/desktop/as-seen-in/as-seen (1).svg"} alt="INC Logo" className="h-[40px]" />
           
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
