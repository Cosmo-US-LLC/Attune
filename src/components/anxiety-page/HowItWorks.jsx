function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#E5FF7D] px-4 md:px-[60px] py-[100px] flex flex-col gap-[64px] items-center"
    >
      {/* Title with decorative highlight */}
      <div className="relative w-full flex justify-center">
        <h2 className="font-miniature text-[40px] md:text-[64px] leading-[48px] md:leading-[72px] text-center">
          How it works
        </h2>
        <img
          src="/images/anxiety-page/highlight-05.svg"
          alt=""
          className="hidden md:block absolute w-[30px] h-[30px] rotate-90"
          style={{ left: "calc(50% + 180px)", top: "-10px" }}
          aria-hidden="true"
        />
      </div>

      {/* Cards row with arrows */}
      <div className="relative w-full max-w-[1280px] mx-auto">
        {/* Desktop: 3 staggered cards */}
        <div className="hidden md:flex justify-center gap-[24px] px-[48px]">
          {/* Card 1 — top (pb pushes it up) */}
          <div className="pb-[220px]">
            <HowItCard
              number="01"
              title="Sign Up"
              titleClass="text-[30px]"
              body="Click to book a call and tell us a bit about yourself so we can match you with the right life coach."
              illustration="/desktop1/how-it/card-1.svg"
              illustrationAlt="Sign up illustration"
            />
          </div>

          {/* Card 2 — bottom (pt pushes it down) */}
          <div className="pt-[220px]">
            <HowItCard
              number="02"
              title="Find Your Life Coach"
              titleClass="text-[24px] capitalize"
              body="Watch for our message via email and SMS with a link to book your appointment with your matched life coach."
              illustration="/desktop1/how-it/card-2.svg"
              illustrationAlt="Find coach illustration"
            />
          </div>

          {/* Card 3 — top (pb pushes it up) */}
          <div className="pb-[220px]">
            <HowItCard
              number="03"
              title="Start Your Journey"
              titleClass="text-[30px]"
              body="Join the call and start your coaching journey!"
              illustration="/desktop1/how-it/card-3.svg"
              illustrationAlt="Start journey illustration"
            />
          </div>

          {/* Arrow 1: Card 1 → Card 2 */}
          <img
            src="/images/anxiety-page/arrow-how-1.svg"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none w-[120px]"
            style={{
              left: "310px",
              top: "260px",
              transform: "scaleY(-1) rotate(-25deg)",
            }}
          />

          {/* Arrow 2: Card 2 → Card 3 */}
          <img
            src="/images/anxiety-page/arrow-how-2.svg"
            alt=""
            aria-hidden="true"
            className="absolute pointer-events-none w-[120px]"
            style={{
              right: "310px",
              top: "300px",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* Mobile: stacked layout, no arrows */}
        <div className="md:hidden flex flex-col gap-6">
          <HowItCard
            number="01"
            title="Sign Up"
            titleClass="text-[30px]"
            body="Click to book a call and tell us a bit about yourself so we can match you with the right life coach."
            illustration="/desktop1/how-it/card-1.svg"
            illustrationAlt="Sign up illustration"
          />
          <HowItCard
            number="02"
            title="Find Your Life Coach"
            titleClass="text-[24px] capitalize"
            body="Watch for our message via email and SMS with a link to book your appointment with your matched life coach."
            illustration="/desktop1/how-it/card-2.svg"
            illustrationAlt="Find coach illustration"
          />
          <HowItCard
            number="03"
            title="Start Your Journey"
            titleClass="text-[30px]"
            body="Join the call and start your coaching journey!"
            illustration="/desktop1/how-it/card-3.svg"
            illustrationAlt="Start journey illustration"
          />
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="https://signup.feelattune.com/sign-up"
        className="bg-[#5200FF] text-white py-3 px-8 rounded-full text-[16px] capitalize hover:bg-purple-800 transition-colors inline-block"
      >
        Connect now
      </a>
    </section>
  );
}

function HowItCard({ number, title, titleClass, body, illustration, illustrationAlt }) {
  return (
    <div className="w-full md:w-[392px] bg-white border border-black rounded-[30px] p-6">
      <div className="flex items-start justify-between">
        {/* Number badge */}
        <div className="w-[70px] h-[70px] rounded-full bg-[#38AB9B] border-[3px] border-white text-white font-miniature text-[30px] flex items-center justify-center shrink-0">
          {number}
        </div>
        {/* Illustration */}
        <img
          src={illustration}
          alt={illustrationAlt}
          className="w-[100px] h-auto"
        />
      </div>

      <div className="mt-3 space-y-[6px]">
        <h3 className={`text-black font-miniature ${titleClass}`}>{title}</h3>
        <p className="text-black text-[16px] leading-[22px]">{body}</p>
      </div>
    </div>
  );
}

export default HowItWorks;
