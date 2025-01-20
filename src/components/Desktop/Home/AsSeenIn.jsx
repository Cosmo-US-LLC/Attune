// import Image from 'next/image';
// import timeImage from "@/public/desktop/as-seen-in/time.svg";
// import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] px-[150px] py-[50px] w-full">
      <div className="w-full h-full flex flex-row justify-center items-center gap-[41px]">
        <p className="font-miniature text-[30px] text-center  ">
          As Seen In:
        </p>

        <div className="flex items-center justify-center space-x-[73px] rounded-[30px] bg-white py-[33px] px-[51px]">
          
          <img src={"/desktop/as-seen-in/time.svg"} alt="Time Logo" className="h-[32px] w-[102px]" />
          <img src= {"/desktop/as-seen-in/news-nation.svg"} alt="NewsNation Logo" className="h-[41px] w-[135px]" />
          <img src={"/desktop/as-seen-in/axios.svg"} alt="Axios Logo" className="h-[27px] w-[106px]" />
          <img src={"/desktop/as-seen-in/bbc.svg"} alt="BBC Logo" className="h-[33px] w-[116px]" />
          <img src={"/desktop/as-seen-in/inc.svg"} alt="INC Logo" className="h-[31px] w-[90px]" />
           
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
