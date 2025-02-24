function WhyListenersMatter() {
  return (
    <section className="why-listeners-matter-section-2 2xl:h-[1100px] 3xl:h-[1200px] h-[910px] relative bg-gray-100    flex justify-center items-center">
      <div className="bg-[#E5FF7D] absolute top-[196px] left-[12%] w-[300px] h-[300px] gap-1 rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center w-[244px]">
          <strong className="text-center text-black text-[54px] leading-[15px] font-[500] tracking-[-3px]">
            54%
          </strong>{" "}
          <br />
          {""}
          of individuals report feeling socially isolated.
        </p>
      </div>
      <div className="bg-[#6FE0D1] absolute top-[116px] right-[19%]  gap-1 w-[300px] h-[300px] rounded-full flex flex-col justify-center items-center ">
        <p className="text-[16px] font-[400] text-black text-center leading-[27px] w-[233px]">
          A study from Harvard University found that{" "}
          <strong className="text-center text-black text-[25px] leading-[15px] font-[700] tracking-[-1px]">
            61%
          </strong>{" "}
          <br />
          of young adults <br /> feel “serious loneliness.”
        </p>
      </div>
      <div className="z-10 flex flex-col justify-center space-y-3">
        <p className="font-miniature text-center lg:text-[60px] xl:text-[76px]  leading-[69px] font-[400] pt-[20px]">
          Loneliness is More <br /> Common Than You Think
        </p>
        <a
          href="https://innovacare.tech/listenerhub/signup"
          className="flex justify-center mx-auto w-fit"
        >
          <button className="bg-[#FF6F61]  hover:bg-red-500 text-white py-3 px-6 w-fit mx-auto rounded-full">
            Connect Now
          </button>
        </a>
      </div>
      <div className="bg-[#FFA8ED] w-[300px] h-[300px] rounded-full flex justify-center items-center absolute bottom-[96px] right-[28%]">
        <p className="text-[16px] font-[400] leading-[20px] text-black text-center w-[244px]">
          According to the Centers for Disease Control and Prevention (CDC),
          about <br /> <br />
          <strong className="text-center text-black text-[50px] leading-[15px] font-[500] tracking-[-3px]">
            1 in 3 adults
          </strong>
          <br /> <br />
          feel lonely, a feeling often tied to social isolation.
        </p>
      </div>
    </section>
  );
}

export default WhyListenersMatter;
