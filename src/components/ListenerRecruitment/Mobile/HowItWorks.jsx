function HowItWorks() {
  return (
    <div
      id="how-it-works"
      className="bg-[#e5ff7d] py-[30px] px-4 space-y-[26px]"
    >
      <h1 className="font-miniature text-center text-[38px] font-[400] leading-normal">
        How it Works
      </h1>

      <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-3">
        <HowItCards
          id="01"
          title="Apply Online"
          body="Submit your application to join our network of Listeners."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-1.svg"
            alt="Hug"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>

        <HowItCards
          id="02"
          title="Complete Training"
          body="Participate in our specialized training program to enhance your listening and communication skills."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-2.svg"
            alt="Talk"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>

        <HowItCards
          id="03"
          title="Set your availability"
          body="Choose when and how often you want to support others."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-3.svg"
            alt="Schedule"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>
        <HowItCards
          id="04"
          title="Set your Rate"
          body="your own hourly rate for your services."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-4.svg"
            alt="Hug"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>

        <HowItCards
          id="05"
          title="Connect and listen"
          body="Offer empathetic support to individuals seeking guidance, encouragement, and clarity."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-5.svg"
            alt="Talk"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>

        <HowItCards
          id="06"
          title="Get compensated"
          body="Earn for your time and the meaningful support you provide."
        >
          <img
            src="/listener-recruitment/desktop/how-it/card-6.svg"
            alt="Schedule"
            className="w-[40px] h-[40px]"
          />
        </HowItCards>
      </div>

      <div className="flex justify-center mt-8">
        <a href="https://innovacare.tech/listenerhub/signup">
          <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
            <button className="text-white font-[500] text-[16px]">
              Sign Up Now
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className=""
            >
              <path
                d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z"
                fill="white"
              />
              <path
                d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z"
                fill="white"
              />
              <path
                d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z"
                fill="white"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

function HowItCards({ id, title, body, children }) {
  return (
    <div className="bg-white border border-black min-h-[170px] p-[28px] pt-[14px] pr-[14px] rounded-[20px] space-y-[10px]">
      <div className="flex items-start justify-between">
        <div className="h-[50px] w-[50px] mt-1 rounded-full bg-[#A78BFA] text-white font-miniature flex justify-center items-center text-[20px]">
          {id}
        </div>
        {children}
      </div>

      <div className="space-y-[5px]">
        <h3 className="text-black font-miniature text-[24px] font-[400]">
          {title}
        </h3>
        <p className="text-black text-[16px] font-[400] leading-[20px] capitalize">
          {body}
        </p>
      </div>
    </div>
  );
}

export default HowItWorks;
