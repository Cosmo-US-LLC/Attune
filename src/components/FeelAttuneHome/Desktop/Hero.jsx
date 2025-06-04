import feelAttuneVideo from "../../../../public/video/CG - FeelAttune Webpage Header v2 (1).mp4";

function Hero() {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden pt-5">
      <video
        src={feelAttuneVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 z-0 object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/40" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-black">
        <h1 className="font-miniature text-[64px] leading-[72px] font-[500] text-white drop-shadow-lg max-w-[700px]">
          Your Safe Space for{" "}
          <span className="text-[#5200FF] italic">Support</span>
        </h1>

        <p className="text-[18px] font-[400] text-white mt-6 max-w-[600px] leading-[26px] drop-shadow-md">
          In a world where 1 in 5 adults experience mental health challenges,
          FeelAttune offers a revolutionary approach to emotional well-being.
          FeelAttune connects you with compassionate Listeners, providing a
          judgment-free zone for sharing your thoughts and feelings.
        </p>

        <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row">
          <a href="https://signup.feelattune.com/sign-up">
            <button className="bg-[#5200FF] text-white text-[16px] font-[500] py-3 px-6 rounded-full hover:bg-purple-800">
              Connect to a Listener
            </button>
          </a>
          <p className="text-[20px] font-[400] font-miniature text-white drop-shadow-sm">
            Starting from $39
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

// // import Image from "next/image";
// // import phoneImage from "../../../public/desktop1/hero/phone-boy.webp";
// import feelAttuneVideo from "../../../../public/video/CG - FeelAttune Webpage Header v2 (1).mp4";

// function Hero() {
//   return (
//     <div className="bg-[#ffd23f] overflow-hidden px-16">
//       <div className="max-w-[1440px] space-x-4 mx-auto flex flex-row items-center justify-between p-8 h-[80vh]">

//         <div className="w-[60%] ">
//           <h1 className="font-miniature text-[94.3px] font-[500] text-black leading-[110px]">
//             Your Safe Space for{" "}
//             <span className="text-[#5200FF] italic">Support</span>
//           </h1>
//           <p className="w-[539px] my-4 text-black max-xl:text-[15px] text-[18px] font-[500] pr-10 max-xl:leading-[20px] leading-[26px]">
//             In a world where 1 in 5 adults experience mental health challenges,
//             FeelAttune offers a revolutionary approach to emotional well-being.
//             FeelAttune connects you with compassionate Listeners, providing a
//             judgment-free zone for sharing your thoughts and feelings.
//           </p>

//           <div className="space-x-[12px] flex items-center">
//             <a href="https://signup.feelattune.com/sign-up">
//               <button className="bg-[#5200FF] text-white text-[16px] font-[500] py-2 px-4 rounded-full hover:bg-purple-800">
//                 Connect to a Listener
//               </button>
//             </a>
//             <p className="text-[25px] leading-[100%] font-[400] font-miniature text-[#000]">
//               Starting from $39
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 md:mt-0 relative  md:max-w-[50%]">
//           <div className="relative">
//             <img
//               src={"/desktop1/hero/phone-boy.png"}
//               alt="Listener"
//               className="max-xl:w-[480px] max-xl:h-auto h-[442px] w-[600px] rounded-lg object-contain"
//             />
//           </div>
//         </div>
//         <div className="mt-8 relative w-[40%]">
//           <div className="relative">
//             <video
//               src={feelAttuneVideo}
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="max-xl:w-[480px] max-xl:h-auto h-[442px] w-[600px] rounded-lg object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;
