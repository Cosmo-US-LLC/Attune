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
          title={<p>make real Impact</p>}
          body="Help people feel valued, heard, and supported in their everyday challenges."
          image="/listener-recruitment/desktop/whyBecomeListener/icon1.svg"
        />

        <HowItCards
          title={<p>Empower Personal Growth</p>}
          body="Assist individuals in reframing experiences, setting goals, and finding strategies to improve their well-being."
          image="/listener-recruitment/desktop/whyBecomeListener/icon2.svg"
        />

        <HowItCards
          title="Be Part of a Meaningful Movement"
          body="Contribute to a scalable, stigma-free platform that bridges the gap between professional mental health care and everyday emotional support."
          image="/listener-recruitment/desktop/whyBecomeListener/icon3.svg"
        />

        <HowItCards
          title={<p>Enjoy Flexibility</p>}
          body="Set your own availability and support others at times that work for you."
          image="/listener-recruitment/desktop/whyBecomeListener/icon4.svg"
        />

        <HowItCards
          title={<p>Set Your Own Rate</p>}
          body="Determine your own hourly rate and earn for the support you provide."
          image="/listener-recruitment/desktop/whyBecomeListener/icon5.svg"
        />

        <HowItCards
          title={<p>Work Virtually</p>}
          body="All services are delivered online, allowing you to provide support from anywhere."
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
