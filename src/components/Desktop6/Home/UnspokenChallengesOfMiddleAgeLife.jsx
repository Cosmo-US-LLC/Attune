function UnspokenChallengesOfMiddleAgeLife() {
  return (
    <div id="path-to-support" className="bg-gray-50 py-[60px] px-[60px]">
      <div className="max-w-[1440px] mx-auto space-y-[30px] flex justify-center flex-col items-center">
        <h1 className="font-miniature text-[76px] text-center leading-[76px]">
          Why Do Mental Health Barriers <br/> Hold So Many People Back?
        </h1>
        <p className="text-[16px] font-[400] px-16 text-center w-[997px]">
          Many people struggle with stress, anxiety, and emotional overwhelm,
          but seeking help often feels intimidating, expensive, or stigmatized.
          Whether it's fear of judgment, lack of support, or uncertainty about
          where to start, mental health challenges can feel isolating—but they
          don’t have to be.{" "}
        </p>
        <h6 className="font-miniature text-[50px] font-[700] leading-[39px] text-center">
          Common Barriers to Mental Well-being:
        </h6>

        <div className="flex flex-wrap justify-center gap-6">
          <YourPathCard
            img="/desktop6/your-path/path-to-support-1.webp"
            title="Stigma & Judgment"
            classes="bg-[#6FE0D1] text-white"
            body="Fear of being labeled or misunderstood stops many from seeking help."
          />

          <YourPathCard
            img="/desktop6/your-path/path-to-support-2.webp"
            imgClass="bg-[#95ADF0] rounded-[30px] border border-black"
            title="High Cost of Therapy"
            classes="bg-[#6FE0D1] text-white"
            body="Traditional therapy can be expensive and inaccessible."
          />

          <YourPathCard
            img="/desktop6/your-path/path-to-support-3.webp"
            title="Lack of Time & Flexibility"
            classes="bg-[#6FE0D1] text-white"
            body="Busy schedules make it hard to commit to formal therapy."
          />

          <YourPathCard
            img="/desktop6/your-path/path-to-support-4.webp"
            title="Not Knowing Where to Start"
            classes="bg-[#6FE0D1] text-white"
            body="Many struggle alone because they don’t know what support is right for them."
          />
          <YourPathCard
            img="/desktop6/your-path/path-to-support-5.webp"
            title='Feeling "Not Bad Enough"'
            classes="bg-[#6FE0D1] text-white"
            body="Some believe their struggles aren’t serious enough for professional help."
          />
        </div>
        <div className="flex items-center justify-center">
          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-5 px-10 rounded-full hover:bg-purple-800">
              Start Your Journey Toward Mental Well-being
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

function YourPathCard({ img, imgClass = "", title, classes, body }) {
  return (
    <>
      <div
        className={
          "flex flex-col text-center border border-black rounded-[30px] p-[19px] space-y-[13px] w-[423px] min-h-[393px] " +
          classes
        }
      >
        <img
          src={img}
          alt={title}
          className={
            "rounded-[30px]  border border-black bg-black w-[380px] h-[213px] mx-auto " +
            imgClass
          }
        />

        <div className="grow flex flex-col text-black text-left  space-y-[5px] p-1">
          <h2 className="  text-[30px] font-[700] leading-[49px]  text-black font-miniature">
            {title}
          </h2>

          <p className="text-[18px] font-[500] leading-[22px]  text-black">
            {body}
          </p>
        </div>
      </div>
    </>
  );
}

export default UnspokenChallengesOfMiddleAgeLife;
