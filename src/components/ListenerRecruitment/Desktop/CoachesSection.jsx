function CoachesSection() {
  return (
    <div className="bg-[#A78BFA] w-full overflow-hidden">
      <div className="min-w-[1000px] max-w-[1220px] gap-x-[2rem] h-[648px] mx-auto flex  justify-center items-center ">
         <div className="border-4 border-[#b49ef6] rounded-xl w-[100%] max-w-[577px]   flex justify-center  items-start">
          <img
            src={"/listener-recruitment/desktop/CoachesSection/woman-home.png"}
            alt="Listener"
            className="object-cover w-[592px] !rounded-xl h-auto    "
          />
        </div>
        <div className="max-w-[592px] w-[100%] flex flex-col justify-center ">
          <h1 className="font-miniature text-[76px] text-white leading-[110.737%]">
          Coaches, You Can Be a Listener Too!
          </h1>
          <p className="mt-2   text-white font-inter text-[18px] font-[500] leading-[144.444%]">
          If you're a life coach, wellness coach, or someone passionate about personal growth and development, becoming a Listener is a perfect fit for you. Listeners provide supportive, empathetic conversations that help individuals navigate life's challenges—without the formality of traditional therapy. <br />
You already have the skills to listen, empower, and guide people. As a Listener, you can use these skills to support others in a flexible, virtual environment, offering meaningful connections that foster emotional well-being.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
            className="flex w-fit"
          >
            <button className="mt-5 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-2 px-6 rounded-full hover:bg-purple-800">
              Join our growing community
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
  );
}

export default CoachesSection;
