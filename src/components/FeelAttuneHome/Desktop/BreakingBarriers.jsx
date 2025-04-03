function BreakingBarriers() {
  return (
    <div className="bg-[#E5FF7D] py-[60px] " id="">
      <div className="max-w-[1440px] mx-auto space-y-[60px] flex flex-col justify-center items-center">
        <h1 className="font-miniature text-[#000] text-[76px] text-center leading-[69px]">
          Breaking Barriers: Overcoming <br /> Loneliness & Mental Health
          Struggles
        </h1>
        <div className="flex flex-row gap-10">
          <YourPathCard
          img="/desktop1/BreakingBarriers/icon1.webp"
          imgClass="absolute right-0 w-[90px] h-[90px]"
            title="Loneliness: Finding Connection in a Disconnected World"
            description="Loneliness can feel overwhelming, but it doesn’t have to be permanent. Whether you're dealing with loneliness at university, feeling isolated at work, or searching for companionship, real human connection is just a conversation away."
            buttonLabel="Start Your Journey"
            classes="bg-[#38AB9B] text-white w-[585px]"
            points={[
              {
                title: "",
                body: "Reduce social isolation and build meaningful relationships",
              },
              {
                title: "",
                body: "Find support for lonely adults, young professionals, and seniors",
              },
              {
                title: "",
                body: "Combat feelings of emptiness and rediscover companionship",
              },
            ]}
          />
          <YourPathCard
          img="/desktop1/BreakingBarriers/icon2.webp"
          imgClass="absolute right-0 top-[-20px] w-[96px] h-[73px]"
            title="Mental Health Barriers: Support Without Stigma or Labels"
            buttonLabel="Find Your Support"
            description="Struggling with stress, anxiety, or emotional overwhelm but hesitant to seek therapy? You’re not alone. Whether you’re looking for anxiety relief, stress management, or emotional well-being support, we offer a judgment-free space to talk, vent, and feel heard—without clinical pressure."
            classes="bg-[#FF6F61] text-white w-[585px]"
              points={[
                {
                  title: "",
                  body: "Talk about stress, anxiety, and emotional challenges freely",
                },
                {
                  title: "",
                  body: "Find relief, guidance, and motivation from trained Listeners",
                },
                {
                  title: "",
                  body: "Flexible, affordable support—on your terms",
                },
              ]}
          />
        </div>
      </div>
    </div>
  );
}

function YourPathCard({
    img,
    imgClass,
  title,
  description,
  classes,
  points,
  buttonLabel,
}) {
  return (
    <div
      className={
        "flex flex-col border border-black rounded-[30px] px-10 py-10 space-y-[13px] " +
        classes
      }
    >

      <div className="relative flex flex-col gap-6">
      <img
        src={img}
        alt={title}
        className={"absolute right-0 w-[90px] h-[90px] "+ imgClass}
      />
        <h2 className="text-[30px] font-[400] leading-[38px] font-miniature w-[403px]">
          {title}
        </h2>

        <p className="text-[18px] font-[500] leading-[26px] w-[438px]  ">
           {description}
        </p>

        <ul className="w-[438px] mt-4 grow list-disc max-xl:text-[15px] text-[18px] max-xl:leading-tight leading-[22px] pl-[23px] space-y-[22px]">
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

        <a
          href="https://signup.feelattune.com/t/jcLDEqP45Aus?Terms_of_Use=https%3A%2F%2Ffeelattune.com%[…]use&TermsofUse=https%3A%2F%2Ffeelattune.com%2Fterms-of-use"
          className="mt-4 w-fit"
        >
          <button className="w-fit bg-[#5200FF] text-white py-2 px-6 rounded-full text-[16px] font-[500] hover:bg-purple-800">
            {buttonLabel}
          </button>
        </a>
      </div>
    </div>
  );
}

export default BreakingBarriers;
