function Hero() {
  return (
    <div className="lg:min-w-[1000px] xl:min-w-[1260px] 2xl:min-w-[1420px] flex flex-row overflow-hidden ">
      <div className="bg-[#E5FF7D] min-w-[50%] flex justify-center">
        <div className="relative bottom-[-7%] ">
          <img
            src={"/desktop7/hero/Hero.webp"}
            alt="Listener"
            className="   h-[594px] w-[720px] rounded-lg object-cover"
          />
        </div>
      </div>

      <div className="bg-[#00DDBE] min-w-[50%]  flex flex-col justify-center px-12  ">
        <h1 className="font-miniature    text-[77px] text-white leading-[91px]">
          <span className="font-[600]">
            {" "}
            Rekindle <br /> Connection and{" "}
          </span>{" "}
          <br /> <span className="text-[#E5FF7D] italic"> Find Comfort </span>
        </h1>
        <p className="mt-4 max-w-[477px] text-white font-inter text-[16px] font-[400] leading-[26px] max-xl:text-[15px] pr-2">
          Loneliness doesn’t have to be your story. Rediscover the joy of
          connection with a compassionate Listener who understands.
        </p>
        <a
          href="https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true"
          className="flex w-fit"
        >
          <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-2 px-10 rounded-full hover:bg-purple-800">
            Talk To A Listener Today
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
  );
}

export default Hero;
