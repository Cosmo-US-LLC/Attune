import React from 'react'

function FooterMobile() {
  return (
    <div className='min-h-[738px] bg-[#E5DDD4] p-4'>
      <div className="flex flex-row items-start justify-start">
        <h1 className="text-left font-miniature text-[38px]">Talk to a <br />professional</h1>
      </div>
      <p className="mt-6">
        Looking for someone to listen? Our trained Listeners are here to provide non-judgmental, compassionate support whenever you need it. Whether you’re managing stress, navigating life transitions, or simply craving a connection, we’re here to help.
      </p>
      <div className="relative mt-8 flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <p>Who we serve</p>
          <p>our approach</p>
          <p>What we do</p>
          <p>resources</p>
        </div>
        <img src="/mobile/footer/footer_heart.svg" alt="Time" className='' />
      </div>
      <div className='flex flex-row items-center justify-center gap-4 mt-8'>
        <img src="/mobile/footer/facebook.svg" alt="facebook" className='' />
        <img src="/mobile/footer/instagram.svg" alt="instagram" className='' />
        <img src="/mobile/footer/x.svg" alt="x" className='' />
        <img src="/mobile/footer/linkedIn.svg" alt="linkedIn" className='' />
        <img src="/mobile/footer/youtube.svg" alt="youtube" className='' />
      </div>
      <p className="mt-8 text-left">
        © 2024 Attune. All rights reserved
      </p>
      <div className='my-4 border border-[0.5px] border-[black] w-full' />
      <p className="mt-4 text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>
  )
}

export default FooterMobile
