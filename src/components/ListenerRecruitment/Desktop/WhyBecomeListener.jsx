function WhyBecomeListener() {
  return (
    <div id="path-to-support" className="bg-[#FFFFFF] py-[80px] px-4 space-y-[26px]">
      <h1 className="font-miniature text-center text-[76px] leading-[40px]">
        Why Become a Listener?
      </h1>

      <p className="text-center text-[20px] font-[500] leading-[46px]">
        As a Listener, you will
      </p>

      <div className="flex gap-6 mx-auto w-fit">
        <div className="flex ">
          <HowItCards
            title={<p>Join a Meaningful Movement</p>}
            body="Our mission is to transform the mental health landscape by making emotional support universally accessible, affordable, and free of stigma. By becoming a Listener, you’ll join a community dedicated to empowering individuals through empathetic, judgment-free conversations. Together, we’re bridging the gap between traditional mental health services and everyday emotional support."
            image="/listener-recruitment/desktop/whyBecomeListener/icon7.svg"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-6">
            <HowItCards
              title={<p>make real Impact</p>}
              body="Provide a supportive environment that helps people feel heard and validated in their daily challenges—all without the pressures of formal "
              image="/listener-recruitment/desktop/whyBecomeListener/icon1.svg"
            />
            <HowItCards
              title={<p>Empower Personal Growth</p>}
              body="Help individuals set goals, explore new perspectives, and gain life skills. As a Listener, you focus on the present and future, guiding people forward rather than diagnosing or treating clinical issues."
              image="/listener-recruitment/desktop/whyBecomeListener/icon2.svg"
            />
          </div>
          <div className="flex gap-6">
            <HowItCards
              title={<p>Enjoy Flexibility</p>}
              body="Set your own availability and support others at times that work for you."
              image="/listener-recruitment/desktop/whyBecomeListener/icon4.svg"
            />

            <HowItCards
              title={<p>Work Virtually</p>}
              body="Connect with people from anywhere in the world, making support more accessible and convenient for everyone."
              image="/listener-recruitment/desktop/whyBecomeListener/icon6.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItCards({ title, body, children, image }) {
  return (
    <div className="bg-[#F9F9F9] border border-black max-w-[377px] min-h-[250px] p-[28px] pt-[14px] pr-[14px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="h-[71px] w-[71px]  rounded-full bg-[#CBFC06] text-white font-miniature flex justify-center items-center text-[30px]">
          <img src={image} alt={title} className="w-[48px] h-[48px]  " />
        </div>
        {children}
      </div>

      <div className="space-y-[5px]">
        <h3 className="text-black font-miniature text-[30px] capitalize">
          {title}
        </h3>
        <p className="text-black text-[16px] leading-[20px] ">{body}</p>
      </div>
    </div>
  );
}

export default WhyBecomeListener;
