import React from 'react'
import { Button } from '@/components/ui/button'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel" 
// import clsx from 'clsx'
// import Image from 'next/image'

function YourPath() {
    const cards = [
        {
            img: "/desktop2/your-path/path1.png",
            title: "Life Transitions",
            body: "Our trained, non-judgmental Listeners provide a safe space for you to share your thoughts, feelings, and experiences without fear of judgment. You’ll always feel heard and supported."
        },
        {
            img: "/desktop2/your-path/path2.png",
            title: "Social pressures",
            body: "Whether you're at home or on the go, you can connect with a Listener from anywhere, at any time. Our platform is available to support you whenever you need it."
        },
        {
            img: "/desktop2/your-path/path3.png",
            title: "Digital Overload",
            body: "Our services are grounded in real, measurable outcomes. We focus on providing practical, effective support for a range of emotional and mental health needs, backed by data-driven results."
        },
        {
            img: "/desktop2/your-path/path4.png",
            title: "Realtionship Challenges",
            body: "We are committed to breaking down the barriers of traditional mental health care. There’s no need for clinical intervention—just real, meaningful conversations when you need them most."
        },
        {
            img: "/desktop2/your-path/path5.png",
            title: "Career Stress",
            body: "Your well-being and privacy are our top priority. All conversations are confidential, ensuring that you can speak freely and openly without concerns."
        },
    ]
  return (
    <div className='bg-white py-[30px] px-5 space-y-4' id='mobile-path-to-support'>
        <p className='font-miniature text-center text-[38px]'>Why Does Loneliness Affect So Many Young Adults?</p>
        <p className='font-[400] text-center text-[15px]'>Loneliness among young adults is more common than you think. As you navigate through major life transitions—like starting college, entering the workforce, or building new relationships—it’s easy to feel disconnected. You’re not alone—61% of young adults report feeling serious loneliness.</p>
        <p className='font-miniature font-[700] text-center text-[30px]'>Reasons for Loneliness:</p>
      
        <div className='space-y-5'>
             <Carousel className="">
                    <CarouselContent>
                        {cards?.map((card, id) => (
                            <CarouselItem key={id} className="w-full basis-1/1">
                                <div className="max-w-[274px] mx-auto border border-black bg-[#95ADF0] py-5 px-4 rounded-[20px] space-y-[20px]">
                                    <img src={card?.img} alt="Icon" className="rounded-[30px] bg-black border border-black  w-[249px] h-[213px]" />
            
                                    <div className="space-y-[14px]">
                                        <h3 className="h-[72px] flex items-center justify-center text-center text-white text-[30px] font-miniature">
                                        {card?.title}
                                        </h3>
            
                                        
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-0 bg-white border border-black disabled:border-neutral-500" />
                    <CarouselNext className="right-0 bg-white border border-black disabled:border-neutral-500" />
                  </Carousel>
        </div>
            <a href="https://innovacare.tech/listenerhub/signup" >
        <Button className="bg-[#5200FF] rounded-full text-[15px] !mt-5 ml-3"> Start Your Journey to Connection Today
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="">
                    <path d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z" fill="white" />
                    <path d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z" fill="white" />
                    <path d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z" fill="white" />
                  </svg>
              </Button>
            </a>
    </div>
  )
}



// function SupportCards({bg, img, title, points}) {
//     return (
//     <div className={"p-[14px] rounded-3xl space-y-6" + ` ${bg}`}>
//         <img src={img} alt="Seeking connection 1" className='w-[322px] h-[151px] object-contain' />

//         <div className='space-y-[14px]'>
//             <h2 className='text-white font-miniature text-[26px]'>
//                 {title}
//             </h2>

//             <ul className='list-disc text-[15px] leading-[22px] pl-[19px] space-y-[22px] text-white'>
//                 {points?.map((point, id) => (
//                     <li key={id} className='capitalize'
//                         style={{
//                             listStyleImage: "url(/mobile2/yourPath/list-disc.svg)"
//                         }}
//                     >
//                         <strong>{point?.title}:</strong> {point?.body}
//                     </li>
//                 ))}
//             </ul>
//         </div>
              
//         <div className='flex justify-center'>
//             <Button className="bg-[#5200FF] rounded-full text-[15px]">Get Started</Button>
//         </div>
//     </div>
//     )
// }

export default YourPath
