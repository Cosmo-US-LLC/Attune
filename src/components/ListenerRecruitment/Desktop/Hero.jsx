function Hero() {
  return (
    <div className="bg-[#A78BFA] w-full overflow-hidden">
      <div className="min-w-[1000px] max-w-[1220px]  h-[605px] mx-auto flex flex-row  justify-center items-center ">
        <div className="max-w-[592px] w-[50%] flex flex-col justify-center   ">
          <h1 className="font-miniature text-[92px] text-white leading-[97px]">
            <span className="font-[400]"> Join</span> <br />{" "}
            <span className="text-[#E5FF7D] italic"> FeelAttune </span>
          </h1>
          <p className="   text-white font-inter text-[24px] font-[600] leading-normal  pr-2">
            Make a Difference, One Conversation at a Time
          </p>
          <p className="mt-4   text-white font-inter text-[16px] font-[400] leading-[26px]   pr-2">
            FeelAttune connects compassionate coaches with individuals seeking
            judgment-free support for everyday challenges. If you’re empathetic,
            a great listener, and passionate about helping others, this is your
            opportunity to make a meaningful impact—while earning on your own
            schedule.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/survey/muCacUA6u8Oe725E99df"
            className="flex w-fit"
          >
            <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-2 px-6 rounded-full hover:bg-purple-800">
              Get Started
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

        <div className="border-4 border-[#b49ef6] rounded-xl w-[50%] max-w-[500px]   flex justify-center  items-start">
          <img
            src={"/listener-recruitment/desktop/hero/Hero.webp"}
            alt="Listener"
            className="object-cover w-[500px] h-auto    "
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
