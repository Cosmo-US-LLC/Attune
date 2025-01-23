// import Image from 'next/image'
import React from 'react'

function AsSeen() {
  return (
    <div className='bg-[#F4EFEA] py-6 px-5 space-y-[9px]'>
      <p className='font-miniature text-[15px] text-center'>As Seen In:</p>
      
      <div className='bg-white flex flex-wrap gap-[27px] justify-center items-center max-w-[350px] py-3 px-[19px] rounded-[11.1px]'>
        <img src="/mobile/asSeen/time.webp" alt="Time" className='object-contain w-[70px] h-[22px]' />
        <img src="/mobile/asSeen/news.webp" alt="Time" className='object-contain w-[93px] h-[29px]' />
        <img src="/mobile/asSeen/axios.webp" alt="Time" className='object-contain w-[74px] h-[19px]' />
        <img src="/mobile/asSeen/bbc.webp" alt="Time" className='object-contain w-[80px] h-[23px]' />
        <img src="/mobile/asSeen/inc.webp" alt="Time" className='object-contain w-[62px] h-[22px]' />
      </div>
    </div>
  )
}

export default AsSeen
