// import React from 'react'
// import { Button } from "../ui/button";

// function FooterMobile() {
//   return (
//     <div className='relative min-h-[738px] bg-[#E5DDD4] px-5 py-[30px]'>
//       <div className='relative z-10'>
//         <div className="flex flex-row items-start justify-between">
//           <h1 className="text-left font-miniature text-[38px]">Talk to a <br />professional</h1>
//           <img src="/desktop2/logo-footer.svg" alt="Attune Logo" className="mt-2" />
//         </div>
//         <p className="mt-6">
//           Looking for someone to listen? Our trained Listeners are here to provide non-judgmental, compassionate support whenever you need it. Whether you’re managing stress, navigating life transitions, or simply craving a connection, we’re here to help.
//         </p>
//         <div className="relative flex flex-row items-center justify-between mt-8">
//           <div className="flex flex-col gap-4 font-semibold">
//             <p>Who we serve</p>
//             <p>our approach</p>
//             <p>What we do</p>
//             <p>resources</p>
//           </div>
//           <img src="/mobile2/footer/footer_heart.svg" alt="Time" />
//         </div>
//         <div className="flex flex-row items-center justify-between gap-4 mt-8">
//                            <div className="flex flex-row gap-3 ">
//                            <img
//                              src="/mobile2/footer/linkedIn.svg"
//                              alt="linkedIn"
//                              className="h-[30px] w-[30px]"
//                            />
//                            <img
//                              src="/mobile2/footer/facebook.svg"
//                              alt="facebook"
//                              className="h-[30px] w-[30px]"
//                            />
//                            <img
//                              src="/mobile2/footer/instagram.svg"
//                              alt="instagram"
//                              className="h-[30px] w-[30px]"
//                            />
//                           </div>
//                           <div className="">
//                           <Button className="bg-[#5200FF] text-white  py-3 rounded-full">Get Started</Button>
//                           </div>
//                          </div>
//         <p className="mt-8 text-left">
//           © 2024 Attune. All Rights Reserved
//         </p>
//         <div className='my-4 border-[0.5px] border-[black] w-full' />
//         <p className="mt-4 text-left">
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>
//       <div className='absolute top-0 left-0 z-0 flex items-center w-full h-full'>
//         <h1 className='font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0'>Att<span className="italic">une</span></h1>
//       </div>
//     </div>
//   )
// }

// export default FooterMobile

import React, { useState } from "react";
import { Button } from "../ui/button";

function FooterMobile() {
  const [sideOpen, setSideOpen] = useState(false);
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };
  return (
    <div className="relative min-h-[738px] overflow-hidden bg-[#E5DDD4] px-5 py-[30px]">
      <div className="relative z-10">
        <div className="flex flex-row items-start justify-between">
          <h1 className="text-left font-miniature text-[38px]">
            Talk to a <br />
            professional
          </h1>
          <img
            src="/mobile2/feel-attune-logo.webp"
            alt="Attune Logo"
            className="mt-2 w-[118px] h-[36px]"
          />
        </div>
        <p className="mt-6">
          Looking for someone to listen? Our trained Listeners are here to
          provide non-judgmental, compassionate support whenever you need it.
          Whether you’re managing stress, navigating life transitions, or simply
          craving a connection, we’re here to help.
        </p>
        <div className="relative flex flex-row items-center justify-between mt-8">
          <div className="flex flex-col gap-4 font-[500]">
            <a href={"#WhyDoesM"} onClick={(e) => handleScroll(e, "WhyDoesM", 30)}>
              Path To Support
            </a>
            <a href={"#HowitworksM"} onClick={(e) => handleScroll(e, "HowitworksM", 50)}>
              How It Works
            </a>
            <a href={"#WhyChooseM"} onClick={(e) => handleScroll(e, "WhyChooseM", 210)}>
              Our Approach
            </a>
            <a href={"#FaqM"} onClick={(e) => handleScroll(e, "FaqM", 50)}>
              FAQs
            </a>
          </div>
          <img src="/mobile2/footer/footer_heart.svg" alt="Time" />
        </div>
        <div className="flex flex-row items-center justify-between gap-4 mt-8">
          <div className="flex flex-row gap-3 ">
            <a href="https://www.linkedin.com/company/easecare/">
              <img
                src="/mobile2/footer/linkedIn.svg"
                alt="linkedIn"
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="https://www.facebook.com/easecare.ca">
              <img
                src="/mobile2/footer/facebook.svg"
                alt="facebook"
                className="h-[30px] w-[30px]"
              />
            </a>
            <a href="https://www.instagram.com/easecare.ca/">
              <img
                src="/mobile2/footer/instagram.svg"
                alt="instagram"
                className="h-[30px] w-[30px]"
              />
            </a>
          </div>
          {/* <div className="">
            <a href="https://innovacare.tech/listenerhub/signup">
              <Button className="bg-[#5200FF] text-white  py-3 rounded-full">
                Get Started
              </Button>
            </a>
          </div> */}
        </div>
        <p className="mt-8 text-left">© 2025 Attune. All Rights Reserved</p>
        <div className="my-4 border-[0.5px] border-[black] w-full" />
        <p className="mt-4 text-left capitalize">
          We would like to acknowledge the traditional, ancestral, and unceded
          territory of the many First Nations, Metis, and Inuit who have lived
          and cared for the lands known as Canada for generations. We are
          grateful for the traditional knowledge keepers and elders who are
          still with us today and those who have gone before us. We make this
          acknowledgment as an act of reconciliation and gratitude to those
          whose territory we reside on.
        </p>
      </div>
      <div className="absolute top-0 left-0 z-0 flex items-center w-full h-full">
        <h1 className="font-miniature text-center w-full text-[#ded6ce] text-[35vw] z-0">
          Att<span className="italic">une</span>
        </h1>
      </div>
    </div>
  );
}

export default FooterMobile;
