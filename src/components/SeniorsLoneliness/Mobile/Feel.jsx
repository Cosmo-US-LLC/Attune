import { Button } from "@/components/ui/button";

export default function Feel() {
  return (
    <>
      <div className="bg-[#6FE0D1]">
        <img
          src={"/desktop7/feel-heard/smiling-girl.webp"}
          alt="smilinggirl"
          className="object-cover "
        />
      </div>
      <div className="bg-white border border-y-black py-[30px] px-5">
        <div className="">
          <div className="flex flex-row">
            <h3 className="font-miniature text-[38px] leading-[55px]">
              Feel Heard with <br />
              <span className="text-[54px]">
                Att<span className="italic">une</span>
              </span>
            </h3>
            <img
              src={"/desktop7/feel-heard/feel-circle2.webp"}
              alt="smilinggirl"
              className="h-[76px] w-[75px] ml-[252px] mt-9 absolute "
            />
          </div>
          <div className="flex flex-row">
            <a href="https://innovacare.tech/listenerhub/patient/book-appointments/select-user?guest=true">
              <div className="flex flex-row justify-center items-center px-5 py-3  gap-2 rounded-full bg-[#5200FF] mt-4">
                <button className="text-white font-[500] text-[15px]">
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
            <img
              src={"/desktop7/feel-heard/feel-circle1.webp"}
              alt="smilinggirl"
              className="h-[94px] w-[94px] ml-44 mt-3 absolute "
            />
          </div>
        </div>
      </div>
    </>
  );
}
