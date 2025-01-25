import React from 'react'

function FooterMobile() {
  return (
    <div className='relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px] overflow-hidden'>
      <div className='relative z-10'>
        <div className="flex flex-row items-start justify-start">
          <h1 className="text-left font-miniature text-[38px]">Talk to a <br />professional</h1>
        </div>
        <p className="mt-6">
        We would like to acknowledge the traditional, ancestral, and unceded territory of the many First Nations, Metis, and Inuit who have lived and cared for the lands known as Canada for generations. We are grateful for the traditional knowledge keepers and elders who are still with us today and those who have gone before us. We make this acknowledgment as an act of reconciliation and gratitude to those whose territory we reside on.
        </p>
        <div className="relative mt-8 flex flex-row justify-between items-center">
          <div className="flex flex-col gap-4 font-[500]">
            <a href='#'>Who we serve</a>
            <a href='#'>our approach</a>
            <a href='#'>What we do</a>
            <a href='#'>resources</a>
          </div>
          <img src="/mobile/footer/footer_heart.svg" alt="Time" />
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
        <div className='my-4 border-[0.5px] border-[black] w-full' />
        <p className="mt-4 text-left">
        We would like to acknowledge the traditional, ancestral, and unceded territory of the many First Nations, Metis, and Inuit who have lived and cared for the lands known as Canada for generations. We are grateful for the traditional knowledge keepers and elders who are still with us today and those who have gone before us. We make this acknowledgment as an act of reconciliation and gratitude to those whose territory we reside on.
        </p>
      </div>
      <div className='absolute top-0 left-0 w-full h-full z-0 flex items-center'>
        <h1 className='font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0'>Att<span className="italic">une</span></h1>
      </div>
    </div>
  )
}

export default FooterMobile
