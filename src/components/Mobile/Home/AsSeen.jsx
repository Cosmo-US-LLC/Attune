// import Image from 'next/image'
import React from 'react'

function AsSeen() {
  return (
    <div className='bg-[#F4EFEA] py-6 px-5 space-y-[9px]'>
      <p className='font-miniature text-[15px] text-center'>
        Proudly Supporting
      </p>
      
      <div className='bg-white flex flex-wrap gap-[27px] justify-center items-center max-w-[350px] mx-auto py-3 px-[19px] rounded-[11.1px]'>
        <img src="/desktop/as-seen-in/seen4.png" alt="Time" className='object-contain w-[73px] h-[26px]' />
        <img src="/desktop/as-seen-in/seen5.svg" alt="Time" className='object-contain w-[66px] h-[26px]' />
        <img src="/desktop/as-seen-in/seen6.svg" alt="Time" className='object-contain w-[59px] h-[30px]' />
        <img src="/desktop/as-seen-in/seen1.svg" alt="Time" className='object-contain w-[68px] h-[28px]' />
        <img src="/desktop/as-seen-in/seen2.svg" alt="Time" className='object-contain w-[58px] h-[27px]' />
        <img src="/desktop/as-seen-in/seen3.svg" alt="Time" className='object-contain w-[73px] h-[30px]' />
      </div>
    </div>
  )
}

export default AsSeen
