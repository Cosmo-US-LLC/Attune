import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

function YourPath() {
  return (
    <div className='bg-white py-[30px] px-5 space-y-6'>
        <p className='font-miniature text-center text-[38px]'>Your Path to Support</p>
      
        <div className='space-y-5'>
            <SupportCards bg="bg-[#38AB9B]" img="/mobile/yourPath/seeking1.png" title="Seeking Connection?" points={[
                {
                    title: "",
                    body: ""
                }
            ]} />
            {/* <ul className='list-disc text-[15px] leading-[22px]'>
                <li><strong>Loneliness:</strong> People Craving Connection And A Listening Ear.</li>
                <li><strong>Emotional Support:</strong> Those feeling isolated and desiring a safe space to share their thoughts.</li>
            </ul> */}
        </div>
    </div>
  )
}

function SupportCards({bg, img, title, points}) {
    return (
    // <div className={clsx('p-[14px] rounded-3xl', classes)}>
    <div className={"p-[14px] rounded-3xl space-y-6" + ` ${bg}`}>
        <Image src={img} alt="Seeking connection 1" width={322} height={151} className='object-contain' />

        <div className='space-y-[14px]'>
            <h2 className='text-white font-miniature text-[26px]'>
                {title}
            </h2>

            <ul className='list-disc text-[15px] leading-[22px]'>
                {points?.map((point, id) => (
                    <li key={id} className=''>
                        <strong>{point?.title}:</strong>
                    </li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default YourPath
