// import Image from 'next/image'
// import React from 'react'

// function AsSeen() {
//   return (
//     <div className='bg-[#F4EFEA] py-6 px-5 space-y-[9px]'>
//       <p className='font-miniature text-[15px] text-center'>
//         Proudly Supporting
//       </p>

//       <div className='bg-white flex flex-wrap gap-[27px] justify-center items-center max-w-[350px] mx-auto py-3 px-[19px] rounded-[11.1px]'>
//         <img src="/desktop/as-seen-in/seen4.png" alt="Time" className='object-contain w-[73px] h-[26px]' />
//         <img src="/desktop/as-seen-in/seen5.svg" alt="Time" className='object-contain w-[66px] h-[26px]' />
//         <img src="/desktop/as-seen-in/seen6.svg" alt="Time" className='object-contain w-[59px] h-[30px]' />
//         <img src="/desktop/as-seen-in/seen1.svg" alt="Time" className='object-contain w-[68px] h-[28px]' />
//         <img src="/desktop/as-seen-in/seen2.svg" alt="Time" className='object-contain w-[58px] h-[27px]' />
//         <img src="/desktop/as-seen-in/seen3.svg" alt="Time" className='object-contain w-[73px] h-[30px]' />
//       </div>
//     </div>
//   )
// }

import React from "react";

function AsSeen() {
  return (
    <div className="bg-[#F4EFEA] py-6   space-y-[9px]">
      <p className="font-miniature text-[38px] font-[400] text-center">
        Proudly Supporting
      </p>

      <div className="w-[100%] py-3 overflow-hidden bg-white">
        <div className="flex gap-[27px] animate-marquee whitespace-nowrap">
          <img
            src="/mobile/asSeen/logo1.webp"
            alt="Time"
            className="object-contain w-[74px] h-[27px]"
          />
          <img
            src="/mobile/asSeen/logo2.webp"
            alt="Time"
            className="object-contain w-[94px] h-[27px]"
          />
          <img
            src="/mobile/asSeen/logo3.webp"
            alt="Time"
            className="object-contain w-[100px] h-[41px]"
          />
          <img
            src="/mobile/asSeen/logo4.webp"
            alt="Time"
            className="object-contain w-[116px] h-[37px]"
          />

          <img
            src="/mobile/asSeen/logo5.webp"
            alt="Time"
            className="object-contain w-[96px] h-[35px]"
          />
          <img
            src="/mobile/asSeen/logo6.webp"
            alt="Time"
            className="object-contain w-[82px] h-[42px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AsSeen;
