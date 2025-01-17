import Image from 'next/image'
import React from 'react'

function NoNeed() {
  return (
    <div className='bg-white pt-[30px]'>
        <div className='px-5'>
            <Image src="/mobile/noNeed/sun.svg" alt="Sun" height={47} width={44} className='object-contain' />

            <h1 className='pt-4 pb-6 font-miniature text-[38px]'>No need to<br /> endure</h1>

            <div className='w-[290px] h-[276px] relative mx-auto mb-5 bg-transparent border border-black rounded-[16.5px]'>
                <Image src="/mobile/noNeed/blonde-girl.png" alt="Girl" height={253} width={185} className='object-contain absolute left-1 bottom-0' />
                <Image src="/mobile/noNeed/mini1.png" alt="Contacts" height={125} width={126} className='object-contain absolute right-5 -top-8' />
                <Image src="/mobile/noNeed/mini2.png" alt="Cartoon" height={70} width={72} className='object-contain absolute right-2 bottom-2' />
                <Image src="/mobile/noNeed/bird.svg" alt="Bird" height={40} width={45} className='object-contain absolute -right-7 -top-14' />
            </div>

            <div className='flex justify-between items-center mb-4'>
                <Image src="/mobile/noNeed/moods.svg" alt="Bird" height={75} width={50} className='object-contain' />
                <Image src="/mobile/noNeed/clouds.svg" alt="Bird" height={34} width={63} className='object-contain pb-[10px]' />
            </div>
        </div>

        <div className='relative bg-[#FFD23F] h-[61px]'>
            <h2 className='absolute right-[20px] -bottom-1 leading-snug text-[38px] font-miniature'>Life's trials<br /> alone.</h2>
        </div>
    </div>
  )
}

export default NoNeed
