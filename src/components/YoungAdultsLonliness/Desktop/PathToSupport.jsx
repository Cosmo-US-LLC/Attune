import { Description } from "@radix-ui/react-dialog";

function PathToSupport() {
  return (
    <div className="bg-gray-50 py-[80px] px-[110px]" id="path-to-support">
      <div className="max-w-[1440px] mx-auto space-y-[40px]">
        <h1 className="font-miniature text-[76px] text-center leading-[69px]">
          Why Does Loneliness Affect So <br /> Many Young Adults?
        </h1>
        <h6 className="text-[18px] px-16 text-center lg:min-w-[600px] xl:min-w-[700px] 2xl:min-w-[800px] 3xl:min-w-[1001px] font-[400]">
          Loneliness among young adults is more common than you think. As you
          navigate through major life transitions—like <br /> starting college,
          entering the workforce, or building new relationships—it’s easy to
          feel disconnected. You’re not alone<br />—61% of young adults report feeling
          serious loneliness.
        </h6>
        <h6 className="font-miniature text-[50px] font-bold text-center">
          Reasons for Loneliness:
        </h6>
        <div className="flex flex-wrap justify-center gap-6 ">
          <YourPathCard
            img="assets/desktop2/your-path/path6.webp"
            imgClass="  rounded-[30px] border border-black w-[380px] h-[213px]"
            title="Life Transitions"
            description="Starting college, moving to a new city, or stepping into adulthood can feel overwhelming. Adjusting to change takes time, but feeling disconnected during major life transitions can make the journey harder."
            classes="bg-[#95ADF0] text-white"
            points={[
              {
                title: "Loneliness",
                body: "People Craving Connection And A Listening Ear.",
              },
              {
                title: "Emotional Support",
                body: "Those feeling isolated and desiring a safe space to share their thoughts.",
              },
            ]}
          />

          <YourPathCard
            img="assets/desktop2/your-path/path7.webp"
            imgClass="  rounded-[30px] border border-black w-[380px] h-[213px]"
            title="Social Pressures"
            description="From academic expectations to fitting in, social pressures can lead to stress and self-doubt. The fear of not being “enough” often isolates young adults, making it harder to reach out for support."
            classes="bg-[#95ADF0] text-white"
            points={[
              {
                title: "Mental Health Barriers",
                body: "Individuals facing mental health challenges but hesitant to seek traditional clinical care due to stigma, cost, or rigidity.",
              },
              {
                title: "Underserved Groups",
                body: "Young adults transitioning to independence, seniors experiencing isolation, and caregivers managing stress.",
              },
            ]}
          />

          {/* Card 3 */}
          <YourPathCard
            img="assets/desktop2/your-path/path8.webp"
            imgClass=" rounded-[30px] border border-black w-[380px] h-[213px]"
            title="Digital Overload"
            description="Social media can make it seem like everyone has it all figured out—except you. The constant comparison, unrealistic expectations, and online interactions often deepen loneliness instead of solving it."
            classes="bg-[#95ADF0] text-white"
            points={[
              {
                title: "Augmenting Therapy",
                body: "People already in therapy or clinical care who want additional, informal support.",
              },
              {
                title: "Come to Us",
                body: "To combat loneliness and isolation.  To manage stress, anxiety, or life transitions.  To find understanding without judgment.",
              },
            ]}
          />
          <YourPathCard
            img="assets/desktop2/your-path/path9.webp"
            imgClass=" rounded-[30px] border border-black w-[380px] h-[213px]"
            title="Relationship Challenges"
            description="Navigating friendships, romantic relationships, and family dynamics isn’t always easy. Breakups, conflicts, or a lack of emotional support can make loneliness feel even heavier."
            classes="bg-[#95ADF0] text-white"
            points={[
              {
                title: "Loneliness",
                body: "People Craving Connection And A Listening Ear.",
              },
              {
                title: "Emotional Support",
                body: "Those feeling isolated and desiring a safe space to share their thoughts.",
              },
            ]}
          />

          <YourPathCard
            img="assets/desktop2/your-path/path10.webp"
            imgClass="  rounded-[30px] border border-black w-[380px] h-[213px]"
            title="Career Stress"
            description="Balancing work, studies, and personal life can be exhausting. Whether it’s job stress, imposter syndrome, or uncertainty about the future, feeling overwhelmed is common—but you don’t have to handle it alone."
            classes="bg-[#95ADF0] text-white"
            points={[
              {
                title: "Mental Health Barriers",
                body: "Individuals facing mental health challenges but hesitant to seek traditional clinical care due to stigma, cost, or rigidity.",
              },
              {
                title: "Underserved Groups",
                body: "Young adults transitioning to independence, seniors experiencing isolation, and caregivers managing stress.",
              },
            ]}
          />
        </div>

        <div className="flex items-center justify-center">
          <a href="https://innovacare.tech/listenerhub/signup">
            <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-5 px-10 rounded-full hover:bg-purple-800">
              Start Your Journey to Connection Today
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

function YourPathCard({
  img,
  imgClass = "",
  title,
  classes,
  points,
  description,
}) {
  return (
    <>
      <div
        className={
          "flex flex-col  text-center border border-black rounded-[30px] p-[18px] space-y-[13px]   max-w-[423px]  " +
          classes
        }
      >
        <img
          src={img}
          alt={title}
          className={"  bg-black border border-black w-full h-auto" + imgClass}
        />

        <div className="flex flex-col text-[black] space-y-[13px] p-1 text-left w-[354px]">
          <h2 className=" text-[30px] font-[700] leading-[39px]  font-miniature">
            {title}
          </h2>

          <p className="text-[18px] font-[500] leading-[22px]   text-black">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}

export default PathToSupport;
