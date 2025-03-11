// import Image from "next/image";
// import phoneImage from "../../../public/desktop3/hero/phone-boy.webp";

function Hero() {
  return (
    <div className="lg:min-w-[1000px] xl:min-w-[1260px] 2xl:min-w-[1420px] flex flex-row overflow-hidden ">
      <div className="bg-[#E5FF7D] min-w-[50%] ">
        <div className="relative bottom-[-2%]">
          <img
            src={"/assets/desktop3/hero/Hero.png"}
            alt="Listener"
            className="max-2xl:w-[650px] max-lg:w-[480p] max-lg:h-auto h-[532px] w-[600px] rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="bg-[#95ADF0] min-w-[50%] lg:px-12 lg:py-16 xl:p-20 ">
        <h1 className="font-miniature max-w-md max-xl:text-[79px] lg:mt-8 xl:mt-4 text-[77px] text-white leading-[91px]">
          <span className="font-[600]"> Facing </span> <br />{" "}
          <span className="text-[#E5FF7D] italic"> Challenges? </span>
        </h1>
        <p className="mt-4 max-w-[477px] text-white font-inter text-[16px] font-[400] leading-[26px] max-xl:text-[15px] pr-2">
          Life’s pressures can feel overwhelming, especially when you’re
          managing stress, anxiety, or emotional barriers. You don’t have to go
          through it alone.
        </p>
        <a href="https://innovacare.tech/listenerhub/signup" className="w-fit flex">
          <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-2 px-10 rounded-full hover:bg-purple-800">
            Get Support Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="ml-2 mt-0.5"
            >
              <path
                d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z"
                fill="white"
              />
              <path
                d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z"
                fill="white"
              />
              <path
                d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z"
                fill="white"
              />
            </svg>
          </button>
        </a>
      </div>
    </div>

    // <div className="bg-[#ffd23f] overflow-hidden px-16">
    //   <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 h-[80vh]">
    //     {/* Text Section */}
    // <div className="text-center md:text-left md:max-w-[50%]">
    //   <h1 className="font-miniature max-w-md max-xl:text-[79px] text-[99.3px] font-[500] text-black max-xl:leading-[79px] leading-[91px]">
    //     Your Safe <br /> Space for <br />
    //     <span className="text-[#5200FF] italic">Support</span>
    //   </h1>
    //   <p className="mt-4 text-black max-xl:text-[15px] text-[18px] font-[500] pr-10 max-xl:leading-[20px] leading-[26px]">
    //     In a world where 1 in 5 adults experience mental health challenges,
    //     Attune offers a revolutionary approach to emotional well-being. Our
    //     platform connects you with compassionate Listeners, providing a
    //     judgment-free zone for sharing your thoughts and feelings.
    //   </p>
    //   <button className="mt-6 bg-[#5200FF] text-white text-[16px] font-[500] py-2 px-4 rounded-full hover:bg-purple-800">
    //     Connect to a Listener
    //   </button>
    // </div>

    //     {/* Image Section */}
    //     <div className="mt-8 md:mt-0 relative  md:max-w-[50%]">
    //       <div className="relative">
    //         <img
    //           src={"/desktop3/hero/phone-boy.webp"}
    //           alt="Listener"
    //           className="max-xl:w-[480px] max-xl:h-auto h-[442px] w-[600px] rounded-lg object-contain"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Hero;
