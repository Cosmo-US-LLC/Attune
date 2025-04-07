function PathToSupport() {
  return (
    <div className="bg-gray-50 py-[60px] px-[110px]" id="path-to-support">
      <div className="max-w-[1440px] mx-auto space-y-[60px]">
        <h1 className="font-miniature text-[76px] text-center leading-[69px]">
          Your Path to Support
        </h1>
        <div className="grid gap-6 mx-auto max-w-7xl md:grid-cols-12">
          {/* <div className="col-span-2"></div> */}
          <YourPathCard
            img="/desktop1/your-path/path-to-support-1.webp"
            title="For youth"
            classes="bg-[#38AB9B] text-white col-span-4"
            buttonLabel="Start Your Journey "
            points={[
              {
                title: "",
                body: "Navigate life transitions confidently",
              },
              {
                title: "",
                body: "Manage academic or career pressure",
              },
              {
                title: "",
                body: "Build self-confidence in a judgment-free space",
              },
            ]}
          />

          <YourPathCard
            img="/desktop1/your-path/path-to-support-2.webp"
            imgClass="bg-[#00FBFC] rounded-[30px] border border-black"
            title="For Middle-Aged Individuals"
            buttonLabel="Connect Now"
            classes="bg-[#F097DD] text-black col-span-4"
            points={[
              {
                title: "",
                body: "Balance work and life stressors",
              },
              {
                title: "",
                body: "Process relationship challenges",
              },
              {
                title: "",
                body: "Find support during major life changes",
              },
            ]}
          />
          
          <YourPathCard
            img="/desktop1/your-path/path-to-support-4.webp"
            imgClass="bg-[#E5FF7D] rounded-[30px] border border-black"
            title="For Seniors"
            buttonLabel="Talk To Someone"
            classes="bg-[#FF6F61] text-white col-span-4"
            points={[
              {
                title: "",
                body: "Combat loneliness and isolation",
              },
              {
                title: "",
                body: "Share life experiences",
              },
              {
                title: "",
                body: "Find understanding companionship",
              },
            ]}
          />
          {/* <div className="col-span-2"></div> */}

          {/* Card 3 */}
          {/* <YourPathCard
            img="/desktop1/your-path/path-to-support-3.webp"
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
          /> */}
        </div>
      </div>
    </div>
  );
}

function YourPathCard({ img, imgClass = "", title, classes, points, buttonLabel }) {
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
        <h2 className="max-xl:text-[24px] text-[30px] font-miniature w-[352px]">
          {title}
        </h2>

        <ul className="w-[322px] grow list-disc max-xl:text-[15px] text-[18px] max-xl:leading-tight leading-[22px] pl-[23px] space-y-[22px]">
          {points?.map((point, id) => (
            <li
              key={id}
              className="pl-4 capitalize "
              style={{
                listStyleImage: "url(/desktop1/your-path/list-disc.svg)",
              }}
            >
              <strong>{point?.title}</strong> {point?.body}
            </li>
          ))}
        </ul>

        <a href="https://signup.feelattune.com/sign-up" className="pt-10 w-fit">
          <button className="w-fit bg-[#5200FF] text-white py-2 px-6 rounded-full text-[16px] font-[500] hover:bg-purple-800">
             {buttonLabel}
          </button>
        </a>
      </div>
    </div>
  );
}

export default PathToSupport;
