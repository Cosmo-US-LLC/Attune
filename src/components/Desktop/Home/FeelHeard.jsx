export default function FeelHeard() {
  return (
    <>
      <div className=" flex flex-row border border-black">
        <div className="bg-[#95ADF0] flex w-[25%] border-r border-black">
          <img
            src={"/desktop/feel-heard/smiling-girl.webp"}
            alt="smilinggirl"
            className="h-auto w-full px-8 object-cover"
          />
        </div>
        <div className="flex lg:pl-16 xl:pl-32 2xl:pl-40 3xl:pl-48 mt-20">
          <div className="flex flex-row">
            <div className="flex flex-col mb-4">
              <h3 className="font-miniature justify-center items-center lg:text-[36px] 2xl:text-[50px] lg:leading-[60px] 2xl:leading-[74px] ">
                Feel Heard with <br />{" "}
                <span className="text-[500] lg:text-[80px] 2xl:text-[101px]">
                  Att<span className="italic">une</span>
                </span>
              </h3>
              <a href="https://innovacare.tech/listenerhub/signup">
                <button className="bg-[#5200FF] text-white w-[160px] mt-4 py-3 rounded-full">
                  Connect Now
                </button>
              </a>
            </div>
            <div className="flex flex-row lg:pl-0 3xl:pl-8 ">
              <img
                src={"/desktop/feel-heard/feel-circle1.webp"}
                alt="smilinggirl"
                className="absolute lg:mt-[70px] xl:mt-9 2xl:mt-16 lg:w-[280px] lg:h-[170px] xl:w-[330px] xl:h-[210px] lg:pl-16 xl:pl-32 2xl:pl-32 3xl:pl-6 object-contain "
              />

              <img
                src={"/desktop/feel-heard/feel-circle2.webp"}
                alt="smilinggirl"
                className=" lg:ml-56 lg:mt-[-40px] mt-[-32px] xl:ml-72 absolute lg:w-[230px] lg:h-[140px] xl:w-[230px] xl:h-[160px] lg:pl-0 xl:pl-12 2xl:pl-12 3xl:pl-2 object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
