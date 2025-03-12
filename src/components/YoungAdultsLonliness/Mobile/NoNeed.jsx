import React from 'react'

function NoNeed() {
  return (
    <div className='bg-white pt-[30px]'>
        <div className='px-5'>
            <img src="assets/mobile2/noNeed/sun.svg" alt="Sun" className='object-contain h-[47px] w-[44px]' />

            <h1 className='pt-4 pb-6 font-miniature text-[38px]'>No need to<br /> endure</h1>

            <div className='w-[290px] h-[276px] relative mx-auto mb-5 bg-transparent border border-black rounded-[16.5px]'>
                <img src="assets/mobile2/noNeed/blonde-girl.webp" alt="Girl" className='object-contain absolute left-1 bottom-0 h-[253px] w-[185px]' />
                <img src="assets/mobile2/noNeed/mini1.webp" alt="Contacts" className='object-contain absolute right-5 -top-8 h-[125px] w-[126px]' />
                <img src="assets/mobile2/noNeed/mini2.webp" alt="Cartoon" className='object-contain absolute right-2 bottom-2 h-[70px] w-[72px]' />
                <img src="assets/mobile2/noNeed/bird.svg" alt="Bird" className='object-contain absolute -right-7 -top-14 h-[40px] w-[45px]' />
            </div>

            <div className='flex justify-between items-center mb-4'>
                <img src="assets/mobile2/noNeed/moods.svg" alt="Bird" className='object-contain h-[75px] w-[50px]' />
                <img src="assets/mobile2/noNeed/clouds.svg" alt="Bird" className='object-contain pb-[10px] h-[34px] w-[63px]' />
            </div>
        </div>

        <div className='relative bg-[#FFD23F] h-[61px]'>
            <h2 className='absolute right-[20px] -bottom-1 leading-snug text-[38px] font-miniature'>Life's trials<br /> alone.</h2>
        </div>
    </div>
  )
}

export default NoNeed
