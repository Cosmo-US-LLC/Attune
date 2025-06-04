import vectorIcon1 from "../../../../public/desktop1/testimonials/vector1.webp";
import vectorIcon2 from "../../../../public/desktop1/testimonials/vector2.webp";
import vectorIcon3 from "../../../../public/desktop1/testimonials/vector3.webp";
import vectorIcon4 from "../../../../public/desktop1/testimonials/vector4.webp";
import vectorIcon5 from "../../../../public/desktop1/testimonials/vector5.webp";
import vectorIcon6 from "../../../../public/desktop1/testimonials/vector6.webp";

const testimonials = [
  {
    name: "Aisha K.",
    age: 24,
    city: "Toronto",
    quote:
      "“I didn’t think talking to a stranger could feel this safe. But it did. They just… got it.”",
    rating: 5,
    quoteIcon: vectorIcon1,
    bgColor: "bg-[#33B7AC]",
    pillColor: "bg-[#FF5A1F]",
    quoteColor: "text-[#FFF]",
  },
  {
    name: "Mark L.",
    age: 41,
    city: "Calgary",
    quote:
      "“It wasn’t therapy, but somehow it helped more than I expected. I finally felt heard.”",
    rating: 5,
    quoteIcon: vectorIcon2,
    bgColor: "bg-[#E776C2]",
    pillColor: "bg-[#00BFE3]",
    quoteColor: "text-[#FFF]",
  },
  {
    name: "Deepa N.",
    age: 35,
    city: "Mississauga",
    quote:
      "“I wasn’t in crisis. I just needed someone to talk to. FeelAttune was exactly that.”",
    rating: 5,
    quoteIcon: vectorIcon3,
    bgColor: "bg-[#FF6F61]",
    pillColor: "bg-[#C6D644]",
    quoteColor: "text-[#FFF]",
  },
  {
    name: "Robert S.",
    age: 72,
    city: "Halifax",
    quote:
      "“It was the first time in a long time that I said how I really felt. And someone was there.”",
    rating: 2,
    quoteIcon: vectorIcon4,
    bgColor: "bg-[#FFCD56]",
    pillColor: "bg-[#828282]",
    quoteColor: "",
  },
  {
    name: "Jamie D.",
    age: 29,
    city: "Montreal",
    quote:
      "“I’ve been holding stuff in for weeks. After just one session, I felt lighter.”",
    rating: 3,
    quoteIcon: vectorIcon5,
    bgColor: "bg-[#DAFF6C]",
    pillColor: "bg-[#FF6F61]",
    quoteColor: "",
  },
  {
    name: "Helen M.",
    age: 67,
    city: "Vancouver",
    quote:
      "“No pressure, no judgment — just a real person who actually listened. That’s rare.”",
    rating: 4,
    quoteIcon: vectorIcon6,
    bgColor: "bg-[#33C3FF]",
    pillColor: "bg-[#74D66A]",
    quoteColor: "text-[#FFF]",
  },
];

function TestimonialsFlexDesktop() {
  return (
    <div className="bg-[#F4EFEA]">
      <div className="max-w-[1440px] mx-auto  p-[105px] pt-[0px] space-y-6 flex flex-col items-center">
        <h1 className="text-[76px] font-miniature pb-4">Testimonials</h1>

        <div className="flex flex-col space-y-10 max-w-[1400px]">
          {[0, 3].map((startIndex) => (
            <div key={startIndex} className="flex gap-x-8">
              {testimonials.slice(startIndex, startIndex + 3).map((t, i) => {
                const textColor = t.quoteColor || "text-black";
                return (
                  <div
                    key={i}
                    className={`relative flex-1 rounded-[29.557px] border-[0.985px] border-black p-6 ${t.bgColor} min-h-[300px] flex flex-col justify-between`}
                  >
                    <img
                      src={t.quoteIcon}
                      alt="Quote icon"
                      className={`w-[40px] h-[40px] absolute -top-5 left-8`}
                    />

                    <h3
                      className={`mt-2 text-[50px] font-miniature font-[400] leading-[50px] ${textColor}`}
                    >
                      {t.name}
                    </h3>

                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, j) => (
                        <span
                          key={j}
                          className="w-[20px] h-[20px] text-[20px] leading-[20px] flex items-center justify-center"
                        >
                          {j < t.rating ? "⭐" : "☆"}
                        </span>
                      ))}
                    </div>

                    <p
                      className={` text-[18px] font-[400] leading-[20px] ${textColor}`}
                    >
                      “{t.quote}”
                    </p>

                    <div
                      className={`${t.pillColor} flex justify-center items-center w-[100%] max-w-[170px] text-white text-[18px] font-[400] leading-[120%] capitalize px-3 py-1 rounded-full`}
                    >
                      {t.age}, {t.city}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsFlexDesktop;

// import React, { useState } from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// function TestimonialsCarousel() {
//   const testimonials = [
//     {
//       bg: "bg-[#E5FF7D]",
//       img: "/desktop1/testimonials/test-1.webp",
//       title: "Jake, 24",
//       body: '"Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference."',
//     },
//     {
//       bg: "bg-[#F097DD]",
//       img: "/desktop1/testimonials/test-2.webp",
//       title: "Jessica, 45",
//       body: '"As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters."',
//     },
//     {
//       bg: "bg-[#FF6F61]",
//       img: "/desktop1/testimonials/test-3.webp",
//       title: "John, 72",
//       textColor: "text-white",
//       body: '"Losing my partner was the hardest thing I’ve ever faced. Talking to a Listener allowed me to process my grief and feel less alone."',
//     },
//   ];

//   return (
//     <div className="bg-[#F4EFEA]">
//       <div className="max-w-[1440px] mx-auto  p-[105px] pt-[0px] space-y-6">
//         <h1 className="text-[76px] font-miniature">Testimonials</h1>

//         <Carousel className="">
//           <CarouselContent>
//             {testimonials?.map((test, id) => (
//               <CarouselItem
//                 key={id}
//                 className="w-full max-xl:basis-1/2 basis-1/3"
//               >
//                 <div
//                   className={
//                     "border border-black rounded-[30px] py-[35px] px-[28px] min-h-[440px] " +
//                     test?.bg
//                   }
//                 >
//                   <img
//                     src={test?.img}
//                     alt="person"
//                     className="w-[117px] h-[117px] object-contain rounded-full mb-[47px]"
//                   />

//                   <div
//                     className={`space-y-[22px] ${
//                       test?.textColor || "text-black"
//                     }`}
//                   >
//                     <h3
//                       className={`font-miniature text-[40px] ${
//                         test?.textColor || ""
//                       }`}
//                     >
//                       {test?.title}
//                     </h3>
//                     <p
//                       className={`text-[16px] leading-[20px] ${
//                         test?.textColor || ""
//                       }`}
//                     >
//                       {test?.body}
//                     </p>
//                   </div>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -left-16" />
//           <CarouselNext className="border border-black w-[48px] h-[48px] disabled:hidden bg-transparent -right-16" />
//         </Carousel>
//       </div>
//     </div>
//   );
// }

// export default TestimonialsCarousel;
