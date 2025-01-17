import Image from 'next/image'
import React from 'react'

function AsSeen() {
  return (
    <div className='bg-[#F4EFEA] py-6 px-5 space-y-[9px]'>
      <p className='font-miniature text-[15px] text-center'>As Seen In:</p>
      
      <div className='bg-white flex flex-wrap gap-[27px] justify-center items-center max-w-[350px] py-3 px-[19px] rounded-[11.1px]'>
        <Image src="/mobile/asSeen/time.png" alt="Time" width={70} height={22} className='object-contain w-[70px] h-[22px]' />
        <Image src="/mobile/asSeen/news.png" alt="Time" width={93} height={29} className='object-contain w-[93px] h-[29px]' />
        <Image src="/mobile/asSeen/axios.png" alt="Time" width={74} height={19} className='object-contain w-[74px] h-[19px]' />
        <Image src="/mobile/asSeen/bbc.png" alt="Time" width={80} height={23} className='object-contain w-[80px] h-[23px]' />
        <Image src="/mobile/asSeen/inc.png" alt="Time" width={62} height={22} className='object-contain w-[62px] h-[22px]' />
      </div>
    </div>
  )
}

export default AsSeen
