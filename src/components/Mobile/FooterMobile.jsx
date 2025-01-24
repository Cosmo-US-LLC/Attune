import React from 'react'
import { Button } from "../ui/button";

function FooterMobile() {
  return (
    <div className='relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px]'>
      <div className='relative z-10'>
        <div className="flex flex-row items-start justify-between">
          <h1 className="text-left font-miniature text-[38px]">Talk to a <br />professional</h1>
          <img src="/desktop/logo-footer.svg" alt="Attune Logo" className="mt-2" />
        </div>
        <p className="mt-6">
          Looking for someone to listen? Our trained Listeners are here to provide non-judgmental, compassionate support whenever you need it. Whether you’re managing stress, navigating life transitions, or simply craving a connection, we’re here to help.
        </p>
        <div className="relative mt-8 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-4 font-semibold">
            <p>Who we serve</p>
            <p>our approach</p>
            <p>What we do</p>
            <p>resources</p>
          </div>
          <img src="/mobile/footer/footer_heart.svg" alt="Time" />
        </div>
        <div className="flex flex-row items-center justify-between gap-4 mt-8">
                           <div className=" flex flex-row gap-3">
                           <img
                             src="/mobile/footer/linkedIn.svg"
                             alt="linkedIn"
                             className="h-[30px] w-[30px]"
                           />
                           <img
                             src="/mobile/footer/facebook.svg"
                             alt="facebook"
                             className="h-[30px] w-[30px]"
                           />
                           <img
                             src="/mobile/footer/instagram.svg"
                             alt="instagram"
                             className="h-[30px] w-[30px]"
                           />
                          </div>
                          <div className="">
                          <Button className="bg-[#5200FF] text-white  py-3 rounded-full">Get Started</Button>
                          </div>
                         </div>
        <p className="mt-8 text-left">
          © 2024 Attune. All Rights Reserved
        </p>
        <div className='my-4 border-[0.5px] border-[black] w-full' />
        <p className="mt-4 text-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-0 flex items-center'>
        <h1 className='font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0'>Att<span className="italic">une</span></h1>
      </div>
    </div>
  )
}

export default FooterMobile
