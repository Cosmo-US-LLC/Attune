function UnspokenChallengesOfMiddleAgeLife() {
  return (
    <div id="path-to-support" className="bg-gray-50 py-[60px] px-[60px]">
      <div className="max-w-[1440px] mx-auto space-y-[30px] flex justify-center flex-col items-center">
        <h1 className="font-miniature text-[76px] text-center leading-[69px]">
          The Unspoken Challenges of <br /> Middle-Aged Life
        </h1>
        <h6 className="text-[16px] font-[400] px-16 text-center w-[1061px]">
          Have you ever felt like you're carrying the weight of everything, with
          no one to lean on?
        </h6>
        {/* <h6 className="font-miniature text-[50px] font-bold text-center">
          Some Reasons for Mental Health Challenges:
        </h6> */}
        {/* <div className="max-w-4xl w-fit mx-auto grid md:grid-cols-2   gap-y-[28px]"> */}
        <div className="flex flex-wrap justify-center gap-6">
          <YourPathCard
            img="/desktop4/your-path/path-to-support-1.webp"
            title="Emotional Exhaustion"
            classes="bg-[#D43525] text-white"
            body="You give so much to others—your family, your work, your responsibilities—but what about you?"
          />

          <YourPathCard
            img="/desktop4/your-path/path-to-support-2.webp"
            imgClass="bg-[#95ADF0] rounded-[30px] border border-black"
            title="Isolation"
            classes="bg-[#D43525] text-white"
            body="Many middle-aged individuals feel emotionally isolated, stuck in a cycle of obligations with little personal connection."
          />

          <YourPathCard
            img="/desktop4/your-path/path-to-support-5.webp"
            title="Uneven Struggles"
            classes="bg-[#D43525] text-white"
            body="Caring for loved ones, managing work stress, and handling personal responsibilities can feel overwhelming."
          />

          <YourPathCard
            img="/desktop4/your-path/path-to-support-6.webp"
            title="The Cost of Loneliness"
            classes="bg-[#D43525] text-white"
            body="Loneliness isn’t just an emotion—it affects your well-being, your health, and your happiness."
          />
        </div>
        <div className="flex items-center justify-center">
          <a href="https://signup.feelattune.com/sign-up?_gl=1*46lrc9*_gcl_au*NDQyODE2NjgyLjE3NDY0NTQ3Njc.*_ga*MjEyMDE1OTQyMi4xNzM4NTIxNjMz*_ga_2MGYLNPB9W*czE3NDkwMDA4MzYkbzEwNiRnMCR0MTc0OTAwMDgzNiRqNjAkbDAkaDA">
            <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-5 px-10 rounded-full hover:bg-purple-800">
            You Deserve To Feel Heard. Connect Today
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
          "flex flex-col text-center border border-black rounded-[30px] p-[19px] space-y-[13px] w-[588px] min-h-[356px] " +
          classes
        }
      >
        <img
          src={img}
          alt={title}
          className={
            "rounded-[30px]  border border-black bg-black w-[528px] h-[213px] mx-auto " +
            imgClass
          }
        />

        <div className="grow flex flex-col text-center space-y-[5px] p-1">
          <h2 className="max-xl:text-[24px] text-[30px] font-miniature">
            {title}
          </h2>

          <p className="text-[16px] font-[400] leading-[26px]  text-white">
            {body}
          </p>
        </div>
      </div>
    </>
  );
}

export default UnspokenChallengesOfMiddleAgeLife;
