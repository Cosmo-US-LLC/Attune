function SafeSpace() {
  const cardArr = [
    <p>
      <strong>Help Clients Reframe Experiences:</strong> Guide individuals in
      shifting perspectives, gaining clarity, and uncovering new insights to
      navigate their challenges more effectively.
    </p>,
    <p className="">
      <strong>Support Goal-Setting & Achievement:</strong> Empower your clients
      to build confidence, navigate life transitions, and reach meaningful
      personal milestones.
    </p>,
    <p className="">
      <strong>Enhance Emotional Well-Being:</strong> Provide strategies to boost
      motivation, foster self-awareness, and cultivate lasting emotional
      balance.
    </p>,
    <p className="">
      <strong>Build Resilience & Empower Growth:</strong> Equip individuals with
      the mindset and tools to overcome setbacks, adapt to change, and move
      toward their desired outcomes with confidence.
    </p>,
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col flex-wrap listenerRecruitmentDesktop md:flex-row">
        <div className="w-full md:w-[50%]"></div>

        <div className="w-full md:w-[50%] flex justify-center px-6 md:px-12 lg:px-16">
          <div className="w-full max-w-[646px] flex items-center">
            <div className="bg-white border border-[#E5FF7D] rounded-[20px] p-[16px] md:p-[20px] lg:p-[48px] space-y-[22px]">
              <h3 className="font-miniature text-[30px] lg:text-[24px] xl:text-[50px] leading-[35px] md:leading-[40px] xl:leading-[57px]  text-center md:text-left">
                What is a Listener
              </h3>
              <p className="text-[16px] font-[400] leading-[26px]">
                A listener is a someone who supports every day people with:
              </p>
              <ul className="leading-[28px] md:leading-[24px] pl-6 md:pl-12 lg:pl-10">
                {cardArr.map((item, index) => (
                  <li
                    key={index}
                    className="relative text-[18px] pl-4 pb-4 md:pb-6"
                  >
                    <span
                      style={{
                        content: "''",
                        position: "absolute",
                        left: "-36px",
                        top: "4px",
                        width: "30px",
                        height: "30px",
                        backgroundImage:
                          "url('/desktop7/listener/tick-circle.svg')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        display: "inline-block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              {/* <p className="text-[16px] font-[400] leading-[26px]">
                Listeners are not licensed mental health professionals and do
                not diagnose, treat mental illnesses, or provide clinical
                interventions. Our program is designed to complement
                professional mental health care by offering everyday emotional
                support and meaningful human connection.
              </p> */}
              <div className="flex justify-center mt-6 md:justify-start">
                <a href="https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df">
                  <button className="bg-[#5200FF] flex flex-row text-white text-[14px] md:text-[16px] font-[500] py-2 md:py-4 px-8 md:px-8 rounded-full hover:bg-purple-800">
                    Join Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      className="ml-2 mt-0.5"
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
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SafeSpace;
