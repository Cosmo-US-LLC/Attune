export default function FeelHeard() {
  return (
    <>
      <div className="flex flex-row w-full border border-black ">
        <div className="bg-[#95ADF0] flex w-[25%] border-r border-black">
          <img
            src={"/desktop6/feel-heard/smiling-girl.webp"}
            alt="smilinggirl"
            className="object-cover w-full h-auto "
          />
        </div>

        <div className="flex   items-center   w-[75%]   relative  ">
          <div className="flex flex-col gap-2 px-12">
            <h3 className="font-miniature justify-center items-center   text-[50px] font-[400] leading-[69px]   ">
              Feel Heard with <br />{" "}
              <span className="text-[500]  text-[80px]  ">
                Att<span className="italic">une</span>
              </span>
            </h3>
            <a
              href="https://innovacare.tech/listenerhub/signup"
              className="flex w-fit"
            >
              <button className="bg-[#5200FF] text-white w-[160px] hover:bg-purple-800   py-3 rounded-full">
                Connect Now
              </button>
            </a>
          </div>

          <img
            src={"/desktop6/feel-heard/feel-circle1.webp"}
            alt="smilinggirl"
            className="absolute bottom-[-40px] left-[50%] z-10 w-[200px] h-[200px] object-contain "
          />

          <img
            src={"/desktop6/feel-heard/feel-circle2.webp"}
            alt="smilinggirl"
            className="object-contain w-[150px] h-[150px] absolute bottom-[32%] left-[70%] z-10 "
          />
        </div>
      </div>
    </>
  );
}
