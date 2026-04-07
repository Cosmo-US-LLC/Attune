function SessionsPricing() {
  return (
    <div className="bg-[#F4EFEA] py-[122px] max-md:py-[60px] px-4 md:px-6">
      <h1 className="font-miniature text-center text-[76px] max-md:text-[40px] max-md:leading-[52px] mb-[34px] leading-[110px]">
        Sessions that Works best for you
      </h1>

      <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-3">
        <PricingCard
          badge="One Video Session"
          title="CAD $45"
          isSubtitle={false}
          item1="No commitment"
          item2="Great for one-time clarity"
          item3="Ideal for first-timers"
        />
        <PricingCard
          badge="4 Video Sessions"
          title="CAD $39"
          subtitle="(4 sessions in just $160)"
          isSubtitle={true}
          item1="Best for ongoing support"
          item2="Flexible scheduling"
          item3="Save more per session"
        />
        <PricingCard
          badge="Personalized Coach Plan"
          title="CAD $69/Week"
          isSubtitle={false}
          item1="Tailored to your needs"
          item2="Ongoing weekly sessions"
          item3="Continuous emotional support"
        />
      </div>

      <div className="mx-auto max-w-7xl flex flex-col justify-center items-center max-md:items-start bg-white border-[1px] border-black rounded-[29px] mt-[28px] max-md:p-6">
        <h2 className="font-miniature text-[30px] font-[400] text-center max-md:text-left pt-[23px] px-[327px] max-md:px-6">
          Not Sure Which Option Is Right for You?
        </h2>
        <p className="font-inter text-[18px] text-center max-md:text-left px-[97px] max-md:px-6">
          We get it — reaching out is a big step.
          <br />
          That's why we offer a{" "}
          <strong>free 15-minute consultation</strong> to help you explore what
          works best for you.
          <br />
          No pressure. No obligations. Just a space to ask questions and feel it
          out.
        </p>
        <a
          href="https://signup.feelattune.com/sign-up"
          className="bg-[#5200FF] text-white py-3 px-8 mt-[17px] mb-[28px] rounded-full text-[15px] hover:bg-purple-800 max-md:self-start inline-block"
        >
          Book Your Appointment
        </a>
      </div>
    </div>
  );
}

function PricingCard({ badge, title, subtitle, item1, item2, item3, isSubtitle }) {
  return (
    <div className="bg-white border border-black min-h-[386px] px-[29px] py-[37px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="h-[29px] py-[3.5px] px-[11.5px] mb-[14px] rounded-full bg-[#FFA8ED] text-black font-inter flex justify-center items-center text-[18px]">
          {badge}
        </div>
      </div>

      <div>
        <h3
          className={`text-black font-miniature leading-[50px] text-[50px] ${
            isSubtitle ? "mb-[4px]" : "mb-[45px]"
          } font-[400]`}
        >
          {title}
        </h3>
        {isSubtitle && (
          <span className="text-black font-inter text-[16px]">{subtitle}</span>
        )}

        <div className="mt-[19px] flex flex-col gap-y-[17px] mb-[35px]">
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Check"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[18px] text-black">{item1}</p>
          </div>
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Check"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[18px] text-black">{item2}</p>
          </div>
          <div className="flex gap-x-[11px] items-center">
            <img
              src="/desktop1/listener/tick-circle.webp"
              alt="Check"
              className="w-[20px] h-[20px]"
            />
            <p className="font-inter text-[18px] text-black">{item3}</p>
          </div>
        </div>

        <a
          href="https://signup.feelattune.com/sign-up"
          className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-[15px] hover:bg-purple-800 inline-block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default SessionsPricing;
