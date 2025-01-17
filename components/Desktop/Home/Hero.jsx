import Image from "next/image";
import phoneImage from "../../../public/desktop/hero/phone-boy.webp";

function Hero() {
  return (
    <div className="bg-yellow-300 overflow-hidden px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between p-8 h-[80vh]">
        {/* Text Section */}
        <div className="text-center md:text-left max-w-md">
          <h1 className="text-[46px] font-[500] text-black leading-[1.2]">
            Your Safe <br /> Space for <br />
            <span className="text-[#5200FF]">Support</span>
          </h1>
          <p className="mt-4 text-black text-lg">
            In a world where 1 in 5 adults experience mental health challenges,
            Attune offers a revolutionary approach to emotional well-being. Our
            platform connects you with compassionate Listeners, providing a
            judgment-free zone for sharing your thoughts and feelings.
          </p>
          <button className="mt-6 bg-[#5200FF] text-white text-[16px] font-[500] py-2 px-4 rounded-full hover:bg-purple-800">
            Connect to a Listener
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 relative">
          <div className="relative">
            <Image
              src={phoneImage}
              alt="Listener"
              width={600}
              height={442}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
