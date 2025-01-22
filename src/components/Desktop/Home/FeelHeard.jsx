
export default function FeelHeard (){

    return (
        <>
        <div className=" flex flex-row">
           <div className="bg-[#95ADF0] flex w-[25%] border-r border-black">
           <img
            src={"/desktop/feel-heard/smiling-girl.webp"}
            alt="smilinggirl"
            className="h-auto w-full px-8 object-cover"
          />
           </div>
           <div className="flex lg:pl-6 2xl:pl-16 3xl:pl-48 mt-20">
           <div className="flex flex-row">
            <div className="flex flex-col mb-4">
              <h3 className="font-miniature justify-center items-center lg:text-[36px] 2xl:text-[50px] lg:leading-[60px] 2xl:leading-[74px] ">Feel Heard with <br/> <span className="text-[500] lg:text-[80px] 2xl:text-[101px]">Att<span className="italic">une</span></span></h3>
              <button className="bg-[#5200FF] text-white w-[160px] mt-4 py-3 rounded-full">Connect Now</button>
            </div>
            <div className="flex flex-row lg:pl-0 3xl:pl-8 ">
            <img
            src={"/desktop/feel-heard/feel-circle1.webp"}
            alt="smilinggirl"
            className="absolute mt-20 lg:w-[280px] lg:h-[170px] xl:w-[350px] xl:h-[230px] lg:pl-0 3xl:pl-6 object-contain "
          />
          
          <img
            src={"/desktop/feel-heard/feel-circle2.webp"}
            alt="smilinggirl"
            className="lg:ml-56 xl:ml-80 absolute lg:w-[230px] lg:h-[140px] xl:w-[250px] xl:h-[180px] lg:pl-0 3xl:pl-2 object-contain "
          />
            </div>
           </div>
           </div>
        </div>
        </>
    );
}