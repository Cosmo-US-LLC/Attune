function WhyListenersMatter() {
  return (
    <section className="why-listeners-matter-section-4  2xl:h-[1100px] 3xl:h-[1200px] h-[910px] relative bg-gray-100 py-12 px-6 flex justify-center items-center">
      <div className="bg-[#E5FF7D] w-[300px] h-[300px] rounded-full flex   justify-center items-center absolute top-[96px] right-[30%]">
        <p className="text-[16px] font-[400] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[64px] leading-[15px] font-[500] tracking-[-3px]">
            70%
          </strong>{" "}
          <br />
          {""}
          of middle-aged individuals experience significant stress or burnout.
        </p>
      </div>

      <div className="z-10 flex flex-col justify-center space-y-3">
        <p className="font-miniature text-center lg:text-[60px] xl:text-[76px]  leading-[69px] font-[400] pt-[20px]">
          Balancing <br />
          Care and Self
        </p>
        <div className="mx-auto w-fit">
          <a href="https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true">
            <button className="bg-[#FF6F61] text-white py-3 hover:bg-red-500 px-6 rounded-full">
              Connect Now
            </button>
          </a>
        </div>
      </div>
      <div className="bg-[#6FE0D1] absolute bottom-[120px] left-[17%] w-[300px] h-[300px] gap-1 rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[64px] leading-[15px] font-[500] tracking-[-1px]">
            40%
          </strong>{" "}
          <br />
          {""}
          of people prefer non-clinical emotional support to supplement therapy.
        </p>
      </div>
      <div className="bg-[#FFA8ED] absolute bottom-[50px] right-[19%]  gap-1 w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[64px] leading-[15px] font-[500] tracking-[-1px]">
            1 in 2
          </strong>{" "}
          <br />
          {""}
          middle-aged individuals feel overwhelmed balancing work, personal
          responsibilities, and well-being.
        </p>
      </div>
    </section>
  );
}

export default WhyListenersMatter;
