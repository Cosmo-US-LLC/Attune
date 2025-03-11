function WhyListenersMatter() {
  return (
    <section className="why-listeners-matter-section-1 2xl:h-[1100px] 3xl:h-[1200px] h-[910px] relative bg-gray-100    flex justify-center items-center">
      <div className="bg-[#E5FF7D] absolute top-[156px] left-[16%] w-[300px] h-[300px] gap-1 rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[54px] leading-[15px] font-[500] tracking-[-3px]">
            30%
          </strong>{" "}
          <br />
          {""}
          of adults report feelings of chronic loneliness.
        </p>
      </div>
      <div className="bg-[#F097DD] absolute top-[116px] right-[17%]  gap-1 w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center leading-[27px] w-[233px]">
          <strong className="text-center text-black text-[64px] leading-[15px] font-[500] tracking-[-1px]">
            2 in 3
          </strong>{" "}
          <br />
          individuals never seek mental health care due to stigma, cost, or
          accessibility.
        </p>
      </div>
      <div className="z-10 flex flex-col justify-center space-y-3">
        <p className="font-miniature text-center lg:text-[60px] xl:text-[76px]  leading-[69px] font-[400] pt-[20px]">
          Mental Health <br /> Challenges are <br /> More Common <br /> Than You
          Think
        </p>
        <a
          href="https://innovacare.tech/listenerhub/signup"
          className="flex justify-center mx-auto w-fit"
        >
          <button className="bg-[#5200FF]  hover:bg-red-500 text-white py-3 px-6 w-fit mx-auto rounded-full">
            Connect Now
          </button>
        </a>
      </div>
      <div className="bg-[#FF6F61] w-[300px] h-[300px] rounded-full flex justify-center items-center absolute bottom-[96px] right-[19%]">
        <p className="text-[16px] font-[400] leading-[20px] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[50px] leading-[15px] font-[500] tracking-[-3px]">
            47%
          </strong>
          <br />
          of people experience high levels of stress.
        </p>
      </div>
    </section>
  );
}

export default WhyListenersMatter;
