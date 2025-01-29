// import Image from 'next/image'
import React from 'react'

function AsSeen() {
  return (
    <div className='bg-[#F4EFEA] py-6 px-5 space-y-[9px]'>
      <p className='font-miniature text-[15px] text-center'>As Seen In:</p>
      
      <div className='bg-white grid grid-cols-3  gap-[20px] max-w-[350px] mx-auto py-3 px-[19px] rounded-[11.1px]'>
        <img src="/mobile/asSeen/as-seen (6).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
        <img src="/mobile/asSeen/as-seen (5).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
        <img src="/mobile/asSeen/as-seen (4).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
        <img src="/mobile/asSeen/as-seen (3).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
        <img src="/mobile/asSeen/as-seen (2).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
        <img src="/mobile/asSeen/as-seen (1).webp" alt="Time" className='object-contain h-[33px] mx-auto ' />
      </div>
    </div>
  )
}

export default AsSeen
