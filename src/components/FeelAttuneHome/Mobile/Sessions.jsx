function Sessions() {
  return (
    <div className="bg-[#F4EFEA] py-[30px] ">
      <h1 className="font-miniature text-center text-[38px] leading-[110%]  px-[20px] mb-[24px]">
        Sessions that Works <br /> best for you
      </h1>
      <div>
        <div className="grid gap-4 py-[20px] px-[20px] grid-cols-1">
          <SessionsCards
            bandge="One Video Session"
            title="CAD $45"
            isSubtitle={false}
            item1="No commitment"
            item2="Great for one-time clarity"
            item3="Ideal for first-timers"
          ></SessionsCards>
          <SessionsCards
            bandge="4 video Sessions"
            title="CAD $39"
            subtitle="(4 sessions in just $160)"
            isSubtitle={true}
            item1="Best for ongoing support"
            item2="Flexible scheduling"
            item3="Save more per session"
          ></SessionsCards>

          <SessionsCards
            bandge="Personalized Listener Plan"
            title="CAD $69/week"
            isSubtitle={false}
            item1="Tailored to your needs"
            item2="Ongoing weekly sessions"
            item3="Continuous emotional support"
          ></SessionsCards>
        </div>
      </div>
      <div className="px-[20px]">
        <div className=" px-[31px] flex flex-col justify-center items-start  bg-white border-[1px] border-black rounded-[29px] mt-[28px] ">
          <h2 className="font-miniature  text-[30px] font-[400] pt-[26px] leading-[113.333%]">
            Not Sure Which Option Is Right for You?
          </h2>
          <p className="font-inter text-[18px] pt-[17px] leading-[133.333%]">
            We get it — reaching out is a big step.That’s why we offer a <strong> free
            15-minute consultation </strong> to help you explore what works best for
            you.No pressure. No obligations. Just a space to ask questions and
            feel it out.
          </p>
          <button
            onClick={() =>
              (window.location.href = "https://signup.feelattune.com/sign-up")
            }
            className="bg-[#5200FF] text-white py-3 px-8 mt-[17px] mb-[28px]  rounded-full text-[15px] hover:bg-purple-800"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

function SessionsCards({
  bandge,
  title,
  subtitle,
  item1,
  item2,
  item3,
  isSubtitle,
}) {
  return (
    <div className="bg-white border border-black  px-[31px] py-[31px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="  py-[3.5px] px-[12.5px]   mb-[14px] rounded-full bg-[#FFA8ED] text-black font-inter flex justify-center items-center text-[18px]">
          {bandge}
        </div>
      </div>

      <div className="">
        <h3
          className={`text-black font-miniature leading-[50px] text-[45px] ${
            isSubtitle ? "mb-[4px]" : "mb-[30px]"
          } font-[400px]`}
        >
          {title}
        </h3>
        {isSubtitle && (
          <span className="text-black font-inter text-[16px] ">{subtitle}</span>
        )}
        <div className="mt-[19px] flex flex-col gap-y-[8px] mb-[14px] ">
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Hug"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[15px] text-black ">{item1}</p>
          </div>
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Hug"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[15px] text-black ">{item2}</p>
          </div>
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Hug"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[15px] text-black ">{item3}</p>
          </div>
        </div>

        <button
          onClick={() =>
            (window.location.href = "https://signup.feelattune.com/sign-up")
          }
          className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-[15px] hover:bg-purple-800"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Sessions;
