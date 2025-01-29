function PathToSupport() {
  return (
    <div className="bg-gray-50 py-[110px] px-[110px]">
      <div className="max-w-[1440px] mx-auto space-y-[60px]">
        <h1 className="font-miniature text-[76px] text-center leading-[69px]">
        Why Does Mental Health Matter
        <br/>  for Young Adults?
        </h1>
        <h6 className="text-[18px] px-16 text-center lg:min-w-[600px] xl:min-w-[700px] 2xl:min-w-[800px] 3xl:min-w-[1001px] font-semibold">Mental health challenges among young adults are more common than you think. As you navigate through major life transitions—like starting college, entering the workforce, or building new relationships—it’s easy to feel overwhelmed and isolated. The pressure to balance expectations, independence, and social belonging can sometimes feel insurmountable. Here are some common reasons why young adults often face mental health challenges:</h6>
        <h6 className="font-miniature text-[50px] font-bold text-center">Some Reasons for Mental Health Challenges:</h6>
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-[30px]">
          <YourPathCard
            img="/desktop/your-path/path (1).png"
            title="Stigma and Judgment: "
            classes="bg-[#95ADF0] text-white"
            discription="Fear of being labeled or misunderstood."
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
            img="/desktop/your-path/path (2).png"
            imgClass="bg-[#95ADF0] rounded-[30px] border border-black"
            title="Social pressures"
            discription="Lack of affordable or accessible mental health support."
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
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-[30px]">
          <YourPathCard
            img="/desktop/your-path/path (3).png"
            title="Pressure to Succeed:"
            classes="bg-[#95ADF0] text-white"
            discription="Balancing academic, career, and personal expectations."
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
            img="/desktop/your-path/path (4).png"
            imgClass="bg-[#00FBFC] rounded-[30px] border border-black"
            title="Cultural and Family Expectations"
            classes="bg-[#95ADF0] text-white"
            discription="Pressure to conform to societal norms."
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
        <div className="flex justify-center items-center">
    <button className="mt-6 bg-[#5200FF] flex flex-row text-white text-[16px] font-[500] py-5 px-10 rounded-full hover:bg-purple-800">
    Break the Barriers. Find Support Now
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none" className="ml-2 mt-0.5">
            <path d="M0.617188 10C0.617188 4.53539 5.03539 0.117188 10.5 0.117188C15.9646 0.117188 20.3828 4.53539 20.3828 10C20.3828 15.4646 15.9646 19.8828 10.5 19.8828C5.03539 19.8828 0.617188 15.4646 0.617188 10ZM19.2201 10C19.2201 5.17486 15.3251 1.27987 10.5 1.27987C5.67486 1.27987 1.77987 5.17486 1.77987 10C1.77987 14.8251 5.67486 18.7201 10.5 18.7201C15.3251 18.7201 19.2201 14.8251 19.2201 10Z" fill="white" />
            <path d="M9.51585 14.8274L14.341 10.0023L9.51585 5.17716L10.3297 4.36328L15.9688 10.0023L10.3297 15.6413L9.51585 14.8274Z" fill="white" />
            <path d="M15.1562 9.4209V10.5836L5.27344 10.5836V9.4209L15.1562 9.4209Z" fill="white" />
          </svg>
        </button>
    </div>
      </div>
    </div>
  );
}

function YourPathCard({ img, imgClass = "", title, classes, points, discription }) {
  return (
    <>
    <div
      className={
        "flex flex-col border border-black rounded-[30px] min-h-[392.482px] min-w-[384.057px] p-[14px] space-y-[13px] " +
        classes
      }
    >
      <img
        src={img}
        alt={title}
        className={"rounded-[30px]  border border-black w-full h-auto" + imgClass}
      />

      <div className="grow flex flex-col space-y-[13px] p-1">
        <h2 className="max-xl:text-[30px] text-[30px] leading-[130%] text-start font-miniature">
          {title}
        </h2>
        <p className="text-[18px] leading-[122.222%] font-[500] text-start">
          {discription}
        </p>

       

      </div>
    </div>
    
    </>
  );
}

export default PathToSupport;
