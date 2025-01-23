function PathToSupport() {
  return (
    <div className="bg-gray-50 py-[130px] px-[110px]">
      <div className="max-w-[1440px] mx-auto space-y-[60px]">
        <h1 className="font-miniature text-[76px] text-center leading-[69px]">
          Your Path to Support
        </h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <YourPathCard
            img="/desktop/your-path/path-to-support-1.webp"
            title="Seeking Connection?"
            classes="bg-[#38AB9B] text-white"
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
            img="/desktop/your-path/path-to-support-2.webp"
            imgClass="bg-[#00FBFC] rounded-[30px] border border-black"
            title="Facing Mental Barriers?"
            classes="bg-[#F097DD] text-black"
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
            img="/desktop/your-path/path-to-support-3.webp"
            title="Looking for Extra Support?"
            classes="bg-[#FF6F61] text-white"
            points={[
              {
                title: "Augmenting Therapy",
                body: "People already in therapy or clinical care who want additional, informal support.",
              },
              {
                title: "Why You Come to Us",
                body: <ul className="list-disc pl-7">
                  <li>To combat loneliness and isolation.</li>
                  <li>To manage stress, anxiety, or life transitions.</li>
                  <li>To find understanding without judgment.</li>
                </ul>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function YourPathCard({ img, imgClass = "", title, classes, points }) {
  return (
    <div
      className={
        "flex flex-col border border-black rounded-[30px] p-[14px] space-y-[13px] " +
        classes
      }
    >
      <img
        src={img}
        alt={title}
        className={"rounded-[30px] w-full " + imgClass}
      />

      <div className="grow flex flex-col space-y-[13px] p-1">
        <h2 className="max-xl:text-[24px] text-[30px] font-miniature">
          {title}
        </h2>

        <ul className="grow list-disc max-xl:text-[15px] text-[18px] max-xl:leading-tight leading-[22px] pl-[23px] space-y-[22px]">
          {points?.map((point, id) => (
            <li
              key={id}
              className="capitalize"
              style={{
                listStyleImage: "url(/desktop/your-path/list-disc.svg)",
              }}
            >
              <strong>{point?.title}:</strong> {point?.body}
            </li>
          ))}
        </ul>

        <div className="pt-2">
          <button className="w-fit bg-[#5200FF] text-white py-2 px-6 rounded-full text-[16px] font-[500]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default PathToSupport;
