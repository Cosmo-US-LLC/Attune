// import Image from "next/image";
// import phoneImage from "../../../public/desktop/hero/phone-boy.webp";

function Hero() {
  return (
    <div className="bg-[#ffd23f] overflow-hidden px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 h-[80vh]">
        {/* Text Section */}
        <div className="text-center md:text-left md:max-w-[50%]">
          <h1 className="font-miniature max-w-md max-xl:text-[79px] text-[99.3px] font-[500] text-black max-xl:leading-[79px] leading-[91px]">
            Your Safe <br /> Space for <br />
            <span className="text-[#5200FF] italic">Support</span>
          </h1>
          <p className="w-[539px] my-4 text-black max-xl:text-[15px] text-[18px] font-[500] pr-10 max-xl:leading-[20px] leading-[26px]">
            In a world where 1 in 5 adults experience mental health challenges,
            Attune offers a revolutionary approach to emotional well-being.
            Attune connects you with compassionate Listeners, providing a
            judgment-free zone for sharing your thoughts and feelings.
          </p>

          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="bg-[#5200FF] text-white text-[16px] font-[500] py-2 px-4 rounded-full hover:bg-purple-800">
              Connect to a Listener
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 relative  md:max-w-[50%]">
          <div className="relative">
            <img
              src={"/desktop/hero/phone-boy.png"}
              alt="Listener"
              className="max-xl:w-[480px] max-xl:h-auto h-[442px] w-[600px] rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
