import React from "react";

const WhyBecomeListenerMobile = () => {
  return (
    <div className="px-4 py-10 space-y-6 bg-white">
  
      <h1 className="text-[38px] font-[400] leading-normal text-center font-miniature">
        Why Become a Listener?
      </h1>

    
      <p className="text-[15px] font-[400] leading-[26px] text-center">
        As a Listener, you will
      </p>

 
  
      <div className="grid max-w-md gap-4 mx-auto">
        <HowItCards
          title={<p>Join a Meaningful Movement</p>}
          body="Our mission is to transform the mental health landscape by making emotional support universally accessible, affordable, and free of stigma. By becoming a Listener, you’ll join a community dedicated to empowering individuals through empathetic, judgment-free conversations. Together, we’re bridging the gap between traditional mental health services and everyday emotional support."
          image="/listener-recruitment/desktop/whyBecomeListener/icon1.svg"
        />

        <HowItCards
          title={<p>Empower Personal Growth</p>}
          body="Help individuals set goals, explore new perspectives, and gain life skills. As a Listener, you focus on the present and future, guiding people forward rather than diagnosing or treating clinical issues."
          image="/listener-recruitment/desktop/whyBecomeListener/icon2.svg"
        />

        

        <HowItCards
          title={<p>Enjoy Flexibility</p>}
          body="Set your own availability and support others at times that work for you."
          image="/listener-recruitment/desktop/whyBecomeListener/icon4.svg"
        />

        <HowItCards
          title={<p>Set Your Own Rate</p>}
          body="Decide on the hourly rate that reflects the value of your time and empathy."
          image="/listener-recruitment/desktop/whyBecomeListener/icon5.svg"
        />

        <HowItCards
          title={<p>Work Virtually</p>}
          body="Connect with people from anywhere in the world, making support more accessible and convenient for everyone."
          image="/listener-recruitment/desktop/whyBecomeListener/icon6.svg"
        />
      </div>
    </div>
  );
};

const HowItCards = ({ title, body, image }) => {
  return (
    <div className="w-full p-6 space-y-4 bg-[#F9F9F9] border border-black rounded-xl">
      <div className="flex items-start justify-between">
        <div className="h-[71px] w-[71px] rounded-full bg-[#CBFC06] flex justify-center items-center">
          <img src={image} alt={title} className="w-[48px] h-[48px]" />
        </div>
      </div>

      <div>
        <h3 className="text-[24px] font-[400] capitalize text-black font-miniature">
          {title}
        </h3>
        <p className="text-[15px] leading-[20px] font-[400] text-black">{body}</p>
      </div>
    </div>
  );
};

export default WhyBecomeListenerMobile;
