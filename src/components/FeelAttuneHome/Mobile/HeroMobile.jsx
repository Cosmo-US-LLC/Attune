// import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function HeroMobile() {
  return (
    <div className='bg-[#FFD23F] py-[30px] px-[20px] space-y-[28px]'>
      <div className='mb-6 space-y-6'>
        <p className='text-[73.829px] font-miniature leading-[73.829px]'>
          Your Safe Space for <span className='text-[#5200FF] italic'>Support</span>
        </p>
        <p className='text-[15px] font-[500] leading-[26px] w-[350px]'>
        In a world where 1 in 5 adults experience mental health challenges, FeelAttune offers a revolutionary approach to emotional well-being. Our platform connects you with compassionate Listeners, providing a judgment-free zone for sharing your thoughts and feelings.
        </p>
      </div>
      
      <a href="https://signup.feelattune.com/sign-up">
        <Button className="bg-[#5200FF] rounded-full text-[15px]">Connect to a Listener</Button>
      </a>
      <p className="text-[25px] leading-[100%] font-[400] font-miniature text-[#000]">Starting from $39</p>

      <img src={"/mobile1/heroBg.webp"} alt='' className='h-[257.833px] w-[350px] object-contain' />
    </div>
  )
}

export default HeroMobile
