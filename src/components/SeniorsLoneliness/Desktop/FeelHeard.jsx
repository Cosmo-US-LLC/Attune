export default function FeelHeard() {
  return (
    <>
      <div className="flex flex-row w-full border border-black ">
        <div className="bg-[#00DDBE] flex w-[25%] border-r border-black">
          <img
            src={"/desktop7/feel-heard/smiling-girl.webp"}
            alt="smilinggirl"
            className="object-cover w-full h-auto "
          />
        </div>

        <div className="flex   items-center   w-[75%]   relative  ">
          <div className="flex flex-col gap-2 px-12">
            <h3 className="font-miniature justify-center items-center   text-[50px] font-[400] leading-[69px]   ">
              Feel Heard with <br />{" "}
              <span className="text-[500]  text-[80px]  ">
                Att<span className="italic">une</span>
              </span>
            </h3>
            <a
              href="https://signup.feelattune.com/sign-up?_gl=1*46lrc9*_gcl_au*NDQyODE2NjgyLjE3NDY0NTQ3Njc.*_ga*MjEyMDE1OTQyMi4xNzM4NTIxNjMz*_ga_2MGYLNPB9W*czE3NDkwMDA4MzYkbzEwNiRnMCR0MTc0OTAwMDgzNiRqNjAkbDAkaDA"
              className="flex w-fit"
            >
              <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] hover:bg-purple-800">
              <button className="text-white font-[500] text-[16px]">
                Connect Now
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

          <img
            src={"/desktop7/feel-heard/feel-circle1.webp"}
            alt="smilinggirl"
            className="absolute bottom-[-40px] left-[50%] z-10 w-[200px] h-[200px] object-contain "
          />

          <img
            src={"/desktop7/feel-heard/feel-circle2.webp"}
            alt="smilinggirl"
            className="object-contain w-[150px] h-[150px] absolute bottom-[32%] left-[70%] z-10 "
          />
        </div>
      </div>
    </>
  );
}
