// function Footer() {
//   return (
//     <footer className="bg-[#E5DDD4] overflow-hidden relative p-[50px]">
//       <div className="relative z-10 xl:max-w-[90%] px-6">
//         {/* Top Section */}
//         <div className="flex">
//           <div className="flex pb-1 grow">
//             <div className="space-y-[20px] xl:space-y-[57px]">
//               <div className="space-y-[20px] xl:space-y-[43px]">
//                 <div className="flex items-start gap-4 max-xl:flex-col xl:items-center xl:gap-11">
//                   <h1 className="text-[55px] font-miniature leading-[50px] xl:leading-[69px]">
//                     Talk to a
//                     <br />
//                     professional
//                   </h1>

//                   <div>
//                   <div>
//                     <h4>Looking for someone to listen? </h4>
//                     <p className="text-[16px] leading-[22px]">
//                       Our trained Listeners are here to provide non-judgmental,
//                       compassionate support whenever you need it. Whether you’re
//                       managing stress, navigating life transitions, or simply
//                       craving a connection, we’re here to help.
//                     </p>
//                   </div>
//                   <div className="grid max-xl:grid-cols-2 grid-cols-4 grid-rows-2 gap-y-[12px] text-[16.2px] font-[500]">
//                     <a href="#">Who We Serve</a>
//                     <a href="#">Our Approach</a>
//                     <a href="#">Who We Serve</a>
//                     <a href="#">Our Approach</a>
//                   </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="min-w-[200px] flex max-xl:items-center items-end">
//                 <img
//                   src="/desktop2/logo-footer.svg"
//                   alt="Attune Logo"
//                   className=""
//                 />
//               </div>
//             </div>

//             <div className="min-w-[278px] flex flex-col items-center justify-between ">
//               <img
//                 src="/desktop2/heart.webp"
//                 alt="Mental Wellness"
//                 className="w-[233px] h-[185px]"
//               />
//               <br />
//               <div className="grid grid-cols-5 gap-x-4 ">
//                 <a href="#">
//                   <img
//                     src="/desktop2/footer/link-4.svg"
//                     alt="Share link"
//                     className="w-[43px] h-[43px]"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/desktop2/footer/link-1.svg"
//                     alt="Share link"
//                     className="w-[43px] h-[43px]"
//                   />
//                 </a>
//                 <a href="#">
//                   <img
//                     src="/desktop2/footer/link-2.svg"
//                     alt="Share link"
//                     className="w-[43px] h-[43px]"
//                   />
//                 </a>
//                 <button className="bg-[#5200FF] text-white w-[150px] py-2 rounded-full">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="relative z-10 pt-4 mt-5 border-t border-black">
//         <div className=" absolute bottom-[100%]">
//           {/* Att<span className="italic">une</span> */}
//           <img src="/desktop2/footer/attune.svg" alt="Attune logo" />
//         </div>
//         <div className="flex text-center flex-col md:flex-row justify-between items-center text-[12px] max-w-[1020px]">
//           We would like to acknowledge the traditional, ancestral, and unceded
//           territory of the many First Nations, Metis, and Inuit who have lived
//           and cared for the lands known as Canada for generations. We are
//           grateful for the traditional knowledge keepers and elders who are
//           still with us today and those who have gone before us. We make this
//           acknowledgment as an act of reconciliation and gratitude to those
//           whose territory we reside on.
//         </div>
//         <div className="pb-2 text-center">
//           &copy; 2025 Attune. All Rights Reserved
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import { useEffect } from "react";
function Footer() {
  const handleLogoClick = () => {
    // Scroll to the top of the page on logo click
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scrolling effect
    });
  };
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
    <footer className="bg-[#E5DDD4] overflow-hidden relative w-full">
      <div className="max-w-[1440px] h-[500] mx-auto  ">
        <div className="relative flex flex-row w-full py-[30px] px-[50px]">
          <div className="absolute bottom-[30px] left-[0px]">
            <img src="/desktop2/feelattune.svg" alt="Attune logo" />
          </div>
          <div className="w-[25%] flex justify-center items-center relative z-10">
            <h1 className="text-[55px] font-[400] font-miniature leading-[69px] w-[301px]">
              Talk to a
              <br />
              professional
            </h1>
          </div>
          <div className="w-[50%] flex gap-6 flex-col justify-center items-start px-4 pt-6 relative z-10">
            <div className="flex flex-col gap-2 mt-4">
              <p className="text-[16px] font-[700] leading-[20px]">
                Looking for someone to listen?
              </p>
              <p className="text-[16px] leading-[22px] capitalize ">
                Our trained Listeners are here to provide non-judgmental,
                compassionate support whenever you need it. Whether you’re
                managing stress, navigating life transitions, or simply craving
                a connection, we’re here to help.
              </p>
            </div>
            <div className="text-[16px] font-[500] mt-8 flex gap-10">
              <a
                href="#PathToSupport"
                onClick={(e) => handleScroll(e, "PathToSupport", 30)}
              >
                Path To Support
              </a>
              <a
                href="#Howitworks"
                onClick={(e) => handleScroll(e, "how-it-work-D", 50)}
              >
                How It Works
              </a>
              <a
                href="#why-choose-listener"
                onClick={(e) => handleScroll(e, "why-choose-listener", 20)}
              >
                Our Approach
              </a>
              <a href="#FaqD" onClick={(e) => handleScroll(e, "FaqD", 20)}>
                FAQs
              </a>
            </div>
            <div
              className="relative z-10 flex items-end justify-center w-full mt-12"
              onClick={handleLogoClick}
            >
              <img
                src="/desktop2/feel-attune-logo.webp"
                alt="Attune Logo"
                className="cursor-pointer w-[174px] h-[54px]"
              />
            </div>
          </div>
          <div className="w-[25%] flex flex-col justify-center items-center gap-[80px]">
            <div className="relative z-10 pt-2 mt-4">
              <img
                src="/desktop2/heart.webp"
                alt="Mental Wellness"
                className="w-[233px] h-[185px]"
              />
            </div>

            <div className="flex gap-4 justify-end items-center w-[50%] z-20">
              <a href="https://www.linkedin.com/company/easecare/">
                <img
                  src="/desktop2/footer/link-4.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.facebook.com/easecare.ca">
                <img
                  src="/desktop2/footer/link-1.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
              <a href="https://www.instagram.com/easecare.ca/">
                <img
                  src="/desktop2/footer/link-2.svg"
                  alt="Share link"
                  className="w-[43px] h-[43px]"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center px-[50px] py-[30px]  border-t border-black">
          <div className="text-black text-center font-inter text-[12px] font-[400] leading-[16px] capitalize">
            We would like to acknowledge the traditional, ancestral, and unceded
            territory of the many First Nations, Metis, and Inuit who have lived
            and cared for the lands known as Canada for generations. We are
            grateful for the traditional knowledge keepers and elders who are
            still with us today and those who have gone before us. We make this
            acknowledgment as an act of reconciliation and gratitude to those
            whose territory we reside on.
          </div>
        </div>
        <div className="flex justify-center items-center h-[60px] px-[50px] border-t  border-black">
          <div className="text-black font-inter text-[16px] font-[400] leading-[20px] capitalize">
            &copy; 2025 Attune. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
