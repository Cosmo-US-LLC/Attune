// import Image from 'next/image';
// import timeImage from "@/public/desktop/as-seen-in/time.svg";
// import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
// import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
// import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
// import incImage from "@/public/desktop/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] h-[260px] w-full">
      <div className="w-full h-full flex flex-row justify-center items-center gap-12">
        <p className="text-gray-700 text-lg font-semibold text-center  ">
          As Seen In:
        </p>

        <div className="flex items-center justify-center space-x-8 rounded-xl bg-white py-5 px-8">
          
          <img src={"/desktop/as-seen-in/time.svg"} alt="NewsWatch Logo" className="h-[24px] w-[96px]" />
          <img src= {"/desktop/as-seen-in/news-nation.svg"} alt="Axios Logo" className="h-[24px] w-[96px]" />
          <img src={"/desktop/as-seen-in/axios.svg"} alt="BBC Logo" className="h-[24px] w-[96px]" />
          <img src={"/desktop/as-seen-in/bbc.svg"} alt="Axios Logo" className="h-[24px] w-[96px]" />
          <img src={"/desktop/as-seen-in/inc.svg"} alt="BBC Logo" className="h-[24px] w-[96px]" />
           
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
