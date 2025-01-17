import Image from 'next/image';
import timeImage from "@/public/desktop/as-seen-in/time.svg";
import newsImage from "@/public/desktop/as-seen-in/news-nation.svg";
import axiosImage from "@/public/desktop/as-seen-in/axios.svg";
import bbcImage from "@/public/desktop/as-seen-in/bbc.svg";
import incImage from "@/public/desktop/as-seen-in/inc.svg";

function AsSeenIn() {
  return (
    <div className="bg-[#F4EFEA] h-[260px] w-full">
      <div className="w-full h-full flex flex-row justify-center items-center gap-12">
        <p className="text-gray-700 text-lg font-semibold text-center  ">
          As Seen In:
        </p>

        <div className="flex items-center justify-center space-x-8 rounded-xl bg-white py-5 px-8">
          
          <Image src={timeImage} alt="NewsWatch Logo" width={96} height={24} />
          <Image src= {newsImage} alt="Axios Logo" width={96} height={24} />
          <Image src={axiosImage} alt="BBC Logo" width={96} height={24} />
          <Image src={bbcImage} alt="Axios Logo" width={96} height={24} />
          <Image src={incImage} alt="BBC Logo" width={96} height={24} />
           
        </div>
      </div>
    </div>
  );
}

export default AsSeenIn;
