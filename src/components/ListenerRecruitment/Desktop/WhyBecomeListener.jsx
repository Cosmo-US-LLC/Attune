function WhyBecomeListener() {
  return (
    <div id=" " className="bg-[#FFFFFF] py-[80px] px-4 space-y-[26px]">
      <h1 className="font-miniature text-center text-[76px] leading-[40px]">
        Why Become a Listener?
      </h1>

      <p className="text-center text-[20px] font-[500] leading-[46px]">
        As a Listener, you will
      </p>

      {/* <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-3"> */}
      <div className="flex flex-row justify-center flex-wrap max-w-[1200px] gap-6 mx-auto ">
        <HowItCards
          title={
            <p>
              make real <br /> Impact
            </p>
          }
          body="Provide a supportive environment that helps people feel heard and validated in their daily challenges—all without the pressures of formal "
          image="/listener-recruitment/desktop/whyBecomeListener/icon1.svg"
        />

        <HowItCards
          title={
            <p>
              Empower Personal <br /> Growth
            </p>
          }
          body="Help individuals set goals, explore new perspectives, and gain life skills. As a Listener, you focus on the present and future, guiding people forward rather than diagnosing or treating clinical issues."
          image="/listener-recruitment/desktop/whyBecomeListener/icon2.svg"
        />

        {/* <HowItCards
          title="Be Part of a Meaningful Movement"
          body="Contribute to a scalable, stigma-free platform that bridges the gap between professional mental health care and everyday emotional support."
          image="/listener-recruitment/desktop/whyBecomeListener/icon3.svg"
        /> */}

        <HowItCards
          title={
            <p>
              Enjoy <br /> Flexibility
            </p>
          }
          body="Set your own availability and support others at times that work for you."
          image="/listener-recruitment/desktop/whyBecomeListener/icon4.svg"
        />

        <HowItCards
          title={
            <p>
              Set Your Own <br /> Rate
            </p>
          }
          body="Decide on the hourly rate that reflects the value of your time and empathy."
          image="/listener-recruitment/desktop/whyBecomeListener/icon5.svg"
        />

        <HowItCards
          id="06"
          title={
            <p>
              Work <br /> Virtually
            </p>
          }
          body="Connect with people from anywhere in the world, making support more accessible and convenient for everyone."
          image="/listener-recruitment/desktop/whyBecomeListener/icon6.svg"
        />
      </div>
    </div>
  );
}

function HowItCards({ title, body, children, image }) {
  return (
    <div className="bg-[#F9F9F9] border border-black max-w-[377px] min-h-[300px] p-[28px] pt-[14px] pr-[14px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="h-[71px] w-[71px]  rounded-full bg-[#CBFC06] text-white font-miniature flex justify-center items-center text-[30px]">
          <img src={image} alt={title} className="w-[48px] h-[48px]  " />
        </div>
        {children}
      </div>

      <div className="space-y-[5px]">
        <h3 className="text-black font-miniature text-[30px]">{title}</h3>
        <p className="text-black text-[16px] leading-[20px] ">{body}</p>
      </div>
    </div>
  );
}

export default WhyBecomeListener;
