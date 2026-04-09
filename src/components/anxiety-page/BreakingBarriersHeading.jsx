import shapeTriangle from "@/assets/images/shape-triangle.svg";
import shapeCircle from "@/assets/images/shape-circle.png";
import shapeWave from "@/assets/images/shape-wave.svg";

export default function BreakingBarriersHeading() {
  return (
    <section className="bg-[#E5FF7D] pt-[100px] px-[60px] pb-[64px] max-md:px-4 max-md:pt-12 max-md:pb-8">
      <div className="font-miniature text-[64px] leading-[72px] text-center max-w-[1118px] mx-auto max-md:text-[36px] max-md:leading-[40px]">
        <p className="mb-0">Breaking Barriers:</p>
        <p>
          Life Coaching{" "}
          <span className="max-md:hidden inline-flex items-center justify-center w-[103px] h-[70px] bg-white border border-black rounded-[8px] align-middle mx-2">
            <img src={shapeTriangle} alt="" className="w-10 h-10 object-contain" />
          </span>
          {" "}Built Around Anxiety{" "}
          <span className="max-md:hidden inline-flex items-center justify-center w-[103px] h-[70px] bg-white border border-black rounded-[8px] align-middle mx-2">
            <img src={shapeCircle} alt="" className="w-10 h-10 object-contain" />
          </span>
          {" "}and the Challenges It Brings{" "}
          <span className="max-md:hidden inline-flex items-center justify-center w-[103px] h-[70px] bg-white border border-black rounded-[8px] align-middle mx-2">
            <img src={shapeWave} alt="" className="w-10 h-10 object-contain" />
          </span>
        </p>
      </div>
    </section>
  );
}
