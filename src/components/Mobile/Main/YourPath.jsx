import React from 'react'
import { Button } from '@/components/ui/button'
// import clsx from 'clsx'
// import Image from 'next/image'

function YourPath() {
  return (
    <div id="Mpathtosupport" className='bg-white py-[30px] px-5 space-y-6'>
        <p className='font-miniature text-center text-[38px]'>Your Path to Support</p>
      
        <div className='space-y-5'>
            <SupportCards bg="bg-[#38AB9B]" img="/mobile/yourPath/seeking1.webp" title="Seeking Connection?" points={[
                {
                    title: "Loneliness",
                    body: "People Craving Connection And A Listening Ear."
                },
                {
                    title: "Emotional Support",
                    body: "Those feeling isolated and desiring a safe space to share their thoughts."
                }
            ]} />
            
            <SupportCards bg="bg-[#F097DD]" img="/mobile/yourPath/seeking2.webp" title="Facing Mental Barriers?" points={[
                {
                    title: "Mental Health Barriers:",
                    body: " Individuals facing mental health challenges but hesitant to seek traditional clinical care due to stigma, cost, or rigidity."
                },
                {
                    title: "Underserved Groups",
                    body: "Young adults transitioning to independence, seniors experiencing isolation, and caregivers managing stress."
                }
            ]} />
            
            {/* <SupportCards bg="bg-[#FF6F61]" img="/mobile/yourPath/seeking3.webp" title="Seeking Connection?" points={[
                {
                    title: "Loneliness",
                    body: "People Craving Connection And A Listening Ear."
                },
                {
                    title: "Emotional Support",
                    body: "Those feeling isolated and desiring a safe space to share their thoughts."
                }
            ]} /> */}
        </div>
    </div>
  )
}

function SupportCards({bg, img, title, points}) {
    return (
    <div className={"p-[14px] rounded-3xl space-y-6" + ` ${bg}`}>
        <img src={img} alt="Seeking connection 1" className='w-[100%]  object-contain' />

        <div className='space-y-[14px]'>
            <h2 className='text-white font-miniature text-[26px]'>
                {title}
            </h2>

            <ul className='list-disc text-[15px] leading-[22px] pl-[19px] space-y-[22px] text-white'>
                {points?.map((point, id) => (
                    <li key={id} className='capitalize'
                        style={{
                            listStyleImage: "url(/mobile/yourPath/list-disc.svg)"
                        }}
                    >
                        <strong>{point?.title}:</strong> {point?.body}
                    </li>
                ))}
            </ul>
        </div>
              
        <a href='https://innovacare.tech/listenerhub/signup' className='flex justify-center'>
            <Button className="bg-[#5200FF] rounded-full text-[15px]">Get Started</Button>
        </a>
    </div>
    )
}

export default YourPath
